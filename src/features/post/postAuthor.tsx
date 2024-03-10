import { selectAllUsers } from "../users/userSlice";
import { useSelector } from "react-redux";

export default function PostAuthor({user_id}: {user_id: Number}) {
     const users = useSelector(selectAllUsers);
     
     const author = users.find((user: any) => user.id === user_id);
     
     return (
        <>
          <span>{author ? author.name : "Unknown author"}</span>
        </>
     )

}