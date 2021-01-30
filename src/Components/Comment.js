import React from 'react'

export default function Comment() {
    return (
        <li>
            <div className="author-thumb">
                <img src="../src/themes/assets/images/comment-author-01.jpg" alt="" />
            </div>
            <div className="right-content">
                <h4>Charles Kate<span>May 16, 2020</span></h4>
                <p>Fusce ornare mollis eros. Duis et diam vitae justo fringilla condimentum eu quis leo.
                Vestibulum id turpis porttitor sapien facilisis scelerisque. Curabitur a nisl eu lacus
                        convallis eleifend posuere id tellus.</p>
            </div>
        </li>
    )
}