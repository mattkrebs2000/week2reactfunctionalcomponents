import React from 'react'
import Navbar from './layout/Navbar.js'


export default function About() {
    return (
        <div>
        <Navbar />
        <div className="mx-auto">
            <h1>This is a React JS Application</h1>
            <p>This tutorial covers React Hooks, Functional Components, and React Router.</p>
        </div>
        </div>
    )
}

// import React, { Component } from "react";

// class About extends Component {


//   render() {
//     return (
//         <div className="mx-auto">
//             <h1>This is a React JS Application</h1>
//             <p>This tutorial covers React Hooks, Functional Components, and React Router.</p>
//         </div>
//     )
// }
// };

// export default About;