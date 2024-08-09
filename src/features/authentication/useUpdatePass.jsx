import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateUserPassword } from "../../Services/userApi";

export default function useUpdatePass() {
  const accessToken = localStorage.getItem("accessToken");

  const {
    mutate: mutatePass,
    data,
    isError,
    status,
  } = useMutation({
    mutationFn: (body) => updateUserPassword(body, accessToken),
    onSuccess: (data) => {
      localStorage.setItem("accessToken", data.token);
      toast.success("your pass is changed");
    },
    onError: () => {
      toast.error("cannot change your pass");
    },
  });
  return { mutatePass, data, isError, status };
}
