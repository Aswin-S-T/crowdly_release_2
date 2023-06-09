import React from "react";

function RegisterScreen() {
	return (
		<div className="registrationScreen">
			<div className="row">
				<div className="col-md-3"></div>
				<div className="col-md-6">
					<div className="container">
						<div className="formBx p-4">
							<h3 className="text-center">Create New Account</h3>
							<form class="row g-3 needs-validation mt-4" novalidate>
								<div class="col-md-4">
									<label for="validationCustom01" class="form-label">
										First name
									</label>
									<input
										type="text"
										class="form-control"
										id="validationCustom01"
										value="Mark"
										required
									/>
									<div class="valid-feedback">Looks good!</div>
								</div>
								<div class="col-md-4">
									<label for="validationCustom02" class="form-label">
										Last name
									</label>
									<input
										type="text"
										class="form-control"
										id="validationCustom02"
										value="Otto"
										required
									/>
									<div class="valid-feedback">Looks good!</div>
								</div>
								<div class="col-md-4">
									<label for="validationCustomUsername" class="form-label">
										Username
									</label>
									<div class="input-group has-validation">
										<span class="input-group-text" id="inputGroupPrepend">
											@
										</span>
										<input
											type="text"
											class="form-control"
											id="validationCustomUsername"
											aria-describedby="inputGroupPrepend"
											required
										/>
										<div class="invalid-feedback">
											Please choose a username.
										</div>
									</div>
								</div>
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
								<div class="col-md-3">
									<label for="validationCustom04" class="form-label">
										Country Code
									</label>
									<select class="form-select" id="validationCustom04" required>
										<option selected disabled value="">
											Choose...
										</option>
										<option>...</option>
									</select>
									<div class="invalid-feedback">
										Please select a valid Code.
									</div>
								</div>
								<div class="col-md-3">
									<label for="validationCustom05" class="form-label">
										Phone
									</label>
									<input
										type="text"
										class="form-control"
										id="validationCustom05"
										required
									/>
									<div class="invalid-feedback">
										Please provide a valid Phone number.
									</div>
								</div>
								<div class="col-12">
									<div class="form-check">
										<input
											class="form-check-input"
											type="checkbox"
											value=""
											id="invalidCheck"
											required
										/>
										<label class="form-check-label" for="invalidCheck">
											Agree to terms and conditions
										</label>
										<div class="invalid-feedback">
											You must agree before submitting.
										</div>
									</div>
								</div>
								<div class="col-12">
									<button class="submitBtn" type="submit">
										SignUp
									</button>
								</div>
								<a href="/login" className="mt-4">
									Already have an account ?
								</a>
							</form>
						</div>
					</div>
				</div>
				<div className="col-md-3"></div>
			</div>
		</div>
	);
}

export default RegisterScreen;
