const BASE_URL = "https://dummyjson.com";

export const fetchPackages = async () => {
  const response = await fetch(
    `${BASE_URL}/products/category/`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch packages.");
  }

  const data = await response.json();

  return data.products;
};