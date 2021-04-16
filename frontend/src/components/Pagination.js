const Pagination = ({productsPerPage, filteredProducts, currentPage, setCurrentPage}) => {
    const pageNumbers = []
    for(let i = 1; i <= Math.ceil(filteredProducts.length / productsPerPage); i++){
        pageNumbers.push(i)
    }
    return (
        <div className='pagination'>
          {pageNumbers.map(number => <div key={number} className={currentPage === number ? 'pagination-active' : ''} onClick={()=>setCurrentPage(number)}>{number}</div>)}  
        </div>
    )
}

export default Pagination
