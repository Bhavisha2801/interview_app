import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './user.css'

const SignIn = () => {

    const navigate = useNavigate()

    const [userData, setUserData] = useState({
        email: "",
        password : ""
      })

    const [signInData, setSignInData] = useState([])

    const handleChange = (e) => {
        const {name, value} = e.target

        setUserData({
            ...userData,
            [name] : value
        })

    }

    

    const handleClick = (e) => {
        // e.preventDefalut()

        const signUp = JSON.parse(localStorage.getItem("Data"))
        console.log(signUp)
        // console.log(signUp, signUp.email , signUp.password, userData.email, userData.password)

        if(signUp === null){
          // console.log('yes')
          alert("You don't have an account yet, please signup first")
          navigate('/signUp')
        }
        else if(signUp.email === userData.email && signUp.password === userData.password){
          localStorage.setItem("loginData", JSON.stringify(userData))
          navigate('/')
        }
        else{
            alert('Please enter correct Email or Password')
        }

        setSignInData(prev => [...prev, userData])
    }


    // console.log(signInData)

  return (
    <div className='SignIn'>
      <header>
        <h1>Sign In</h1>
        <p>Create new account? <Link to='/signUp' >signUp</Link> </p>
      </header>
      <br />
      <div className='SignUp-form'>
        <input type="email" onChange={handleChange} placeholder='Enter Email' value={userData.email} name='email' />
        <input type="password" onChange={handleChange} placeholder='Enter Password' value={userData.password} name='password' />
        <button className='SignUp-btn' onClick={handleClick} >Sign In</button>
      </div>
    </div>
  )
}

export default SignIn
