export interface Product {
  id: number
  brand: string
  category: string
  title: string
  stock: number
  rating: number
}

export interface ProductResponse {
  products: Product[]
  limit: number
  skip: number
  total: number
}

const baseUrl = 'https://dummyjson.com/products?'

const fetchData = async (skip = 1, limit = 10, parameters = ''): Promise<ProductResponse> => {
  const params = parameters ? `&${parameters}` : ''
  const response = await fetch(
    `${baseUrl}limit=${limit}&skip=${skip}${params}`
  )
  const data = (await response.json()) as ProductResponse
  return data
}


export default {
  fetchData,
  baseUrl
}