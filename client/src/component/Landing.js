import React from "react";
import { Link } from "react-router-dom"

function Landing() {
    return (
       
        <section class="landing">
            <div class="dark-overlay">
                <div class="landing-inner">
                    <h1 class="x-large">jkkkkkkkkkkkkkk</h1>
                    <p class="lead">
                        fghjkl;'"/;lkjhgfdfghjkl;/'/.l,kmjnbvc'"'
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
