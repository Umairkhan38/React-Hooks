import {useEffect} from 'react';



const useCustom=(state)=>{

    useEffect(()=>{
        if(state>0){
            document.title=`Cart (${state})`
        }else{
            document.title=`Cart`
        }
    },[state])
}

export default useCustom;