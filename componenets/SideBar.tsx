import React from 'react'
import SideBarRows from './SideBarRows'
import { BellIcon,HashtagIcon,BookmarkIcon,CollectionIcon,DotsCircleHorizontalIcon,MailIcon,UserIcon,HomeIcon } from '@heroicons/react/outline'



function SideBar() {
  return (
    <div className=''>
        <img className="w-10 h-10" src='https://links.papareact.com/drq' alt="twitter"/>
       <SideBarRows  Icon={BellIcon} name="message"/>
       <SideBarRows  Icon={HashtagIcon} name="message"/>
       <SideBarRows  Icon={BookmarkIcon} name="message"/>
       <SideBarRows  Icon={CollectionIcon} name="message"/>
       <SideBarRows  Icon={DotsCircleHorizontalIcon} name="message"/>
       <SideBarRows  Icon={MailIcon} name="message"/>
       <SideBarRows  Icon={UserIcon} name="message"/>
       <SideBarRows  Icon={HomeIcon} name="message"/>
       
    </div>
  )
}

export default SideBar