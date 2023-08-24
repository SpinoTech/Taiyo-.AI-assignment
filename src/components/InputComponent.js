import React from 'react'

export default function InputComponent({onHandleChange,handleSubmit,contacts}) {
    return (
        
            <form onSubmit={handleSubmit} className='h-4/5 w-3/5 rounded-3xl flex flex-col justify-around items-center' >

                <input type="text" name="first_name" className="w-4/5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 my-1 text-center" placeholder="first name" required onChange={onHandleChange} value={contacts.first_name}/>

                <input type="text" name="last_name" className="w-4/5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 my-1 text-center" placeholder="last name " required onChange={onHandleChange} value={contacts.last_name}/>


                <div className="flex items-center flex-row my-1">
                    <label className="ml-2 mx-5 text-sm font-medium text-gray-900 dark:text-gray-300 text-lg">status:</label>
                    <input id="default-radio-1" type="radio" value="active" name="status" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 text-lg" onChange={onHandleChange} required/>
                    <label htmlFor="default-radio-1" className="ml-2 mx-5 text-sm font-medium text-gray-900 dark:text-gray-300 text-lg">Active</label>
                    <input id="default-radio-2" type="radio" value="inactive" name="status" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 text-lg" onChange={onHandleChange} required/>
                    <label htmlFor="default-radio-2" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 text-lg">Inactive</label>
                </div>

                <button type="submit" className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Save Contact</button>
            </form>
       
    )
}
