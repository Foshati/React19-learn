import { version } from "react";
import PostList from "./components/Post/PostList";
import Theme from "./components/Theme/Card";
import AddProduct from "./components/Product/AddProduct";

function App() {
  return (
    <>
      <h1 className="m-4 text-3xl text-red-500">React Version: {version}</h1>

      <div>
        <PostList />
        <Theme />
        <AddProduct />
      </div>
    </>
  );
}

export default App;
