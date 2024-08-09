import { useQuery } from "@tanstack/react-query";

import { jwtDecode } from "jwt-decode";
import { getAllOrders } from "../../Services/OrdersApi";

export default function useOrders() {
  const accessToken = localStorage.getItem("accessToken");
  const { id } = jwtDecode(accessToken);

  const {
    data: orders,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ["orders"],

    cacheTime: 1000,

    queryFn: () => getAllOrders(id),
  });

  return { orders, isError, isLoading };
}
