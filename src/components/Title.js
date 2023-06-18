import React from "react";
import PropTypes from "prop-types";
import Prajakta from "../img/img.jpg"

function Title(props) {
    // const name = "Prajakta Vanjare";
    // const leadText = "I am a freelancer from India";

    const { name, leadText } = props;

    return (
        <div className="container">
            <div className="row align-items-center text-center my-5">
                <div className="col-12 col-md-6" style={{ marginTop: "4rem" }}>
                    <img className="img-fluid rounded-circle"
                        style={{ width: "60%" }}
                        src={Prajakta}
                        alt="prajakta-vanjare" />
                </div>
                <div className="col-12 col-md-6 pt-5">
                    <div className="font-weight-light" style={{ fontSize: "50px" }}>
                        Hi, I am <span className="text-info"> {name} </span>
                    </div>
                    <h4 className="font-weight-light"> {leadText} </h4>
                </div>
            </div>
        </div>
    );
}

Title.defaultProps = {
    name: "Prajakta V",
    leadText: "I'm a freelancer from India"
}

Title.propTypes = {
    name: PropTypes.string.isRequired,
}

export default Title;