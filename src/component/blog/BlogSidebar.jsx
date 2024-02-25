import React from "react";

const BlogSidebar = () => {
  return (
    <aside className=" hidden min-h-screen border-l border-gray-300 px-3 sm:block">
      <input
        type="text"
        placeholder="search blog..."
        className="input w-full bg-gray-200"
      />
      {/* <select name="" id="" className="select"></select> */}
    </aside>
  );
};

export default BlogSidebar;
