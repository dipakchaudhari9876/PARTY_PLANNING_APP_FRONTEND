import Axios from 'axios'
import { getToken,getUser } from '../components/Auth/authentication'
const url = process.env.REACT_APP_API;


const getVendorProposal = async (id) => {
    try {
        const jwtoken = getToken()
        const userdata = getUser()
        const vendorProposal = await Axios.get(`${url}/api/proposal/findall/${id}`,{
            params:{jwtoken:jwtoken,data:userdata}
        })
        // console.log(vendorProposal.data)
        return vendorProposal.data

    } catch (err) {
        console.log(err)
        return err.response.data.error
    }

}

const sendProposal = async(data)=>{
    console.log(data)
    try {
        const proposal = await Axios.post(`${url}/api/proposal/add`,data)
        return proposal.data

    } catch (err) {
        console.log(err)
        return err.response.data.error
    }
}

const singleProposal = async(id)=>{
    try {
        const singleProposal = await Axios.get(`${url}/api/proposal/event/${id}`)
        return singleProposal.data
        
    } catch (err) {
        console.log(err)
        return err.response.data.error
    }
}

const getProposalData = async()=>{
    
    try{
        const jwtoken = getToken()
        const userdata = getUser()
        
        const data = await Axios.get(`${url}/api/user/getallproposal`,{
            params:{jwtoken:jwtoken,data:userdata}
        })

        return (data.data)

    }catch(err){
        return (err)
    }
    
}

const removeProposal = async(id)=>{
    try{
        const data = await Axios.delete(`${url}/api/proposal/remove/${id}`)
        if(data){
            return data.data
        }
    }catch(err){
        return err
    }
    

}

export {getVendorProposal,sendProposal,singleProposal,getProposalData,removeProposal}