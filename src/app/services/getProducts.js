import qs from 'qs'

export const getProducts = async ({ page }) => {
  const query = qs.stringify({
    pagination: {
      pageSize: 24 * page,
    },
  }, {
    encodeValuesOnly: true, // prettify URL
  });

  const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/products?${query}&populate=*`, {
    next: {
      revalidate: 3600,
    }
  })
  const data = await response.json()
  return data
}
