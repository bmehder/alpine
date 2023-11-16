import { carouselItems, tabsItems, accordionItems, postsURL } from './data.js'

export const carousel = {
  index: 0,
  items: carouselItems,
  intervalId: null,
  isPlaying: true,
  delay: 10,

  setIndex(idx) {
    if (idx < 0) {
      this.index = carouselItems.length - 1
      return
    }

    if (idx > carouselItems.length - 1) {
      this.index = 0
      return
    }

    this.index = idx
  },

  autoplay() {
    this.intervalId = setInterval(() => this.setIndex(this.index + 1), this.delay * 1000)
  },
  
  togglePlay() {
    if (this.isPlaying) {
      clearInterval(this.timer)
      this.isPlaying = false
    } else {
      this.isPlaying = true
      this.intervalId = setInterval(
        () => this.setIndex(this.index + 1),
        this.delay * 1000
      )
    }
  },

  destroy() {
    clearInterval(this.intervalId)
  },
}

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
