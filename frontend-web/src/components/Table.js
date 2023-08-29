import React, { useState, useEffect, useContext } from 'react';
import { Pagination } from './Pagination';
import { AppContext } from '../contextAPI';
import PaginationDropdown from './PaginationDropdown';

import { StationSearch, TripSearch } from './Search';
import Filter from './Filter';

// import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
// import {
//   Typography,
//   Button,
// } from "@material-tailwind/react";
export default function Table({ headers, displayedData,filter,pagination }) {
  const { isLoading, path,goToPage } = useContext(AppContext);

  const getFormattedValue = (header, value) => {
    if (header === 'Departure' || header === "Return") {
      // Parse the time string and format it as desired
      const dateObj = new Date(value);
      const formattedTime = dateObj.toUTCString([]);
      return formattedTime;
    }
    return value;
  };

  const handleRowClick=(row)=>{
      goToPage(row)
    }

  return (
    <>
      <div className='pt-4'>
        <div className='flex justify-between mb-2'>
         {pagination ? <PaginationDropdown /> : ""} 
         {filter ? <div className='flex justify-between mb-2 flex-col'>
            {path == '/stations' ? <StationSearch /> : <><TripSearch /><Filter /></>}

          </div>: ""} 
         
        </div>

        <table className="w-full table-auto">
          <thead>
            <tr>
              {headers.map((header) => (

                <th key={header} className="border p-2">
                  <div className='flex flex-row justify-center'>

                    {header}
                  </div>

                </th>
              ))}

            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <tr>
                <td colSpan={headers.length + 1} className="text-center my-2 "><p className="text-xl mb-2">Loading...</p></td>
              </tr> // Replace this with your loading indicator component
            ) : (displayedData ? (
              displayedData.map((row, index) => (
              
             <tr key={index} className={path === '/stations' ? 'hover:bg-gray-200 cursor-pointer' : ''} onClick={path === '/stations' ? () => handleRowClick(row) : undefined} >
                  {headers.map((header) => (
                    <td key={header} className="border p-2 text-center">  
                      {getFormattedValue(header, row[header])}
                    </td>
                  
                  ))}
           
                </tr>
               
              ))) :
              (<tr>
                <td colSpan={headers.length + 1} className="text-center my-2 "><p className="text-xl mb-2">Nothing to show</p></td>
              </tr> // Replace this with your loading indicator component)
              ))}
          </tbody>
        </table>
      </div>
      {pagination ? <Pagination /> :""}
     
    </>
  )
}
