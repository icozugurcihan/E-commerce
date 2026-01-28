export default function PostCard({ post }) {
  return (
    <div className="flex flex-col border rounded-md overflow-hidden w-full max-w-[360px]">

      {/* IMAGE */}
      <div className="relative">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-[220px] object-cover"
        />

        <span className="absolute top-4 left-4 bg-red-500 text-white text-xs px-2 py-1 rounded">
          NEW
        </span>
      </div>

      {/* CONTENT */}
      <div className="flex flex-col gap-3 p-5">

        {/* TAGS */}
        <div className="flex gap-2 text-xs text-blue-500">
          {post.tags.map((tag, i) => (
            <span key={i}>{tag}</span>
          ))}
        </div>

        {/* TITLE */}
        <h3 className="font-bold text-sm leading-snug">
          {post.title}
        </h3>

        {/* DESC */}
        <p className="text-sm text-gray-500">
          {post.description}
        </p>

        {/* META */}
        <div className="flex justify-between text-xs text-gray-400 pt-3">
          <span>{post.date}</span>
          <span>{post.comments} comments</span>
        </div>

        {/* LINK */}
        <button className="flex items-center gap-1 text-sm font-semibold text-blue-500 pt-2">
          Learn More →
        </button>
      </div>
    </div>
  );
}
