import React from "react";

const Pagination = ({
  currentPage,
  totalItems,
  itemsPerPage,
  handlePageChange,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  return (
    <div className="d-flex justify-content-center align-items-center my-4">
      {/* Previous Button */}
      <button
        className="btn btn-primary mx-2"
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>

      {/* Current Page Display */}
      <span className="mx-2">
        Page {currentPage} of {totalPages}
      </span>

      {/* Next Button */}
      <button
        className="btn btn-primary mx-2"
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
