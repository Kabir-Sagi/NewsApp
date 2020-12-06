import Axios from 'axios'

function getNewsData(url) {
   return Axios.get(url)
}
export default getNewsData