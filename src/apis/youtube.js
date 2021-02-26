import axios from 'axios'

const KEY = 'AIzaSyCMt66GnU6IObJzan7x2yiL3ug5Eb6endA'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})