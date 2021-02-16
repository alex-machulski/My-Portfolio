import React from "react";
import './App.css';
import Header from "./header/Header";
import Main from "./main/Main";
import MySkills from "./skills/MySkills";
import MyProjects from "./projects/MyProjects";
import Contacts from "./contacts/Contacts";
import Footer from "./footer/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <MySkills/>
            <MyProjects/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
