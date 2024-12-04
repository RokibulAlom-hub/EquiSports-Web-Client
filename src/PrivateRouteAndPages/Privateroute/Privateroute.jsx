import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProviderFile/AuthProvider';
import Spinner from '../../Utils/Spinner/Spinner';

const Privateroute = ({children}) => {
    const{ user,loader} = useContext(AuthContext)
    if(loader){
        return <Spinner></Spinner>
    }
    if(user){
        return children
    }
};

export default Privateroute;