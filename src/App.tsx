import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import EventFeedBack from "./pages/EventFeedBack";
import BookRequest from "./pages/BookRequest";

function App() {
return (
<BrowserRouter>

<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Student Portal</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link active" aria-current="page" to="/about">About</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link active" aria-current="page" to="/services">Services</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link active" aria-current="page" to="/contact">Contact</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link active" aria-current="page" to="/bookRequest">Book Request</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link active" aria-current="page" to="/eventFeedBack">Event Feedback</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
<nav>
<Link to="/">Home</Link>

<Link to="/about">About</Link>
<Link to="/services">Services</Link>
<Link to="/contact">Contact</Link>
<Link to="/bookRequest">Book Request</Link>
<Link to="/eventFeedBack">Event Feedback</Link>




</nav>

<Routes>

<Route path="/" element={<Home />} />

<Route path="/about" element={<About />} />

<Route path="/services" element={<Services />} />

<Route path="/contact" element={<Contact />} />

<Route path="/bookRequest" element={<BookRequest />} />

<Route path="/eventFeedBack" element={<EventFeedBack />} />

</Routes>

</BrowserRouter>
);
}

export default App;