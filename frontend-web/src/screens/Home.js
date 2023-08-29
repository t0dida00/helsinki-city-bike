import React, { useContext } from 'react'
import { AppContext } from '../contextAPI';
import { LoadingPage } from '../components/Loading';
import Table from '../components/Table';

export function Home() {
    const {dataList,isLoading} = useContext(AppContext);
    const headers = [
      "FID",
      "ID",
      "Nimi",
      "Namn",
      "Name",
      "Osoite",
      "Adress",
      "Kaupunki",
      "Stad",
      "Operaattor",
      "Kapasiteet",
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
