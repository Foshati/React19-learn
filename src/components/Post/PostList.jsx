import { Suspense } from "react";
import PostItem from "./PostItem";

export default function PostList() {
  return (
    <div>
      <Suspense
        fallback={
          <div className="flex items-center justify-center min-h-screen">
            <span className="w-16 h-16 loading loading-spinner text-warning"></span>
          </div>
        }
      >
        <PostItem />
      </Suspense>
    </div>
  );
}
