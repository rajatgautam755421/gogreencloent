import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import "./UserTable.css";
import axios from "axios";
import { toast } from "react-hot-toast";

const UserTable = ({ value, setUpdate }) => {
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));

  const handleClick = async () => {
    const { data } = await axios.delete(
      `http://localhost:3000/api/v1/deleteUser/${value ? value._id : null}`
    );
    setUpdate(true);
    toast.success(`${value ? value.email : null} Is Deleted`);
    try {
      console.log(data);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <tr key={value._id}>
      <td>{value.email}</td>
      <td>{value.image}</td>
      <td>{value.name}</td>
      <td>{value.updatedAt}</td>
      <td>{value.role}</td>
      <td>
        <DeleteIcon className="delete__icon__dashboard" onClick={handleClick} />
      </td>
    </tr>
  );
};

export default UserTable;
