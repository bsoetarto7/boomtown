import React from 'react';
import { ItemsCard } from '../../components/Card';
import { ProfileCard } from '../../components/Profile';

const Profile = ({profileCardData,profileUser, numberItemsBorrowed}) => {
  return(
    <div>
      <ProfileCard profileUser={profileUser} itemsShared={profileCardData.length} numberItemsBorrowed={numberItemsBorrowed}/>
      { 
        profileCardData.map(data => 
          <ItemsCard 
            key         ={data.id}
            title       ={data.title}
            itemOwner   ={data.itemOwner} 
            imageUrl    ={data.imageUrl} 
            description ={data.description}
            tags        ={data.tags}
            createdOn   ={data.createdOn}
            available   ={data.available}
            user        ={data.user} />
        ) 
      }
    </div>
  )
}

export default Profile;