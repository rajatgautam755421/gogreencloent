import React, { useState, useEffect } from "react";
import "./MYDASHBOARD.css";
import BarDiagram from "./Barr";
import Piechart from "./Piechart";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import PersonAddAltRoundedIcon from "@mui/icons-material/PersonAddAltRounded";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import CreateIcon from "@mui/icons-material/Create";
import BarChartIcon from "@mui/icons-material/BarChart";
import TimelineIcon from "@mui/icons-material/Timeline";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import axios from "axios";
import { Link } from "react-router-dom";
import denied from "./dashboard.svg";
import { toast } from "react-hot-toast";
import UserTable from "./UserTable";

const BarChart = () => {
  const [users, setUsers] = useState([]);
  const [update, setUpdate] = useState(false);
  const [contact, setContact] = useState([]);
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));

  const fetchAllContacts = async () => {
    try {
      const { data } = await axios.get("http://localhost:3000/api/v1/contact");
      console.log(data);
      setContact(data);
    } catch (error) {
      console.log(error.message);
    }
  };
  const fetchAllUsers = async () => {
    try {
      const { data } = await axios.get("http://localhost:3000/api/v1/allusers");
      setUsers(data.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    if (!userInfo) {
      toast.error("Sorry!! Not Authenticated");
    } else {
      if (userInfo.role !== "Admin") {
        {
          toast.error("Sorry!! Access Denied , Bring Me Your Admin");
        }
      }
    }

    fetchAllUsers();
    fetchAllContacts();
  }, [update]);

  return (
    <>
      <>
        {userInfo ? (
          userInfo.role === "Admin" ? (
            <>
              <div className="containerr">
                <div className="row">
                  <div className="col-xl-3 col-sm-3 col-md-3">
                    <div className="card1  text-white mb-4">
                      <div className="card-body">
                        <h3>
                          Total Earning <MonetizationOnIcon />
                        </h3>
                      </div>
                      <div className="card-footer ">
                        <h4>
                          $7568 (8% <ArrowDropUpIcon />)
                        </h4>
                      </div>
                    </div>
                  </div>

                  <div className="col-xl-3 col-sm-3 col-md-3">
                    <div className="card1  text-white mb-4">
                      <div className="card-body">
                        <h3>
                          Total Customer <PersonRoundedIcon />
                        </h3>
                      </div>
                      <div className="card-footer ">
                        <h4>37568(368+)</h4>
                        <div className="small text-white"></div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-sm-3 col-md-3">
                    <div className="card1  text-white mb-4">
                      <div className="card-body">
                        <h3>
                          New Customer <PersonAddAltRoundedIcon />
                        </h3>
                      </div>
                      <div className="card-footer ">
                        <h4>368</h4>
                        <div className="small text-white"></div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-sm-3 col-md-3">
                    <div className="card1  text-white mb-4">
                      <div className="card-body">
                        <h3>
                          Average Order <CreateIcon />
                        </h3>
                      </div>
                      <div className="card-footer ">
                        <h4>68</h4>
                        <div className="small text-white"></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-xl-6 col-sm-6 col-md-6">
                    <div className="card mb-4" style={{ margin: "0px auto" }}>
                      <div className="card-header">
                        Growth Chart <BarChartIcon />
                      </div>
                      <div className="card-body">
                        <BarDiagram />
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-sm-6 col-md-6">
                    <div className="card mb-4" style={{ margin: "0px auto" }}>
                      <div className="card-header">
                        <i className="fas fa-chart-bar me-1"></i>
                        Order Chart
                        <TimelineIcon />
                      </div>
                      <div className="card-body">
                        <Piechart />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div
                    className=" col-xl-9 col-sm-12 col-md-9 table__div"
                    style={{ "overflow-y": "scroll" }}
                  >
                    <div className="card2 mb-4">
                      <h3
                        style={{
                          textAlign: "center",
                          fontWeight: "600",
                          fontSize: "24px",
                        }}
                      >
                        All Users Details
                      </h3>
                      <div className="card-body">
                        <table className="table table-bordered">
                          <thead>
                            <tr>
                              <th scope="col">Email</th>
                              <th scope="col">Image</th>
                              <th scope="col">Name</th>
                              <th scope="col">Joined At</th>
                              <th>Role</th>
                            </tr>
                          </thead>
                          <tbody>
                            {users
                              ? users.map((value) => {
                                  return (
                                    <UserTable
                                      value={value}
                                      setUpdate={setUpdate}
                                    />
                                  );
                                })
                              : null}
                          </tbody>
                        </table>
                      </div>

                      {/* UserTableEnds */}
                    </div>
                  </div>

                  <div className="col-xl-3 col-sm-3 col-md-3">
                    <div className="card100 mb-4">
                      <h3
                        style={{
                          textAlign: "center",
                          fontWeight: "600",
                          fontSize: "24px",
                        }}
                      >
                        Recent Orders
                      </h3>
                      <div className="card-body">
                        <table className="table">
                          <thead>
                            <tr>
                              <th scope="col">#ID</th>
                              <th scope="col">Item Name</th>
                              <th scope="col">Price</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th scope="row">1</th>
                              <td>Bottle</td>
                              <td>$453</td>
                            </tr>
                            <tr>
                              <th scope="row">1</th>
                              <td>Bottle</td>
                              <td>$453</td>
                            </tr>
                            <tr>
                              <th scope="row">2</th>
                              <td>Random</td>
                              <td>$23</td>
                            </tr>
                            <tr>
                              <th scope="row">3</th>
                              <td>Glass</td>
                              <td>$63</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Last Table */}

              <div className="container">
                <div className="row">
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Messsage</th>
                      </tr>
                    </thead>
                    <tbody>
                      {contact
                        ? contact.map((value) => {
                            return (
                              <>
                                <tr key={value._id}>
                                  <th scope="row">{value.name}</th>
                                  <td>{value.email}</td>
                                  <td>{value.message}</td>
                                </tr>
                              </>
                            );
                          })
                        : null}
                    </tbody>
                  </table>
                </div>
              </div>
              <Link to="/blog/blogpost">
                <div
                  className="color"
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
                >
                  <h6 style={{ fontSize: "17px" }}>Create A Blog ADMIN</h6>
                </div>
              </Link>
            </>
          ) : (
            <>
              <div className="container">
                <img
                  src={denied}
                  alt=""
                  srcset=""
                  style={{ margin: "0px auto" }}
                />
              </div>
            </>
          )
        ) : null}
      </>
      )
    </>
  );
};

export default BarChart;
