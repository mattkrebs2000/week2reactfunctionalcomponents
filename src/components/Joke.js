import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from "./pages/layout/Navbar.js";

export default function Joke() {
	const [joke, setJoke] = useState('');

	useEffect(() => {
		fetchJoke();
	}, []);

	const fetchJoke = () => {
		axios
			.get('https://icanhazdadjoke.com/', {
				headers: { Accept: 'application/json' },
			})
			.then(res => setJoke(res.data))
			.catch(err => console.log(err));
	};

	return (
	<div>
		<Navbar />
		<div className="mt-4">
      <div className="card">
        
        <h5 className="card-header">Dad Joke</h5>
        <div className="card-body">
          <p className="card-text">{joke.joke}</p>
          <button className="btn btn-primary text-white" onClick={fetchJoke}>
            Get Another Joke
          </button>
        </div>
      </div>
	</div>
	</div>
  );
}


// import React, { Component } from "react";
// import axios from "axios";

// class Joke extends Component {
//   state = {
//     joke: "",
//   };

//   componentDidMount = () => {
//     this.fetchJoke();
//   };

//   fetchJoke = () => {
//     axios
//       .get("https://icanhazdadjoke.com/", {
//         headers: { Accept: "application/json" },
//       })
//       .then((res) => this.setState({ joke: res.data.joke }))
//       .catch((err) => console.log(err));
//   };

//   render() {
//     return (
//       <div className="mt-4">
//         <div className="card">
//           <h5 className="card-header">Dad Joke</h5>
//           <div className="card-body">
//             <p className="card-text">{this.state.joke}</p>
//             <button
//               className="btn btn-primary text-white"
//               onClick={this.fetchJoke}
//             >
//               Get Another Joke
//             </button>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
// export default Joke;
