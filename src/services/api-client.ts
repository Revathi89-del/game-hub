import axios from "axios";


export default axios.create({
    baseURL:"https://api.rawg.io/api",
    params:{
        key:'f8a579ab87f1495db8cefe5f7c27d921'
    }
})