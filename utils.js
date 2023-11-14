const getSlice = x =>
  fetch(`./slices/${x}`)
    .then(res => res.text())
    .catch(console.error)

const getCurrentYear = () => new Date().getFullYear()
