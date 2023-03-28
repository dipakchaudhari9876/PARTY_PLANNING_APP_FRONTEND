import Axios from 'axios'

const getVendorData = async (id) => {
    try {
        const vendorData = await Axios.get(`http://localhost:8080/api/vendor/getdetail/${id}`)
        return vendorData.data

    } catch (err) {
        console.log(err)
        return err.response.data.error
    }

}

const vendorRegister =async(data)=>{
    // const navigate = useNavigate()
    try{
        const vedReg = await Axios.post("http://localhost:8080/api/vendor/register",data)
        console.log(vedReg.data)

    }catch(err){
        console.log(err)
    }
}


const vendorlogin =async(data)=>{
    try{
        const loginData = await Axios.post("http://localhost:8080/api/vendor/login",data)
        console.log(loginData.data)

    }catch(err){
        console.log(err)
    }
}

export {getVendorData,vendorlogin,vendorRegister}