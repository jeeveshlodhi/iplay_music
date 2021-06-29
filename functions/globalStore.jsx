import { useState } from "react";

const globalStore = () => {
    const [isLogged, setIsLogged] = useState(false);

    const actions = (action)=>{
        const {type, payload} = action;
        switch (type) {
            case 'setIsLogged':
                return setIsLogged(payload);                        
            default:
                return isLogged;
        }
    } 
    return {isLogged, actions}
  };

export default globalStore;