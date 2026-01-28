import { Switch, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";

export default function PageContent() {
  return (
    <main className="flex flex-col flex-1">
      <Switch>
        <Route exact path="/" component={HomePage} />

        {/* Şimdilik placeholder sayfalar */}
        <Route path="/about" component={() => <div>About Page</div>} />
        <Route path="/shop" component={() => <div>Shop Page</div>} />
        <Route path="/blog" component={() => <div>Blog Page</div>} />
        <Route path="/contact" component={() => <div>Contact Page</div>} />
      </Switch>
    </main>
  );
}
