const Pagination = ({productsPerPage, filteredProducts, currentPage, setCurrentPage}) => {
    const pageNumbers = []
    for(let i = 1; i <= Math.ceil(filteredProducts.length / productsPerPage); i++){
        pageNumbers.push(i)
    }
    function topFunction(number) {
        setCurrentPage(number)
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
      }
    return (
        <div className='pagination'>
          {pageNumbers.map(number => <div key={number} className={currentPage === number ? 'pagination-active' : ''} onClick={()=>topFunction(number)}>{number}</div>)}  
        </div>
    )
}

export default Pagination
