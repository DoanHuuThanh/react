import { useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { postAdded} from "./postSlice.tsx"
import { selectAllUsers } from "../users/userSlice";

const AddPostForm =() => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [userId, setUserId] = useState('')
    const users = useSelector(selectAllUsers)
    console.log(userId)

    const onTitleChange = (e: any) => setTitle(e.target.value);
    const onContentChange = (e: any) => setContent(e.target.value);
    const onAuthorChange = (e: any) => setUserId(e.target.value);

    const canSave = Boolean(title) && Boolean(content) && Boolean(userId)
     
    let userOptions = [];
    if(users) {
         userOptions = users.map((user:any) =>(
            <option key={user.id} value={user.id}>
               {user.name}
            </option>
     ))
    }

    
    const dispatch = useDispatch()
    const onSavePostClicked = () => {
        if(title && content && userId) {
             dispatch(
                postAdded({
                    id: nanoid(),
                    title: title,
                    content: content,
                    user_id: Number(userId),
                    date: new Date().toISOString(),
                    reactions: {
                        thumpsUp: 0,
                        wow: 0,
                        heart: 0,
                        rocket: 0
                     } 
                })
             )
            setTitle('')
            setContent('')
        }
    }
   return(
     <>
       <section className="max-w-md mx-auto">
  <h2 className="text-xl font-semibold mb-4">Add a new Post</h2>
  <form className="space-y-4">
    <div>
      <label htmlFor="postTitle" className="block">Post title: </label>
      <input 
        type="text"
        id="postTitle"
        name="postTitle"
        value={title}
        onChange={onTitleChange}
        className="w-full border-gray-300 rounded-md focus:ring focus:ring-blue-400 focus:border-blue-400"
      />
    </div>
       <div>
       <label htmlFor="postAuthor" className="block">Author : </label>
       <select id="postAuthor" value={userId} onChange={onAuthorChange}>
          <option value=""></option>
          {userOptions}
       </select>
       </div>
    <div>
      <label htmlFor="postContent" className="block">Post content: </label>
      <input 
        type="text"
        id="postContent"
        name="postContent"
        value={content}
        onChange={onContentChange}
        className="w-full border-gray-300 rounded-md focus:ring focus:ring-blue-400 focus:border-blue-400"
      />
    </div>
    <button 
      type="button" 
      onClick={onSavePostClicked}
      className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-400"
      disabled={!canSave}
    >
      Save Post
    </button> 
  </form>
</section>

     </>
   )
}

export default AddPostForm