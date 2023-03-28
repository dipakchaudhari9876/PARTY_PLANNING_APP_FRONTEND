import Axios from 'axios'
const url = process.env.REACT_APP_API

const getUserData = async (id) => {
    try {
        const userData = await Axios.get(`${url}/api/user/getuserdata/${id}`)
        return userData.data

    } catch (err) {
        console.log(err)
        return err.response.data.error
    }

}

const userRegister = async (data) => {
    try {
        const userReg = await Axios.post(`${url}/api/user/register`, data)
        console.log(userReg.data)

    } catch (err) {
        console.log(err)
    }
}

const userlogin = async (data) => {
    try {
        const loginData = await Axios.post(`${url}/api/user/login`, data)
        if(loginData){
            return loginData.data
        }

    } catch (err) {
        return err
    }
}

export {getUserData,userRegister,userlogin}