import axios from '@/axios.js';
axios.defaults.baseURL = 'http://api.duyiedu.com';

var api = {
    getHotList(){
        return axios.get('/api/meituan/header/searchHotWords.json')
    },
    getSearchList(){
        return axios.get('/api/meituan/header/search.json')
    },
    getMenuList(){
        return axios.get('/api/meituan/index/nav.json')
    },
    getQualityLifeList(){
        return axios.get('/api/meituan/index/resultsByKeywords.json')
    },
    getHotCityList(){
        return axios.get('/api/meituan/city/hot.json')
    },
    getProvinceList(){
        return axios.get('/api/meituan/city/province.json')
    },
    getCityList(){
        return axios.get('/api/meituan/city/cityList.json')
    },
    getRecentSearchList(){
        return axios.get('/api/meituan/city/recents.json')
    }
}

export default api;