import React , {useEffect, useState} from "react"
import './App.css';
import Video from './Video';
import axios from "./axios";
// import axios from "axios";

function App() {
  const [post,setPost]=useState([])

  useEffect(()=>{
    async function fetchPosts(){
      const response = await axios.get("/v1/posts");
      setPost(response.data)
      return response;
    }
    fetchPosts()
  },[])
  console.log(post[0].song)
  return (
    <div className="app">
     <h1>Hello</h1>
     <div className='app_video'>
      {post.map(({url,channel,description,song,likes,messages,shares})=>(
       <Video 
        url={url}
        channel={channel}
        description={description} 
        song={song} git merge
        likes={likes} 
        messages={messages} 
        shares={shares} 
        />
      ))}
     {/* <Video 
      url={'https://player.vimeo.com/progressive_redirect/playback/726954265/rendition/540p/file.mp4?loc=external&oauth2_token_id=57447761&signature=54315f877d35ca28db86c7a51cf5da74e5fdd6a81bc9f7f6af3aaae3df929e45'}
      channel={'abx'}
      description={'new video'} 
      song={"turn down for what"} 
      likes={120} 
      messages={191} 
      shares={19} 
      />
     <Video 
        url={'https://player.vimeo.com/external/538575846.sd.mp4?s=fc18ae76e49d676775f6628d82215fab04d41d04&profile_id=165&oauth2_token_id=57447761'}
        channel={'xyz'}
        description={'hey guys video'} 
        song={"hunter"} 
        likes={1110} 
        messages={19} 
        shares={9} 
        
        /> */}
     </div>
   

     {/* <app continer>*/}
     {/* <video> */}
    </div>
  );
}

export default App;
