"use client"
import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

import Profile from '@components/Profile'

const MyProfile = () => {
    const { data: session } = useSession();

    const [posts, setPosts] = useState([]);

    const fetchPost = async () => {
      const response = await fetch(`/api/users/${session?.user.id}/posts`);
      const data = await response.json();

      setPosts(data);
    };

    useEffect(() => {
        // fetchpost if user is logged in
      if(session?.user?.id) fetchPost();
    }, []);

    const handleEdit = () => { }
    
  const handleDelete = async () => { }
  
  return (
      <Profile
          name={session?.user?.name}
          desc={session?.user?.email}
          data={posts}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
      />
  )
}

export default MyProfile