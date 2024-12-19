import qs from 'qs'

export const getProducts = async ({ page }) => {
  const query = qs.stringify({
    fields: ['title', 'price', 'slug', 'stock', 'sku'],
    populate: {
      gallery: {
        fields: ['url']
      }
    },
    pagination: {
      pageSize: 24 * page
    }
  }, {
    encodeValuesOnly: true // prettify URL
  })

  const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/products?${query}`, {
    next: {
      revalidate: 3600
    }
  })
  const data = await response.json()
  return data
}

export const getAllProductsForSearch = async () => {
  const query = qs.stringify({
    fields: ['title', 'slug'],
    populate: {
      gallery: {
        fields: ['url']
      }
    },
    pagination: {
      pageSize: 100
    }
  }, {
    encodeValuesOnly: true
  })

  const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/products?${query}`, {
    next: {
      revalidate: 3600
    }
  })
  const data = await response.json()
  return data
}
