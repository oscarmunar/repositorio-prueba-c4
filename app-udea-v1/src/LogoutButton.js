import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const function_1 = {

}

const type_1 = {

}

const LogoutButton = () => {
    const { logout } = useAuth0();

    return <button onClick={() => logout({returnTo: window.location.origin})}>
        Logout
    </button>
}

export { LogoutButton, function_1, type_1 }
