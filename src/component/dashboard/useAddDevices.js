import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addDevice as addDeviceApi } from "../../services/apiDeviceDetector";

export function useAddDevice() {
  const queryClient = useQueryClient();
  const { mutate: addDevice } = useMutation({
    mutationFn: addDeviceApi,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["device-detector"] });
    },
  });
  return { addDevice };
}
