import { AddPostForm } from "./features/AddPostForm";
import { PostList } from "./features/PostList";

function App() {
  return (
    <main className="App">
      <PostList />
      <AddPostForm />
    </main>
  );
}

export default App;
