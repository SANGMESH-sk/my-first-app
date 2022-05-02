import react, { useState,useEffect } from 'react';

const  WeatherApp=()=>{
    const [data,setData]=useState(null);
    const [search,setSearch]= useState('mumbai');
    const change=(e)=>{
        setSearch(e.target.value)
    }
    useEffect(() =>{
        const fetchApi = async () =>{
            const url=`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=matric&appid=5f08515c03b0a9325e4244a388ea1ad6`;
            const response=await fetch(url);
            const resJson=await response.json();
          
            setData(resJson.main)
        }
        fetchApi();
    },[search])
    const getWeather = () =>{
     

    }
    return(
        <div>
             <h1>hello wether api</h1>
            <div className='box'>
           
            <input type="search" name="" value={search} placeholder='search city' onChange={change}/>
            <button className='btn btn-success' onClick={getWeather}>search</button>
      
            {
                !data ? (
                    <p>no data found</p>
                ):(
                    <h1>{data.temp}</h1>
                )
            }
            <h1>5.25 cel</h1>
            </div>
           
            
        </div>
        
    )
  

}
export default WeatherApp;