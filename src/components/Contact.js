import React, { Component } from "react";

class Contact extends Component {

    // constructor() {
    //     super();

    //     this.state = {
    //         name: "",
    //         email: "",
    //         description: "",
    //         submitMessage: "",
    //         submitMessageTextColor: "",
    //     };

    // }
    //  ---- OR ----

    state = {
        name: "",
        email: "",
        description: "",
        submitMessage: "",
        submitMessageTextColor: "",
    };


    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    onSubmit = (event) => {
        event.preventDefault();

        let isSuccessful = true;
        const { name } = this.state;

        if (isSuccessful) {
            this.setState({
                submitMessage: `Thank you ${name}. I will contact you`,
                submitMessageTextColor: "text-info",
            });
        } else {
            this.setState({
                submitMessage: "Oops! Something went wrong. Please try agin later..",
                submitMessageTextColor: "text-danger",
            });
        }
    }

    render() {

        const { submitMessage, submitMessageTextColor } = this.state;

        return (
            <div className="container my-5">
                <h1 className="font-weight-light text-center py-5">
                    <span className="text-info">Thank You! </span> for your interest
                </h1>
                <div className="row justify-content-center">
                    <div className="col-11 col-lg-5">
                        <form action="" onSubmit={this.onSubmit}>
                            <div className="form-group mb-3">
                                <label htmlFor="name">Name *</label>
                                <input type="text" name="name" className="form-control"
                                    onChange={this.onChange} />
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="email">Email *</label>
                                <input type="email" name="email" className="form-control"
                                    onChange={this.onChange} />
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="description">Tell me about your project *</label>
                                <textarea name="description" rows="5" className="form-control"
                                    onChange={this.onChange}></textarea>
                            </div>
                            <button type="submit" className="btn btn-dark float-end" style={{ backgroundColor: "black" }}>Let's talk</button>
                        </form>
                    </div>
                </div>

                <div className="text-center mx-2 py-5">
                    <h5 className={submitMessageTextColor}>{submitMessage}</h5>
                </div>
            </div>
        );
    }
}

export default Contact;