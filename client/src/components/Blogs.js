import React from "react";
import { useSelector } from "react-redux";

const Blogs = () => {
    const blogs = useSelector((store) => store.blogs);
    // const blogList = blogs.map((blog) => <li key={blog.id}>{blog.title}</li>);
    console.log("in blogs", blogs);
    return (
        <div>
        <h1>Blogs</h1>
        <ul>{blogs}</ul>
        </div>
    );
}
export default Blogs;