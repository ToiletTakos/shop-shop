import React, { createContext, useContext } from 'react';
import { useProductReducer } from './reducers';

// when we run the createContext() function, it creates a new Context object.
const StoreContext = createContext();
const { Provider } = StoreContext;

// we instantiate our initial global state with useProductReducer()
const StoreProvider = ({ value = [], ...props}) => {
    //because useReducer() is wrapped in this  every time we run useProductReducer() we receieve the state and dispatch;
    const [state, dispatch] = useProductReducer({
        products: [],
        categories: [],
        currentCategory: '',
    });
    
    //use this to confirm it works!
    console.log(state);
    //if we dont pass {...props} nothing on the page would render
    return <Provider value={[state, dispatch]}{...props} />;
};

const useStoreContext = () => {
    return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };