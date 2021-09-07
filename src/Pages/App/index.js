import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import Courses from "../Courses";
import UniversityLeader from "../UniversityLeader";
import Team from "../Team";
import AboutUs from "../AboutUs";
import ContactUs from "../ContactUs";
import Home from "../Home";
import "./styles.css";

function App() {
  return (
    <Router>
      <div>
        <header className={"header"}>
          <div className={"container"}>
            <h1 className={"logo"}>
              <img src={"logo2.png"} alt="" className={"logoImg"} />
            </h1>

            <nav className={"navbar"}>
              <ul>
                <li className={"nav-link"}>
                  <Link to="/">Home</Link>
                </li>
                <li className={"nav-link"}>
                  <Link to="/courses">Courses</Link>
                </li>
                <li className={"nav-link"}>
                  <Link to="/uniLead">University Leader</Link>
                </li>
                <li className={"nav-link"}>
                  <Link to="/team">Team</Link>
                </li>
                <li className={"nav-link"}>
                  <Link to="/aboutUs">About Us</Link>
                </li>
                <li className={"nav-link"}>
                  <Link to="/contactUs">Contact Us</Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        <Switch>
          <Route path="/courses">
            <Courses />
          </Route>
          <Route path="/uniLead">
            <UniversityLeader />
          </Route>
          <Route path="/team">
            <Team />
          </Route>
          <Route path="/aboutUs">
            <AboutUs />
          </Route>
          <Route path="/contactUs">
            <ContactUs />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
