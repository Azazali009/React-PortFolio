import React, { useState } from "react";
import CreateBlog from "./CreateBlog";
import ReadAllBlogs from "./ReadAllBlogs";
import BlogSidebar from "./BlogSidebar";
import { useCurrentUser } from "../authentication/useCurrentUser";
import { useBlogs } from "./useBlogs";
import PageLoader from "../../ui/PageLoader";
import Error from "../../ui/Error";

const Blogs = () => {
  // 1). Get all blogs
  const { Blogs, isLoading, isError } = useBlogs();

  // 2). Get admin data to show create buttong conditionally
  const {
    user: { user_metadata: { isAdmin } = {} } = {},
    isAuthenticated,
    isLoading: isLoadingUser,
  } = useCurrentUser();

  // 3). Toggle blog modal form
  const [showModal, setShowModal] = useState(false);

  // 4). Close modal function
  const onClose = () => setShowModal(false);

  if (isLoading) return <PageLoader />;
  if (isError) return <Error />;

  return (
    <div className=" grid py-8 sm:grid-cols-[2fr_10rem] md:grid-cols-[2fr_20rem]">
      <div>
        {!isLoadingUser && isAuthenticated && isAdmin && (
          <button
            className="btn-info btn ml-4"
            onClick={() => setShowModal(true)}
          >
            Create blog post
          </button>
        )}
        {showModal && <CreateBlog onClose={onClose} />}
        <ReadAllBlogs Blogs={Blogs} />
      </div>
      {/* <BlogSidebar /> */}
    </div>
  );
};

export default Blogs;
