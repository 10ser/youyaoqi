import http from 'axios'
import api from '@/api'
export default {
  setClassify ({commit}) {
    let url = api.host + 'classify'
    http.get(url)
      .then(res => {
        commit('SET_CLASSIFY', res.data)
      })
  },
  setBanner ({commit}) {
    let url = api.host + 'banner'
    http.get(url)
      .then(res => {
        commit('SET_BANNER', res.data)
      })
  },
  login ({commit}, account, psd) {
    let url = api.host + 'users?account=' + account
    return http.get(url)
      .then(res => {
        if (res.data.length > 0) {
          // 已经注册过 => 登录
          let data = res.data[0]
          commit('SAVE_USERINFO', data)
          commit('CLEAR_BOOK')
          commit('CLEAR_HISTORY')
          // 获取用户书架信息
          let bookurl = api.host + 'users/' + data.id + '/books'
          http.get(bookurl)
            .then(res => {
              commit('SAVE_BOOKS', res.data)
            })
          let historyurl = api.host + 'users/' + data.id + '/historys'
          http.get(historyurl)
            .then(res => {
              commit('SAVE_HISTORY', res.data)
            })
          return '该用户存在'
        } else {
          // 未注册过 => 跳转去注册
          return '该用户不存在'
        }
      })
  },
  registers ({commit}, phone, pwd) {
    let url = api.host + 'users?account=' + phone
    return http.get(url)
      .then(res => {
        if (!(res.data.length > 0)) {
          let url = api.host + 'users'
          let userObj = {
            account: phone,
            vip: 0,
            books: [],
            moon: 0,
            money: 0,
            username: '新用户' + phone.substr(7)
          }
          return http.post(url, userObj)
            .then(res => {
              // 存储至userInfo
              commit('SAVE_USERINFO', res.data)
              return '注册成功'
            })
        } else {
          return '该用户已存在，注册失败'
        }
      })
  },
  addStar (store, item) {
    // let books = store.state.books
    // store.commit('ADD_STAR', item)
    // let userInfo = store.state.userInfo
    // let url = api.host + 'books/'
    // return http.get(url)
    //   .then(res => {
    //     if (res.data.id) {
    //       let userObj = res.data
    //       item.star = true
    //       item.userId = userInfo.id
    //       userObj.books.push(item)
    //       return http.put(url, userObj)
    //     }
    //   })
    let userInfo = store.state.userInfo
    item.userId = userInfo.id
    item.star = true
    let url = api.host + 'books'
    return http.post(url, item)
      .then(res => {
        store.commit('UP_DATE', item)
        store.commit('ADD_STAR', item)
      })
  },
  subStar (store, item) {
    // store.commit('SUB_STAR', item)
    // // let userInfo = store.state.userInfo
    // let url = api.host + 'users/'
    // return http.get(url)
    //   .then(res => {
    //     if (res.data.id) {
    //       let userObj = res.data
    //       item.star = false
    //       let index = userObj.books.indexOf(item)
    //       userObj.books.splice(index, 1)
    //       return http.put(url, userObj)
    //     }
    //   })
    let userInfo = store.state.userInfo
    let url = api.host + 'books?books_id=' + item.books_id + '&userId=' + userInfo.id
    return http.get(url)
      .then(res => {
        let id = res.data[0].id
        let url = api.host + 'books/' + id
        return http.delete(url)
        .then(res => {
          item.star = false
          store.commit('UP_DATE', item)
          store.commit('SUB_STAR', item)
        })
      })
  },
  choose (store, item) {
    item.choose = !item.choose
    let userInfo = store.state.userInfo
    let url = api.host + 'books?books_id=' + item.books_id + '&userId=' + userInfo.id
    return http.get(url)
      .then(res => {
        if (res.data.length > 0) {
          let bookObj = res.data[0]
          bookObj.choose = !bookObj.choose
          let url = api.host + 'books/' + bookObj.id
          return http.put(url, bookObj)
            .then(res => {
              store.commit('CHANGE_CHOOSE', bookObj)
            })
        }
      })
  },
  drop (store) {
    let userInfo = store.state.userInfo
    let url = api.host + 'users/' + userInfo.id + '/books'
    return http.get(url)
      .then(res => {
        if (res.data.length > 0) {
          let dropbol = true
          for (let i = 0; i < res.data.length; i++) {
            if (res.data[i].choose) {
              let data = res.data[i]
              data.choose = false
              data.star = false
              let url = api.host + 'books/' + data.id
              http.delete(url, data)
              .then(res => {
                store.commit('UP_DATE', data)
                store.commit('DROP', data)
              })
            } else {
              dropbol = false
            }
          }
          if (!dropbol) {
            return '请选择删除的书籍'
          }
        } else {
          return '先去添加书籍吧'
        }
      })
  },
  chooseAll (store) {
    let userInfo = store.state.userInfo
    let url = api.host + 'users/' + userInfo.id + '/books'
    return http.get(url)
      .then(res => {
        if (res.data.length > 0) {
          // 用来判断是否全部被选中
          let alltruebol = true
          for (let k = 0; k < res.data.length; k++) {
            if (!res.data[k].choose) {
              alltruebol = false
            }
          }
          if (alltruebol) {
            // 判断为全部都被选中
            for (let i = 0; i < res.data.length; i++) {
              res.data[i].choose = !res.data[i].choose
            }
            for (let j = 0; j < res.data.length; j++) {
              let url = api.host + 'books/' + res.data[j].id
              http.put(url, res.data[j])
            }
            store.commit('CHOOSE_ALLS')
          } else {
            // 判断为部分被选中
            for (let i = 0; i < res.data.length; i++) {
              res.data[i].choose = true
            }
            for (let j = 0; j < res.data.length; j++) {
              let url = api.host + 'books/' + res.data[j].id
              http.put(url, res.data[j])
            }
            store.commit('CHOOSE_ALL')
          }
        }
      })
  },
  saveBooksOne (store, item) {
    console.log(item)
    store.commit('SAVE_BOOKS_ONE', item)
  },
  historys (store) {
    let book = store.state.booksone
    let bol = store.state.historys.indexOf(book)
    console.log(bol)
    if (bol < 0) {
      let userId = store.state.userInfo.id
      book.userId = userId
      let url = api.host + 'historys'
      return http.post(url, book)
        .then(res => {
          store.commit('HISTORYS', book)
        })
    }
  },
  comment (store, value) {
    // let booksone = store.state.booksone
    // let url = api.host + ''
  }
}
