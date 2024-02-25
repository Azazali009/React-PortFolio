import { supabase, supabaseUrl } from "./supabase";

export async function createBlog(newBlog) {
  console.log(newBlog);
  const imageName = `${Math.random()}-${newBlog?.blogImage?.name}`;
  const imagePath = `${supabaseUrl}/storage/v1/object/public/blogImages/${imageName}`;
  const { data, error } = await supabase
    .from("Blog")
    .insert([{ ...newBlog, blogImage: imagePath }])
    .select()
    .single();

  if (error) {
    console.log(error);
    throw new Error("Blog could not created.");
  }

  const { error: storageError } = await supabase.storage
    .from("blogImages")
    .upload(imageName, newBlog.blogImage);
  if (storageError) {
    console.log(storageError);
    await supabase.from("Blog").delete().eq("id", data.id);
    throw new Error(
      "Blog image could not uploaded and the blog was not created.",
    );
  }
  return data;
}

export async function getBlogs() {
  let { data: Blog, error } = await supabase.from("Blog").select("*");

  if (error) {
    console.log(error);
    throw new Error("Blogs could not loaded.");
  }
  return Blog;
}

export async function getBlog(id) {
  const { data, error } = await supabase.from("Blog").select("*").eq("id", id);

  if (error) {
    console.log(error);
    throw new Error("Blog data could not loaded.");
  }
  return data[0];
}
