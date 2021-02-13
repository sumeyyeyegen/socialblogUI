import { useEffect, useState, useContext } from 'react';
import BlogContext from '../../Contexts/BlogContext/BlogContext';
import CookieContext from '../../Contexts/CookieContext/cookieContext';
import Follow from '../Follow';
import './userProfile.css';
import FollowersFollows from '../FollowersFollows'

function UserProfileBanner({ user, setArticles, articles,setIsLikeArticles,setIsFollowsArticles }) {
	const [cookieUser, setCookieUser] = useState({});
	const { userFromCookie } = useContext(CookieContext);
	const { getArticleFollows, getArticleLikes } = useContext(BlogContext);
	const [likeArticles, setLikeArticles] = useState([])
	useEffect(() => {
		const userCookie = userFromCookie('user');
		setCookieUser(userCookie);
	}, [userFromCookie]);
	console.log(user);
	const handleClick = async (type) => {
		switch (type) {
			case 'follows':
				const followsArticles = await getArticleFollows(cookieUser._id);
				setIsLikeArticles(false);
				setIsFollowsArticles(true)
				setArticles(followsArticles);
				break;
			case 'likes':
				setArticles([])
				const likesArticles = await getArticleLikes(cookieUser._id);
				if(likesArticles.length>0)
				setIsLikeArticles(true);
				setIsFollowsArticles(false)
				setArticles(likesArticles);
				break;
			default:
				break;
		}

	};
	console.log(user);
	return (
		<>
			{user && (
				<div className="user-info-card mx-0">
					<div className="user-info">
						<div className="user-image profileUserpic">
							<img src={user.profilPicture} className="img-responsive" alt="" />
						</div>
						<div className="d-flex ml-2">
							<span className="user-info" style={{ fontSize: '22px' }}>
								{user.name} {user.surname}
							</span>
							{user._id !== cookieUser._id ? <Follow user={user} cookieUser={cookieUser} /> : ''}
						</div>
					</div>
					{user._id === cookieUser._id ? (
						<div className="d-flex align-items-end">
							<i className="fa fa-users fa-2x friends" onClick={() => handleClick('follows')}></i>
							<i className="fa fa-heart fa-2x likes" onClick={() => handleClick('likes')}></i>
						</div>
					) : (
						''
					)}
				</div>
			)}
		</>
	);
}

export default UserProfileBanner;
