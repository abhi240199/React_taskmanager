import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function ContactManagerAxiom() {
  const [contactData, setContactData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/contactInfo")
      .then((res) => setContactData(res.data));
  }, []);
  const navigate = useNavigate();
  function handleUpdate(updateid) {
    navigate(`/updatecontactname/${updateid}`);
  }
  function handleDelte(updateid) {
    axios
      .delete(`http://localhost:8000/contactInfo/${updateid}`)
      .then((res) => console.log(res.data));
  }
  function createContact() {
    navigate("/contactform");
  }

  return (
    <div>
      <br></br>
      <button onClick={createContact}>CreateContact</button>
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
    </div>
  );
}
