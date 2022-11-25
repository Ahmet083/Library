import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import useApi from "../../Hooks/useApi";
import { setToken } from "../../redux/authSlice"


function Login() {
    const api = useApi()
    const dispatch = useDispatch()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")    

    const btnLoginOnClick = () => {         
    const postData = {email, password}
    console.log("POST DATA", postData)

    api.post("auth/login", postData)
       .then((response) => {
        dispatch(setToken(response.data.data.token))
        document.location.hash = '#/'
       })
        .catch((err) => {
        console.log("ERR", err)
        alert('Yanlis e-mail veya sifre girdiniz')
       })
    }
    return (


        <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
            <div className="col-6 aligin-text-center">

                <form>
                    <div className="form-label">
                        <label htmlFor="email"
                        style={{fontSize:"20px", fontWeight: "bold"}}>
                        Email address
                        </label>
                    <input 
                        type="email" 
                        className="form-control" 
                        placeholder="Enter email" 
                        onChange={(event) => setEmail(event.target.value)}
                        />
                    </div>
                    <div className="form-group"
                        style={{fontSize:"20px", fontWeight: "bold"}}>
                        <label htmlFor="password">
                        Password
                        </label>
                        <input type="password" 
                        className="form-control " 
                        placeholder="Password" 
                        onChange={(event) => setPassword(event.target.value)}
                        />
                    </div>

                    <button type="submit" 
                    className="btn btn-dark text-warning my-2 w-100"
                    onClick={btnLoginOnClick}>
                   Giris Yapin
                    </button>
                </form>

            </div>

        </div>






    )
}

export default Login