import { useState } from 'react';

import './LoginMenu.css';

import { ShowMenu } from './icons/ShowMenu'
import { OpenedMenu } from './icons/OpenedMenu'

function LoginMenu () {
    const [menuShown, setMenuShown] = useState(false);

    return (
        <div className='login'>
            <div className='loginProfile'
                 onClick={() => setMenuShown(!menuShown)}    >
                <div className="profile"></div>
                <div className='profileBtn'>
                    {menuShown? 
                        <OpenedMenu/> :
                        <ShowMenu/>
                    }
                </div>
            </div>

            {menuShown && <div className='menu'>
                    <div className='menuArrow'></div>
                    <div className='menuItem'>Profile</div>
                    <div className='menuItem'>Log Out</div>
                </div>}
        </div>
    )
}

export default LoginMenu;