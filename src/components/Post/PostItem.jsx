import { use } from "react";
// getData for fetch
const getData = async () => {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_start=0&_limit=5"
  ); /* ?_start=0&_limit=5  fetch 5 post*/
  return response.json();
};

export default function PostItem() {
  const posts = use(getData());

  return (
    <div>
      {posts.map((post) => (
        <div className="p-6 m-6 card bg-slate-700" key={post.id}>
          <h2 className="text-yellow-500 card-title ">{post.title}</h2>
          <p className="card-body ">{post.body}</p>
        </div>
      ))}
    </div>
  );
}
