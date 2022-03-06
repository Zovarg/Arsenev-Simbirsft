/*Считаем количество страниц*/
export const getPageCount = (totalCount, limit) => {
  return Math.ceil(totalCount / limit)
}
