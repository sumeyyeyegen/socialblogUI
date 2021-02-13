import { useEffect, useContext, useState } from 'react';
import UserContext from '../../Contexts/UserContext/userContext';
import CookieContext from '../../Contexts/CookieContext/cookieContext';
import Follow from '../Follow'
function Follows({ user }) {
	const { getAllFollows } = useContext(UserContext);
	const { userFromCookie } = useContext(CookieContext);
	const [cookieUser, setCookieUser] = useState({});

	const [follows, setFollows] = useState([]);
	const fetchFollows = async () => {
		const data = await getAllFollows(user._id);
		setFollows(data[0].follows);
	};
	useEffect(() => {
		fetchFollows();
		const userCookie = userFromCookie('user');
		setCookieUser(userCookie);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [userFromCookie]);
	console.log(follows);
	return (
		<div>
			<button
				type="button"
				class="btn btn-primary"
				data-toggle="modal"
				data-target="#exampleModalLong"
			>
				Launch demo modal
			</button>

			<div
				class="modal fade"
				id="exampleModalLong"
				tabindex="-1"
				role="dialog"
				aria-labelledby="exampleModalLongTitle"
				aria-hidden="true"
			>
				<div class="modal-dialog" role="document">
					<div class="modal-content">
						<div class="modal-header">
							<h5 class="modal-title" id="exampleModalLongTitle">
								Takip Ettikleri
							</h5>
							<button type="button" class="close" data-dismiss="modal" aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div class="modal-body">
							{follows.map((follow) => (
								<div className="user-info-card mx-0">
									<div className="user-info">
										<div className="user-image profileUserpic">
											<img src={follow.profilPicture} className="img-responsive" alt="" />
										</div>
										<div className="user-info-text">
											<div className="d-flex">
												<div>
													<span className="user-name">
														{follow.name} {follow.surname}
													</span>
												</div>
												<Follow user={follow} cookieUser={cookieUser} />
											</div>
										</div>
									</div>
								</div>
							))}
						</div>
						<div class="modal-footer">
							<button type="button" class="btn btn-secondary" data-dismiss="modal">
								Close
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Follows;
