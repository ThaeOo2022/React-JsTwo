import React from 'react';

const Users=(props) =>{

    const removeHandler = () => {
        props.remove(props.tdata.uuid);
    }
 

    return (
        <div>

            <div className='card my-3'>
                <div className='row '>
                    <div className='col-2'>
                        <img src={props.tdata.image} width="50px" height="50px"></img>
                    </div>
                    <div className='col-8 '>
                        <strong>{props.tdata.name}</strong><br />
                        <strong>{props.tdata.phone}</strong></div>


                    <div className='col-1 mt-2  ' >
                        <button className='btn btn-danger sm' onClick={removeHandler}>
                           <i className='fa fa-trash'></i>
                            </button>
                    </div>

                </div>
            </div>
        </div>
    );
}
export default Users;
