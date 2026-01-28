import { posts } from "../data/posts";
import PostCard from "./PostCard";

export default function FeaturedPosts() {
  return (
    <section className="flex flex-col items-center px-4 py-20 gap-12">

      {/* TITLE */}
      <div className="flex flex-col items-center gap-3 text-center max-w-xl">
        <span className="text-sm text-blue-500 font-semibold">
          Practice Advice
        </span>

        <h2 className="text-2xl font-bold">
          Featured Posts
        </h2>

        <p className="text-sm text-gray-500">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics
        </p>
      </div>

      {/* POSTS */}
      <div className="flex flex-col md:flex-row gap-8">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
}
