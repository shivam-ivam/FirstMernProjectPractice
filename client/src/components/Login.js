import React from 'react'

export default function Login() {
  return (
    <form className="row g-3">
    <div className="col-md-2">
      <label for="StudentId" className="form-label">
        Student Id
      </label>
      <input type="number" className="form-control" id="StudentId" />
    </div>
    <div className="col-md-6">
      <label for="inputPassword4" className="form-label">
        Password
      </label>
      <input type="password" className="form-control" id="inputPassword4" />
    </div>
    <div className="col-12">
      <button type="submit" className="btn btn-primary">
        Sign in
      </button>
    </div>
  </form>
  )
}
