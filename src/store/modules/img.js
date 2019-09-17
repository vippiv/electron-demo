const imgCollection = {
    state: {
        imgLink: ''
    },
    mutations: {
        SET_IMGLINK: (state, url) => {
            console.log('执行存储')
            state.imgLink = url
            localStorage.setItem('url', url)
        }
    },
    actions: {
        setImgLink({ commit }, url) {
            commit('SET_IMGLINK', url)
        }
    }
}

export default imgCollection
