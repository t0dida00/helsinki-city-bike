import React, {useEffect, useState, useContext} from "react"
import { AppContext } from '../contextAPI';
export const Pagination = () => {
  // const [page, setPage] = useState(1)
  const {page,totalPages,updatePage} = useContext(AppContext); 
  const [currentPage,setCurrentPage] = useState(page)
  // const onPageChange = (newPage)=>{
  //   console.log(newPage)
  // }
  const handlePageChange = (newPage) => {
    
    if(!isNaN(newPage))

    updatePage(newPage)
    setCurrentPage(newPage)
   }
   const generatePaginationLinks = () => {
    const maxLinks = 8; // Maximum number of pagination links to show
    const pageLinks = [];
  
    // If there are less than maxLinks pages, show all page links
    if (totalPages <= maxLinks) {
      for (let i = 1; i <= totalPages; i++) {
        pageLinks.push(i);
      }
    }
    // If there are more than maxLinks pages, show links for current page and surrounding pages
    else {
      let startPage = Math.max(page - 3, 1); // Calculate the start page based on the current page
      let endPage = Math.min(startPage + maxLinks -1, totalPages); // Calculate the end page based on the start page and maxLinks
      // Adjust the start page if there are not enough pages to fill maxLinks
      if (endPage - startPage < maxLinks - 1) {
        startPage = Math.max(endPage - maxLinks + 3 , 1);
        console.log(startPage)
      }
  
      // Generate the page links within the range of startPage to endPage
      for (let i = startPage; i <= endPage -1; i++) {
      
        pageLinks.push(i);
      }
  
      // Show first page link if not already shown
      if (pageLinks[0] > 1) {
        pageLinks.unshift(1);
      }
  
      // Show last page link if not already shown
      if (pageLinks[pageLinks.length - 1] < totalPages) {
        
        pageLinks.push(totalPages);
      }
  
      // Show ellipsis if not at the beginning or end
      //At begin
      if (pageLinks[1] > 2) {
        pageLinks.splice(1, 0, "...");
      }
     //At end
      if (pageLinks[pageLinks.length - 2] < totalPages - 1) {
        pageLinks.splice(pageLinks.length - 1, 0, "...");
      }
    }
    
    return pageLinks;
  };
  const jumpPage =(e)=>{
    e.preventDefault()
    if(currentPage > totalPages || currentPage <= 0)
    {
      window.alert('The page number is invalid ! Re-enter it');
    }
    else{
   updatePage(currentPage)
    }
  
  }

  const paginationLinks = generatePaginationLinks()

  return (
    <div>
      <div className="flex justify-center my-4 flex-wrap">
        <nav>
          <ul className="pagination flex justify-around">
            {paginationLinks.map((pageNumber, index) => (
              <li
                key={index}
                className={`page-item mr-4 `}
              >
                <button
                  className={`page-link hover:bg-blue-700 ${
                    pageNumber == page  ? "bg-blue-800" : " bg-blue-500"
                  } text-white font-bold py-2 px-4 rounded `}
                  onClick={() => handlePageChange(pageNumber)}
                >
                  {pageNumber}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <form>
        <input
          type="number"
          className="page-item"
          value={currentPage}
          onChange={(e) => setCurrentPage(e.target.value)}
        />{" "}
        Of {totalPages}
        {"  "}
        <button
          onClick={jumpPage}
          type="button"
        >
          Submit
        </button>
      </form>
    </div>
  )
}
