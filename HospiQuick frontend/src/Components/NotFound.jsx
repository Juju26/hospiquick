import React from "react";
import notfound from "./Css/notfoundimg.svg";

export default function NotFound() {
    return (
    <>
        <div id="layoutError">
            <div id="layoutError_content">
                <main>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-6">
                                <div className="text-center mt-4">
                                    <img className="mb-4 img-error" src={notfound} alt="not found" />
                                    <p className="lead">This requested URL was not found on this server.</p>
                                    <a href="/">
                                        <i className="fas fa-arrow-left me-1"></i>
                                        Return to Dashboard
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
            
        </div>
    </>
    )
  }