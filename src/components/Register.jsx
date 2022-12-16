import {
  faInfoCircle,
  faCheck,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { useRef, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import axios from "../api/axios";

const USER_REGEX = /[a-zA-Z0-9]{3,20}/;
const PWD_REGEX = /([a-zA-Z0-9]){8,24}/;
const REGISTER_URL = "/api/authentication";

const Register = () => {
  const userRef = useRef();
  const errRef = useRef();

  const [UserName, setUser] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [Password, setPwd] = useState("");
  const [validPwd, setvalidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setvalidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    const result = USER_REGEX.test(UserName);
    console.log(result);
    console.log(UserName);
    setValidName(result);
  }, [UserName]);

  useEffect(() => {
    const result = PWD_REGEX.test(Password);
    console.log(result);
    console.log(Password);
    setvalidPwd(result);
    const match = Password === matchPwd;
    setvalidMatch(match);
  }, [Password, matchPwd]);

  useEffect(() => {
    setErrMsg("");
  }, [UserName, Password, matchPwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let Roles = [];
    try {
      console.log(UserName, Password, Roles);
      const response = await axios.post(
        REGISTER_URL,
        JSON.stringify({ UserName, Password, Roles: ["User"] }),
        {
          headers: { "Content-Type": "application/json",
        },
          withCredentials: true,
        }
      );
      console.log(response.data);
      console.log(response.status);
      setSuccess(true);
    } catch (error) {
      if(!error?.response){
        setErrMsg('No Server Response');
      }
      else{
        setErrMsg('Registration Failed');
      }
      errRef.current.focus();
    }
  };

  return (
    <>
      {success ? (
        <div>
          <h1>Success! Thank u for registration. Please Log in</h1>
          <p>
            <NavLink to={"/login"} className="btn btn-outline-dark">
              Login
            </NavLink>
          </p>
        </div>
      ) : (
        <div
          className="d-flex flex-column
      mt-5 pt-5 ms-5 ps-5 me-5 pe-5"
        >
          <p
            ref={errRef}
            className={errMsg ? "errmsg" : "offscrean"}
            aria-live="assertive"
          >
            {errMsg}
          </p>
          <h1 className="justify-content-center lead fw-bolder">Register</h1>
          <form
            className="d-flex flex-column mt-5 pt-5 ms-5 ps-5 me-5 pe-5"
            onSubmit={handleSubmit}
          >
            <label
              htmlFor="username"
              className="form-label fw-bold mt-5 pt-5 ms-5 ps-5 me-5 pe-5"
            >
              Username:
              <span className={validName ? "valid" : "hide"}>
                <FontAwesomeIcon icon={faCheck} />
              </span>
              <span className={validName || !UserName ? "hide" : "invalid"}>
                <FontAwesomeIcon icon={faTimes} />
              </span>
            </label>
            <input
              type="text"
              id="username"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setUser(e.target.value)}
              required
              aria-invalid={validName ? "false" : "true"}
              aria-describedby="uidnote"
              onFocus={() => setUserFocus(true)}
              onBlur={() => setUserFocus(false)}
            />
            <p
              id="uidnote"
              className={
                userFocus && UserName && !validName
                  ? "form-text fw-bolder"
                  : "offscreen"
              }
            >
              <FontAwesomeIcon icon={faInfoCircle} />
              4 to 20 characters.
              <br />
              Must begin with a letter.
              <br />
              Letters, number allowed.
            </p>
            <label htmlFor="password" className="form-label fw-bold">
              Password:
              <FontAwesomeIcon
                icon={faCheck}
                className={validPwd ? "valid" : "hide"}
              />
              <FontAwesomeIcon
                icon={faTimes}
                className={validPwd || !Password ? "hide" : "invalid"}
              />
            </label>
            <input
              type="password"
              id="password"
              onChange={(e) => setPwd(e.target.value)}
              value={Password}
              required
              aria-invalid={validPwd ? "false" : "true"}
              aria-describedby="pwdnote"
              onFocus={() => setPwdFocus(true)}
              onBlur={() => setPwdFocus(false)}
            />
            <p
              id="pwdnote"
              className={
                pwdFocus && !validPwd ? "form-label fw-bolder" : "offscreen"
              }
            >
              <FontAwesomeIcon icon={faInfoCircle} />
              8 to 24 characters.
              <br />
              Must include uppercase and lowercase letters, a number and a
              special character.
              <br />
              Allowed special characters:{" "}
              <span aria-label="exclamation mark">!</span>{" "}
              <span aria-label="at symbol">@</span>{" "}
              <span aria-label="hashtag">#</span>{" "}
              <span aria-label="dollar sign">$</span>{" "}
              <span aria-label="percent">%</span>
            </p>
            <label htmlFor="confirm_pwd" className="form-text fw-bold">
              Confirm Password:
              <FontAwesomeIcon
                icon={faCheck}
                className={validMatch && matchPwd ? "valid" : "hide"}
              />
              <FontAwesomeIcon
                icon={faTimes}
                className={validMatch || !matchPwd ? "hide" : "invalid"}
              />
            </label>
            <input
              type="password"
              id="confirm_pwd"
              onChange={(e) => setMatchPwd(e.target.value)}
              value={matchPwd}
              required
              aria-invalid={validMatch ? "false" : "true"}
              aria-describedby="confirmnote"
              onFocus={() => setMatchFocus(true)}
              onBlur={() => setMatchFocus(false)}
            />
            <p
              id="confirmnote"
              className={matchFocus && !validMatch ? "form-text" : "offscreen"}
            >
              <FontAwesomeIcon icon={faInfoCircle} />
              Must match the first password input field.
            </p>

            <button
              className="btn btn-outline-dark"
              disabled={!validName || !validPwd || !validMatch ? true : false}
            >
              Sign Up
            </button>
          </form>
          <p>
            Already registered?
            <br />
            <NavLink to="/login" className="btn btn-outline-dark">
              Sign In
            </NavLink>
          </p>
        </div>
      )}
    </>
  );
};

export default Register;
