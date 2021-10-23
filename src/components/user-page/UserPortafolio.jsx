import React from 'react'

import { MdCollections as CollectionIcon } from 'react-icons/md';
import { GoFileSymlinkFile as LinksIcon } from 'react-icons/go';
export const UserPortafolio = ({ values }) => {
  const { handleShowComponent, showComponent } = values
  return (
    <div className="user__portafolio">
      <CollectionIcon className="collection--icon" 
      onClick={ () => handleShowComponent(!showComponent) } />
      <LinksIcon className="links--icon" 
      onClick={ () => handleShowComponent(!showComponent) } />
      {/* <LinksIcon className="links--icon" /> */}
    </div>
  )
}
