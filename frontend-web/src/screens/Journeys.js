import React, { useContext } from 'react'
import { AppContext } from '../contextAPI';
import { LoadingPage } from '../components/Loading';
import Table from '../components/Table';

export function Journeys() {
    const {dataList,isLoading} = useContext(AppContext);
    const headers = [
      "Departure",
      "Departure station name",
      "Return",
      "Return station name",
      "Covered distance (km)",
      "Duration (m)",


  ];
   if(dataList)
   {
    return (
      <div className="bg-[#F8F8FF] p-4 min-h-full ">
      <Table headers={headers} displayedData={dataList.data} filter={true} pagination={true}/>
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
