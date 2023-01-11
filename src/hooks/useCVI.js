import { useEffect, useState } from "react";
import getCVI from '../services/getCVI.js';
const useCVI = ({ atribute }) => {
    
    const [cvi, setCVI] = useState([]);
    useEffect(()=>{
        getCVI({ atribute: atribute }).then(data => {
            setCVI(data);
        });
    },[setCVI])
    
    return cvi;
}

export default useCVI;
