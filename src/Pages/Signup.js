import React,{useState} from 'react'
import {BrowserRouter as Router ,Route,Link,Switch} from 'react-router-dom'
import Login from './Login'
import Logo from '../images/logoHr.jpg'

function Signup() {
    const [name, setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] =useState("");

    const handleChengeUserName=(e)=>{
        setName(e.target.value);
    }
    const handleChengeEmail=(e)=>{
        setEmail(e.target.value);
    }
    const handleChengePassword=(e)=>{
        setPassword(e.target.value);
    }

    return (
     <div className="flex items-center h-screen w-full bg-gray-300">
        <div className="w-full bg-white rounded shadow-lg p-8 m-4 md:max-w-sm md:mx-auto">
            <img className="w-20 h-20" src={Logo} alt="Logo"/>
            <h1  className="block w-full uppercase font-bold text-center underline text-2xl text-grey-darkest mb-6">Sign Up</h1>
            
            <form action="http://localhost:4000/user/signup" method="post" className="mb-4 md:flex md:flex-wrap md:justify-between" >
                <div className="flex flex-col mb-4 md:w-full">
                    <label className="mb-2 uppercase tracking-wide text-grey-darkest" htmlFor="userName">User Name</label>
                    <input className="border py-2 px-3 text-grey-darkest" type="text" name="userName" value={name} onChange={handleChengeUserName} />
                </div>

                <div className="flex flex-col mb-4 md:w-full">
                    <label className="mb-2 uppercase text-grey-darkest" htmlFor="userEmail">Email</label>
                    <input className="border py-2 px-3 text-grey-darkest" type="email" name="userEmail"  value={email} onChange={handleChengeEmail} />
                </div>

                <div className="flex flex-col mb-6 md:w-full">
                    <label className="mb-2 uppercase text-grey-darkest" htmlFor="userPassword">Password</label>
                    <input className="border py-2 px-3 text-grey-darkest" type="password" name="userPassword" value={password} onChange={handleChengePassword} />
                </div>
                <button className="block border border-blue-300 bg-teal hover:bg-teal-dark text-black uppercase text-lg mx-auto py-2 px-4  rounded" type="submit">Create Account</button>
            </form>
           
           <Router>
                <Link to="/login" className=" block w-full text-center no-underline text-sm text-grey-dark hover:text-grey-darker">Already have an account? </Link>
                <Switch>
                    <Route path="/login" component={Login}></Route>
                </Switch>
            </Router>
        
        </div>
     </div>
    )
}

export default Signup;
