import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import FormRow from "../../ui/FormRow";
import { Controller, useForm } from "react-hook-form";
import { useCreateBlog } from "./useCreateBlog";
import { useCurrentUser } from "../authentication/useCurrentUser";
import { toolbarOptions } from "./ToolBarOptions";
import Modal from "../../ui/Modal";

const module = {
  toolbar: toolbarOptions,
};
const CreateBlog = ({ onClose }) => {
  const { addBlog, isPending } = useCreateBlog();
  const { user: { user_metadata: { name: authorName, avatar } = {} } = {} } =
    useCurrentUser();
  const {
    register,
    control,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const image = data.blogImage[0];
    addBlog({
      ...data,
      blogImage: image,
      author: authorName,
      authorImage: avatar,
    });
  };
  return (
    <Modal
      isLoading={isPending}
      onClose={onClose}
      title={"Create Blog post"}
      size={"large"}
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className=" flex max-w-[80%] flex-col gap-4"
      >
        <FormRow lable={"Blog title"} error={errors?.title?.message}>
          <input
            type="text"
            placeholder="Enter Blog title"
            className={`h-12 w-full rounded-lg border-gray-700 bg-gray-100 p-4 text-gray-500 outline-none outline-offset-2 focus-visible:border-b-transparent ${errors?.title?.message ? "focus-visible:outline-designColor" : "focus-visible:outline-sky-500"} dark:border-b-[1px] dark:bg-[#191b1e] dark:text-lightText  sm:w-3/4`}
            {...register("title", {
              required: "Field is required.",
            })}
          />
        </FormRow>
        <FormRow lable={"Blog Content"} error={errors?.content?.message}>
          <Controller
            name="content" // Set the name for React Hook Form
            control={control}
            defaultValue=""
            render={({ field }) => (
              <ReactQuill
                modules={module}
                value={field.value}
                onChange={(value) => field.onChange(value)}
              />
            )}
          />
        </FormRow>
        <FormRow lable={"Blog Category"} error={errors?.category?.message}>
          <input
            type="text"
            placeholder="eg programming..."
            className={`h-12 w-full rounded-lg border-gray-700 bg-gray-100 p-4 text-gray-500 outline-none outline-offset-2 focus-visible:border-b-transparent ${errors?.category?.message ? "focus-visible:outline-designColor" : "focus-visible:outline-sky-500"} dark:border-b-[1px] dark:bg-[#191b1e] dark:text-lightText  sm:w-3/4`}
            {...register("category", {
              required: "Field is required.",
            })}
          />
        </FormRow>
        <FormRow lable={"Blog image"} error={errors?.blogImage?.message}>
          <input
            type="file"
            className=" file-input-info file-input bg-gray-100"
            {...register("blogImage", {
              required: "Field is required.",
              validate: (value) => {
                const isBigImage = value[0].size / 1000;
                return isBigImage < 1000 || "Image must be less than 1mb";
              },
            })}
          />
        </FormRow>
        <div className=" mt-6">
          <button
            disabled={isPending}
            className="btn flex min-w-[8rem] items-center justify-center border-none bg-sky-500 capitalize text-bodyColor hover:scale-95 hover:bg-sky-600 disabled:bg-sky-500 disabled:text-bodyColor disabled:opacity-50 dark:bg-sky-300"
            type="submit"
          >
            submit
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default CreateBlog;
