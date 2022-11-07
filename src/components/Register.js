function Register () {
    return (
      <div>
  <h1> Register </h1>
  
  <h1 className="h1-register">CREATE AN ACCOUNT</h1>
        <form>
          <label className="label1" htmlFor="name">Username: </label>
            <input id="username" name="username" className="username" type="text" placeholder="username" />
          <label className="label1" htmlFor="name">Email: </label>
            <input  id="email" name="email" className="email" type="email" placeholder="email" />
          <label className="" htmlFor="name">Password: </label>
            <input id="password" name="password" className="password" type="password" placeholder="password" />
          <input className="registerButton" type="submit" value="Register" />

        </form>
  <h1> Hey </h1>
  
      </div>
    )
  }
  
  
  
  
  
  export default Register;