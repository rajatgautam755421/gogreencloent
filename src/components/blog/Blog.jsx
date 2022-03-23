import React from "react";
import "./Blog.css";
import Typewriter from "typewriter-effect";
import BlogItem from "./BlogItem";

const BlogData = [
  {
    id: 1,
    name: "Aashish Ghimire",
    email: "aashish@gmail.com",
    title: " Lorem ipsum dolor",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam, ipsum praesentium natus optio consectetur distinctio, atque officiis, iure aperiam rem aliquam facilis! In, nobis numquam. Voluptatem et assumenda aperiam nobis",
  },
  {
    id: 2,
    name: "Aashish Ghimire",
    email: "aashish@gmail.com",
    title: " Lorem ipsum dolor",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam, ipsum praesentium natus optio consectetur distinctio, atque officiis, iure aperiam rem aliquam facilis! In, nobis numquam. Voluptatem et assumenda aperiam nobis",
  },
  {
    id: 3,
    name: "Aashish Ghimire",
    email: "aashish@gmail.com",
    title: " Lorem ipsum dolor",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam, ipsum praesentium natus optio consectetur distinctio, atque officiis, iure aperiam rem aliquam facilis! In, nobis numquam. Voluptatem et assumenda aperiam nobis",
  },
  {
    id: 4,
    name: "Aashish Ghimire",
    email: "aashish@gmail.com",
    title: " Lorem ipsum dolor",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam, ipsum praesentium natus optio consectetur distinctio, atque officiis, iure aperiam rem aliquam facilis! In, nobis numquam. Voluptatem et assumenda aperiam nobis",
  },
  {
    id: 5,
    name: "Aashish Ghimire",
    email: "aashish@gmail.com",
    title: " Lorem ipsum dolor",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam, ipsum praesentium natus optio consectetur distinctio, atque officiis, iure aperiam rem aliquam facilis! In, nobis numquam. Voluptatem et assumenda aperiam nobis",
  },
  {
    id: 6,
    name: "Aashish Ghimire",
    email: "aashish@gmail.com",
    title: " Lorem ipsum dolor",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam, ipsum praesentium natus optio consectetur distinctio, atque officiis, iure aperiam rem aliquam facilis! In, nobis numquam. Voluptatem et assumenda aperiam nobis",
  },
  {
    id: 7,
    name: "Aashish Ghimire",
    email: "aashish@gmail.com",
    title: " Lorem ipsum dolor",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam, ipsum praesentium natus optio consectetur distinctio, atque officiis, iure aperiam rem aliquam facilis! In, nobis numquam. Voluptatem et assumenda aperiam nobis",
  },
  {
    id: 8,
    name: "Aashish Ghimire",
    email: "aashish@gmail.com",
    title: " Lorem ipsum dolor",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam, ipsum praesentium natus optio consectetur distinctio, atque officiis, iure aperiam rem aliquam facilis! In, nobis numquam. Voluptatem et assumenda aperiam nobis",
  },
];

const Blog = () => {
  return (
    <div>
      {/* Blog Intro*/}
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
      {BlogData.map((value) => {
        return (
          <>
            <BlogItem
              id={value.id}
              name={value.name}
              email={value.email}
              title={value.title}
              desc={value.desc}
            />
          </>
        );
      })}
    </div>
  );
};

export default Blog;
