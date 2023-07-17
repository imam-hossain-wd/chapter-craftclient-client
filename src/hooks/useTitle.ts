import { useEffect } from "react"


 const useTitle = title =>{
    useEffect(()=>{
        document.title = `${title} - Book Catalog`;
    },[title])
}
export default useTitle;