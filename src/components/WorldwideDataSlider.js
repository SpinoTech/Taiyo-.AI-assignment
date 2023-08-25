import React from 'react'
import { Slider } from 'infinite-react-carousel'

export default function WorldwideDataSlider({ data }) {
    return (
        <Slider dots slidesToShow={3} autoplay={true} className="w-full">
            {
                data && <div className=" p-1 border border-gray-200 rounded-lg shadow bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% text-black">
                    <h5 className="text-sm text-center font-bold sm: text-sm"> Total Cases : {data.cases}</h5>
                </div>
            }
            {
                data && <div className=" p-1 border border-gray-200 rounded-lg shadow bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% text-black">
                    <h5 className="text-sm text-center font-bold sm: text-sm"> Today Cases : {data.todayCases}</h5>
                </div>
            }
            {
                data && <div className=" p-1 border border-gray-200 rounded-lg shadow bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% text-black">
                    <h5 className="text-sm text-center font-bold "> Total deaths : {data.deaths}</h5>
                </div>
            }
            {
                data && <div className=" p-1 border border-gray-200 rounded-lg shadow bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% text-black">
                    <h5 className="text-sm text-center font-bold "> Total recovered : {data.recovered}</h5>
                </div>
            }
             {
                data && <div className=" p-1 border border-gray-200 rounded-lg shadow bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% text-black">
                    <h5 className="text-sm text-center font-bold ">  TodayRecovered : {data.todayRecovered}</h5>
                </div>
            }
             {
                data && <div className=" p-1 border border-gray-200 rounded-lg shadow bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% text-black">
                    <h5 className="text-sm text-center font-bold ">  Active Cases : {data.active}</h5>
                </div>
            }
             {
                data && <div className=" p-1 border border-gray-200 rounded-lg shadow bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% text-black">
                    <h5 className="text-sm text-center font-bold ">  Most critical : {data.critical}</h5>
                </div>
            }
             {
                data && <div className=" p-1 border border-gray-200 rounded-lg shadow bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% text-black">
                    <h5 className="text-sm text-center font-bold ">  Total tests : {data.tests}</h5>
                </div>
            }
            {
                data && <div className=" p-1 border border-gray-200 rounded-lg shadow bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% text-black">
                    <h5 className="text-sm text-center font-bold ">  Total population : {data.population}</h5>
                </div>
            }
        </Slider>

    )
}
