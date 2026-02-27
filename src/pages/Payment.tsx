import { ChangeEvent, FormEvent, useState } from 'react';
import { ArrowLeftIcon } from '@phosphor-icons/react';
import mentorPhoto from "@/assets/priyankSingh.jpeg";

type FormDataState = {
  name: string;
  email: string;
  phone: string;
};

type MessageType = 'error' | 'success';

type RazorpaySuccessResponse = {
  razorpay_payment_id: string;
};

type RazorpayCheckoutOptions = {
  key: string;
  amount: number;
  currency: string;
  name: string;
  description: string;
  prefill: {
    name: string;
    email: string;
    contact: string;
  };
  notes: {
    source: string;
  };
  theme: {
    color: string;
  };
  handler: (response: RazorpaySuccessResponse) => void;
  modal: {
    ondismiss: () => void;
  };
};

declare global {
  interface Window {
    Razorpay?: new (options: RazorpayCheckoutOptions) => { open: () => void };
  }
}

const amountInPaise = Number(import.meta.env.VITE_PAYMENT_AMOUNT || 2500);
const amountLabel = `₹${(amountInPaise / 100).toFixed(0)}`;

function Payment() {
  const [formData, setFormData] = useState<FormDataState>({ name: '', email: '', phone: '' });
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState<MessageType>('error');
  const [loading, setLoading] = useState(false);

  const updateField = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const showMessage = (text: string, type: MessageType = 'error') => {
    setMessageType(type);
    setMessage(text);
  };

  const validate = () => {
    if (!formData.name || formData.name.trim().length < 2) {
      return 'Please enter your full name.';
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      return 'Please enter a valid email address.';
    }

    if (!/^\d{10}$/.test(formData.phone.trim())) {
      return 'Please enter a valid 10-digit phone number.';
    }

    return '';
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessage('');

    const validationError = validate();
    if (validationError) {
      showMessage(validationError);
      return;
    }

    const razorpayKeyId = import.meta.env.VITE_RAZORPAY_KEY_ID;
    if (!razorpayKeyId) {
      showMessage('Please set REACT_APP_RAZORPAY_KEY_ID in your .env file.');
      return;
    }

    if (!window.Razorpay) {
      showMessage('Razorpay SDK failed to load. Please refresh and try again.');
      return;
    }

    setLoading(true);

    try {
      const options: RazorpayCheckoutOptions = {
        key: razorpayKeyId,
        amount: amountInPaise,
        currency: 'INR',
        name: 'Learn AI Agents Webinar',
        description: 'Learn AI Agents. Turn Skills Into Side Income',
        prefill: {
          name: formData.name.trim(),
          email: formData.email.trim(),
          contact: formData.phone.trim()
        },
        notes: {
          source: 'payments-page'
        },
        theme: {
          color: '#111111'
        },
        handler: (response) => {
          showMessage(`Payment successful. Payment ID: ${response.razorpay_payment_id}`, 'success');
        },
        modal: {
          ondismiss: () => {
            showMessage('Payment cancelled by user. You can try again.');
          }
        }
      };

      const instance = new window.Razorpay(options);
      instance.open();
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unable to start payment right now.';
      showMessage(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[70vh] bg-[#8fb9eb] px-4 py-10 text-slate-900 antialiased">
      <main className="mx-auto flex w-full max-w-[586px] justify-center">
        <section className="w-full overflow-hidden rounded-[28px] bg-white shadow-[0_24px_56px_rgba(10,20,40,0.18)]">
          <header className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
            <div className="flex items-center gap-2.5 font-medium">
              <a href="/" type="button" className="text-xl" aria-label="Go back">
                <ArrowLeftIcon weight="bold" />
              </a>
              <img
                src={mentorPhoto}
                alt="Priyank Singh"
                className="h-[34px] w-[34px] rounded-full object-cover"
              />
              <span>Priyank Singh</span>
            </div>
            <span className="rounded-full bg-slate-100 px-2.5 py-1 text-sm font-semibold">★ 4.8/5</span>
          </header>

          <div className="p-[22px]">
            <h2 className="m-0 text-xl font-extrabold  leading-tight  pr-4 text-slate-800 sm:text-[32px]">
              Learn AI Agents. Turn Skills Into Side Income
            </h2>
            <p className="mb-4 mt-1.5 text-slate-500">Webinar</p>

            <div className="flex items-center gap-3 rounded-2xl bg-slate-100 p-3">
              <div className="rounded-xl bg-white px-3 py-2 font-bold">Feb 10</div>
              <div>
                <p className="font-semibold">Tue, 10 Feb</p>
                <p className="text-slate-600 text-sm">7:00 - 8:30PM (GMT +05:30)</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="mt-5 flex flex-col gap-2.5">
              <label htmlFor="name" className="text-md font-medium ">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={updateField}
                placeholder="Enter your name"
                className="h-12 rounded-lg border border-slate-300 px-3.5 text-base outline-none focus:border-slate-500"
              />

              <label htmlFor="email" className="text-md font-medium ">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={updateField}
                placeholder="Enter your email"
                className="h-12 rounded-lg border border-slate-300 px-3.5 text-base outline-none focus:border-slate-500"
              />

              <label htmlFor="phone" className="text-md font-medium ">
                Phone number
              </label>
              <div className="grid h-12 grid-cols-[auto_1fr] items-center overflow-hidden rounded-lg border border-slate-300">
                <span className="grid h-full place-items-center border-r border-slate-200 px-3.5 text-slate-600">🇮🇳 +91</span>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={updateField}
                  placeholder="9876543210"
                  maxLength={10}
                  className="h-full border-none px-3.5 text-base outline-none"
                />
              </div>

              <label className="mt-1 flex items-center gap-2 text-sm text-slate-700 sm:text-base">
                <input type="checkbox" defaultChecked />
                Receive booking details on phone
              </label>

              <div className="mt-2 overflow-hidden rounded-2xl border border-slate-200">
                <div className="flex items-center justify-between border-b border-slate-200 bg-slate-50 p-3.5">
                  <span className='font-bold'>Order Summary</span>
                  <strong>{amountLabel}</strong>
                </div>
                <div className="flex items-center justify-between border-b border-slate-200 bg-slate-50 p-3.5">
                  <span className='text-sm'>1 x Learn AI Agents. Turn Skills Into Side Income</span>
                  <span >{amountLabel}</span>
                </div>
                <div className="flex items-center justify-between border-b border-slate-200 bg-slate-50 p-3.5">
                  <span className='text-sm'>Platform fee</span>
                  <span >
                    <s>₹10</s> FREE
                  </span>
                </div>
                <div className="flex items-center justify-between bg-slate-50 p-3.5 font-bold">
                  <span className='text-sm'>Total</span>
                  <strong>{amountLabel}</strong>
                </div>
              </div>

              {message ? (
                <p
                  className={`rounded-lg border px-3 py-2.5 text-sm ${
                    messageType === 'success'
                      ? 'border-emerald-200 bg-emerald-50 text-emerald-700'
                      : 'border-rose-200 bg-rose-50 text-rose-700'
                  }`}
                >
                  {message}
                </p>
              ) : null}

              <div className="mt-1 flex items-center justify-between rounded-xl bg-slate-100 p-3 text-xs text-slate-600 sm:text-sm">
                <span>🔒 Payments are 100% secure & encrypted</span>
                <span>Terms | Privacy</span>
              </div>
              <p className="my-1 text-center text-sm text-slate-500">Powered by topmate.io</p>
              <p className="my-1 text-center text-sm text-slate-500">(Kavalry Technologies Private Limited)</p>

              <div className="-mx-[22px] -mb-[22px] mt-3 flex items-center justify-between border-t border-slate-200 bg-white px-[22px] py-4">
                <strong className="text-3xl">{amountLabel}</strong>
                <button
                  type="submit"
                  disabled={loading}
                  className="rounded-lg bg-black px-4 py-2.5 text-base font-semibold text-white disabled:cursor-not-allowed disabled:opacity-65 sm:px-6 sm:py-3 sm:text-lg"
                >
                  {loading ? 'Processing...' : 'Confirm Details'}
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Payment;
