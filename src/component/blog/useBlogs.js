import { useQuery } from "@tanstack/react-query";
import { getBlogs } from "../../services/apiBlog";

export function useBlogs() {
  const {
    data: Blogs,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["Blogs"],
    queryFn: getBlogs,
  });
  return { Blogs, isLoading, isError };
}
