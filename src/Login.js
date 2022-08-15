import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Link } from "react-router-dom";

const defaultState = {
  name: null,
  phone: null,
  password: null,
  nameError: null,
  passwordError: null
};

class Login extends React.Component {
  constructor() {
    super();
    this.state = defaultState;
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  handleInputChange(event) {
    const target = event.target;
    var value = target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  }
  validate() {
    let nameError = "";
    let passwordError = "";
    if (!this.state.name) {
      nameError = "Name field is required";
    }

    if (!this.state.password) {
      passwordError = "Password field is required";
    }
    if (nameError || passwordError) {
      this.setState({ nameError, passwordError });
      return false;
    }
    return true;
  }
  submit() {
    if (this.validate()) {
      console.warn(this.state);
      this.setState(defaultState);
    }
  }
  render() {
    return (
      <div className="App">
        <div class="container-fluid ps-md-0">
          <div class="row">
            <div class="left col-md-8 col-lg-6">
              <div class="bg-image-2"></div>
              <div class="login d-flex align-items-center py-5">
                <div class="container">
                  <div class="row">
                    <div class="col-md-9 col-lg-8 mx-auto">
                      <h3 class="login-heading mb-4">
                        Very Easy Very Professional!
                      </h3>
                      <h4 class="login-heading mb-4">Login to Your Account</h4>

                      <form>
                        <div class="form-floating mb-3">
                          <PhoneInput
                            country={"tr"}
                            name="phone"
                            value={this.state.phone}
                            onChange={(phone) => this.setState({ phone })}
                          />
                        </div>
                        
                        <div class="form-floating mb-3">
                          <input
                            type="password"
                            className={
                              "form-control " +
                              (this.state.passwordError ? "invalid" : "")
                            }
                            id="floatingPassword"
                            name="password"
                            placeholder="Password"
                            value={this.state.password}
                            onChange={this.handleInputChange}
                          />
                          <label for="floatingPassword">Password</label>
                          <span className="text-danger">
                            {this.state.passwordError}
                          </span>
                        </div>

                        <div class="form-check mb-3">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="rememberPasswordCheck"
                          />
                          <label
                            class="form-check-label"
                            for="rememberPasswordCheck"
                          >
                            Remember me
                          </label>
                        </div>

                        <button
                          class="btn  btn-primary btn-login-1 fw-bold mb-2 col-4"
                          type="button"
                          onClick={() => this.submit()}
                        >
                          Login
                        </button>
                        
                        <Link to="/register">
                          <button
                            class="btn btn-outline-primary btn-login-2 fw-bold mb-2 col-4"
                            type="button"
                            
                          >
                            Register
                          </button>
                        </Link>

                        <div class="text-center">
                          <a class="small" href="/">
                            Forgot password?
                          </a>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="d-none d-md-flex col-md-4 col-lg-6 bg-image"></div>
          </div>
        </div>
      </div>
    );
  }
}
export default Login;
