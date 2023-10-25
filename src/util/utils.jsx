const formatString = (title) => {
  return title.length < 18 ? title : title.substr(0, 18) + '...'
}
export default formatString
