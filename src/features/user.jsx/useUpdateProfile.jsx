import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateUserData } from "../../Services/userApi";
import { jwtDecode } from "jwt-decode";
import useUser from "./useUser";

export default function useUpdateData() {
  const accessToken = localStorage.getItem("accessToken");
  const decodedUser = jwtDecode(accessToken);
  const userId = decodedUser.id;
  const queryClient = useQueryClient();

  const {
    mutate: mutateProfile,
    data,
    isError,
    status,
  } = useMutation({
    mutationFn: (body) => updateUserData(body, accessToken),

    onSuccess: (data) => {
      toast.success("your Personal Inofrmation Updated Successfully");

      queryClient.invalidateQueries({
        queryKey: ["user"],
      });
    },

    onError: () => {
      toast.error("Please insert differnt Information");
    },
  });
  return { mutateProfile, data, isError, status };
}
