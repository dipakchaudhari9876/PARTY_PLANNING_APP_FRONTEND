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

export {getVendorData}