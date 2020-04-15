import React from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Sample from "./components/Sample";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <main>
      <Header />
      <Navbar />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/sample" component={Sample} />
        <Route path="/contact" component={Contact} />
        {/* <Route
          path="/Covid"
          rel="noopener noreferrer"
          component={() => {
            window.location.href = "https://qunliw.github.io/us-covid19/";
            return null;
          }} */}
        />
        <Route component={Error} />
      </Switch>
      <Footer />
    </main>
  );
}

export default App;
