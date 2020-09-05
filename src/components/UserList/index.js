import React, { Component } from 'react';
import ListItem from './ListItem';
// parent -> child  props
// child -> parent callback

const dbData = [
  {
    id: 1,
    fName: 'firstname1',
    lName: 'lastname1',
  },
  {
    id: 2,
    fName: 'firstname2',
    lName: 'lastname2',
  },
  {
    id: 3,
    fName: 'firstname3',
    lName: 'lastname3',
  },
  {
    id: 4,
    fName: 'firstname4',
    lName: 'lastname4',
  },
  {
    id: 5,
    fName: 'firstname5',
    lName: 'lastname5',
  },
];

const UserList =  (props) => {
  const {users, setUsers}=props;
  const mapUser = (user, index) => {
    const selectUserH = () => {
      const newUsers = [...users];
      newUsers[index].isSelected = !newUsers[index].isSelected;
      setUsers(newUsers);
    };
    return (
      <ListItem
      key={user.id}
      user={user}
      onSelect={selectUserH}
      isSelected={user.isSelected}
      />
    );
    };
  
    return (
    <ul>    {users.map(mapUser)}    </ul>
     )
};
export default UserList;
