import { createOnlineOrder } from "../../Services/PaymentApi";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import useCart from "../cart/useCart";
import toast from "react-hot-toast";

export default function useOnlineOrder() {
  const { cart: { data: { _id } = {} } = {} } = useCart();
  const accessToken = localStorage.getItem("accessToken");
  const queryClient = useQueryClient();
  const url = window.location.href;

  const {
    mutate: addOnlineOrder,
    data: order,
    isError,
    status,
  } = useMutation({
    mutationFn: (body) => createOnlineOrder(body, _id, accessToken, url),

    onSuccess: (data) => {
      queryClient.resetQueries({
        queryKey: ["cart", accessToken],
      });

      queryClient.invalidateQueries({ queryKey: ["orders"] });

      toast.success("Your Order Created Successfully");

      window.open(data.session.url, "_self");
    },

    onError: () => {
      toast.error("Cannot Create Your order");
    },
  });
  return { isError, status, addOnlineOrder, order };
}
