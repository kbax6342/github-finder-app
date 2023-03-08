import React, {useState, useEffect} from 'react'
import UserItem from './UserItem'
import axios from 'axios'

const Users = () => {
    const [usersTwo, setUsersTwo] = useState([])
    
    useEffect(() => {
        axios
          .get("https://api.github.com/users")
          .then(response =>{

            setUsersTwo(response.data)
            console.log(setUsersTwo)
          } );
          
      }, []);

const users = [
{
    id: '1',
    login: "mojombo",
    avatar_url: 'https://images.pexels.com/photos/15569152/pexels-photo-15569152.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    html_url:'https://github.com/adrianhajdin'
},
{
    id: '2',
    login: "mojombo2",
    avatar_url: 'https://images.pexels.com/photos/15569152/pexels-photo-15569152.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    html_url:'https://github.com/adrianhajdin'
},
{
    id: '3',
    login: "mojombo3",
    avatar_url: 'https://images.pexels.com/photos/15569152/pexels-photo-15569152.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    html_url:'https://github.com/adrianhajdin'
}]


  return (
    <div className='flex flex-wrap '>
      {usersTwo.map(( user ) => (
        <div className=''>
          
            <UserItem key={usersTwo.id} user={user} />
 
        </div>
      ))}
    </div>
  )
}

export default Users
