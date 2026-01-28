import { Phone, Mail, Search, ShoppingCart, Instagram, Youtube, X, Heart, User, Facebook } from "lucide-react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="flex flex-col w-full">

      {/* TOP BAR */}
      <div className="flex justify-between items-center px-4 py-2 bg-slate-800 text-white text-xs">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <Phone size={14} />
            <span>(225) 555-0118</span>
          </div>
          <div className="flex items-center gap-1">
            <Mail size={14} />
            <span>michelle.rivera@example.com</span>
          </div>
        </div>
        <div>Follow Us  and get a chance to win 80% off</div>

        <div className="hidden md:flex items-center gap-2">
          <span>Follow Us :</span>
          <Instagram size={14} />
          <Youtube size={14} />
          <X size={14} />
          <Facebook size={14} />
        </div>
      </div>

      {/* MAIN NAVBAR */}
      <div className="flex justify-between items-center px-4 py-4 border-b">
        {/* LOGO */}
        <Link to="/" className="text-2xl font-bold">
          Bandage
        </Link>

        {/* MENU */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/about">About</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/pages">Pages</Link>
        </nav>

        {/* ACTIONS */}
        <div className="flex items-center gap-4 text-sm">
          <div className="hidden md:flex items-center gap-1 text-cyan-600">
            <User size={16} />
            <span>Login / Register</span>
          </div>

          <Search size={18} />
          <ShoppingCart size={18} />
          <Heart size={18} />
        </div>
      </div>

    </header>
  );
}
