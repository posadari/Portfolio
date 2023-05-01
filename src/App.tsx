import React from 'react';
import Header from './components/Header';
import { Route, Switch } from "wouter";
import Home from './screens/Home';
import Experience from './screens/Experience';
import About from './screens/About';
import Projects from './screens/Projects';
import Footer
 from './components/Footer';
function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/experience">
          <Experience />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
