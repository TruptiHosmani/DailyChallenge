import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [name, setName] = useState({ value: '', isValid: null, msg: '' })
  const [email, setEmail] = useState({ value: '', isValid: null, msg: '' })

  const [password, setPassword] = useState({ value: '', isValid: null, msg: '' })
  const [confirmPassword, setConfirmPassword] = useState({ value: '', isValid: null, msg: '' })



  const handleSubmit = () => {
    if (name.value.length >= 6 && name.value.length < 30) {
      setName({ ...name, isValid: true, msg: '' })
    } else {
      setName({ ...name, isValid: false, msg: 'Please enter valid name!' })
    }
    if (/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email.value)) {
      setEmail({ ...email, isValid: true, msg: 'Vaid Email' })
      console.log("test true")
    } else {
      console.log("test fail")

      setEmail({ ...email, isValid: false, msg: 'Invalid email!' })
    }

    if (password.value.length > 6 || confirmPassword.value.length > 6) {
      setPassword({ ...password, isValid: false, msg: 'password length must gretaer than 6' })
      setConfirmPassword({ ...confirmPassword, isValid: false, msg: 'password length must gretaer than 6' })

    }
    if (password.value.length === confirmPassword.value.length && password.value.length > 6) {
      setConfirmPassword({ ...confirmPassword, isValid: true, msg: '' })
      setPassword({ ...password, isValid: true, msg: '' })

    } else {

      setConfirmPassword({ ...confirmPassword, isValid: false, msg: 'password and confirm dont match or length should be greater than 6' })

    }

  }

  return (
    <div className="App">
      <div className="flex-grid">
        <div className="form-conatiner">
          <h3> Form Validation</h3>
          <div className="form-group">
            <label>
              Name:
            </label>
            <input
              className={`${name.isValid === true ?
                'success' : name.isValid === false ? 'error' : null}`}
              type="text" value={name.value}
              placeholder="please enter your name"
              onChange={(e) => setName({ ...name, value: e.target.value.trim() })} />
            <small className={`${name.isValid !== true ?
              'error' :
              'success'}`}>{name.msg}</small>
          </div>
          <div className="form-group"><label>
            Email:
            </label>
            <input
              type="email"
              className={`${email.isValid === true ?
                'success' : email.isValid === false ? 'error' : null}`}
              value={email.value}
              placeholder="please enter your email"
              onChange={(e) => setEmail({ ...email, value: e.target.value })} />
            <small className={`${email.isValid !== true ?
              'error' :
              'success'}`}>{email.msg}</small>
          </div>
          <div className="form-group">
            <label>
              Password:
            </label>
            <input
              type="password"
              className={`${password.isValid === true ?
                'success' : password.isValid === false ? 'error' : null}`}
              value={password.value}
              placeholder="please enter your password"
              onChange={(e) => setPassword({ ...password, value: e.target.value.trim() })} />
            <small className={`${password.isValid !== true ?
              'error' :
              'success'}`}>{password.msg}</small>
          </div>
          <div className="form-group">
            <label>
              Password Confirm:
            </label>
            <input
              type="password"
              className={`${confirmPassword.isValid === true ?
                'success' : confirmPassword.isValid === false ? 'error' : null}`}
              value={confirmPassword.value}
              placeholder="please enter your confirm password"
              onChange={(e) => setConfirmPassword({ ...confirmPassword, value: e.target.value.trim() })} />
            <small className={`${confirmPassword.isValid !== true ?
              'error' :
              'success'}`}>{confirmPassword.msg}</small>
          </div>

          <div className="form-group">
            <button onClick={handleSubmit}>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
