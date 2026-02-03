import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./layout/Header";
import Footer from "./layout/Footer";

import HomePage from "./pages/HomePage";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import ProductDetail from "./pages/ProductDetail"; // ✅ EKLENDİ

export default function App() {
  return (
    <Router>
      <Header />

      <main className="flex flex-col flex-1">
        <Switch>
          <Route exact path="/" component={HomePage} />

          {/* 🔥 ÖNCE PRODUCT DETAIL */}
          <Route path="/product/:id" component={ProductDetail} />

          {/* SONRA SHOP */}
          <Route exact path="/shop" component={Shop} />

          <Route path="/about" component={About} />
          <Route path="/blog" component={Blog} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </main>

      <Footer />
    </Router>
  );
}
