import React, { useEffect, useState } from 'react'

function Github() {
    const [flws, setflws] = useState(0)
    const [image, setImage] = useState("")

    useEffect(()=>{
        fetch('https://api.github.com/users/hiteshchoudhary')
        .then((res) => res.json())
        .then((data)=>{
            setflws(data.followers)
            setImage(data.avatar_url)
            
        })
    },[])

  return (
    <>
    
    <div >
      Github Followers : {flws}
    </div>
    <div className='flex justify-center'>
    <img src={image} alt='image' className=' h-64 w-64 '></img>
    </div>
    </>
  )
}

export default Github
