import React from "react";

function LoginScreen() {
	return (
		<div>
			<div className="registrationScreen">
				<div className="row">
					<div className="col-md-3"></div>
					<div className="col-md-6">
						<div className="container">
							<div className="formBx p-4">
								<h3 className="text-center">Login Here</h3>
								<form class="row g-3 needs-validation mt-4" novalidate>
									<div class="col-md-6">
										<label for="validationCustom03" class="form-label">
											Email
										</label>
										<input
											type="text"
											class="form-control"
											id="validationCustom03"
											required
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
