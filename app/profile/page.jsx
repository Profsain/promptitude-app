"use client";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import Profile from "@components/Profile";

const MyProfile = () => {
  const { data: session } = useSession();

  const router = useRouter();

  const [posts, setPosts] = useState([]);

  const fetchPost = async () => {
    const response = await fetch(`/api/users/${session?.user.id}/posts`);
    const data = await response.json();

    setPosts(data);
  };

  useEffect(() => {
    // fetchpost if user is logged in
    if (session?.user?.id) fetchPost();
  }, []);

  const handleEdit = (post) => {
    // redirect to edit page
    router.push(`/update-prompt?id=${post._id}`);
  };

  const handleDelete = async (post) => {
    const hasConfirmed = confirm("Are you sure you want to delete this post?");

    if (hasConfirmed) {
     try {
       await fetch(`/api/posts/${post._id.toString()}`, {
        method: "DELETE",
       });
       
       const filteredPosts = posts.filter((post) => post._id !== post._id.toString());

        setPosts(filteredPosts);

     } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <Profile
      name={session?.user?.name}
      desc={session?.user?.email}
      data={posts}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  );
};

export default MyProfile;
