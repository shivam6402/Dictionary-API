import React from "react";
import { Link } from "react-router-dom";

const Nav=()=>{
    return(
        <>
            <nav class="navbar navbar-expand-lg bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">
                    <img src="../src/assets/images/nav1.png" width={"200"}/>
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li class="nav-item px-3">
                        <a class="nav-link active" aria-current="page" href="/Home">Home</a>
                        </li>
                        <li class="nav-item px-2">
                        <a class="nav-link" href="/Products">Features</a>
                        </li>
                        <li class="nav-item dropdown px-2">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Books
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="/Info">Information</a></li>
                            <li><a class="dropdown-item" href="/Element">Comics</a></li>
                            <li><a class="dropdown-item" href="/Learning">Learning</a></li>
                        </ul>
                        </li>
                        <li class="nav-item px-2">
                        <a class="nav-link" href="/Testimonial">Testimonial</a>
                        </li>
                        <li class="nav-item px-2">
                        <a class="nav-link" href="/Contact">Contact</a>
                        </li>
                    </ul>
                    
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Nav;