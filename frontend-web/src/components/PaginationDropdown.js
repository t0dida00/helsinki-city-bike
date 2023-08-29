import React, {useEffect, useState, useContext} from "react"
import { AppContext } from '../contextAPI';

export default function PaginationDropdown() {
    const {updatePage,updateSize,itemsPerPage} = useContext(AppContext); 

    const handleColumnsPerPageChange= (event)=>{
        event.preventDefault()
        const newSize = event.target.value;
    
        updatePage(1)
        updateSize(newSize)
    }
    return (
        <div className="flex items-center">
          <label htmlFor="columnsPerPage" className="mr-2">
            Columns per page:
          </label>
          <select
            id="columnsPerPage"
            value={itemsPerPage}
            onChange={handleColumnsPerPageChange}
            className="py-2 px-4 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
          >
            <option value={50}>50</option>
            <option value={100}>100</option>
            <option value={150}>150</option>
            <option value={200}>200</option>
          </select>
        </div>
      );
}
