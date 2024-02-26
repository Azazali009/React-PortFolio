import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";

const BlogSidebar = () => {
  const [searchInput, setSearchInput] = useState("");

  const [searchParams, setSearchParams] = useSearchParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!searchInput) return;
    searchParams.set("search", searchInput);
    setSearchParams(searchParams);
  };
  return (
    <aside className=" sticky top-24 hidden flex-col gap-3 self-start border-l border-gray-200 px-3 dark:bg-bodyColor sm:flex ">
      <form onSubmit={handleSubmit} className=" flex">
        <input
          type="text"
          value={searchInput}
          required
          onChange={(e) => setSearchInput(e.target.value)}
          placeholder="search blog..."
          className="input-info input w-full bg-gray-200 py-2"
        />
        <button className="rounded bg-sky-500 px-6 py-2 font-semibold capitalize tracking-wider text-white">
          search
        </button>
      </form>
    </aside>
  );
};

export default BlogSidebar;
