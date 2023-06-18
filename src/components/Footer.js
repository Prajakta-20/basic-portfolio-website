import React from "react";

function Footer() {
    return (
        <footer>
            <div className="container-fluid text-center" style={{ backgroundColor: "black" }}>
                <div className="py-5">
                    <h2 className="text-light">Interested in working with me?</h2>
                    <button className="btn btn-outline-light btn-lg">Let's talk</button>
                </div>
                <div className="row">
                    <div className="col-12 col-md-4 py-3">
                        <h5 className="text-info pb-3">More Links</h5>
                        <a href="/" className="text-light d-block">Blogs</a>
                        <a href="/" className="text-light d-block">Home</a>
                        <a href="/" className="text-light d-block">Projects</a>
                        <a href="/" className="text-light d-block">Contact me</a>
                        <a href="/" className="text-light d-block">Write a recommendation <i className="fa-solid fa-heart"></i></a>
                    </div>
                    <div className="col-12 col-md-4 text-justify py-3 text-light">
                        <p style={{ textAlign: "justify" }}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis
                            sed harum nostrum perferendis adipisci minus dicta modi
                            necessitatibus ut rem sit quasi tenetur, doloribus officia! Minima
                            distinctio explicabo quia a, earum ea possimus aliquam, nihil
                            veritatis enim reiciendis debitis qui tempora assumenda sit
                            nesciunt neque facere delectus illo nulla! Dolor, necessitatibus
                            fuga? Maxime sint blanditiis quis facere illo ratione eius
                            eligendi, magnam, deserunt voluptatum quam ut, doloribus tenetur
                            quasi ad consequuntur neque aspernatur perferendis?
                        </p>
                    </div>
                    <div className="col-12 col-md-4 py-3">
                        <h5 className="text-info pb-3">Social</h5>
                        <a href="/" className="text-light h1 d-block"><i className="fa-brands fa-linkedin"></i></a>
                        <a href="/" className="text-light h1 d-block"><i className="fa-brands fa-github"></i></a>
                        <a href="/" className="text-light h1 d-block"><i className="fa-solid fa-envelope"></i></a>
                    </div>
                </div>
                <div className="text-secondary py-3">
                    <p>Copyright ©️ Prajakta vanjare 2023</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;