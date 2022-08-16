import React from "react";
// import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const defaultState = {
  name: null,
  phone:null,
  email: null,
  password: null,
  nameError: null,
  emailError: null,
  passwordError: null,
};
class Register extends React.Component {
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
  let emailError = "";
  let passwordError = "";
  if (!this.state.name) {
    nameError = "Name field is required";
  }
  const reg = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  if (!this.state.email || reg.test(this.state.email) === false) {
    emailError = "Email Field is Invalid ";
  }
  if (!this.state.password) {
    passwordError = "Password field is required";
  }
  if (emailError || nameError || passwordError) {
    this.setState({ emailError,nameError, passwordError });
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
          <div class="row ">
            <div class="left col-md-8 col-lg-6">
              <div class="bg-image-2"></div>
              <div class="d-flex align-items-center ">
                <div class="container reg-container">
                  <div class="row">
                    <div class="col-md-9 col-lg-8 mx-auto">
                      <h3 class="register-heading mb-4">
                        Very Easy Very Professional!
                      </h3>

                      <form>
                        <div class="form-check mb-3">
                        <label for="name">Enter your name :</label>
                          <input
                            type="text"
                            className={
                              "form-control " +
                              (this.state.nameError ? "invalid" : "")
                            }
                            id="name"
                            name="name"
                            placeholder="Name"
                          />
                          
                        </div>
                        <div class="form-check mb-3">
                        <label for="Surname">Enter your surname :</label>
                          <input
                            type="text"
                            className={"form-control "}
                            
                            id="surname"
                            name="surname"
                            placeholder="Surname"
                          />
                          
                        </div>

                        <div class="form-check mb-3">
                        <label for="floatingPassword">
                            Enter your password :
                          </label>
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
                          
                          <span className="text-danger">
                            {this.state.passwordError}
                          </span>
                        </div>

                        <div class="form-check mb-3">
                        <label for="floatingInput">
                            Enter your phone number :
                          </label>
                          <PhoneInput
                            country={"tr"}
                            name="phone"
                            value={this.state.phone}
                            onChange={(phone) => this.setState({ phone })}
                          />
                          
                        </div>
                        <div class="form-check mb-3">
                        <label for="floatingInput">Enter your email :</label>
                          <input
                            type="email"
                            className={
                              "form-control " +
                              (this.state.emailError ? "invalid" : "")
                            }
                            id="floatingInput"
                            name="email"
                            placeholder="name@example.com"
                            value={this.state.email}
                            onChange={this.handleInputChange}
                          />
                          
                          <span className="text-danger">
                            {this.state.emailError}
                          </span>
                        </div>

                        <button
                          class="btn btn-primary btn-reg fw-bold mb-2 col-4"
                          type="button"
                          onClick={() => this.submit()}
                        >
                          Next
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class=" d-md-flex col-md-4 col-lg-6 bg-image"></div>
          </div>
        </div>
      </div>
    );
  }
}
export default Register;
