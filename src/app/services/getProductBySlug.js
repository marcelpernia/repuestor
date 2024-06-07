export const getProductBySlug = async ({ slug }) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/products?filters[slug][$eq]=${slug}&populate=*`)
  const data = await response.json()
  return data
}
