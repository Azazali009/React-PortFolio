import { supabase } from "./supabase";

export async function getDevices() {
  let { data, error } = await supabase.from("device detector").select("*");
  if (error) {
    console.log(error);
    throw new Error("failed to get devices");
  }
  return data;
}
export async function addDevice() {
  let query = supabase.from("device detector");

  if (navigator.userAgent.match(/windows/i)) {
    query = query.insert([{ device: "desktop" }]);
  }
  if (
    navigator.userAgent.match(/Android/i) ||
    navigator.userAgent.match(/iPhone/i)
  ) {
    query = query.insert([{ device: "mobile" }]);
  }

  const { data, error } = await query.select();
  if (error) {
    console.log(error);
    throw new Error("failed to add device");
  }

  return data;
}
