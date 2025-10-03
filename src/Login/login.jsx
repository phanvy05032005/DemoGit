import React from "react";
import "./SignUp.css";              // ✅ sửa lại import
import logo from "../assets/img/1.png"; // ✅ giả sử ảnh nằm trong src/assets/1.png

export default function SignUp() {
    return (
        <div className="signup-page">
            <div className="signup-container">
                {/* Logo */}
                <img src={logo} alt="GreenTrade Logo" className="logo" />

                {/* Form Sign Up */}
                <form className="signup-form">
                    <input type="text" placeholder="Username" className="input-box" />
                    <input type="password" placeholder="Password" className="input-box" />
                    <input type="text" placeholder="Email" className="input-box" />

                    <div className="checkbox-container">
                        <input type="checkbox" id="agree" />
                        <label htmlFor="agree">
                            I agree to <span className="link"> I agree to Terms & Privacy</span>
                        </label>
                    </div>

                    <button type="submit" className="signup-btn">
                        Sign up
                    </button>
                </form>

                {/* Divider */}
                <div className="divider">
                    <span>or Sign up with</span>
                </div>

                {/* Google Sign Up */}
                <button className="google-btn">
                    <img
                        src="https://developers.google.com/identity/images/g-logo.png"
                        alt="Google"
                        className="google-icon"
                    />
                    Sign up with Google
                </button>

                {/* Link Sign In */}
                <p className="signin-text">
                    Already have an account ? <a href="#">Sign in</a>
                </p>

                {/* Footer */}
                <footer className="footer">
                    © 2025 GreenTrade. The Green Revolution
                </footer>
            </div>
        </div>
    );
}
