import { useSelector } from "react-redux";
import { selectAllPosts } from "./posts/postsSlice";

export const PostList = () => {
  const posts = useSelector(selectAllPosts);
  console.log(posts);

  const renderedPosts = posts.map((post) => (
    <article key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content.substring(0, 100)}</p>
    </article>
  ));
  return (
    <section>
      <h2>Posts</h2>
      {renderedPosts}
    </section>
  );
};
