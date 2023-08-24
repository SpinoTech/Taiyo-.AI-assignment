import React, { useState } from 'react'
import InputComponent from './InputComponent';

export default function Card({ detail, updateDetails ,deleteDetails}) {
    const [openEditor, setOpenEditor] = useState(false);
    const [contacts, setContacts] = useState({
        status: "active"
    })

    const onHandleChange = (e) => {
        const { name, value } = e.target;
        setContacts({ ...contacts, [name]: value })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        updateDetails(detail.id, contacts);
    }
    // console.log(detail.id,contacts)

    return (
        <div className={openEditor===true?"w-full h-auto max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700":"w-full h-64 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"}>

            <div className="flex flex-col items-center pb-10">
                <img className="w-24 h-24 m-3 rounded-full shadow-lg" src="https://cdn-icons-png.flaticon.com/512/660/660611.png" alt="Bonnie" />
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{detail.first_name + " " + detail.last_name}</h5>
                <span className="text-sm text-gray-500 dark:text-gray-400 flex flex-row items-center"><div className={detail.status === "active"?'w-4 h-4 bg-green-400 rounded-full m-2':'w-4 h-4 bg-red-400 rounded-full m-2'}></div>{detail.status === "active" ? "Active" : "Inactive"}</span>
                <div className="flex mt-4 mb-3 space-x-3 md:mt-6">
                    <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={() => setOpenEditor(!openEditor)}>Update</button>
                    <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800" onClick={()=>deleteDetails(detail.id)}>Delete</button>
                </div>
                {
                    openEditor && <InputComponent onHandleChange={onHandleChange} handleSubmit={handleSubmit} contacts={contacts}/>
                }
            </div>



        </div>
    )
}
