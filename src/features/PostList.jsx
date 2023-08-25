import { useSelector } from "react-redux";
import { selectAllPosts } from "./posts/postsSlice";
import { PostAuthor } from "./posts/PostAuthor";
import TimeAgo from "./posts/TimeAgo";
import ReactionButtons from "./posts/Reactions";

export const PostList = () => {
  const posts = useSelector(selectAllPosts);

  const orderedPost = posts
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date));

  const renderedPosts = orderedPost.map((post) => (
    <article key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content.substring(0, 100)}</p>
      <p className="postCredit">
        <PostAuthor userId={post.userId} />
        <TimeAgo timestamp={post.date} />
        <ReactionButtons post={post} />
      </p>
    </article>
  ));
  return (
    <section>
      <h2>Posts</h2>
      {renderedPosts}
    </section>
  );
};
