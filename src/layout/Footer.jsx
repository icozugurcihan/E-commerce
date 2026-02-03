import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full border-t">
      {/* TOP */}
      {/* BRAND LINE */}
<section className="border-t border-gray-200 py-10">
  <div className="max-w-7xl mx-auto px-6">
    <div className="flex flex-wrap items-center justify-center gap-10 opacity-60">
      <img src="/logos/hooli.png" alt="Hooli" className="h-8" />
      <img src="/logos/lyft.png" alt="Lyft" className="h-8" />
      <img src="/logos/leaf.png" alt="Leaf" className="h-8" />
      <img src="/logos/stripe.png" alt="Stripe" className="h-8" />
      <img src="/logos/aws.png" alt="AWS" className="h-8" />
      <img src="/logos/reddit.png" alt="Reddit" className="h-8" />
    </div>
  </div>
</section>

      <div className="flex flex-col gap-12 px-6 py-16 max-w-[1200px] mx-auto">
        {/* LOGO + SOCIAL */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
          <h2 className="text-xl font-bold text-slate-800">
            Bandage
          </h2>

          <div className="flex gap-4 text-blue-500">
            <Facebook className="w-5 h-5 cursor-pointer hover:text-blue-600" />
            <Instagram className="w-5 h-5 cursor-pointer hover:text-blue-600" />
            <Twitter className="w-5 h-5 cursor-pointer hover:text-blue-600" />
          </div>
        </div>

        {/* LINKS */}
        <div className="flex flex-col md:flex-row gap-12 justify-between text-center md:text-left">

          {/* COLUMN */}
          <div className="flex flex-col gap-3">
            <h4 className="font-semibold text-sm text-slate-800">
              Company Info
            </h4>
            <a className="text-sm text-gray-500">About Us</a>
            <a className="text-sm text-gray-500">Carrier</a>
            <a className="text-sm text-gray-500">We are hiring</a>
            <a className="text-sm text-gray-500">Blog</a>
          </div>

          {/* COLUMN */}
          <div className="flex flex-col gap-3">
            <h4 className="font-semibold text-sm text-slate-800">
              Legal
            </h4>
            <a className="text-sm text-gray-500">About Us</a>
            <a className="text-sm text-gray-500">Carrier</a>
            <a className="text-sm text-gray-500">We are hiring</a>
            <a className="text-sm text-gray-500">Blog</a>
          </div>

          {/* COLUMN */}
          <div className="flex flex-col gap-3">
            <h4 className="font-semibold text-sm text-slate-800">
              Features
            </h4>
            <a className="text-sm text-gray-500">Business Marketing</a>
            <a className="text-sm text-gray-500">User Analytic</a>
            <a className="text-sm text-gray-500">Live Chat</a>
            <a className="text-sm text-gray-500">Unlimited Support</a>
          </div>

          {/* COLUMN */}
          <div className="flex flex-col gap-3">
            <h4 className="font-semibold text-sm text-slate-800">
              Resources
            </h4>
            <a className="text-sm text-gray-500">IOS & Android</a>
            <a className="text-sm text-gray-500">Watch a Demo</a>
            <a className="text-sm text-gray-500">Customers</a>
            <a className="text-sm text-gray-500">API</a>
          </div>

          {/* SUBSCRIBE */}
          <div className="flex flex-col gap-4 max-w-xs">
            <h4 className="font-semibold text-sm text-slate-800">
              Get In Touch
            </h4>

            <div className="flex">
              <input
                type="email"
                placeholder="Your Email"
                className="flex-1 border px-4 py-2 text-sm"
              />
              <button className="px-4 py-2 bg-blue-500 text-white text-sm">
                Subscribe
              </button>
            </div>

            <p className="text-xs text-gray-400">
              Lorem imp sum dolor Amit
            </p>
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="bg-gray-50 py-6">
        <p className="ml-12 text-sm text-gray-500">
          Made With Love By Finland All Right Reserved
        </p>
      </div>
    </footer>
  );
}
