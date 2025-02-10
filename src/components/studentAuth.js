import { useState } from "react";
import "./stu_style.css"; 

const StudentAuth = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={`container ${isActive ? "active" : ""}`}>
      {/* Login Section */}
      <div className="form-container login-box">
        <form>
          <h1>LOGIN</h1>
          <div className="input-box">
            <input type="text" placeholder="Username" required />
            <i className="bx bx-user"></i>
          </div>
          <div className="input-box">
            <input type="password" placeholder="Password" required />
            <i className="bx bx-lock-alt"></i>
          </div>
          <div className="forgot-password">
            <a href="#">Forgot Password?</a>
          </div>
          <button type="submit" className="btn">
            Login
          </button>
          <p>Login with Google</p>
          <div className="social-icons">
            <a href="#">
              <i className="bx bxl-google"></i>
            </a>
          </div>
        </form>
      </div>

      {/* Register Section */}
      <div className="form-container register-box">
        <form>
          <h1>Registration</h1>
          <div className="input-box">
            <input type="text" placeholder="Name" required />
            <i className="bx bxs-rename"></i>
          </div>
          <div className="input-box">
            <input type="email" placeholder="Email" required />
            <i className="bx bx-envelope"></i>
          </div>
          <div className="input-box">
            <input type="text" placeholder="Username" required />
            <i className="bx bx-user"></i>
          </div>
          <div className="input-box">
            <input type="password" placeholder="Password" required />
            <i className="bx bx-lock-alt"></i>
          </div>
          <button type="submit" className="btn">
            Register
          </button>
          <p>Or Register with Google</p>
          <div className="social-icons">
            <a href="#">
              <i className="bx bxl-google"></i>
            </a>
          </div>
        </form>
      </div>

      {/* Toggle Section */}
      <div className="toggle-box-stu">
        <div className="toggle-panel-stu toggle-left">
          <h1>Namaste, Welcome!</h1>
          <p>Don't have an account?</p>
          <button className="btn register-btn" onClick={() => setIsActive(true)}>
            REGISTER
          </button>
        </div>
        <div className="toggle-panel toggle-right">
          <h1>Welcome Back</h1>
          <p>Already have an account?</p>
          <button className="btn login-btn" onClick={() => setIsActive(false)}>
            LOGIN
          </button>
        </div>
      </div>
    </div>
  );
};

export default StudentAuth;
