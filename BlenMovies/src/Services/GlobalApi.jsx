import axios from "axios";

// Base URL
const movieBaseUrl = "https://api.themoviedb.org/3/";
const apiKey = '108eee1baf5fd24993018f8f7c030e42'

// Fetching the data from the API
const getTrendingVideos= axios.get(movieBaseUrl+
    "trending/all/day?api_key="+apiKey)


export default {
    getTrendingVideos
}