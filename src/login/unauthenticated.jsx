import React from 'react';

import { MessageDialog } from './messageDialog';

export function Unauthenticated(props) {
  const [userName, setUserName] = React.useState(props.userName);
  const [password, setPassword] = React.useState('');
  const [displayError, setDisplayError] = React.useState(null);

  async function loginUser() {
    loginOrCreate(`/api/auth/login`);
  }

  async function createUser() {
    loginOrCreate(`/api/auth/create`);
  }

  async function loginOrCreate(endpoint) {
    const response = await fetch(endpoint, {
      method: 'post',
      body: JSON.stringify({ email: userName, password: password }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    if (response?.status === 200) {
      localStorage.setItem('userName', userName);
      props.onLogin(userName);
    } else {
      const body = await response.json();
      setDisplayError(`⚠ Error: ${body.msg}`);
    }
  }

  return (
    <>
      <div>
        <div className="row g-3 align-items-center">
          <div className="col-auto">
            <label htmlFor="email" className="col-form-label">Email</label>
          </div>
          <div className="col-auto">
            <input type="email" id="email" className="form-control" value={userName} onChange={(e) => setUserName(e.target.value)} placeholder="name@example.com"/>
          </div>
        </div>

        <div className="row g-3 align-items-center">
          <div className="col-auto">
            <label htmlFor="password" className="col-form-label">Password</label>
          </div>
          <div className="col-auto">
            <input type="password" id="password" className="form-control" onChange={(e) => setPassword(e.target.value)} placeholder="password"/>
          </div>
        </div>

        <button type="button" id="login-btn" className="btn btn-primary btn-sm" onClick={() => loginUser()} disabled={!userName || !password}>Login</button>
        <button type="button" id="create-btn" className="btn btn-secondary btn-sm" onClick={() => createUser()} disabled={!userName || !password}>Create</button>
      </div>

      <MessageDialog message={displayError} onHide={() => setDisplayError(null)} />
    </>
  );
}