// @flow
import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./Authentication/SignUp";
import SignIn from "./Authentication/SignIn";

import { Header } from "./Navbar";
import { Footer } from "./Footer";

// import TodoComponent from "./TodoComponent";
import Home from "./Home";
import ContactForm from "./Aioms/ContactForm";
import UpdateName from "./Aioms/UpdateName";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/signup" element={<SignUp />}></Route>
            <Route path="/signin" element={<SignIn />}></Route>
            <Route path="/contactform" element={<ContactForm />}></Route>
            <Route
              path="/updatecontactname/:updateid"
              element={<UpdateName />}
            ></Route>
          </Routes>
        </BrowserRouter>
        <Footer />
      </div>
    );
  }
}
