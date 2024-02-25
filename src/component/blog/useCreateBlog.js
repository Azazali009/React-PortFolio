import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createBlog } from "../../services/apiBlog";

export function useCreateBlog() {
  const queryClient = useQueryClient();
  const { mutate: addBlog, isPending } = useMutation({
    mutationFn: createBlog,
    onSuccess: () => alert("Created"),
    onError: () => alert("Error"),
  });
  return { addBlog, isPending };
}
