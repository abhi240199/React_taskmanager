import { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
export default function UpdateName(props) {
  //   const [contactData, setContactData] = useState([]);
  const [username, setName] = useState("");
  const navigate = useNavigate();
  const { updateid } = useParams();
  function handleOnChange(e) {
    if (e.target.name === "username") {
      setName(e.target.value);
    }
  }

  const updateName = () => {
    axios
      .patch(`http://localhost:8000/contactInfo/${updateid}`, {
        name: username,
      })
      .then((res) => console.log("Updated"))
      .catch((err) => console.log("duplicate ID"));
    navigate("/");
  };

  return (
    <div>
      <h1>Update name</h1>
      <br />
      <input
        type="text"
        placeholder="Name"
        name="username"
        onChange={handleOnChange}
      ></input>
      <button onClick={updateName}>Update</button>

      <br></br>
    </div>
  );
}
