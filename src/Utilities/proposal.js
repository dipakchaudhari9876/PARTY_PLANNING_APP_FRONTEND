import Axios from 'axios'

const getVendorProposal = async (id) => {
    try {
        const vendorProposal = await Axios.get(`http://localhost:8080/api/proposal/findall/${id}`)
        return vendorProposal.data

    } catch (err) {
        console.log(err)
        return err.response.data.error
    }

}

const sendProposal = async(data)=>{
    try {
        const proposal = await Axios.post("http://localhost:8080/api/proposal/add",data)
        return proposal.data

    } catch (err) {
        console.log(err)
        return err.response.data.error
    }
}

export {getVendorProposal,sendProposal}