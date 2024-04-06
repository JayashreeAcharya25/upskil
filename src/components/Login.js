import React from "react";
import google_icon from '../assets/images/google-icon.png'
import mail_icon from '../assets/images/mail-icon.png'
import "../core_ui/Login.css";

export default function Login({ toggleModal }) {
  return (
    <>
      <div className="modal" tabIndex="-1" style={{ display: "block" }}>
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body p-4">
              <div className="modal-body-header d-flex justify-content-between">
                <h5 className="modal-title">Log in to Upskil</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={toggleModal}
                ></button>
              </div>

              <div className="modal-body-content mt-4">
                <div className="modal-buttons  d-flex flex-column gap-2">
                  <a className="d-flex justify-content-center align-items-center gap-2" href="/"> <img className="img-fluid" src={google_icon} alt="google"/>  Continue with Google</a>
                  <a className="d-flex justify-content-center align-items-center gap-2" href="/"> <img className="img-fluid" src={mail_icon} alt="google"/> Continue with email</a>
                </div>
              </div>
              <div className="modal-body-footer mt-4">
                <p>Don't have an account? <a href="/">Sign up</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
