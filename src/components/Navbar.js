import React from "react";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-md fixed-top bg-white">
            <div className="container my-2">
                <a href="/" className="navbar-brand text-dark font-weight-bold">
                    Prajakta Vanjare
                </a>

                <button className="btn btn-outline-info ms-auto mx-3">
                    Contact me
                </button>

                <button className="navbar-toggler mx-3" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNav"
                    aria-controls="collapseNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="fas fa-bars text-dark"></span>
                </button>

                <div className="collapse navbar-collapse flex-grow-0" id="collapseNav">
                    <div className="navbar-nav">
                        <a href="/" aria-current="page" className="nav-item nav-link text-dark h6 mx-1">
                            Projects
                        </a>
                        <a href="/" aria-current="page" className="nav-item nav-link text-dark h6 mx-1">
                            Blogs
                        </a>
                    </div>
                </div>

            </div>
        </nav >
    );
}

export default Navbar;