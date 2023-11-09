import { tabsItems, accordionItems, postsURL } from './data.js'

export const tabs = {
  index: 0,
  items: tabsItems,
}

export const accordion = {
  index: null,
  items: accordionItems,

  isIndexesEq(idx) {
    return this.index === idx
  },

  setIndex(idx) {
    this.index = this.isIndexesEq(idx) ? null : idx
  },
}

export const modal = {
  isModalOpen: false,

  openModal() {
    this.isModalOpen = true
  },

  closeModal() {
    this.isModalOpen = false
  },
}

export const posts = {
  posts: [],
  isLoading: true,

  _toggleIsLoading() {
    this.isLoading = !this.isLoading
  },

  getPosts() {
    this.posts = fetch(postsURL)
      .then(res => res.json())
      .catch(console.error)
      .finally(() => this._toggleIsLoading())
  },
}
