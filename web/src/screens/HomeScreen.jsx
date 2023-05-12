import React, { useState } from "react";
import GradeIcon from "@mui/icons-material/Grade";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import Header from "../Components/Header";
import { useEffect } from "react";
import { BACKEND_URL } from "../constants/api";
import axios from "axios";
function HomeScreen() {
	const [post, setPost] = useState([]);
	useEffect(() => {
		const fetchData = async () => {
			const data = await axios.get(`${BACKEND_URL}/user/all-post`);
			if (data && data.data.data) {
				setPost(data.data.data);
			}
		};
		fetchData();
	}, []);
	return (
		<div>
			<Header />
			<div className="row">
				<div className="col-md-4">1</div>
				<div className="col-md-4">
					<div className="post p-2">
						{post &&
							post.length > 0 &&
							post.map((p) => (
								<>
									<div className="card p-2 mt-2">
										<div className="postHeader">
											<div>
												<img src={p.image} className="thumb" />
											</div>
											<div>
												<p className="mt-2">Dulquer Salman</p>
											</div>
											<div>
												<button className="followBtn">Follow</button>
											</div>
										</div>
										<div className="postImage mt-3">
											<img src={p.image} className="post w-100" />
										</div>
										<hr />
										<div className="postActions mt-2">
											<div>
												{p.like}
												<EmojiEmotionsIcon />
											</div>
											<div>
												{p.comment}
												<ChatBubbleIcon />
											</div>
											<div>
												{p.share}
												<BookmarkBorderIcon />
											</div>
										</div>
									</div>
								</>
							))}
					</div>
				</div>
				<div className="col-md-4">3</div>
			</div>
		</div>
	);
}

export default HomeScreen;
