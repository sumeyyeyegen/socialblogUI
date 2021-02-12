import {useEffect,useState,useContext} from 'react'
import {useParams} from 'react-router-dom';
import HashtagContext from '../../Contexts/HashtagContext/hashtagContext';
import Card from '../Card';
import MainButton from '../MainButton';
import Sidebar from '../Sidebar/index';
function HashtagArticle() {
	const {id} = useParams();
	const {getArticleByHashtagId}=useContext(HashtagContext);
	const [articles, setArticles] = useState([])
	useEffect(() => {
		 const fetchArticleByHashtagId = async() =>{
			const articles = await getArticleByHashtagId(id);
			setArticles(articles)
		 }
		 fetchArticleByHashtagId();
	}, [])
	return (
		<section className="blog-posts">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-12">
                            <div className="all-blog-posts">
                                <div className="row">
                                    <div className="col-lg-12">
                                        {articles.length && articles.map(article => {
                                            return <Card key={article._id} id={article._id} title={article.title} description={article.description} content={article.content} createAt={article.createAt} user={article.user} />
                                        })}
                                    </div>
                                    <div className="col-lg-12" >
                                        <MainButton />
                                    </div >
                                </div >
                            </div >
                        </div >
                        <div className="col-lg-4 col-12">
                            <Sidebar />
                        </div>
                    </div >
                </div >
            </section >
	)
}

export default HashtagArticle
