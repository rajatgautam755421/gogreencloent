import React, { useEffect, useState, useContext } from "react";
import Typewriter from "typewriter-effect";
import "./Profile.css";
import UserInfo from "./UserInfo";
import { Toaster, toast } from "react-hot-toast";
import axios from "axios";
import EditIcon from "@mui/icons-material/Edit";
import { Link } from "react-router-dom";
import Confirm from "./Confirm";

const Profile = () => {
  const [info, setInfo] = useState([]);
  const [level, setLevel] = useState(0);
  const [totalRating, setTotalRating] = useState(0);
  const [confirm, setConfirm] = useState(false);

  const [review, setReview] = useState(false);
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  useEffect(() => {
    toast.success(`Welcome ${userInfo ? userInfo.name : null}`);
  }, []);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:3000/api/v1/findsales-user/${
            userInfo ? userInfo._id : null
          }`
        );
        console.log(data);
        setInfo(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchUserInfo();
  }, []);

  const totalAmountSold = info.reduce((a, b) => {
    return a + b.product_amount;
  }, 0);
  console.log(totalAmountSold);
  useEffect(() => {
    if (totalAmountSold === 0) {
      setLevel(0);
    } else if (totalAmountSold <= 0) {
      setLevel(0);
    } else if (totalAmountSold >= 1 && totalAmountSold < 10) {
      setLevel(1);
    } else if (totalAmountSold >= 10 && totalAmountSold < 40) {
      setLevel(2);
    } else if (totalAmountSold >= 40 && totalAmountSold < 100) {
      setLevel(3);
    } else {
      setLevel(4);
    }
  });

  const email = userInfo ? userInfo.email : null;
  useEffect(() => {
    const fetchUserRating1 = async () => {
      const { data } = await axios.get(
        `http://localhost:3000/api/v1/reviewusers/${email}`
      );
      try {
        console.log(data);
        setTotalRating(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUserRating1();
  }, [email]);

  const ratings = totalRating
    ? totalRating.reduce((a, b) => {
        return a + b.review;
      }, 0)
    : null;

  const averageRating = ratings / totalRating.length;

  return (
    <>
      {confirm === false ? (
        <>
          <div>
            {/* Profile Intro */}

            <div>
              <Toaster />
            </div>
            <h1 className="mainservices__title">
              <Typewriter
                options={{
                  strings: ["Profile"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            {review === false && (
              <>
                {/* Main Profile */}
                <section className="text-gray-600 body-font">
                  <div className="container px-5 py-8 mx-auto flex flex-col">
                    <div className="lg:w-1/1 mx-auto">
                      <div className="flex flex-col sm:flex-row ">
                        <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                          <Link to="/update-user-pic">
                            <div
                              className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400 profile-pic"
                              style={{
                                backgroundImage: `url(${userInfo.pic})`,
                              }}
                            >
                              <span class="glyphicon glyphicon-camera"></span>
                              <span>Change Image</span>
                            </div>
                          </Link>
                          <div className="flex flex-col items-center text-center justify-center">
                            <h2 className="font-medium title-font mt-4 text-gray-900 text-lg ml-4">
                              {userInfo.name}{" "}
                              <span>
                                {" "}
                                <Link to={`/update-user-info/name`}>
                                  <EditIcon className="editIcon" />
                                </Link>
                              </span>
                            </h2>

                            <div
                              className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"
                              style={{ backgroundColor: "#22c514" }}
                            />
                            <p className="text-base">
                              {userInfo.email}{" "}
                              <span>
                                {" "}
                                <Link to={`/update-user-info/email`}>
                                  <EditIcon className="editIcon__email" />
                                </Link>
                              </span>
                            </p>
                          </div>
                        </div>
                        <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                          <p className="leading-relaxed text-lg mb-4">
                            Meggings portland fingerstache lyft, post-ironic
                            fixie man bun banh mi umami everyday carry hexagon
                            locavore direct trade art party. Locavore small
                            batch listicle gastropub farm-to-table lumbersexual
                            salvia messenger bag. Coloring book flannel truffaut
                            craft beer drinking vinegar sartorial, disrupt
                            fashion axe normcore meh butcher. Portland 90's
                            scenester vexillologist forage post-ironic
                            asymmetrical, chartreuse disrupt butcher paleo
                            intelligentsia pabst before they sold out four loko.
                            3 wolf moon brooklyn.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                {userInfo
                  ? userInfo.role === "Seller" && (
                      <>
                        <div
                          className="container"
                          style={{ margin: "0px auto", width: "70%" }}
                        >
                          <label htmlFor="file">
                            {" "}
                            <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">
                              Level
                            </h2>
                          </label>
                          <progress
                            id="file"
                            value={level}
                            max={4}
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
                            style={{
                              width: "100%",
                              color: "#22c514",
                              height: "8px",
                            }}
                          >
                            {" "}
                            32%{" "}
                          </progress>
                        </div>
                        <UserInfo
                          totalAmountSold={totalAmountSold}
                          level={level}
                          averageRating={averageRating}
                        />
                      </>
                    )
                  : null}
              </>
            )}
            <div
              className="delete__me"
              style={{
                width: "200px",
                height: "60px",
                border: "1px solid black",
                cursor: "pointer",
                borderRadius: "6px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "20px",
                margin: "0px auto",
              }}
              onClick={() => setConfirm(!confirm)}
            >
              <h6 style={{ fontSize: "17px" }}>Delete My Account</h6>
            </div>
          </div>
        </>
      ) : (
        <Confirm setConfirm={setConfirm} />
      )}
    </>
  );
};

export default Profile;
