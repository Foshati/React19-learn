import { version } from "react";
import PostList from "./components/Post/PostList";
function App() {
  return (
    <>
      <h1 className="m-4 text-3xl text-red-500">React Version: {version}</h1>

      <div>
        <PostList />
      </div>
    </>
  );
}

export default App;
