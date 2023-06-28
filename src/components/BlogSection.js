import React from "react";
import BlogCard from "./BlogCard";

function BlogSection() {
    const blogList = [
        {
            id: 1,
            title: "Blog 1",
            excerpt: "This is my blog about...",
            imageUrl: require("../img/project1.jpg"),
        },
        {
            id: 2,
            title: "Blog 2",
            excerpt: "This is my blog about...",
            imageUrl: require("../img/project2.jpg"),
        },
        {
            id: 3,
            title: "Blog 3",
            excerpt: "This is my blog about...",
            imageUrl: require("../img/project3.jpg"),
        },
    ]
    return (
        <div className="container text-center my-5 pt-3">
            <h1 className="font-weight-light">
                My <span className="text-info">Blogs</span>
            </h1>

            {/* <div className="">
                I build products, just like this website
            </div> */}

            <div className="row my-3 pt-3">
                {
                    blogList.map((blogs) => (
                        <div className="col-12 col-md-4 my-2">
                            <BlogCard blogs={blogs} />
                        </div>
                    ))
                }
            </div>

            <div className="my-5" style={{ textAlign: "right" }}>
                <h5>
                    <a href="/" className="text-dark">See my Blogs <i class="fa-solid fa-arrow-right"></i></a>
                </h5>
            </div>

        </div>
    )
}

export default BlogSection;