import {createSlice} from '@reduxjs/toolkit'

const initialState = [
    {id: 1, name: "Doan Huu Thanh"},
    {id: 2, name: "Nguyen Van Thinh"}
]

const usersSlice = createSlice({
     name: 'users',
     initialState,
     reducers: {}

})

export const selectAllUsers = (state: any) => state.users

export const {} = usersSlice.actions

export default usersSlice.reducer 