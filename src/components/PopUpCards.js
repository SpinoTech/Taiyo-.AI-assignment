import React from 'react'

export default function PopUpCards({ name, active, recorded, death, flag }) {
    return (

        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

            <img class="rounded-t-lg" src={flag} alt={name} />

            <div class="p-5">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Active Cases : {active}</p>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Recorded Cases : {recorded}</p>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Death Cases : {death}</p>
            </div>
        </div>

    )
}
