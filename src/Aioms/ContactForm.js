import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function ContactForm() {
  //   const [contactData, setContactData] = useState([]);
  const [username, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [key, setKey] = useState("");
  const navigate = useNavigate();

  function handleOnChange(e) {
    if (e.target.name === "username") {
      setName(e.target.value);
    }
    if (e.target.name === "email") {
      setEmail(e.target.value);
    }
    if (e.target.name === "number") {
      setContact(e.target.value);
    }
    if (e.target.name === "id") {
      setKey(e.target.value);
    }
  }

  const addContact = () => {
    axios
      .post("http://localhost:8000/contactInfo", {
        name: username,
        email: email,
        contact: contact,
        id: key,
      })
      .then((res) => console.log("created"))
      .catch((err) => console.log("duplicate ID"));
    navigate("/");
  };

  return (
    <div>
      <h1>Create Contact List</h1>
      <br />
      <input
        type="text"
        placeholder="Name"
        name="username"
        onChange={handleOnChange}
      ></input>
      <input
        type="email"
        name="email"
        placeholder="Email"
        onChange={handleOnChange}
      ></input>
      <input
        type="contact"
        placeholder="Contact"
        name="number"
        onChange={handleOnChange}
      ></input>
      <input
        type="number"
        placeholder="Id"
        name="id"
        onChange={handleOnChange}
      ></input>
      <button onClick={addContact}>Add</button>

      <br></br>
    </div>
  );
}
