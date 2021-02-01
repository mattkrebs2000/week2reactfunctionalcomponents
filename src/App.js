import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Joke from './components/Joke'
import About from './components/pages/About'
import Joke2 from "./components/Joke2";
import About2 from "./components/pages/About2";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="container mx-auto">
          <Route path="/" exact component={Joke} />
          <Route path="/About" exact component={About} />
          <Route path="/2" exact component={Joke2} />
          <Route path="/About2" exact component={About2} />
        </div>
      </div>
    </Router>
  );
}

export default App;


// import React, { Component } from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";
// import Navbar from "./components/layout/Navbar";
// import Joke from "./components/Joke";
// import About from "./components/pages/About";

// class App extends Component {
//   render() {
//     return (
//       <Router>
//         <div className="App">
//           <Navbar />
//           <div className="container mx-auto">
//             <Route path="/" exact component={Joke} />
//             <Route path="/about" exact component={About} />
//           </div>
//         </div>
//       </Router>
//     );
//   }
// }

// export default App;


