import Axios from 'axios'

const getUserData = async (id) => {
    try {
        const userData = await Axios.get(`http://localhost:8080/api/user/getuserdata/${id}`)
        return userData.data

    } catch (err) {
        console.log(err)
        return err.response.data.error
    }

}

export {getUserData}