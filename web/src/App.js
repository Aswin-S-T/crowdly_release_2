import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllUsersScreen from "./screens/AllUsersScreen";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import ProfileScreen from "./screens/ProfileScreen";
import RegisterScreen from "./screens/RegisterScreen";
function App() {
	return (
		<BrowserRouter>
			<div>
				<main>
					<Routes>
						<Route path="/" exact={true} element={<HomeScreen />} />
						<Route path="/register" element={<RegisterScreen />} />
						<Route path="/login" element={<LoginScreen />} />
						<Route path="/profile" element={<ProfileScreen />} />
						<Route path="/users" element={<AllUsersScreen />} />
					</Routes>
				</main>
				<footer></footer>
			</div>
		</BrowserRouter>
	);
}

export default App;
