import { useEffect, useState } from "react";
import axios from "axios";
export default function Form() {
  const [contactData, setContactData] = useState([]);
  const [username, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [key, setKey] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8000/contactInfo")
      .then((res) => setContactData(res.data));
  }, []);

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
  function handleUpdate(update) {
    axios
      .put(`http://localhost:8000/contactInfo/${update}`, {
        name: "AbhiPatel",
        email: "a@3e5273",
        contact: 789470993,
        id: 63,
      })
      .then((res) => console.log(res.data));
  }
  function handleDelte(updateid) {
    axios
      .delete(`http://localhost:8000/contactInfo/${updateid}`)
      .then((res) => console.log(res.data));
  }
  function addContact() {
    axios
      .post("http://localhost:8000/contactInfo", {
        name: username,
        email: email,
        contact: contact,
        id: key,
      })
      .then((res) => console.log(res.data));
  }
  return (
    <div>
      <h1>Contact List</h1>
      {contactData.map((usercontact) => (
        <p key={usercontact.id}>
          {usercontact.name} {usercontact.contact}
          <button onClick={() => handleUpdate(usercontact.id)}>update</button>
          <button onClick={() => handleDelte(usercontact.id)}>Delete</button>
          <br></br>
          <br></br>
        </p>
      ))}
      <br />
      <form>
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
      </form>
      <br></br>
    </div>
  );
}
