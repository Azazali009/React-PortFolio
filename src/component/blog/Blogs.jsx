import React, { useState } from "react";
import CreateBlog from "./CreateBlog";
import ReadAllBlogs from "./ReadAllBlogs";
import BlogSidebar from "./BlogSidebar";
import { useCurrentUser } from "../authentication/useCurrentUser";
import { useNavigate, useSearchParams } from "react-router-dom";

const Blogs = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const searchInput = searchParams.get("search") || "";

  // 1). Get admin data to show create buttong conditionally
  const {
    user: { user_metadata: { isAdmin } = {} } = {},
    isAuthenticated,
    isLoading: isLoadingUser,
  } = useCurrentUser();

  // 1). Toggle blog modal form
  const [showModal, setShowModal] = useState(false);

  // 3). Close modal function
  const onClose = () => setShowModal(false);

  // 4). clear search filter function

  const handleSearchFilter = () => {
    searchParams.set("search", "");
    setSearchParams(searchParams);
    navigate("/blog");
  };

  return (
    <div className=" grid min-h-screen grid-cols-1 gap-y-12 py-8 font-primary md:grid-cols-[2fr_20rem] md:gap-y-0">
      <div className=" relative">
        <div className=" flex justify-between">
          {!isLoadingUser && isAuthenticated && isAdmin && (
            <button
              className="btn-info btn ml-4 duration-300 hover:opacity-75 active:scale-90"
              onClick={() => setShowModal(true)}
            >
              Create blog post
            </button>
          )}
          {searchInput && (
            <div className=" absolute right-2 top-2">
              <button
                onClick={handleSearchFilter}
                className=" flex w-fit items-center gap-1 bg-none px-6 text-lg font-normal capitalize text-designColor hover:underline "
              >
                clear filter
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2.5"
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          )}
        </div>

        {showModal && <CreateBlog onClose={onClose} />}
        <ReadAllBlogs />
      </div>
      <BlogSidebar />
    </div>
  );
};

export default Blogs;
