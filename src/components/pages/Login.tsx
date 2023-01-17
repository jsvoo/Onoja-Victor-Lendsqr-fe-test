import "../styles/login.css"
import logo from "../images/logo.svg"
import banner from "../images/loginBanner.png"
import { useState, useEffect } from "react"
import { url, User } from "../props/User_table"
import axios from "axios"
import { useNavigate } from "react-router-dom"
export default function Login() {
    const [users, setUsers] = useState<User[]>([])
    const [user, setUser] = useState<User | null>(null)
    const [input, setInput] = useState<{ email: string, password: string, error: string }>({ email: "", password: "", error: "" })
    const [emptyField, setEmptyField] = useState<boolean>(false)

 
    

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target
        setInput((prev) => {
            return { ...prev, [name]: value.toLowerCase() }
        })

    }

    return (
        <div className="login_container">


            <div className="body">
                <div className="banner-section">
                    <div className="logo-section">
                        <img src={logo} alt="Lendsqr image" />

                    </div>
                    <div className="banner">
                        <img src={banner} alt="welcome banner" />
                    </div>
                </div>


                <div className="form-section">

                    <div className="form-width">
                        <div className="header">
                            <h1 className="welcome">Welcome!</h1>
                            <p>Enter details to login</p>
                        </div>

                        <form >
                            <div className="email-section input-container ">
                                <input type="text"
                                    className={!emptyField && input.email === "" ? "" : "error"}
                                    placeholder={!emptyField && input.email === "" ? "Email" : ("Required field")}
                                    name="email"
                                    onChange={(event) => { handleChange(event); setEmptyField(false) }}
                                    value={input.email}
                                />

                            </div>
                            <div className="password-section input-container">
                                <input type="password"
                                    name="password"
                                    onChange={(event) => handleChange(event)}
                                    value={input.password}
                                    className={!emptyField && input.password === ""  ? "" : "error"}
                                    placeholder={!emptyField && input.password === "" ? "Password" : ("Required field")}
                                />
                                <span className="show">SHOW</span>
                            </div>

                            <p style={{ fontSize: "10px", color: "red" }}>{input.error !== "" && input.error}</p>

                            <p className="forgot-password">
                                FORGOT PASSWORD
                            </p>
                            <button type="button"
                                
                            >LOG IN</button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    )
}

