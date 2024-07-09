import React, { useEffect ,useState} from 'react'
import { PostCard,Container } from '../components'
import service from '../appwrite/configuration'


function AllPosts() {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    service.getAllPost([]).then((posts)=> {
      if(posts){ 
        setPosts(posts.documents)
      }
    })
  }, [])
   
  

  
  return (
    <div className='py-8'>
      <Container>
        <div className='flex flex-wrap'>
          {
            posts.length===0 ? <h1 className='text-4xl font-bold'>No post found</h1> :
            
            posts.map((post)=>(
            
            <div key={post.$id} className='p-2 w-1/4'>
                <PostCard {...post}/>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

export default AllPosts