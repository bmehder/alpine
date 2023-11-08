const getSlice = async x => (await axios.get(`./slices/${x}`)).data
