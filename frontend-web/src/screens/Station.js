import React, { useContext, useEffect, useState } from 'react'
import { SimpleMap } from '../components/Map';
import { AppContext } from '../contextAPI';
import Table from '../components/Table';
import { LoadingPage } from '../components/Loading';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Station() {
    const { fetchData,data } = useContext(AppContext);
    //const [data,setData]=useState(null)
    const location = useLocation();
    useEffect(() => {
        fetchData(location.pathname)
      
    }, [])
    
    const headers = [
        "ID",
        "Name",
        "Adress",
        "Operaattor",
        "Kapasiteet",
    ];
    const headers_2 = [
        "The number of journeys starting from the station",
        "The number of journeys ending at the station",
        "The average distance of a journey starting from the station",
        "The average distance of a journey ending at the station",
    
      ];
    
    if (data) {
        return (
            <div className='flex flex-row '>
                <div className='flex flex-col w-[50%]  p-2'>
                    <Table headers={headers} filter={false} pagination={false} displayedData={data.data} />
                    <table className="table-auto mb-10 text-center">
          <thead>
            <tr>
              {headers_2.map((header) => (
                <th key={header} className="border p-2">{header}</th>
              ))}

            </tr>
          </thead>
          <tbody>
          <tr>
              <td className="border p-2">{data.total_number["journeys_starting_from"]}</td>
              <td className="border p-2" >{data.total_number["journeys_ending_at"]}</td>
              <td className="border p-2" >{data.average_distance["journeys_starting_from_(km)"]}</td>
              <td className="border p-2">{data.average_distance["journeys_ending_at_(km)"]}</td>
            </tr>

          </tbody>
        </table>
        <table className=" table-auto mb-10">
          <thead>
            <tr>
              <th className="border p-2 w-[50%]">Top 5 most popular return stations for journeys starting from the station</th>
              <th className="border p-2  w-[50%]">Top 5 most popular departure stations for journeys ending at the station </th>
            </tr>
          </thead>
          <tbody>
           <tr>
              <td className="border p-2" key="abc">
                {data.top_5["return"].length > 0 ? data.top_5["return"].map(sta => <li key={sta}>{sta}</li>) : "No data"}
              </td>
              <td className="border p-2" key="afc">
                {data.top_5["departure"].length > 0 ? data.top_5["departure"].map(sta => <li key={sta}>{sta}</li>) : "No data"}
              </td>
            </tr>



          </tbody>
        </table>
                </div>
                <div className=' w-[50%]'>
                    <SimpleMap x={data.data[0]["x"]} y={data.data[0]["y"]}></SimpleMap>
                </div>
            </div>
        )
    }
    else
    {
     return (
        <LoadingPage message={"Loading"}/>
       )
    }




}
