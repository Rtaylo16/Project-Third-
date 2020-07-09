import React from 'react';

const AuthContext = React.createContext({
    user: undefined,
    onLogin: ()=> undefined,
    onLogout: ()=> undefined,
    loaded:undefined
})

export default AuthContext