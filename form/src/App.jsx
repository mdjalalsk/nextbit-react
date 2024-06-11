import { useState } from "react";

function App() {
  const [user, setUser] = useState({});
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(e);
    const form = e.target;

    const name = form.name.value;
    // console.log(name);
    const email = form.email.value;
    const phone = form.phone.value;
    const password = form.password.value;
    const userObject = {
      name: name,
      email: email,
      phone: phone,
      password: password,
    };
    setUser(userObject);
    // console.log(userObject);
     // Reset the form fields
  form.reset();
  };
  return (
    <>
      <div className="container mx-auto">
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Login now!</h1>
              <div className="my-5 p-5">
                <ul>
                  <li>{user.name}</li>
                  <li>{user.email}</li>
                  <li>{user.phone}</li>
                  <li>{user.password}</li>
                </ul>
              </div>
            </div>
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <form className="card-body" onSubmit={handleSubmit}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="name"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Phone</span>
                  </label>
                  <input
                    type="text"
                    name="phone"
                    placeholder="phone"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    name="password"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Login</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
