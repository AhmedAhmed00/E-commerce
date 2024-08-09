import { useMutation } from "@tanstack/react-query";
import { resetPass } from "../../Services/userApi";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useAuth } from "../../Context/AuthContext";

export default function useNewPass() {
  const { setAccessToken } = useAuth();
  let navigate = useNavigate();

  const {
    mutate: resetData,
    isError,
    status,
  } = useMutation({
    mutationFn: (data) => resetPass(data),
    onSuccess: (data) => {
      navigate("/home");
      setAccessToken(data.token);
      localStorage.setItem("accessToken", data.token);
      toast.success("Your email and password updated Successfully");
    },
    onError: (err) => {
      toast.error("Cannot update");
    },
  });
  return { resetData, isError, status };
}
