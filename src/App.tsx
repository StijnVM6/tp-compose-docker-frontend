import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
const apiUrl = import.meta.env.VITE_API_URL || "";

function App() {
	const [message, setMessage] = useState("Loading...");

	useEffect(() => {
		fetch(`${apiUrl}/api`)
			.then((res) => res.json())
			.then((data) => setMessage(data.message))
			.catch((err) => setMessage("Error: " + err.message));
	}, []);

	return (
		<>
			<div>
				<img src={viteLogo} className="logo" alt="Vite logo" />
				<img src={reactLogo} className="logo react" alt="React logo" />
			</div>
			<h1>Vite + React</h1>
			<h2>{message}</h2>
		</>
	);
}

export default App;
