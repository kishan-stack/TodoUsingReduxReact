// import "./App.css"
import { useDispatch } from "react-redux"
import { useEffect,useState } from "react"
import authService from "./appwrite/auth"
import { login,logout } from "./store/authSlice"
import {Footer, Header} from "./components"
import { Outlet } from "react-router-dom"
function App() {

  const [loading,setLoading] = useState(false)
  const dispatch = useDispatch()
  
  
  useEffect(()=>{

    authService.getCurrentUser()
    .then((userData) => {
      if (userData) {
        
        dispatch(login({userData}))
      } else {
        dispatch(logout())
        
      }
    })
    .catch((error)=>console.log("appwrite service error :: getCurrentUser :: error ",error))
    .finally(()=>setLoading(false))
  

  },[])
  
  if (loading===true) return <>loading</>
  

  return (
  <>
    <div className="min-h-screen min-w-full flex flex-wrap content-between bg-gray-500">
      <div className="w-full block">
        <Header/>
        <main>
          TODO : <Outlet/>
        </main>
        <Footer/>
      </div>
    </div>
    
  </>      
  )
}

export default App
