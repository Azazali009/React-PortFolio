import { useQuery } from "@tanstack/react-query";
import { getDevices } from "../../services/apiDeviceDetector";

export function useDeviceDetector() {
  const {
    data: Devices,
    isLoading: isLoadingDevices,
    isError,
  } = useQuery({
    queryKey: ["device-detector"],
    queryFn: getDevices,
  });

  return { Devices, isLoadingDevices, isError };
}
