import React from 'react';

function TablePagination() {
  return (
    <div className="flex flex-wrap items-center justify-between px-4 py-3 text-gray-400 text-sm border-t border-gray-200 select-none">
      <div className="flex items-center space-x-2">
        <span>Rows per page</span>
        <select
          aria-label="Rows per page"
          className="border border-gray-300 rounded-md px-2 py-1 text-gray-700 cursor-pointer focus:outline-none"
        >
          <option>5</option>
          <option>10</option>
          <option>15</option>
          <option>20</option>
        </select>
      </div>
      <div className="flex items-center space-x-2">
        <span>1 - 5 of 30</span>
        <button
          aria-label="Previous page"
          className="p-1 rounded-full hover:bg-gray-200 text-gray-400"
          type="button"
        >
          <i className="fas fa-chevron-left"></i>
        </button>
        <button
          aria-current="page"
          aria-label="Page 1"
          className="w-8 h-8 rounded-full bg-gray-200 text-gray-900 font-semibold"
          type="button"
        >
          1
        </button>
        <button
          aria-label="Page 2"
          className="w-8 h-8 rounded-full hover:bg-gray-200 text-gray-400 font-semibold"
          type="button"
        >
          2
        </button>
        <button
          aria-label="Page 3"
          className="w-8 h-8 rounded-full hover:bg-gray-200 text-gray-400 font-semibold"
          type="button"
        >
          3
        </button>
        <button
          aria-label="Page 4"
          className="w-8 h-8 rounded-full hover:bg-gray-200 text-gray-400 font-semibold"
          type="button"
        >
          4
        </button>
        <button
          aria-label="Page 5"
          className="w-8 h-8 rounded-full hover:bg-gray-200 text-gray-400 font-semibold"
          type="button"
        >
          5
        </button>
        <span className="px-2">...</span>
        <button
          aria-label="Next page"
          className="p-1 rounded-full hover:bg-gray-200 text-gray-400"
          type="button"
        >
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>
    </div>
  );
}

export default TablePagination;