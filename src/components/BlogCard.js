import React from 'react';

function BlogCard(props) {
    const { title, excerpt, imageUrl } = props.blogs;
    return (
        <div className='card shadow h-100'>
            <img src={imageUrl} alt="" />
            <div className="card-body">
                <h4 className="card-title">
                    {title}
                </h4>
                <p className="card-text">
                    {excerpt}
                </p>
                <a href="/" className='stretched-link'> </a>
            </div>
        </div>
    )
}

export default BlogCard;