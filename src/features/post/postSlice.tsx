import {createSlice} from '@reduxjs/toolkit'
import {sub} from 'date-fns'

const initialState = [
    {id: 1, title: 'Learning redux toolkit', content: `I've heard good things `, user_id: 1, date: sub(new Date(), {minutes: 10}).toISOString(),
    reactions: {
        thumpsUp: 0,
        wow: 0,
        heart: 0,
        rocket: 0
     } 
    },
    {id: 2, title: 'Slices...', content: `The more i say slice`, user_id: 2, date: sub(new Date(), {minutes: 10}).toISOString(), 
     reactions: {
        thumpsUp: 0,
        wow: 0,
        heart: 0,
        rocket: 0
     } 
    }
]

const postSlice = createSlice({
     name: 'posts',
     initialState,
     reducers: {
           postAdded(state,action) {
             state.push(action.payload);
           },
           reactionAdded(state,action) {
            const {postId, reaction} = action.payload;
            const existingPost = state.find(post => post.id === postId);
            if (existingPost) {
                existingPost.reactions[reaction as keyof typeof existingPost.reactions]++
            }
            
           }
     }

})

export const selectAllPosts = (state: any) => state.posts

export const {postAdded} = postSlice.actions

export default postSlice.reducer 