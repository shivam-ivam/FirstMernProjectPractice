import React, {useState} from "react";

export default function Signup() {
  const [user, setUser] = useState({
    name:"",
    studentId:"",
    password:""
  });

  const handleChange = (e) =>{
    // console.log(e.target.value)
    const name = e.target.name;
    const value = e.target.value;
    setUser({...user, [name]:value})
  }
  return (
    <form className="row g-3">
      <div className="col-md-6">
        <label for="name" className="form-label">
          Name
        </label>
        <input type="text" className="form-control" value={user.name} name="name" onChange={handleChange} id="name" />
      </div>

      <div className="col-md-2">
        <label for="StudentId" className="form-label">
          Student Id
        </label>
        <input type="number" className="form-control" value={user.studentId} name="studentId" onChange={handleChange} id="StudentId" />
      </div>
      <div className="col-md-6">
        <label for="inputPassword4" className="form-label">
          Password
        </label>
        <input type="password" className="form-control" value={user.password} name="password" onChange={handleChange} id="inputPassword4" />
      </div>
      <div className="col-12">
        <button type="submit" className="btn btn-primary">
          Sign up
        </button>
      </div>
    </form>
  );
}
