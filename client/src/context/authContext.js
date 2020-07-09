import React from 'react';

const AuthContext = React.createContext({
    user: undefined,
    onLogin: ()=> undefined,
    onLogout: ()=> undefined
})

export default AuthContext