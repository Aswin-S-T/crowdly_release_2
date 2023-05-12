import React from "react";
import AlignItemsList from "../Components/AlignItemsList";
import Header from "../Components/Header";

function AllUsersScreen() {
	return (
		<div>
			<Header />
			<div className="row">
				<div className="col-md-4"></div>
				<div className="col-md-4">
					<h4>People you may Know</h4>

					<AlignItemsList className="w-100" />
				</div>
				<div className="col-md-4"></div>
			</div>
		</div>
	);
}

export default AllUsersScreen;
