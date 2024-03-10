import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice.tsx"
import postsReducer from "../features/post/postSlice.tsx"
import usersReducer from "../features/users/userSlice.tsx"

export const store = configureStore({
     reducer: {
        counter: counterReducer,
        posts: postsReducer,
        users: usersReducer
     }
})