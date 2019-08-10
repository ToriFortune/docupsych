import React from "react";
import { Link } from "react-router-dom";
import "../index.css"
function Landing() {
    return (
       
        <section class="landing">
            <div class="dark-overlay">
                <div class="landing-inner">
                    <h1 class="x-large">Welcome</h1>
                    <p class="lead">
                      Please Log In
         </p>
                    <div class="buttons">
                      
                    <Link to="/register" className="btn btn-primary">Sign Up</Link>
                        <Link to="/login" className="btn btn-light">Login</Link>
                    </div>
                </div>
            </div>
        </section>
);
}


export default Landing;
