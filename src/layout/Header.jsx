import { useState, useEffect } from "react";
import {
  Phone,
  Mail,
  Search,
  ShoppingCart,
  Instagram,
  Youtube,
  X,
  Heart,
  User,
  Facebook,
  Menu,
  X as Close,
} from "lucide-react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
  }, [isMenuOpen]);

  return (
    <>
      <header className="flex flex-col w-full">
        {/* TOP BAR */}
        <div className="hidden md:flex justify-between items-center px-4 py-2 bg-slate-800 text-white text-xs">
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

          <div>Follow Us and get a chance to win 80% off</div>

          <div className="flex items-center gap-2">
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

          {/* DESKTOP MENU */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <NavLink exact to="/" activeClassName="text-cyan-600">
              Home
            </NavLink>
            <NavLink to="/shop" activeClassName="text-cyan-600">
              Shop
            </NavLink>
            <NavLink to="/about" activeClassName="text-cyan-600">
              About
            </NavLink>
            <NavLink to="/blog" activeClassName="text-cyan-600">
              Blog
            </NavLink>
            <NavLink to="/contact" activeClassName="text-cyan-600">
              Contact
            </NavLink>
            <NavLink to="/pages" activeClassName="text-cyan-600">
              Pages
            </NavLink>
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

            {/* HAMBURGER (MOBILE) */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(true)}
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
      <div
        className={`
          fixed inset-0 bg-white z-50
          flex flex-col items-center justify-center gap-8
          text-2xl text-gray-500 font-medium
          transition-transform duration-300
          ${isMenuOpen ? "translate-x-0" : "translate-x-full"}
          md:hidden
        `}
      >
        {/* CLOSE BUTTON */}
        <button
          className="absolute top-5 right-5"
          onClick={() => setIsMenuOpen(false)}
        >
          <Close size={28} />
        </button>

        <NavLink exact to="/" onClick={() => setIsMenuOpen(false)}>
          Home
        </NavLink>
        <NavLink to="/shop" onClick={() => setIsMenuOpen(false)}>
          Shop
        </NavLink>
        <NavLink to="/about" onClick={() => setIsMenuOpen(false)}>
          About
        </NavLink>
        <NavLink to="/blog" onClick={() => setIsMenuOpen(false)}>
          Blog
        </NavLink>
        <NavLink to="/contact" onClick={() => setIsMenuOpen(false)}>
          Contact
        </NavLink>
        <NavLink to="/pages" onClick={() => setIsMenuOpen(false)}>
          Pages
        </NavLink>
      </div>
    </>
  );
}
