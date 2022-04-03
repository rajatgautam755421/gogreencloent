import React, { useEffect, useState } from "react";
import "./Blog.css";
import Typewriter from "typewriter-effect";
import BlogItem from "./BlogItem";
import axios from "axios";
import Spinner from "../Spinner";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    const fetchBlogs = async () => {
      setLoader(true);
      const { data } = await axios.get("http://localhost:3000/api/v1/blog");
      try {
        console.log(data);
        setBlogs(data);
        setLoader(false);
      } catch (error) {
        console.log(error.message);
        setLoader(false);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div>
      {blogs === [] && <h1>No blogs to show</h1>}
      {/* Blog Intro*/}
      {loader && <Spinner />}
      <div className="container">
        <h1 className="mainservices__title">
          <Typewriter
            options={{
              strings: ["Blogs"],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>
      </div>
      {/* Blogs */}
      {blogs
        ? blogs.map((value) => {
            return (
              <>
                <BlogItem
                  blogId={value._id}
                  title={value.title}
                  desc={value.description}
                />
              </>
            );
          })
        : null}
    </div>
  );
};

export default Blog;
