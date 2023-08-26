import { useDispatch, useSelector } from "react-redux";
import {
  fetchPosts,
  getPostsError,
  getPostsStatus,
  selectAllPosts,
} from "./posts/postsSlice";
import { PostAuthor } from "./posts/PostAuthor";
import TimeAgo from "./posts/TimeAgo";
import ReactionButtons from "./posts/Reactions";
import { useEffect } from "react";

export const PostList = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectAllPosts);
  const postStatus = useSelector(getPostsStatus);
  const error = useSelector(getPostsError);

  useEffect(() => {
    if (postStatus === "idle") {
      dispatch(fetchPosts());
    }
  }, [postStatus, dispatch]);

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
