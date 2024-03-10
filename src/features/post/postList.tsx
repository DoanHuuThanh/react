import { useSelector } from "react-redux";
import { selectAllPosts } from "./postSlice";
import PostAuthor from "./postAuthor";
import TimeAgo from "./TimeAgo";
const PostList = () => {
  const posts = useSelector(selectAllPosts);

  const orderedPosts = posts.slice().sort((a: any, b: any) => b.date.localeCompare(a.date));
  const renderPosts = orderedPosts.map((post: any) => (
    <article key={post.id} className="bg-white shadow-md rounded-md p-4">
      <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
      <p className="text-gray-700">{post.content.substring(0, 100)}</p>
      <p className="text-gray-700"> 
         <PostAuthor user_id={post.user_id} />
         <TimeAgo timestamp={post.date} />
       </p>
    </article>
  ));

  return (
    <section className="">
      <h2>Posts</h2>
      {renderPosts}
    </section>
  );
};

export default PostList;
