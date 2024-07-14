import React, { useState } from "react";
import { dateFormatter } from "../../../helper/DateFormatter";
import EditSvg from "../../../ui/EditSvg";
import DeleteSvg from "../../../ui/DeleteSvg";
import { Link } from "react-router-dom";
import { useDeleteBlog } from "../../blog/useDeleteBlog";
import UpdateBlog from "../../blog/UpdateBlog";
import Modal from "../../../ui/Modal";

export default function BlogTableRow({
  blog,
  setIsMenuOpen,
  isMenuOpen,
  index,
}) {
  const { id: blogId, blogImage, title, created_at, category, author } = blog;
  const { deleteBlog, isDeleting } = useDeleteBlog();
  const [show, setShow] = useState(false);

  const handleMenuToggle = (index) => {
    setIsMenuOpen(isMenuOpen === index ? null : index);
  };

  const handleDelete = (id) => {
    deleteBlog(id);
    setIsMenuOpen(null);
  };

  return (
    <>
      <tr className="border-gray-200 duration-300 odd:bg-gray-200 hover:bg-gray-300 dark:border-gray-600 dark:odd:bg-gray-800 dark:hover:bg-gray-500">
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar ">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src={blogImage}
                  alt="blog"
                  className="border border-gray-400 bg-gray-200"
                />
              </div>
            </div>
            <div>
              <div className="text-xs font-bold">{title?.slice(0, 30)}...</div>
              <div className="text-sm opacity-50">{category}</div>
            </div>
          </div>
        </td>
        <td className=" whitespace-nowrap">{author}</td>
        <td>{dateFormatter(created_at)}</td>
        <td>
          <button
            className="text-gray-500 hover:text-gray-700 dark:text-gray-300"
            onClick={() => handleMenuToggle(index)}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6v.01M12 12v.01M12 18v.01"
              ></path>
            </svg>
          </button>
          {isMenuOpen === index && (
            <div className="absolute right-0 w-48 rounded-md border border-gray-200 bg-white text-blue-500 shadow-lg">
              <ul>
                <li className="flex cursor-pointer items-center gap-2 px-4 py-2 hover:bg-gray-100">
                  <EditSvg />
                  <button onClick={() => setShow(true)}>Update</button>
                </li>
                <li className="cursor-pointer px-4 py-2 hover:bg-gray-100">
                  <button
                    disabled={isDeleting}
                    className="flex items-center gap-2 disabled:cursor-not-allowed disabled:opacity-50"
                    onClick={() => handleDelete(blog.id)}
                  >
                    <DeleteSvg />
                    <span>Delete</span>
                  </button>
                </li>
                <li className="cursor-pointer px-4 py-2  hover:bg-gray-100">
                  <Link
                    onClick={() => setIsMenuOpen(null)}
                    className="flex items-center gap-2"
                    to={`/blog/${blogId}`}
                    target={"_blank"}
                  >
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        className=" h-4 w-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                        />
                      </svg>
                    </span>
                    <span>View</span>
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </td>
      </tr>
      {show && (
        <Modal size="large" onClose={() => setShow(false)}>
          <UpdateBlog onClose={() => setShow(false)} Blog={blog} />
        </Modal>
      )}
    </>
  );
}
