import { createContext, useState, useEffect } from 'react';
import { BASE_URL } from '../config/index';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';


export const AppContext = createContext();


export const AppProvider = ({ children }) => {
  const navigate = useNavigate();

  const location = useLocation();
  const path = location.pathname;
  const [data, setData] = useState(null)
  const [dataList, setDataList] = useState(null);
 
  const [page, setPage] = useState(1)
  const [isLoading, setIsLoading] = useState(false);
  const [itemsPerPage, setItemsPerPage] = useState(50);
  const [totalPages, setTotalPages] = useState(0);
  const [search, setSearch] = useState("")
  const [sort, setSort] = useState({ field: "Departure", order: 1 })


  const updatePage = (newPage) => {
    setPage(newPage)
  }
  const updateSize = (newSize) => {
    setItemsPerPage(newSize)
  }
  const updateQuery = (newQuery) => {
    setSearch(newQuery)
  }
  const updateFilter = (newFilter) => {
    var filterOptions = {
      field: "",
      order: 1,
    }
    switch (newFilter.field) {
      case "distance":
        filterOptions.field = "Covered distance (m)"
        break;
      case "duration":
        filterOptions.field = "Duration (sec)"
        break;
      // Add more cases for other fields if needed
      default:
        filterOptions.field = "Departure"
    }
    if (newFilter.order == "desc") {
      filterOptions.order = -1
    } else {
      filterOptions.order = 1
    }
    console.log(filterOptions)
    setSort(filterOptions)
  }

  const goToPage = (pageInfo) => {
    setData(null)
    navigate(`station/${pageInfo["Name"]}`)

  }

  const fetchData = async (path) => {

    await axios
      .get(`${BASE_URL}${path}`)
      .then(res => {
        let stationInfo = res.data;
        console.log(stationInfo)
        setData(stationInfo)
      })
      .catch(e => {
        window.alert(e.response)
      });
  }

  useEffect(() => {
    const fetchDataList = () => {
      setIsLoading(true);
      axios
        .get(`${BASE_URL}${path}?page=${page}&size=${itemsPerPage}&sort=${sort.field}&order=${sort.order}`)
        .then(res => {
          let stationInfo = res.data;
          setDataList(stationInfo)
          const totalPages = Math.ceil(stationInfo.length / itemsPerPage);
          setTotalPages(totalPages)
          setIsLoading(false)
        })
        .catch(e => {
          window.alert(e.response.data)
          setIsLoading(false);
        });
    }
    const fetchSearchDataList = () => {
      setIsLoading(true);
      const formData = new FormData();
      for (const key in search) {
        console.log(key, search[key])
        formData.append(key, search[key]);
      }
      axios
        .post(`${BASE_URL}${path}?page=${page}&size=${itemsPerPage}&sort=${sort.field}&order=${sort.order}`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        .then(res => {
          let stationInfo = res.data;
          setDataList(stationInfo)
          const totalPages = Math.ceil(stationInfo.length / itemsPerPage);
          setTotalPages(totalPages)
          setIsLoading(false)
        })
        .catch(e => {
          window.alert(e.response.data)
          setIsLoading(false);
        });
    }
    if (search === "") {
      //navigate(`${path}?page=${page}&size=${itemsPerPage}&sort=${sort.field}&order=${sort.order}`);
      fetchDataList();
    } else {
      navigate(`${path}?page=${page}&size=${itemsPerPage}&sort=${sort.field}&order=${sort.order}`);
      fetchSearchDataList();
    }
  }, [page, itemsPerPage, search, sort]);






  const value = {
    dataList,
    isLoading,
    page,
    itemsPerPage,
    totalPages,
    updatePage,
    updateSize,
    path,
    updateQuery,
    updateFilter,
    goToPage,
    fetchData,
    data

  }
  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}


