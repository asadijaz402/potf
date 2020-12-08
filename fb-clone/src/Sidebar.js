import React from 'react'
import './Sidebar.css';
import SidebarRow from './SidebarRow';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import { useStateValue } from './StateProvider';

function Sidebar() {
    const [{user}, dispatch]=useStateValue();
    return (
        <div className='sidebar'>
            <SidebarRow src={user.photoURL} 
            title={user.displayName}
            
             />

<SidebarRow 
    title='COVID-19 informatin center'
    Icon={LocalHospitalIcon}
/>
<SidebarRow 
    title='Pages'
    Icon={EmojiFlagsIcon}
/>
<SidebarRow 
    title='Frinds'
    Icon={PeopleIcon}
/>
<SidebarRow 
    title='Messanger'
    Icon={ChatIcon}
/>
<SidebarRow 
    title='MerketPlace'
    Icon={StorefrontIcon}
/>
<SidebarRow 
    title='Videos'
    Icon={VideoLibraryIcon}
/>
<SidebarRow 
    Icon={ExpandMoreOutlinedIcon}
/>




        </div>
    )
}

export default Sidebar;
