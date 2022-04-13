import React, { useEffect, useState } from "react";
import "./CommentOnBlog.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import CommentBox from "./CommentBox";
import { toast } from "react-hot-toast";
import Spinner from "../Spinner";

const CommentOnBlog = () => {
  const [loading, setLoading] = useState(false);
  const [blogComments, setBlogComments] = useState([]);
  const { blogId } = useParams();
  const [comment, setComment] = useState("");
  const [blog, setBlog] = useState({});
  const [fetch, setFetch] = useState(false);
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));

  const email = userInfo.email;
  const image = userInfo.pic;
  const handleClick = async () => {
    if (comment === "") {
      toast.error("Please Comment Something");
    } else {
      try {
        const { data } = await axios.post(
          `http://localhost:3000/api/v1/comment/${blogId}`,
          { email, image, comment }
        );
        console.log(data);
        setFetch(true);
        setComment("");
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    const fetchComments = async () => {
      setLoading(false);
      const { data } = await axios.get(
        `http://localhost:3000/api/v1/comments/all/${blogId}`
      );
      console.log(data);
      setBlogComments(data);
      setLoading(false);
    };
    fetchComments();
  }, [comment, fetch]);

  useEffect(() => {
    const fetchABlog = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:3000/api/v1/blog/${blogId}`
        );
        setBlog(data);
        console.log(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchABlog();
  }, []);

  return (
    <>
      {loading && <Spinner />}
      <div
        className="container comment__view"
        style={{ margin: "10px 0px 30px 0px" }}
      >
        <div className="row" style={{ textAlign: "center" }}>
          <h1 style={{ fontSize: "28px" }}>Blog Title : {blog.title}</h1>
          <h1 style={{ fontSize: "20px", marginTop: "10px" }}>
            Blog Description : {blog.description}
          </h1>
        </div>
      </div>

      <div className="container">
        <div className="mt-1">
          <input
            id="email"
            name="email"
            type="text"
            autocomplete="email"
            required=""
            placeholder="Comment"
            className="
                          block
                          w-full
                          px-5
                          py-3
                          text-base text-neutral-600
                          placeholder-gray-300
                          transition
                          duration-500
                          ease-in-out
                          transform
                          border border-transparent
                          rounded-lg
                          bg-gray-50
                          focus:outline-none
                          focus:border-transparent
                          focus:ring-2
                          focus:ring-white
                          focus:ring-offset-2
                          focus:ring-offset-gray-300
                        "
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </div>
      </div>
      {blogComments
        ? blogComments.length === "0" && (
            <h1>No Comments yet.Be first to comment</h1>
          )
        : null}

      <div className="container comment__div">
        <button
          type="submit"
          className="
                        flex
                        items-center
                        justify-center
                        w-full
                        px-10
                        py-4
                        text-base
                        font-medium
                        text-center text-white
                        transition
                        duration-500
                        ease-in-out
                        transform
                        bg-blue-600
                        rounded-xl
                        hover:bg-blue-700
                        focus:outline-none
                        focus:ring-2
                        focus:ring-offset-2
                        focus:ring-blue-500
                      "
          style={{ backgroundColor: "#22c514" }}
          onClick={handleClick}
        >
          {" "}
          Comment{" "}
        </button>
      </div>

      {blogComments.length === 0 && (
        <h1
          style={{ fontSize: "20px", textAlign: "center", margin: "30px 0px" }}
        >
          No Comments yet . Be first to comment
        </h1>
      )}

      {blogComments
        ? blogComments.map((value) => {
            return (
              <>
                <CommentBox
                  comment={value.comment}
                  dateOfComment={value.dateOfComment}
                  email={value.email}
                  image={value.image}
                  setFetch={setFetch}
                />
              </>
            );
          })
        : null}
    </>
  );
};

export default CommentOnBlog;
