import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import DeleteIcon from "@mui/icons-material/Delete";

const BlogItem = ({ blogId, title, desc, setDeleteBlog }) => {
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const email = userInfo.email;
  const image = userInfo.pic;
  const [comments, setComments] = useState(0);
  const [liked, setLiked] = useState(false);
  const [likedLength, setLikedLength] = useState();
  const [likedItems, setLikedItems] = useState([]);

  useEffect(() => {
    const getLikes = async () => {
      const { data } = await axios.get(
        `http://localhost:3000/api/v1/like/blog/byuser/${email}`
      );
      data.map((value) => {
        if (value.blogId === blogId) {
          setLiked(true);
        }
      });
    };
    getLikes();
  });

  useEffect(() => {
    const fetchLikes = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:3000/api/v1/like/blog/${blogId}`,
          { blogId }
        );
        console.log(data.length);
        setLikedLength(data.length);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchLikes();
  });

  const handleClick = async () => {
    setLiked(!liked);
    if (liked === false) {
      try {
        const { data } = await axios.post(
          "http://localhost:3000/api/v1/like/blog",
          { email, image, blogId }
        );
        console.log(data);
      } catch (error) {
        console.log(error.message);
      }
    } else {
      try {
        const { data } = await axios.delete(
          "http://localhost:3000/api/v1/like/blog",
          { email, blogId }
        );
        console.log(data);
      } catch (error) {
        console.log(error.message);
      }
    }
  };

  const handleDelete = async () => {
    try {
      const { data } = await axios.delete(
        `http://localhost:3000/api/v1/blog/${blogId}`
      );
      console.log(data);
      setDeleteBlog(true);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    const fetchComments = async () => {
      const { data } = await axios.get(
        `http://localhost:3000/api/v1/comments/all/${blogId}`
      );
      console.log(data);
      setComments(data.length);
    };
    fetchComments();
  }, []);
  return (
    <div>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-8 mx-auto">
          <div className="flex flex-wrap -m-12">
            <div className="p-12 md:w-1/1 flex flex-col items-start">
              <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">
                {title}
              </h2>
              <p className="leading-relaxed mb-8">{desc}</p>
              <div className="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto ">
                <span
                  className="text-gray-400 mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200"
                  onClick={handleClick}
                >
                  {liked ? (
                    <FavoriteRoundedIcon className="liked" />
                  ) : (
                    <FavoriteBorderRoundedIcon className="not__liked" />
                  )}

                  <h1 style={{ color: "black" }}>{likedLength}</h1>
                </span>
                <Link to={`/comment/${blogId}`}>
                  <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                    <svg
                      className="w-4 h-4 mr-1"
                      stroke="currentColor"
                      strokeWidth={2}
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                      style={{ color: "#22c514", cursor: "pointer" }}
                    >
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                    </svg>
                    <h1 style={{ color: "black" }}>{comments}</h1>
                  </span>
                </Link>
                {userInfo ? (
                  userInfo.role === "Admin" ? (
                    <span
                      className="text-gray-400 mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200 ml-10"
                      onClick={handleDelete}
                      style={{ marginLeft: "30px" }}
                    >
                      <DeleteIcon style={{ color: "red", cursor: "pointer" }} />
                    </span>
                  ) : null
                ) : null}
              </div>
              <a className="inline-flex items-center">
                <img
                  alt="blog"
                  src="https://dummyimage.com/104x104"
                  className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                />
                <span className="flex-grow flex flex-col pl-4">
                  <span className="title-font font-medium text-gray-900">
                    ADMIN
                  </span>
                  <span
                    className="text-gray-700 text-xs tracking-widest mt-0.5"
                    style={{ color: "#22c514" }}
                  >
                    admin@gmail.com
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
      <div className="hr__class">
        <hr />
      </div>
    </div>
  );
};

export default BlogItem;
