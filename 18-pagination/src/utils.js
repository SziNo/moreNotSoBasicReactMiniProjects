const paginate = (followers) => {
  const itemsPerPage = 9
  const pages = Math.ceil(followers.length / itemsPerPage)

  const newFollowers = Array.from({ length: pages }, (_, idx) => {
    const start = idx * itemsPerPage
    return followers.slice(start, start + itemsPerPage)
  })

  return newFollowers
}

export default paginate
