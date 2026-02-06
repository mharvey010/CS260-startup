import React from 'react';

export function Login() {
  return (
    <main className="container-fluid text-center">
      <h1>Ready to React?</h1>
      <div>
        <form method="get" action="play.html">

          <div className="row g-3 align-items-center">
            <div className="col-auto">
              <label for="email" className="col-form-label">Email</label>
            </div>
            <div className="col-auto">
              <input type="email" id="email" className="form-control" placeholder="name@example.com"/>
            </div>
          </div>

          <div className="row g-3 align-items-center">
            <div className="col-auto">
              <label for="password" className="col-form-label">Password</label>
            </div>
            <div className="col-auto">
              <input type="password" id="password" className="form-control" placeholder="password"/>
            </div>
          </div>

          <button type="submit" id="login-btn" className="btn btn-primary btn-sm">Login</button>
          <button type="submit" id="create-btn" className="btn btn-secondary btn-sm">Create</button>
        </form>
      </div>
    </main>
  );
}