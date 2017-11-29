export default {
  SET_CLASSIFY (state, data) {
    state.classify = data
  },
  SET_BANNER (state, data) {
    state.banner = data
  },
  SAVE_USERINFO (state, data) {
    state.userInfo = data
  },
  ADD_STAR (state, data) {
    state.books.push(data)
  },
  SUB_STAR (state, data) {
    let index = state.books.indexOf(data)
    state.books.splice(index, 1)
  },
  SAVE_BOOKS (state, data) {
    state.books = data
  },
  UP_DATE (state, data) {
    for (let i = 0; i < state.books.length; i++) {
      if (state.books[i].title === data.title) {
        state.books[i].star = data.star
      }
    }
  },
  CLEAR_BOOK (state) {
    state.books = []
  },
  CHANGE_CHOOSE (state, item) {
    for (let i = 0; i < state.books.length; i++) {
      if (state.books[i] === item) {
        state.books[i].choose = item.choose
      }
    }
  },
  DROP (state, data) {
    for (let i = 0; i < state.books.length; i++) {
      if (state.books[i].books_id === data.books_id) {
        state.books[i].star = false
        state.books[i].choose = false
        state.books.splice(i, 1)
      }
    }
  },
  CHOOSE_ALL (state) {
    for (let i = 0; i < state.books.length; i++) {
      state.books[i].choose = true
    }
  },
  CHOOSE_ALLS (state) {
    for (let i = 0; i < state.books.length; i++) {
      state.books[i].choose = !state.books[i].choose
    }
  },
  SAVE_BOOKS_ONE (state, item) {
    state.booksone = item
  },
  HISTORYS (state, book) {
    state.historys.push(book)
  },
  CLEAR_HISTORY (state) {
    state.historys = []
  },
  SAVE_HISTORY (state, data) {
    state.historys = data
  }
}
