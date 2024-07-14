import BlogTableRow from "./BlogManagement";

const BlogTable = ({ blogs, setIsMenuOpen, isMenuOpen }) => {
  return (
    <div className="scrollBar-hide">
      <table className=" table-xs table sm:table-md md:table-lg ">
        {/* head */}
        <thead className=" text-stone-400">
          <tr className=" border-gray-200 dark:border-gray-600">
            <th>Title</th>
            <th>Author</th>
            <th>Created at</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {blogs?.map((blog, index) => {
            return (
              <BlogTableRow
                key={blog.id}
                blog={blog}
                setIsMenuOpen={setIsMenuOpen}
                isMenuOpen={isMenuOpen}
                index={index}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default BlogTable;
