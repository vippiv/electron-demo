const imgCollection = {
    state: {
        imgLink: ''
    },
    mutations: {
        SET_IMGLINK: (state, url) => {
            state.imgLink = url
        }
    },
    actions: {
        setImgLink({ commit }, url) {
            console.log(url)
            commit('SET_IMGLINK', url)
        }
    }
}

export default imgCollection
