import React, { useState } from 'react';

const AddUser=(props)=> {

    const [image, SetImage] = useState("");
    const [name, SetName] = useState("");
    const [phone, SetPhone] = useState("");
    const [uuid, SetUuid] = useState("");

    const ImageChangeHandler = (event) => {
        SetImage(event.target.value);
    
    }
    const NameChangeHandler = (event) => {
        SetName(event.target.value);
    
    }
    const PhoneChangeHandler = (event) => {
        SetPhone(event.target.value);
    
    }
    const UuidChangeHandler = (event) => {
        SetUuid(event.target.value);
    
    }
    const SubmitHandler=(event)=>{
        event.preventDefault();
        let users={
            image:image,
            name:name,
            phone:phone,
            uuid:uuid
        };
        props.addUser(users);
    }


    return (
        <div className='card bg-info px-2'>
            <form onSubmit={SubmitHandler}>
                <div className="mb-2">

                    <label htmlFor="image" className="form-label text-white">Image</label>
                    <input type="text" className="form-control" id="image" onChange={ImageChangeHandler} />
                </div>
                <div className="mb-2">
                    <label htmlFor="name" className="form-label text-white">Name</label>
                    <input type="text" className="form-control" id="name" onChange={NameChangeHandler} />

                </div>
                <div className="mb-2">
                    <label htmlFor="phone" className="form-label text-white">Phone</label>
                    <input type="tel" className="form-control" id="phone"  onChange={PhoneChangeHandler}/>
                </div>
                <div className="mb-2">
                    <label htmlFor="uuid" className="form-label text-white">Uuid</label>
                    <input type="text" className="form-control" id="uuid" onChange={UuidChangeHandler}/>
                </div>

                <button type="submit" className="btn btn-primary float-end btn-sm mb-2">Submit</button>
            </form>
        </div>
    );
}
export default AddUser;