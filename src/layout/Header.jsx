import { Phone, Mail, Search, ShoppingCart, Instagram, Youtube, X, Heart, User, Facebook } from "lucide-react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import shop from "../pages/Shop.jsx";
export default function Header() {
  return (
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

<nav className="hidden md:flex items-center gap-6 text-sm font-medium">
  <NavLink
    to="/"
    exact
    activeClassName="text-cyan-600"
  >
    Home
  </NavLink>

  <NavLink
    to="/shop"
    activeClassName="text-cyan-600"
  >
    Shop
  </NavLink>

  <NavLink to="/about">About</NavLink>
  <NavLink to="/blog">Blog</NavLink>
  <NavLink to="/contact">Contact</NavLink>
  <NavLink to="/pages">Pages</NavLink>
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
