import React from "react"
import Footer from "../common/footer/Footer"
import Navbar from "../common/header/Navbar"
import Login from "./login"
import RegisterForm from "./RegisterForm"

function Register() {
    return (
        <div>
            <RegisterForm />
            <Footer />
        </div>
    )
}

export default Register