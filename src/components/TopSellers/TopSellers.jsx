import axios from "axios";
import React, { useEffect, useState } from "react";
import "./TopSellers.css";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";

const TopSellers = () => {
  const [user1, setUser1] = useState({});
  const [user2, setUser2] = useState({});
  const [user3, setUser3] = useState({});

  useEffect(() => {
    async function fetchUsers() {
      const { data } = await axios.get(
        "http://localhost:3000/api/v1/top-sellers"
      );
      try {
        const response = await axios.get(
          `http://localhost:3000/api/v1/finduser/${data[0].user_id}`
        );
        setUser1(response.data);

        const response1 = await axios.get(
          `http://localhost:3000/api/v1/finduser/${data[1].user_id}`
        );
        setUser2(response1.data);

        const response2 = await axios.get(
          `http://localhost:3000/api/v1/finduser/${data[2].user_id}`
        );
        setUser3(response2.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchUsers();
  }, []);

  return (
    <>
      <h1 className="mainservices__title">
        <Typewriter
          options={{
            strings: ["Top 3 Sellers"],
            autoStart: true,
            loop: true,
          }}
        />
      </h1>
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-9 main__col__sellers">
            <Link to={`/user-profile/${user1._id}`}>
              <div className="container sellers__div">
                <img
                  src={user1.pic}
                  alt=""
                  srcset=""
                  style={{
                    width: "60%",
                    height: "200px",
                    borderRadius: "50%",
                    paddingTop: "10px",
                    margin: "0px auto",
                    textDecoration: "none",
                  }}
                />
                <h1
                  style={{
                    fontSize: "20px",
                    fontWeight: "Bold",
                    textAlign: "center",
                  }}
                >
                  {user1.name}
                </h1>
                <h1
                  style={{
                    fontSize: "20px",

                    textAlign: "center",
                  }}
                >
                  {user1.email}
                </h1>
              </div>
            </Link>
          </div>
          <div className="col-md-4 col-9 main__col__sellers ">
            <Link to={`/user-profile/${user2._id}`}>
              <div className="container sellers__div">
                <img
                  src={user2.pic}
                  alt=""
                  srcset=""
                  style={{
                    width: "60%",
                    height: "200px",
                    borderRadius: "50%",
                    paddingTop: "10px",
                    margin: "0px auto",
                  }}
                />
                <h1
                  style={{
                    fontSize: "20px",
                    fontWeight: "Bold",
                    textAlign: "center",
                  }}
                >
                  {user2.name}
                </h1>
                <h1
                  style={{
                    fontSize: "20px",

                    textAlign: "center",
                  }}
                >
                  {user2.email}
                </h1>
              </div>
            </Link>
          </div>
          <div className="col-md-4 col-9 main__col__sellers ">
            <Link to={`/user-profile/${user3._id}`}>
              <div className="container sellers__div">
                <img
                  src={user3.pic}
                  alt=""
                  srcset=""
                  style={{
                    width: "60%",
                    height: "200px",
                    borderRadius: "50%",
                    paddingTop: "10px",
                    margin: "0px auto",
                  }}
                />
                <h1
                  style={{
                    fontSize: "20px",
                    fontWeight: "Bold",
                    textAlign: "center",
                  }}
                >
                  {user3.name}
                </h1>
                <h1
                  style={{
                    fontSize: "20px",

                    textAlign: "center",
                  }}
                >
                  {user3.email}
                </h1>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopSellers;
