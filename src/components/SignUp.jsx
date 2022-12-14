import React,{useState} from 'react'
import { useNavigate, Link } from 'react-router-dom'
import './user.css'


const SignUp = () => {

    const navigate = useNavigate()

    const [userData, setUserData] = useState({
        email: "",
        firstname: "",
        lastname : "",
        password : "",
        confirmpassword : ""
      })

    const [signUpData, setSignUpData] = useState([])

    const handleChange = (e) => {
        const {name, value} = e.target

        setUserData({
            ...userData,
            [name] : value
        })

    }

    const handleClick = (e) => {
        // e.preventDefalut()

        // JSON.stringify(userData)

        setSignUpData(prev => [...prev, userData])

        localStorage.setItem("Data", JSON.stringify(userData))

        if(userData.email === "" || userData.firstname === "" || userData.lastname === "" || userData.password === "" || userData.confirmpassword === "" ){
          alert('Please fill all the fields')
        }
        else{
          navigate('/')
        }
    }



    // console.log(signUpData)

  return (
    <div className='SignUp'>
      <header>
        <h1>Create account</h1>
        <p>Already have an account? <Link to='/signIn' >signIn</Link> </p>
      </header>
      <br />
      <div className='SignUp-form'>
        <input required type="email" onChange={handleChange} placeholder='Enter Email' value={userData.email} name='email' />
        <div>
            <input required type="text" onChange={handleChange} placeholder='Enter FirstName' value={userData.firstname} name='firstname' />
            <input required type="text" onChange={handleChange} placeholder='Enter LastName' value={userData.lastname} name='lastname' />
        </div>
        <input required type="password" onChange={handleChange} placeholder='Enter Password' value={userData.password} name='password' />
        <input required type="password" onChange={handleChange} placeholder='Confirm Password' value={userData.confirmpassword} name='confirmpassword' />
        <button className='SignUp-btn' onClick={handleClick} >Sign up</button>
      </div>
    </div>
  )
}

export default SignUp
