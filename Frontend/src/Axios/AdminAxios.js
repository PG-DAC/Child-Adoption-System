import axios from 'axios'


const URL="http://localhost:8081/admin"

class AdminFunctions
{
    
    addChildDetails(childData)
    {
        return axios.post(URL+'/addchild', childData)
    }
    
    getAllChilds(){
        return axios.get(URL+'/achilddetails')
    }

    getAllFormRequest(){
        return axios.get(URL+'/getadoptionformenquiry')
    }

    setFormResponse(enq){
         return axios.put(URL+'/setenquiryresponse',enq)
    }

    getAllDocumentRequest(){
        return axios.get(URL+'/getdocumentrequest')
    }

    setDocumentResponse(enq){
         return axios.put(URL+`/setdocumentresponse/${enq.id}`,enq)
    }

    getCountRequest(){
        return axios.get(URL+'/countrequest')
    }

    getCountChild(){
        return axios.get(URL+'/countchild')
    }

    getCountParent(){
        return axios.get(URL+'/countparent')
    }

    getAllContact(){
        return axios.get(URL+'/showcontactdetails')
    }
}
export default new AdminFunctions();