import React,{useState, useEffect} from 'react'
import axios from 'axios'
import './home.css'
import { useNavigate } from 'react-router-dom'

const Home = () => {

  const navigate = useNavigate()

  const [data, setData] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    axios.get('https://restcountries.com/v2/all')
    .then(res => setData(res.data))
  },[])

  const handleLogOut = () => {
    localStorage.removeItem("loginData")
    navigate('/signIn')
  }

  console.log(localStorage.getItem("loginData"))

  const condition = !localStorage.getItem("Data") && !localStorage.getItem("loginData") && localStorage.getItem("loginData") === null && localStorage.getItem("Data") === null

  console.log(condition)

  return condition ?
   navigate('/signIn') : 
   (
    <div className='Home'>
      <div className='home-top' >
        <div className='home-search'>
          <input type="text" placeholder='Search here...' onChange={(e) => setSearch(e.target.value)}  />
        </div>
        <div>
          <button className='logout-btn' onClick={handleLogOut} >LogOut</button>
        </div>
      </div>
      <table className='table-data'>
        <thead>
          <th>Name</th>
          <th>Capital</th>
          <th>Currency</th>
        </thead>
        
        <tbody>

              <tr>
                <td>
                  <hr className='horizontal-line' />
                </td>
                <td>
                  <hr className='horizontal-line' />
                </td>
                <td>
                  <hr className='horizontal-line' />
                </td>
              </tr>

          {
            data.filter((val) => {
              if(search === ""){
                return val
              }
              else if (val.name.toLowerCase().includes(search.toLowerCase())){
                return val
              }
            })
            .map((item, key) => (
              <>
              <tr key={key} >
                <td>{item.name}</td>
                <td>{item.capital}</td>
                <td>{item.currencies !== undefined ? item.currencies[0].code : ""}</td>
              </tr>
              <tr>
                <td>
                  <hr className='horizontal-line' />
                </td>
                <td>
                  <hr className='horizontal-line' />
                </td>
                <td>
                  <hr className='horizontal-line' />
                </td>
              </tr>
              </>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default Home
