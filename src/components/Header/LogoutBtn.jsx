import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth'
import { logout } from '../../store/authSlice'

function LogoutBtn() {
  const dispatch = useDispatch()

  const logoutHandler = () =>{
    authService.logoutAccount()
    .then(()=>{
      dispatch(logout())
    }    )
    .catch((error)=>{
      console.log("Appwrite service error :: logoutHandler :: error ",error)
    })
    
  }

  return   (
    <button className='inline-bock px-6 py-2 duration-200
     hover:bg-blue-100 rounded-full' onClick={logoutHandler}>Logout</button>
  )
}


export default LogoutBtn