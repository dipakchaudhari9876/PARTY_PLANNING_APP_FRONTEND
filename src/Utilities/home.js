import Axios from 'axios'
const getProposalData = async()=>{
    try{
        const data = await Axios.get("http://localhost:8080/api/user/getallproposal",{
            params:{jwtoken:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MWYxYTViZmE4YTJmZDMxZmJlYmM2NSIsImlhdCI6MTY3OTk1NDg2NywiZXhwIjoxNjgwMDQxMjY3fQ.xJGE-2LHMw6Eg7-Dx6EKfnvq2L_Awv7GCJlmb0Tc2Es",data:"user"}
        })

        console.log(data.data)

    }catch(err){
        console.log(err)
    }
    
}

const vendorRegister =async()=>{
    try{
        const data = await Axios.post("http://localhost:8080/api/user/getallproposal",data)
        console.log(data)

    }catch(err){
        console.log(err)
    }
}

const userRegister =async(data)=>{
    try{
        const data = await Axios.post("http://localhost:8080/api/user/register",data)
        console.log(data)

    }catch(err){
        console.log(err)
    }
}
const userlogin =async(data)=>{
    try{
        const loginData = await Axios.post("http://localhost:8080/api/user/login",data)
        console.log(loginData)

    }catch(err){
        console.log(err)
    }
}
const vendorlogin =async(data)=>{
    try{
        const loginData = await Axios.post("http://localhost:8080/api/vendor/login",data)
        console.log(loginData)

    }catch(err){
        console.log(err)
    }
}



export {getProposalData}