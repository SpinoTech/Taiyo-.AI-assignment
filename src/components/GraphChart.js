import React from 'react'
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import getMaxCasesDateWise from "../assets/maxDatesMaxValue.js" 

ChartJS.register(
    BarElement, 
    CategoryScale, 
    LinearScale, 
    Tooltip, 
    Legend
)

export default function GraphChart({ data }) {
 const cases=getMaxCasesDateWise(data.cases);
 const deaths=getMaxCasesDateWise(data.deaths);
 const recovered=getMaxCasesDateWise(data.recovered);

    const casesData = {
        labels: cases.maxDates,
        datasets: [{
            label: "Total Cases Calculated by finding the maximum value of each month",
            data: cases.maxValues,
            backgroundColor: "aqua",
            borderColor: "white",
            borderWidth: 1
        }]
    }
    
    const deathsData = {
        labels: deaths.maxDates,
        datasets: [{
            label: "Total Deaths Calculated by finding the maximum value of each month",
            data: deaths.maxValues,
            backgroundColor: "#f74355",
            borderColor: "white",
            borderWidth: 1
        }]
    }

    const recoveredData = {
        labels: recovered.maxDates,
        datasets: [{
            label: "Total Recovered Count Calculated by finding the maximum value of each month",
            data: recovered.maxValues,
            backgroundColor: "#8abf26",
            borderColor: "white",
            borderWidth: 1
        }]
    }

    return (
        <div>
            <Bar data={casesData}></Bar>
            <Bar data={deathsData}></Bar>
            <Bar data={recoveredData}></Bar>
        </div>
    )
}
