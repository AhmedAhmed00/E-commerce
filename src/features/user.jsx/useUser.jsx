import { useQuery } from "@tanstack/react-query";
import { getLoggedUserData } from "../../Services/userApi";
import { jwtDecode } from "jwt-decode";

export default function useUser() {
  const accessToken = localStorage.getItem("accessToken");
  const decodedUser = jwtDecode(accessToken);
  const userId = decodedUser.id;

  const {
    data: userData,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ["user"],
    queryFn: () => getLoggedUserData(userId),
  });
  return { userData, isError, isLoading };
}
