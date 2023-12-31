import React from 'react'

export default function PopUpCards({ name, active, recorded, death, flag }) {
    return (

        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

            <img className="rounded-t-lg" src={flag} alt={name} />

            <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Active Cases : {active}</p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Recorded Cases : {recorded}</p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Death Cases : {death}</p>
            </div>
        </div>

    )
}
