import React, {useState, useEffect} from 'react'
import moment from 'moment'
import axios from 'axios'


const url = 'https://api.covid19api.com/summary'
const FetchData = () => {
    const [countries,setCountries] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        const fetchCountryData = async () => {
            /*const axios = require('axios');*/
            const response = await axios.get(url)
            setCountries(response.data.Countries)
            setIsLoading(false)
            
        }
        fetchCountryData()
    }, [])
    return (
    <>
    {isLoading ? (
    <h1 className="text-4xl text-center mt-32 text-white lg:text-8xl">Loading...
    </h1>) : (
    <section className="data bg-gray-900 grid grid-cols-1 gap-10 px-10 py-10 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 2xl:px-20grid grid-cols-1 gap-10 text-white p-10 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
            {countries.map((country) => { 
            const {ID, 
                Country, 
                CountryCode, 
                NewConfirmed, 
                TotalCOnfirmed, 
                NewDeaths,
                TotalDeaths, 
                NewRecovered, 
                TotalRecovered, 
                Date } = country
            return(
                <div key={ID} className="bg-gray-800 px-5 py-4 rounded-lg"> 
                <h2 className='font-bold text-blue-500 text-3xl mb-4'>{Country},<span className="font-light"></span>{CountryCode}</h2>
                <ul>
                    <li className="flex justify-between my-2 text-red-300"><span className="font-bold">New Confirmed Cases:</span>{NewConfirmed}</li>
                    <li className="flex justify-between my-2 text-blue-300"><span className="font-bold">Total Confirmed Cases:</span>{TotalCOnfirmed}</li>
                    <li className="flex justify-between my-2 text-yellow-300"><span className="font-bold">New Deaths:</span> {NewDeaths}</li>
                    <li className="flex justify-between my-2 text-white-300"><span className="font-bold">Total Deaths:</span> {TotalDeaths}</li>
                    <li className="flex justify-between my-2 text-indigo-300"><span className="font-bold">New Recovered:</span> {NewRecovered}</li>
                    <li className="flex justify-between my-2 text-pink-300"><span className="font-bold">Total Recovered:</span> {TotalRecovered}</li>
                    <li className="text-green-100 mt-5"><span className="font-bold">Date: </span>{moment(`${Date}`).format('MMM Do YYYY hh:mm:ss')}</li>
                </ul>
                </div>
            )
            })}
    </section>)}
    
    className="my-3 flex items-center justify-between"
    </>
)
}

export default FetchData