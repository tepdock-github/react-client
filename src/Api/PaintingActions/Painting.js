import axios from "axios";

const ip = "localhost";
const port = 5001;

class PaintingsApi{

    static getPaintigs = () =>{
        return axios.get(`https://${ip}:${port}/api/paintings`)
        .then(resp=>{
            if(resp.status !== 200){
                return null;
            }
            return resp.data;
        })
        .catch(()=>{
            console.error();
        })
    }
}

export default PaintingsApi;
