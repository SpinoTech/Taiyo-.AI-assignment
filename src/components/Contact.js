import React, { useState } from 'react'
import Card from './Card';
import InputComponent from './InputComponent';

export default function Contact() {
  const [details, setDetails] = useState([]);
  const [contacts, setContacts] = useState({
    id: 0,
    status: "active"
  })

  const onHandleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value)
    setContacts({ ...contacts, [name]: value })
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setContacts({ ...contacts, "id": Math.floor(Math.random() * 100) + Date.now() })
    setDetails([...details, contacts])
  }

  const updateDetails = (id, updatedData) => {
    const updatedDetails = details.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          first_name: updatedData.first_name,
          last_name: updatedData.last_name,
          status: updatedData.status,
        };
      }
      return item;
    });
    setDetails(updatedDetails);
  };

  const deleteDetails = (idToDelete) => {
    const updatedDetails = details.filter((item) => item.id !== idToDelete);
    setDetails(updatedDetails);
  };




  return (
    <div className='h-full w-full flex flex-col'>
      <div className='flex h-2/6 w-full flex justify-center items-center'>
        <InputComponent handleSubmit={handleSubmit} onHandleChange={onHandleChange} contacts={contacts} />
      </div>

      {
        details.length === 0 ? <>
          <div class="bg-indigo-200 text-center py-4 lg:px-4">
            <div class="p-2 bg-indigo-800 items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex" role="alert">
              <span class="flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-xs font-bold mr-3">Empty Contact</span>
              <span class="font-semibold mr-2 text-left flex-auto">Please Add Your Details For Adding Contacts</span>
              <svg class="fill-current opacity-75 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" /></svg>
            </div>
          </div>
        </> :
          <div className='flex h-4/6 w-full grid grid-cols-2 md:grid-cols-4 gap-4 overflow-hidden overflow-y-scroll scrollbar-hide p-3'>
            {
              details.map((detail, index) => {
                return <Card key={index} detail={detail} updateDetails={updateDetails} deleteDetails={deleteDetails} />
              })
            }
          </div>
      }
    </div>

  )
}

