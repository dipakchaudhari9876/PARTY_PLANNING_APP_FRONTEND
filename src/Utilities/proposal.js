import Axios from 'axios'

const getVendorProposal = async (id) => {
    try {
        const vendorProposal = await Axios.get(`http://localhost:8080/api/proposal/findall/${id}`)
        // console.log(vendorProposal.data)
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

const singleProposal = async(id)=>{
    try {
        const singleProposal = await Axios.get(`http://localhost:8080/api/proposal/event/${id}`)
        return singleProposal.data

    } catch (err) {
        console.log(err)
        return err.response.data.error
    }
}

const getProposalData = async()=>{
    try{
        const data = await Axios.get("http://localhost:8080/api/user/getallproposal",{
            params:{jwtoken:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MWYxYTViZmE4YTJmZDMxZmJlYmM2NSIsImlhdCI6MTY3OTk1NDg2NywiZXhwIjoxNjgwMDQxMjY3fQ.xJGE-2LHMw6Eg7-Dx6EKfnvq2L_Awv7GCJlmb0Tc2Es",data:"user"}
        })

        return (data.data)

    }catch(err){
        return (err)
    }
    
}

const removeProposal = async(id)=>{
    try{
        const data = await Axios.get(`http://localhost:8080/api/proposal/remove/${id}`)
        if(data){
            return data.data
        }
    }catch(err){
        return err
    }
    

}

export {getVendorProposal,sendProposal,singleProposal,getProposalData,removeProposal}