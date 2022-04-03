import React, { useEffect, useState } from "react";
import UserInfo from "../Profle/UserInfo";
import { useParams } from "react-router-dom";
import axios from "axios";

const ViewUserProfile = () => {
  const { id } = useParams();
  const [user, setUser] = useState({});

  useEffect(() => {
    async function fetchUser() {
      try {
        const { data } = await axios.get(
          `http://localhost:3000/api/v1/finduser/${id}`
        );
        console.log(data);
        setUser(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchUser();
  });

  return (
    <>
      <div>
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-8 mx-auto flex flex-col">
            <div className="lg:w-1/1 mx-auto">
              <div className="flex flex-col sm:flex-row ">
                <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                  <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                    <img
                      src={user.pic}
                      alt=""
                      srcset=""
                      style={{ borderRadius: "50%" }}
                    />
                  </div>
                  <div className="flex flex-col items-center text-center justify-center">
                    <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">
                      {user.name}
                    </h2>

                    <div
                      className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"
                      style={{ backgroundColor: "#22c514" }}
                    />
                    <p className="text-base">{user.email}</p>
                  </div>
                </div>
                <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                  <p className="leading-relaxed text-lg mb-4">
                    Meggings portland fingerstache lyft, post-ironic fixie man
                    bun banh mi umami everyday carry hexagon locavore direct
                    trade art party. Locavore small batch listicle gastropub
                    farm-to-table lumbersexual salvia messenger bag. Coloring
                    book flannel truffaut craft beer drinking vinegar sartorial,
                    disrupt fashion axe normcore meh butcher. Portland 90's
                    scenester vexillologist forage post-ironic asymmetrical,
                    chartreuse disrupt butcher paleo intelligentsia pabst before
                    they sold out four loko. 3 wolf moon brooklyn.
                  </p>
                  <a
                    className="text-indigo-500 inline-flex items-center learn__more"
                    style={{ color: "#22c514", cursor: "pointer" }}
                  >
                    Learn More
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      style={{ color: "#22c514" }}
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="container" style={{ margin: "0px auto", width: "70%" }}>
          <label htmlFor="file">
            {" "}
            <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">
              Performance
            </h2>
          </label>
          <progress
            id="file"
            value={32}
            max={100}
            style={{
              width: "100%",
              color: "#22c514",
              height: "8px",
              borderRadius: "5px",
            }}
          >
            {" "}
            32%{" "}
          </progress>
          <label htmlFor="file">
            {" "}
            <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">
              Rating
            </h2>
          </label>
          <progress
            id="file"
            value={82}
            max={100}
            style={{ width: "100%", color: "#22c514", height: "8px" }}
          >
            {" "}
            32%{" "}
          </progress>
          <label htmlFor="file">
            {" "}
            <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">
              Performance
            </h2>
          </label>
          <progress
            id="file"
            value={32}
            max={100}
            style={{ width: "100%", color: "#22c514", height: "8px" }}
          >
            {" "}
            32%{" "}
          </progress>
        </div>
        <UserInfo />
      </div>
    </>
  );
};

export default ViewUserProfile;