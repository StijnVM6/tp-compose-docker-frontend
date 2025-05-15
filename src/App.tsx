import { useEffect, useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";

function App() {
	const [message, setMessage] = useState("Loading...");

	useEffect(() => {
		fetch("/api/hello")
			.then((res) => res.json())
			.then((data) => setMessage(data.message))
			.catch((err) => setMessage("Error: " + err.message));
	}, []);

	return <h1>{message}</h1>;
}

export default App;

// function App() {
// 	const [message, setMessage] = useState("Loading...");

// 	useEffect(() => {
// 		fetch("/")
// 			.then((res) => res.json())
// 			.then((data) => setMessage(data.message))
// 			.catch((err) => setMessage("Error: " + err.message));
// 	}, []);

// 	return (
// 		<>
// 			<div>
// 				<a href="https://vite.dev" target="_blank">
// 					<img src={viteLogo} className="logo" alt="Vite logo" />
// 				</a>
// 				<a href="https://react.dev" target="_blank">
// 					<img src={reactLogo} className="logo react" alt="React logo" />
// 				</a>
// 			</div>
// 			<h1>Vite + React</h1>
// 			<h2>{message}</h2>
// 		</>
// 	);
// }
