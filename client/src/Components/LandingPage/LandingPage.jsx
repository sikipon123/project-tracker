import React, { Component } from "react";
// import CnxModal from "../CnxModal/CnxModal";
import "./LandingPage.css";
import LoginModal from "../CnxModal/LoginModal";
import SignUpModal from "../CnxModal/SignUpModal";

export class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      type: ""
    };
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };
  render() {
    return (
      <div>
        <div id="preloader">
          <div id="status">
            <div className="sk-cube-grid">
              <div className="sk-cube sk-cube1"></div>
              <div className="sk-cube sk-cube2"></div>
              <div className="sk-cube sk-cube3"></div>
              <div className="sk-cube sk-cube4"></div>
              <div className="sk-cube sk-cube5"></div>
              <div className="sk-cube sk-cube6"></div>
              <div className="sk-cube sk-cube7"></div>
              <div className="sk-cube sk-cube8"></div>
              <div className="sk-cube sk-cube9"></div>
            </div>
          </div>
        </div>
        <nav className="navbar navbar-expand-lg fixed-top navbar-custom navbar-light sticky sticky-dark">
          <div className="container">
            <a
              className="navbar-brand logo"
              href="/"
              style={{ color: "white" }}
            >
              <img
                src="https://dcassetcdn.com/design_img/1559024/551167/551167_7840631_1559024_911ff84c_image.png"
                alt=""
                height="50"
              />
              {"  "}Project Tracker
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarCollapse"
              aria-controls="navbarCollapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="mdi mdi-menu"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <ul className="navbar-nav ml-auto navbar-center" id="mySidenav">
                <li className="nav-item active">
                  <a href="#home" className="nav-link">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#about" className="nav-link">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#services" className="nav-link">
                    Our Services
                  </a>
                </li>
              </ul>
              <ul className="navbar-nav ml-auto navbar-center" id="mySidenav">
                <li className="nav-item">
                  {/* eslint-disable-next-line */}
                  <a
                    href="#"
                    className="nav-link"
                    onClick={() => {
                      this.toggle();
                      this.setState({
                        type: "Login"
                      });
                    }}
                  >
                    Login
                  </a>
                </li>
                <li className="nav-item">
                  {/* eslint-disable-next-line */}
                  <a
                    href="#"
                    className="nav-link"
                    onClick={() => {
                      this.toggle();
                      this.setState({ type: "Sign Up" });
                    }}
                  >
                    Sign Up
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {this.state.modal && this.state.type === "Login" ? (
          <LoginModal modal={this.state.modal} toggle={this.toggle} />
        ) : (
          <></>
        )}
        {this.state.modal && this.state.type === "Sign Up" ? (
          <SignUpModal modal={this.state.modal} toggle={this.toggle} />
        ) : (
          <></>
        )}
        {/* <!-- HOME START --> */}
        <section className="section home-3-bg" id="home">
          <div className="home-center">
            <div className="home-desc-center">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-lg-5">
                    <div className="mt-40 home-3-content">
                      <h1 className="text-white font-weight-normal home-3-title display-4 mb-0">
                        Track Your Projects Easily
                      </h1>
                      <p className="text-white-70 mt-4 f-15 mb-0">
                        Get quick and easy access to track your Projects as well as the Instructors who need to keep up with their students
                        and their progress on their work
                      </p>
                    </div>
                  </div>

                  <div className="col-lg-7">
                    <div className="mt-40 home-3-content position-relative p-4">
                      <img
                        src="https://d2slcw3kip6qmk.cloudfront.net/marketing/blog/2017Q2/project-planning-header@2x.png"
                        alt=""
                        className="img-fluid mx-auto d-block home-2-img"
                        style={{ borderRadius: "30px" }}
                      />
                    </div>
                  </div>
                  {/* <!-- col end --> */}
                </div>
                {/* <!-- row end --> */}
              </div>
              {/* <!-- container end --> */}

              <div className="container-fluid">
                <div className="row">
                  <div className="home-3-shape">
                    <img
                      src="images/home-3-shape.png"
                      alt=""
                      className="img-fluid mx-auto w-100 d-block"
                    />
                  </div>
                </div>
                {/* <!-- row end --> */}
              </div>
              {/* <!-- container-fluid end --> */}
            </div>
          </div>
        </section>
        {/* <!-- HOME END --> */}
        {/* <!-- ABOUT START --> */}
        <section
          className="section bg-about bg-light-about bg-light"
          id="about"
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="title-heading mb-5">
                  <h3 className="text-dark mb-1 font-weight-light text-uppercase">
                    About Us
                  </h3>
                  <div className="title-border-simple position-relative"></div>
                </div>
              </div>
              {/* <!-- col end --> */}
            </div>
            {/* <!-- row end --> */}

            <div className="row">
              <div className="col-lg-4">
                <div className="about-box about-light text-center p-3">
                  <div className="about-icon mb-4">
                    <i className="mdi mdi-lightbulb"></i>
                  </div>
                  <h4 className="font-weight-light">
                    <a href="/" className="text-dark">
                      Creative Design
                    </a>
                  </h4>
                  <p className="text-muted f-14">
                    Easy on the eye and comfortable to work with, plain and
                    simple Project Tracker will make your work and life much
                    easier
                  </p>
                </div>
              </div>
              {/* <!-- col end --> */}

              <div className="col-lg-4">
                <div className="about-box about-light text-center p-3">
                  <div className="about-icon mb-4">
                    <i className="mdi mdi-projector-screen"></i>
                  </div>
                  <h4 className="font-weight-light">
                    <a href="/" className="text-dark">
                      Strategy Solutions
                    </a>
                  </h4>
                  <p className="text-muted f-14">
                    Keeps you updated with every detail changed in your project
                    or your student's project for smooth and efficient work flow
                  </p>
                </div>
              </div>
              {/* <!-- col end --> */}

              <div className="col-lg-4">
                <div className="about-box about-light text-center p-3">
                  <div className="about-icon mb-4">
                    <i className="mdi mdi-nature"></i>
                  </div>
                  <h4 className="font-weight-light">
                    <a href="/" className="text-dark">
                      Dynamic Growth
                    </a>
                  </h4>
                  <p className="text-muted f-14">
                    Very effective and considered as a productivity booster by
                    all users, Students, Instructors and Admins.
                  </p>
                </div>
              </div>
              {/* <!-- col end --> */}
            </div>
            {/* <!-- row end --> */}

            <div className="row align-items-center mt-5">
              <div className="col-md-6">
                <div className="about-desc">
                  <h3 className="text-dark mb-3 font-weight-light">
                    For better Performance and results
                  </h3>
                  <p className="text-muted f-15">
                    Get quick and easy access to track your Projects. Also for
                    Instructors who need to keep up with their students and
                    their progress on their work. Very effective and considered
                    as a productivity booster by all users to motivate and
                    inspire you with your work
                  </p>
                </div>
              </div>
              {/* <!-- col end --> */}

              <div className="col-md-6">
                <div className="about-img light-img position-relative p-4">
                  <img
                    src="https://i.embed.ly/1/image?url=https%3A%2F%2Fwww.ntaskmanager.com%2Fwp-content%2Fuploads%2F2019%2F06%2FJust-sitting-here-talking-about-project-management.jpg&key=00b5f06621e641dbad88105320670b50"
                    alt="project services"
                    className="img-fluid mx-auto d-block"
                  />
                </div>
              </div>
              {/* <!-- col end --> */}
            </div>
            {/* <!-- row end --> */}
          </div>
          {/* <!-- container end --> */}
        </section>
        {/* <!-- ABOUT END --> */}
        {/* <!-- SERVICE START --> */}
        <section className="section" id="services">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="title-heading mb-5">
                  <h3 className="text-dark mb-1 font-weight-light text-uppercase">
                    Our Services
                  </h3>
                  <div className="title-border-simple position-relative"></div>
                </div>
              </div>
              {/* <!-- col end --> */}
            </div>
            {/* <!-- row end --> */}

            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="service-box rounded mt-4 p-4">
                  <div className="service-icon mb-3">
                    <i className="mdi mdi-database"></i>
                  </div>
                  <div className="services-desc">
                    <div className="service-title mb-2 position-relative">
                      <h5 className="font-weight-normal mb-3">
                        <a href="/" className="text-dark">
                          Real-Time Tracking
                        </a>
                      </h5>
                    </div>
                    <p className="text-muted mb-3 f-14">
                      All instructors will have the ability to check on their students progress.
                      Students will be able to track their project status, from creation to validation.
                    </p>
                  </div>
                </div>
              </div>
              {/* <!-- col end --> */}

              <div className="col-lg-4 col-md-6">
                <div className="service-box rounded mt-4 p-4">
                  <div className="service-icon mb-3">
                    <i className="mdi mdi-palette"></i>
                  </div>
                  <div className="services-desc">
                    <div className="service-title mb-2 position-relative">
                      <h5 className="font-weight-normal mb-3">
                        <a href="/" className="text-dark">
                          Multi-user platform
                        </a>
                      </h5>
                    </div>
                    <p className="text-muted mb-3 f-14">
                      We provide you with a single platform for fully efficient project tracking system by different entities.
                    </p>
                  </div>
                </div>
              </div>
              {/* <!-- col end --> */}

              <div className="col-lg-4 col-md-6">
                <div className="service-box rounded mt-4 p-4">
                  <div className="service-icon mb-3">
                    <i className="mdi mdi-finance"></i>
                  </div>
                  <div className="services-desc">
                    <div className="service-title mb-2 position-relative">
                      <h5 className="font-weight-normal mb-3">
                        <a href="/" className="text-dark">
                          God Eye
                        </a>
                      </h5>
                    </div>
                    <p className="text-muted mb-3 f-14">
                      As for our administrator, you have full control over your organization's platform. You have the ability to manage your users efficiently.
                    </p>
                  </div>
                </div>
              </div>
              {/* <!-- col end --> */}

            </div>
            {/* <!-- row end --> */}
          </div>
          {/* <!-- container end --> */}
        </section>
        {/* <!-- SERVICE END --> */}
        <hr />
        {/* <!-- FOOTER START --> */}
        <section className="footer-bg" style={{ backgroundColor: "black" }}>
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <div className="mb-5">
                  <p
                    className="text-uppercase footer-title mb-4"
                    style={{ color: "white" }}
                  >
                    About Us
                  </p>
                  <p className="text-muted f-14">
                    Get quick and easy access to track your Projects. Also for
                    Instructors who need to keep up with their students and
                    their progress on their work
                  </p>
                  <a href="http://localhost:3000/adminlogin" type="button" class="btn btn-outline-dark">Admin Access</a>
                </div>

                {/* <!-- row end --> */}
              </div>
              {/* <!-- col end --> */}
            </div>
            {/* <!-- row end --> */}
          </div>
          {/* <!-- container end --> */}
        </section>
        {/* <!-- FOOTER END --> */}
      </div>
    );
  }
}

export default LandingPage;
