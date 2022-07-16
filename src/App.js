import React, { useState, useEffect } from "react";
import Users from "./components/Users";
import AddUser from "./components/AddUser";

function App() {

  let [users, SetUser] = useState([]);
  let [showForm, SetShowForm] = useState(false);
  let [counter, SetCount] = useState(0);

  useEffect(() => {

  fetch("https://randomuser.me/api/?results=10")
    .then (res => res.json())
    .then (users => {
      let rawUsers= users.results;
      let filterusers = rawUsers.map(ele => {
        return{
          uuid: ele.login.uuid,
          image: ele.picture.thumbnail,
          name: `${ele.name.title} ${ele.name.first} ${ele.name.last}`,
          phone: ele.phone
        }
      });
      SetUser(filterusers);
      SetCount(filterusers.length);
      })

      .catch(err => console.log(err));
    },[]);



const showFormHandler=()=>{
  SetShowForm(!showForm);
}
  const AddUserHandlar = (newuser) => {
    let newUsers = [newuser, ...users];
    SetUser(newUsers);
    SetShowForm(!showForm);
    SetCount(newUsers.length);
  }
  

  const removeUserHandler = (uuid) => {
    let remainUsers = users.filter(ele => ele.uuid != uuid);
    SetUser(remainUsers);
    SetCount(remainUsers.length);
  }

  return (
    <div className="container my-5 ">
      <div className='row my-3'>
        <div className='col-7'> <h1 className="text-info">Employees</h1></div>
        <div className='col-3 my-2 text-info '>
          <strong>Count:{counter}</strong></div>
        <div className="mt-3 " >
          <button className="btn btn-primary sm" onClick={showFormHandler}>
            <i className="fa fa-add"></i> Add
          </button></div>
      </div>
      {showForm && <AddUser addUser={AddUserHandlar} />}
   


      {
        users.map(ele => <Users key={ele.uuid} tdata={ele} remove={removeUserHandler} />)
      }

    </div>
  );
}

export default App;
