import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addProductToCart } from "../../Services/cartApi";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function useAddProduct() {
  const accessToken = localStorage.getItem("accessToken");
  const navigate = useNavigate();

  const queryClient = useQueryClient();
  const {
    data,
    isError,
    status,
    mutate: addProduct,
  } = useMutation({
    mutationFn: (prouctId) => addProductToCart(prouctId, accessToken),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["cart", accessToken],
      });
      toast.success("Product Added Successfully");
    },
    onError: () => {
      if (!accessToken) {
        navigate("/login");
        toast.dismiss();
        toast("You must be logged in first");
      } else {
        toast.dismiss();
        toast.error("cannot add this product");
      }
    },
  });

  return { data, isError, status, addProduct };
}
