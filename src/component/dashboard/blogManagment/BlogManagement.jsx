import { useState } from "react";
import { useBlogs } from "../../blog/useBlogs";
import DashboardLoader from "../DashboardLoader";
import Error from "../../../ui/Error";
import Button from "../../../ui/Button";
import AddSvg from "../../../ui/AddSvg";
import BlogTable from "./BlogTable";
import CreateBlog from "../../../component/blog/CreateBlog";

const BlogManagement = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(null);

  const [showAddModal, setShowAddModal] = useState(false);

  const handleAddClick = () => {
    setIsMenuOpen(null);
    setShowAddModal(true);
  };

  const closeAddModal = () => setShowAddModal(false);

  const { filterBlogs, isError, isLoading } = useBlogs();

  if (isLoading) return <DashboardLoader />;
  if (isError) return <Error />;
  return (
    <>
      {showAddModal && <CreateBlog onClose={closeAddModal} />}
      <div className="text-sm text-stone-600 dark:text-white">
        <div className="mb-4 flex items-center justify-between">
          <h1 className="  text-3xl font-semibold">All Blogs</h1>

          <div>
            <Button onClick={handleAddClick} svg={<AddSvg />}>
              create blog
            </Button>
          </div>
        </div>
        <BlogTable
          blogs={filterBlogs}
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
        />
      </div>
    </>
  );
};

export default BlogManagement;
