import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";


function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // const [data1, setData1] = useState([]

    // )
    // useEffect(() => {
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data)
    //     })
    // },[])
    //     useEffect(() => {
    //     fetch('https://api.github.com/users/ishansinha019')
    //     .then(response => response.json())
    //     .then(data1 => {
    //         console.log(data1);
    //         setData1(data1)
    //     })
    // },[])

    return (
        <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">Github followers: {data.followers} 
            <img src={data.avatar_url} alt="Git Picture" width={300} />
        </div>
        
    )
}

export default Github

export const gitHubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/ishansinha019')
    return response.json()
}
    
// the below method using loader is more optimize as the api data is fetched and stored in cache as we hover over the new route in the Front end

export const Gitpush