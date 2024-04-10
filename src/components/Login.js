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
                <div className="modal-buttons  d-flex flex-column gap-3">
                  <a className="d-flex justify-content-center align-items-center gap-2" href="https://accounts.google.com/o/oauth2/auth/oauthchooseaccount?redirect_uri=https%3A%2F%2Fauthenticate.ongraphy.com%2Ft%2Fpublic%2Fgoogle%2Fredirect&response_type=code%20id_token&scope=email%20profile%20openid&openid.realm&include_granted_scopes=true&client_id=771122676243-cb11avd40vp8p9mblpks64a2efll2jou.apps.googleusercontent.com&ss_domain=https%3A%2F%2Fauthenticate.ongraphy.com&fetch_basic_profile=true&gsiwebsdk=2&flowName=GeneralOAuthFlow&prompt=select_account&state=https%3A%2F%2Fcourses.upskil.work%7C%7C%7B%22source%22%3A%22digitalProductStore%22%2C%22platform%22%3A%22web%22%2C%22sourceId%22%3A%22%22%7D%7C%7Cnull%7C%7Cnull%7C%7Cnull&service=lso&o2v=1&theme=mn&ddm=0"> <img className="img-fluid" src={google_icon} alt="google"/>  Continue with Google</a>
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
