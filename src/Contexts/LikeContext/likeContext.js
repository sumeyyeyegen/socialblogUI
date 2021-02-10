
import {createContext} from 'react';
import axios from 'axios';


const LikeContext = createContext(null);

export const LikeProvider = ({children}) => {

 

	const getLikesByArticleId = async(article_id) => {
		const url = `${process.env.REACT_APP_DEPLOY_URL}/likes/${article_id}`
		const response = await axios(url) ;
		const likes = response.data;
		return likes
	}
	const values ={
		getLikesByArticleId
	}
	return <LikeContext.Provider value={values}>{children}</LikeContext.Provider>
}

export default LikeContext;