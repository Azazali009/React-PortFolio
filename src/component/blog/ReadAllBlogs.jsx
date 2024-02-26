import React from "react";
import BlogRow from "./BlogRow";
import { useBlogs } from "./useBlogs";
import PageLoader from "../../ui/PageLoader";
import Error from "../../ui/Error";

const ReadAllBlogs = () => {
  const { filterBlogs, isLoading, isError } = useBlogs();

  if (isLoading) return <PageLoader />;
  if (isError) return <Error />;

  return (
    <div className="my-9 flex flex-col gap-4 px-2 sm:max-w-[900px]">
      {filterBlogs?.length > 0 ? (
        filterBlogs?.map((blog) => <BlogRow key={blog.id} blogContent={blog} />)
      ) : (
        <h3 className="text-center text-3xl font-bold capitalize">
          No blog Found.
        </h3>
      )}
    </div>
  );
};

export default ReadAllBlogs;
