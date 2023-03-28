import Axios from 'axios'
const url = process.env.REACT_APP_API

const getVendorData = async (id) => {
    try {
        const vendorData = await Axios.get(`${url}/api/vendor/getdetail/${id}`)
        return vendorData.data

    } catch (err) {
        console.log(err)
        return err.response.data.error
    }

}

const vendorRegister =async(data)=>{
    // const navigate = useNavigate()
    try{
        const vedReg = await Axios.post(`${url}/api/vendor/register`,data)
        console.log(vedReg.data)

    }catch(err){
        console.log(err)
    }
}


const vendorlogin =async(data)=>{
    try{
        const loginData = await Axios.post(`${url}/api/vendor/login`,data)
        console.log(loginData.data)

    }catch(err){
        console.log(err)
    }
}

export {getVendorData,vendorlogin,vendorRegister}