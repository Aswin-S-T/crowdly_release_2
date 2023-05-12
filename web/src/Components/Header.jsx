import React from "react";

function Header() {
	return (
		<div>
			<header className="">
				<nav class="navbar navbar-expand-lg ">
					<div class="container-fluid">
						<a class="navbar-brand text-white" href="/">
							Crowdly
						</a>
						<button
							class="navbar-toggler"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#navbarSupportedContent"
							aria-controls="navbarSupportedContent"
							aria-expanded="false"
							aria-label="Toggle navigation"
						>
							<span class="navbar-toggler-icon"></span>
						</button>
						<div class="collapse navbar-collapse" id="navbarSupportedContent">
							<ul class="navbar-nav me-auto mb-2 mb-lg-0">
								<li class="nav-item">
									<a
										class="nav-link active text-white"
										aria-current="page"
										href="/"
									>
										Home
									</a>
								</li>
								<li class="nav-item">
									<a class="nav-link text-white" href="#">
										Notifications
									</a>
								</li>
								<li class="nav-item">
									<a class="nav-link text-white" href="#">
										Chat
									</a>
								</li>
								<li class="nav-item">
									<a class="nav-link text-white" href="/users">
										Users
									</a>
								</li>
								<li class="nav-item dropdown">
									<a
										class="nav-link dropdown-toggle text-white"
										href="#"
										role="button"
										data-bs-toggle="dropdown"
										aria-expanded="false"
									>
										Account
									</a>
									<ul class="dropdown-menu">
										<li>
											<a class="dropdown-item" href="/profile">
												Profile
											</a>
										</li>
										<li>
											<a class="dropdown-item" href="/login">
												Logout
											</a>
										</li>
										<li>
											<hr class="dropdown-divider" />
										</li>
									</ul>
								</li>
							</ul>
						</div>
					</div>
				</nav>
			</header>
		</div>
	);
}

export default Header;
