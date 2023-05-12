import React from "react";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../constants/api";

function LoginScreen() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();

	const handleLogin = async (e) => {
		e.preventDefault();
		let loginData = {
			email,
			password,
		};
		await axios.post(`${BACKEND_URL}/user/login`, loginData).then((res) => {
			if (res && res.data.status == 200) {
				Swal.fire({
					title: "Success!",
					text: "Successfully loggedIn",
					icon: "success",
					confirmButtonText: "Ok",
				}).then(() => {
					localStorage.setItem("user", JSON.stringify(res.data.data));
					navigate("/");
				});
			} else if (res && res.data.status == 400) {
				Swal.fire({
					title: "Error!",
					text: "Something went wrong.",
					icon: "error",
					confirmButtonText: "Ok",
				});
			}
		});
	};
	return (
		<div>
			<div className="registrationScreen">
				<div className="row">
					<div className="col-md-3"></div>
					<div className="col-md-6">
						<div className="container">
							<div className="formBx p-4">
								<h3 className="text-center">Login Here</h3>
								<form
									class="row g-3 needs-validation mt-4"
									novalidate
									onSubmit={handleLogin}
								>
									<div class="col-md-6">
										<label for="validationCustom03" class="form-label">
											Email
										</label>
										<input
											type="text"
											class="form-control"
											id="validationCustom03"
											required
											onChange={(e) => setEmail(e.target.value)}
										/>
										<div class="invalid-feedback">
											Please provide a valid Email.
										</div>
									</div>

									<div class="col-md-6">
										<label for="validationCustom03" class="form-label">
											Password
										</label>
										<input
											type="password"
											class="form-control"
											id="validationCustom03"
											required
											onChange={(e) => setPassword(e.target.value)}
										/>
									</div>
									<div class="col-12">
										<button class="submitBtn" type="submit">
											Login
										</button>
									</div>
									<a href="/register" className="mt-4">
										Create new Account ?
									</a>
								</form>
							</div>
						</div>
					</div>
					<div className="col-md-3"></div>
				</div>
			</div>
		</div>
	);
}

export default LoginScreen;
