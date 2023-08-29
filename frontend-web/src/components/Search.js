import { useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { AppContext } from "../contextAPI";

export function StationSearch() {
  const { updateQuery, updatePage } = useContext(AppContext);

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    if (searchTerm == "") {
      updateQuery("")
      updatePage(1)
    }
    else {
      updateQuery({ 'Name': searchTerm })
      updatePage(1)
    }
    // Perform search logic with the searchTerm


  };

  return (
    <div className="flex items-center">
      <input
        type="text"
        placeholder="Search by station name"
        className="px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-96"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        onClick={handleSearch}
      >   <FontAwesomeIcon icon={faSearch} />
      </button>
    </div>
  );
}

export function TripSearch() {
  const [departureStation, setDepartureTerm] = useState("");
  const [returnStation, setReturnTerm] = useState("");
  const { updateQuery, updatePage } = useContext(AppContext);

  const handleSearch = () => {
    // Perform search logic for departure and return station names using departureStation and returnStation

    //   updateQuery({'Name':searchTerm})
    if (departureStation == "" && returnStation == "") {
      updateQuery("")
      updatePage(1)
    }
    else {
      updateQuery({ 'departureStationName': departureStation, 'returnStationName': returnStation })
      updatePage(1)
    }
  };

  return (
    <div className="flex">
      <div className="mr-4">
        <input
          type="text"
          placeholder="Search by departure station name..."
          value={departureStation}
          onChange={(e) => setDepartureTerm(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-96"
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Search by return station name..."
          value={returnStation}
          onChange={(e) => setReturnTerm(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-96"
        />
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          onClick={handleSearch}
        >   <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
    </div>
  );
}