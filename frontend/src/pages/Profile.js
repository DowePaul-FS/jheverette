import React from "react";
import { useDispatch } from "react-redux";
import { authActions } from "../store";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import AuthBar from "../components/UI/AuthBar";
import classes from "./Profile.module.css";
import logo from "../assets/images/Profile_logo_625.png";

const Profile = () => {
    const isAuth = useSelector((state) => state.isAuthenticated);
    const dispatch = useDispatch();
    const logOutHandler = (event) => {
        event.preventDefault();
        dispatch(authActions.logout());
    };

    return (
        <main>
            <div className={classes.background}>
                {isAuth ? (
                    <AuthBar signOut={logOutHandler} />
                ) : (
                    <Navigate to="/" replace={true} />
                )}
            </div>
            <section className={classes.background}>
                <div className={["container py-5"]}>
                    <div className="row">
                        <div className="col">
                            <nav
                                aria-label="breadcrumb"
                                className={`${["bg-light"]} ${["rounded-3"]} ${["p-3"]} ${[
                                    "mb-4",
                                ]}`}
                            >
                                <ol className={`${["breadcrumb"]} ${["mb-0"]}`}>
                                    <li className={["breadcrumb-item"]}>
                                        <a href="home">Profile</a>
                                    </li>
                                    <li className={["breadcrumb-item"]}>
                                        <a href="user">User</a>
                                    </li>
                                    {/* <li className={`{["breadcrumb-item"]} ${["active"]}`} aria-current="page">User Profile</li> */}
                                </ol>
                            </nav>
                        </div>
                    </div>

                    <div className="row">
                        <div className={["col-lg-5"]}>
                            <div
                                className={`${["card"]} ${["mb-4"]} ${classes["background"]}`}
                            >
                                <div className={`${["card-body"]} ${["text-center"]}`}>
                                    <img
                                        src={logo}
                                        alt="avatar"
                                        className={`${["img-fluid"]}`}
                                        style={{ width: "375px" }}
                                    />
                                    <h5 className={`{["my-3"]} ${classes["text"]}`}>
                                        Paul Dowe Jr
                                    </h5>
                                    <p className={`${["mb-1"]} ${classes["text"]}`}>
                                        Full Stack Developer
                                    </p>
                                    <p className={`${["mb-4"]} ${classes["text"]}`}>
                                        (910) 269 - 0523
                                    </p>
                                    <p className={`${["mb-4"]} ${classes["text"]}`}>
                                        pauldowejr@jheverette.com
                                    </p>
                                    <div
                                        className={`${["d-flex"]} ${["justify-content-center"]} ${[
                                            "mb-2",
                                        ]}`}
                                    ></div>
                                </div>
                            </div>
                        </div>
                        <div className={["col-lg-7"]}>
                            <div className={`${["card"]} ${["mb-4"]}`}>
                                <div className={["card-body"]}>
                                    <div className={["row"]}>
                                        <div className={["col-sm-3"]}>
                                            <p className={["mb-0"]}>Full Name</p>
                                        </div>
                                        <div className={["col-sm-9"]}>
                                            <p className={`${["text-muted"]} ${["mb-0"]}`}>
                                                Johnatan Smith
                                            </p>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className={["col-sm-3"]}>
                                            <p className={["mb-0"]}>Email</p>
                                        </div>
                                        <div className={["col-sm-9"]}>
                                            <p className={`${["text-muted"]} ${["mb-0"]}`}>
                                                example@example.com
                                            </p>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className={["col-sm-3"]}>
                                            <p className={["mb-0"]}>Phone</p>
                                        </div>
                                        <div className={["col-sm-9"]}>
                                            <p className={`${["text-muted"]} ${["mb-0"]}`}>
                                                (097) 234-5678
                                            </p>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className={["col-sm-3"]}>
                                            <p className={["mb-0"]}>Mobile</p>
                                        </div>
                                        <div className={["col-sm-9"]}>
                                            <p className={`${["text-muted"]} ${["mb-0"]}`}>
                                                (098) 765-4321
                                            </p>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className={["col-sm-3"]}>
                                            <p className={["mb-0"]}>Address</p>
                                        </div>
                                        <div className={["col-sm-9"]}>
                                            <p className={`${["text-muted"]} ${["mb-0"]}`}>
                                                Bay Area, San Francisco, CA
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className={["col-lg-6"]}>
                            <div className={`
                            ${["card"]} 
                            ${["mb-4"]} 
                            ${["mb-lg-0"]}`}>
                                <div className={`
                                ${["card-body"]} 
                                ${["p-0"]}`}>
                                    <ul
                                        className={`
                                        ${["list-group"]} 
                                        ${["list-group-flush"]} 
                                        ${[
                                                "rounded-3",
                                            ]}`}
                                    >
                                        <li
                                            className={`
                                            ${["list-group-item"]} 
                                            ${["d-flex"]} 
                                            ${[
                                                    "justify-content-left",
                                                ]} 
                                            ${["align-items-center"]} 
                                            ${["p-3"]}`}
                                        >
                                            <i
                                                className={`
                                                ${["fas"]} 
                                                ${["fa-globe"]} 
                                                ${["fa-lg"]} 
                                                ${[
                                                        "text-warning",
                                                    ]}`}
                                            >
                                            </i>
                                            <p className={`
                                            ${["mb-0"]} 
                                            ${["text-primary"]}`}>
                                                Your Files
                                            </p>
                                        </li>
                                        <li
                                            className={`
                                            ${["list-group-item"]} 
                                            ${["d-flex"]} 
                                            ${[
                                                    "justify-content-between",
                                                ]} 
                                            ${["align-items-center"]} 
                                            ${["p-3"]}`}
                                        >
                                            <p className={["mb-0"]}>
                                                <span style={{ color: "#0E1C36" }}
                                                >No File
                                                </span>
                                            </p>
                                        </li>
                                        <li
                                            className={`
                                            ${["list-group-item"]} 
                                            ${["d-flex"]} 
                                            ${[
                                                    "justify-content-between",
                                                ]} 
                                            ${["align-items-center"]} 
                                            ${["p-3"]}`}
                                        >
                                            <p className={["mb-0"]}>
                                                <span style={{ color: "#0E1C36" }}>
                                                    No File
                                                </span>
                                            </p>
                                        </li>
                                        <li
                                            className={`
                                            ${["list-group-item"]} 
                                            ${["d-flex"]} 
                                            ${[
                                                    "justify-content-between",
                                                ]} 
                                            ${["align-items-center"]} 
                                            ${["p-3"]}`}
                                        >
                                            <p className={["mb-0"]}>
                                                <span style={{ color: "#0E1C36" }}>
                                                    No File
                                                </span>
                                            </p>
                                        </li>
                                        <li
                                            className={`
                                            ${["list-group-item"]} 
                                            ${["d-flex"]} 
                                            ${[
                                                    "justify-content-between",
                                                ]} 
                                            ${["align-items-center"]} 
                                            ${["p-3"]}`}
                                        >
                                            <p className={["mb-0"]}>
                                                <span style={{ color: "#0E1C36" }}>
                                                    No File
                                                </span>
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className={["col-md-6"]}>
                            <div className={`${["card"]} ${["mb-4"]} ${["mb-md-0"]}`}>
                                <div className={["card-body"]}>
                                    <p
                                        className={`${["mb-4"]} ${["text-primary"]} ${[
                                            "font-italic",
                                        ]} ${["me-1"]}`}
                                    >
                                        {" "}
                                        Project Status
                                    </p>
                                    <p
                                        className={`${["mb-1"]} ${["text-secondary"]}`}
                                        style={{ fontSize: "1.5rem" }}
                                    >
                                        <span style={{ color: "#0E1C36" }}>Sketch Drawings</span>
                                    </p>
                                    <div
                                        className={`${["progress"]} ${["rounded"]}`}
                                        style={{ height: "5px" }}
                                    >
                                        <div
                                            className={["progress-bar"]}
                                            role="progressbar"
                                            style={{ width: "1%" }}
                                            aria-valuenow="80"
                                            aria-valuemin="0"
                                            aria-valuemax="100"
                                        ></div>
                                    </div>
                                    <p className={`
                                    ${["mt-4"]} 
                                    ${["mb-1"]}`}
                                        style={{ fontSize: "1.5rem" }}>
                                        <span style={{ color: "#0E1C36" }}>
                                            Wireframe Components
                                        </span>
                                    </p>
                                    <div className={`
                                    ${["progress"]} 
                                    ${["rounded"]}`}
                                        style={{ height: "5px" }}>
                                        <div className={["progress-bar"]}
                                            role="progressbar"
                                            style={{ width: "1%" }}
                                            aria-valuenow="72"
                                            aria-valuemin="0"
                                            aria-valuemax="100">
                                        </div>
                                    </div>
                                    <p className={`
                                    ${["mt-4"]} 
                                    ${["mb-1"]}`}
                                        style={{ fontSize: "1.5rem" }}>
                                        <span
                                            style={{ color: "#0E1C36" }}>
                                            Mockup Prototype
                                        </span>
                                    </p>
                                    <div className={`
                                    ${["progress"]} 
                                    ${["rounded"]}`}
                                        style={{ height: "5px" }}>
                                        <div className={["progress-bar"]}
                                            role="progressbar"
                                            style={{ width: "1%" }}
                                            aria-valuenow="89"
                                            aria-valuemin="0"
                                            aria-valuemax="100">
                                        </div>
                                    </div>
                                    <p className={`
                                    ${["mt-4"]} 
                                    ${["mb-1"]}`}
                                        style={{ fontSize: "1.5rem" }}>
                                        <span style={{ color: "#0E1C36" }}>
                                            Project Development
                                        </span>
                                    </p>
                                    <div className={`
                                    ${["progress"]} 
                                    ${["rounded"]}`}
                                        style={{ height: "5px" }}>
                                        <div className={["progress-bar"]}
                                            role="progressbar"
                                            style={{ width: "1%" }}
                                            aria-valuenow="55"
                                            aria-valuemin="0"
                                            aria-valuemax="100">
                                        </div>
                                    </div>
                                    <p className={`
                                    ${["mt-4"]} 
                                    ${["mb-1"]}`}
                                        style={{ fontSize: "1.5rem" }}>
                                        <span style={{ color: "#0E1C36" }}
                                        >
                                            Useability Testing
                                        </span>
                                    </p>
                                    <div className={`
                                    ${["progress"]} 
                                    ${["rounded"]} 
                                    ${["mb-2"]}`}
                                        style={{ height: "5px" }}
                                    >
                                        <div className={["progress-bar"]}
                                            role="progressbar"
                                            style={{ width: "1%" }}
                                            aria-valuenow="66"
                                            aria-valuemin="0"
                                            aria-valuemax="100">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Profile;
