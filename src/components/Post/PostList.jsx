import { Suspense } from "react";
import PostItem from "./PostItem";

export default function PostList() {
  return (
    <div>
      <Suspense
        // loading component daisy ui
        fallback={
          <div className="flex items-center justify-center min-h-screen">
            <span className="w-16 h-16 loading loading-spinner text-warning"></span>
          </div>
        }
      >
        <h2 className="flex justify-center mt-16 text-3xl text-red-500">
          use() = useEffect()
        </h2>
        <PostItem />
      </Suspense>
    </div>
  );
}
