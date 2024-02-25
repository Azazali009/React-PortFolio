import React from "react";
import BlogRow from "./BlogRow";

const ReadAllBlogs = ({ Blogs }) => {
  return (
    <div className="my-9 flex flex-col gap-4 px-2 sm:max-w-[900px]">
      {Blogs?.length > 0 ? (
        Blogs?.map((blog) => <BlogRow key={blog.id} blogContent={blog} />)
      ) : (
        <h3 className="text-center text-3xl font-bold capitalize">
          No blog yet posted.
        </h3>
      )}
    </div>
  );
};

export default ReadAllBlogs;
