import React, { Component } from 'react';
import moment from 'moment';
//import Greeting from './components/Greeting';
import UserList from './components/UserList';
import SelectedUsers from './components/SelectedUsers/SelectedUsers';
import Timer from './components/Timer/Timer';
import Greeting from './components/Greeting';
import FormLogin from './components/FormLogin/Login';
import Calendar from './components/myCalendar/Calendar';
import Slider from './components/Slider/Slider';
import Carousel from './components/Carousel/Carousel';
import { slidesCollection } from './components/Carousel/config/config';
import UserLoader from './components/UserLoader/UserLoader';

// const dbData = [
//   {
//     id: 1,
//     fName: 'firstname1',
//     lName: 'lastname1',
//   },
//   {
//     id: 2,
//     fName: 'firstname2',
//     lName: 'lastname2',
//   },
//   {
//     id: 3,
//     fName: 'firstname3',
//     lName: 'lastname3',
//   },
//   {
//     id: 4,
//     fName: 'firstname4',
//     lName: 'lastname4',
//   },
//   {
//     id: 5,
//     fName: 'firstname5',
//     lName: 'lastname5',
//   },
// ];
/*
class App  extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: dbData.map((u) => ({ ...u, isSelected: false })),
    }
  }
  setUsers = (newUsers) => {
    this.setState({
      users: newUsers,
    })
  };
  render(){
    const {users} = this.state;
    return(
      <>
      <UserList users = {users} setUsers={this.setUsers}/>
      <SelectedUsers users={users}/>
      </>
    )
  }
}


  
export default App;
*/

const App = () => {
  return (
    <>
      <Greeting name={'React'} />
      {/* <Timer/>
    <FormLogin/>
    <Calendar/>  */}
      {/* <Slider /> */}

      {/* <Carousel width={800} height={400} slides={slidesCollection} /> */}

      <UserLoader />
    </>
  );
};
export default App;
