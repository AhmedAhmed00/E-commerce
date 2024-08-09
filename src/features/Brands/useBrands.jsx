import { useQuery } from "@tanstack/react-query";
import { getBrands } from "../../Services/BrandsApi";

function useBrands() {
  const {
    data: brands,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["brand"],
    queryFn: getBrands,
  });
  return { brands, isLoading, isError };
}

export default useBrands;
