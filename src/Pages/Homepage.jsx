import SectionHeader from "../Components/SectionHeader";
import useCategories from "../features/categories/useCategories";
import useBrands from "../features/Brands/useBrands";
import LoaderSpinner from "../Components/LoaderSpinner";
import Section from "../Components/Section";
import Categories from "../features/categories/Categories";
import OurSevices from "../Components/OurSevices";
import useProducts from "../features/Products/useProducts";
import Header from "../Components/Header";
import ProductsRow from "../features/Products/ProductsRow";
import Button from "../Components/Button";
import { useNavigate } from "react-router-dom";

const responsiveStyles =
  "grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  container";

export default function Homepage() {
  const navigate = useNavigate();

  const {
    brands,
    isLoading: brandsLoading,
    isError: brandsError,
  } = useBrands();
  const {
    categories,
    isLoading: categoriesLoading,
    isError: cateError,
  } = useCategories();
  const {
    data: { data: products } = {},
    isLoading: productsLoading,
    isError: productsError,
  } = useProducts("10");

  return (
    <>
      {brandsLoading && categoriesLoading && productsLoading ? (
        <LoaderSpinner />
      ) : productsError || cateError || brandsError ? (
        <div>errrrrrrrror</div>
      ) : (
        <>
          <Header categories={categories} brands={brands} />

          <SectionHeader
            redContent={"Our Products"}
            textContent={"THE GOODS"}
          />
          <Section>
            <ProductsRow items={products} resbonsiveStyles={responsiveStyles} />
            <div className="grid place-items-center mt-2">
              <Button
                onclick={() => navigate("/shop")}
                textContent={"Show More"}
                styles={
                  "px-3 bg-primary  dark:bg-primary-3 dark:border m   dark:bg-indigo-500m-auto text-white py-1 text-xl"
                }
              />
            </div>
          </Section>

          <SectionHeader textContent={"Explore Our Categories"} />

          <Section>
            <Categories categories={categories} />
            <div className="grid place-items-center mt-2">
              <Button
                onclick={() => navigate("/shop")}
                textContent={"Show More"}
                styles={
                  "px-3 bg-primary dark:bg-primary-3 dark:border m-auto  text-white py-1 text-xl"
                }
              />
            </div>
          </Section>

          <SectionHeader textContent={"Variety of Services"} />
          <Section>
            <OurSevices />
          </Section>
        </>
      )}
    </>
  );
}
