import React from 'react'
import Moment from 'react-moment';
import BannerItem6 from '../../assets/images/banner-item-06.jpg'
import { Link } from 'react-router-dom'

function BannerItem({ title, description, content, user, createAt, id, hashtags,image }) {

    return (
        <div className="item" >
<<<<<<< HEAD
            <img className="img" alt="" src={BannerItem6} style={{ objectFit: 'cover' }} />
=======
            <img className="img" alt="" src={image} />
>>>>>>> origin/main
            <div className="item-content">
                <div className="main-content">
                    <div className="meta-category">
                        <Link to={`/article/${id}`}>
                            <span>{title}</span>
                        </Link>
                    </div>
                    <Link to="javascript">
                        <h4>{description}</h4>
                    </Link>
                    <ul className="post-info">
                        <li>
                            {
                                user && <Link to={`/articles/${user[0].username}`} className="link">{user[0].username}   </Link>
                            }
                        </li>
                        <li><Link to="javascript">
                            <Moment format="YYYY/MM/DD">
                                {createAt}
                            </Moment></Link></li>
                        <li><Link to="javascript"> 12 Comments</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default BannerItem

