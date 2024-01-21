import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { useState } from 'react';
import './navbarbutton.css'


export default function NavbarButton({text='Home'}) {
    const [isActive, setIsActive] = useState(false)
    
    let borderColor = isActive ? '#427303' : '#586275'
    return (
        <button class="button-18" role="button">{text}</button>
    )
}