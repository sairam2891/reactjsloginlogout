import React , { useState, useRef }from "react";
import { Navigate  } from 'react-router-dom';

import { useDispatch, useSelector } from "react-redux";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";


import { login } from "../actions/auth";

const required = (value) => {
    if (!value) {
      return (
        <div className="alert alert-danger" role="alert">
          This field is required!
        </div>
      );
    }
  };

  

function Login() {
  //let navigate = useNavigate();
  const form = useRef();
  const checkBtn = useRef();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const { isLoggedIn } = useSelector(state => state.auth);
  const { message } = useSelector(state => state.message);

  const dispatch = useDispatch();

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    setLoading(true);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      dispatch(login(username, password))
        .then(() => {
          //navigate("/profile");
          //window.location.reload();
        })
        .catch(() => {
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  };


  if (isLoggedIn) {
    return <Navigate to="/profile" />;
  }
  return ( 
    <div className="container" id="container">
        <div className="row justify-content-md-center" id="containerone">
            <Form className="col-lg-4"  onSubmit={handleLogin} ref={form} >
                    <div className="form-group">
                        <label htmlFor="Email address">Email address</label>
                        <Input type="text"
                                className="form-control"
                                name="username"
                                value={username}
                                onChange={onChangeUsername}
                                validations={[required]}/>
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="Password" >Password</label>
                        <Input type="password"
                                className="form-control"
                                name="password"
                                value={password}
                                onChange={onChangePassword}
                                validations={[required]}/>
                    </div>
                    <div className="row mb-4 mt-4">
                    <div className="col d-flex justify-content-center">
                    <div className="form-check">
                        {/* <Input className="form-check-input" type="checkbox" value="" id="form2Example31" checked /> */}
                        <CheckButton style={{ display: "none" }} ref={checkBtn} />
                        <label className="form-check-label" htmlFor="form2Example31"> Remember me </label>
                    </div>
                    </div>

                    <div className="col">
                    <a href="#!">Forgot password?</a>
                    </div>
                    </div>
                    <button className="btn btn-primary btn-block" disabled={loading}>
                      {loading && (
                        <span className="spinner-border spinner-border-sm"></span>
                      )}
                      <span>Login</span>
                    </button>
                    {message && (
                      <div className="form-group">
                        <div className="alert alert-danger" role="alert">
                          {message}
                        </div>
                      </div>
                    )}
            </Form>
        </div>
    </div>
  );
}

export default Login;