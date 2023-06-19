const axios = require('axios');

axios.interceptors.response.use(res => {
    return res.data;
})


async function getRepoList() {
    return axios.get('https://api.github.com/orgs/vuejs/repos')
}

async function getTagList(repo) {
    return axios.get(`https://api.github.com/repos/vuejs/${repo}/tags`)
}

module.exports = {
    getRepoList,
    getTagList
}