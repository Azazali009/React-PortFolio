import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateVisitors as updateVisitorsApi } from "../../services/apiVisitorCounter";
import toast from "react-hot-toast";

export function useUpdateVisitor() {
  const queryClient = useQueryClient();
  const { mutate: updateVisitors, isPending: isUpdating } = useMutation({
    mutationFn: updateVisitorsApi,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["visitors"] });
    },
    onError: (err) => window.location("/dashboard") && toast.error(err.message),
  });
  return { updateVisitors, isUpdating };
}
