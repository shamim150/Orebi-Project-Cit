import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import ReactPaginate from "react-paginate";
import ProductsItem from "./ProductsItem";

const items = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 1, 2, 3, 4, 5,
  6, 7, 8, 9, 10, 11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 1, 2, 3, 4, 5,
  6, 7, 8, 9, 10, 11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 1, 2, 3, 4, 5,
  6, 7, 8, 9, 10, 11, 12, 13, 14,
];

function Items({ currentItems }) {
  return (
    <>
      {currentItems &&
        currentItems.map((item, i) => (
          <ProductsItem 
            pName="Brackers"
            brand="Brand"
            price="77"
            src="/Products/Image_1.png"
            key={i}
          />
        ))}
    </>
  );
}

const Paginate = ({ itemsPerPage }) => {
  const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  console.log();
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <div className="flex gap-x-10 gap-y-10 flex-wrap ">
        <Items currentItems={currentItems} />
      </div>
      <div className="flex justify-between items-center my-[50px]">
        <ReactPaginate
          breakLabel="..."
          nextLabel=""
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel=""
          renderOnZeroPageCount={null}
          pageClassName="page-item LiCSS w-9 h-9 border border-[#F0F0F0] text-[#767676] "
          pageLinkClassName="page-link aTag w-full h-full flex justify-center items-center"
          containerClassName="pagination UL flex gap-x-4  "
          activeClassName="active bg-Primary text-white border-transparent"
          nextClassName="page-item hidden"
          previousClassName="page-item hidden"
        />
        <p> {`Products from  from ${itemOffset + 1} to ${endOffset > items.length ? items.length : endOffset} of ${items.length}`} </p>
      </div>
    </>
  );
};

export default Paginate;
