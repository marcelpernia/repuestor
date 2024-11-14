import qs from 'qs'

export const getProductBySlug = async ({ slug }) => {
  const query = qs.stringify({
    filters: {
      slug: {
        $eq: slug
      }
    },
    populate: '*'
  }, {
    encodeValuesOnly: true // prettify URL
  })

  const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/products?${query}`)
  const data = await response.json()
  return data
}
