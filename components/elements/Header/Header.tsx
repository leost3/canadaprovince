import React from 'react'

import { Login } from '../Login'
import { Logo } from '../logo'


export const Header: React.FC<{ className?: string }> = ({ className }) => {
    return (
        <div className={className}>
            <Logo />
            <Login />
        </div>
    )
}