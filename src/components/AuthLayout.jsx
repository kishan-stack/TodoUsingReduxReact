import React ,{useState,useEffect} from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


export default function Protected({children,authentication = true}) {

    const navigate = useNavigate()
    const authStatus = useSelector((state)=>state.auth.status)
    const [loader, setLoader] = useState(true)

    useEffect(() => {
      
    if (authentication && authStatus!==authentication) {
        navigate("/login")
    } else if(!authentication && authStatus!==authentication) {
        navigate("/")

    }
    setLoader(false)
      
    }, [authentication,navigate,authStatus])
    

  return loader? <h1>loading...</h1>:<>{children}</> 
}
