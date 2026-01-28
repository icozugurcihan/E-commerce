import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import PageContent from "./layout/PageContent";
import Shop from "./pages/Shop";

export default function App() {
  return (
    <Router>
      <Header />

      <Switch>
        <Route exact path="/">
          <PageContent />
        </Route>

        <Route path="/shop">
          <Shop />
        </Route>
      </Switch>

      <Footer />
    </Router>
  );
}
