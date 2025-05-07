import React from 'react';
import TableHeader from './TableHeader';
import TableBody from './TableBody';
import TablePagination from './TablePagination';

function MainContent() {
  return (
    <main className="flex-1 p-8 max-w-7xl mx-auto">
      <h1 className="text-lg font-semibold mb-1 select-none">App Roster</h1>
      <div className="text-sm text-gray-500 mb-6 select-none">
        Network / User Table /{' '}
        <span className="text-gray-900 font-normal">App Roster</span>
      </div>
      <div className="flex justify-end space-x-3 mb-6">
        <button
          className="flex items-center space-x-2 border border-gray-300 rounded-md px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          type="button"
        >
          <i className="fas fa-download"></i>
          <span>Export</span>
        </button>
        <button
          className="flex items-center space-x-2 border border-gray-300 rounded-md px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          type="button"
        >
          <i className="far fa-calendar-alt"></i>
          <span>Jan 20, 2025 - Feb 09, 2025</span>
        </button>
      </div>
      <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
        <div className="flex flex-wrap items-center gap-3 p-4 border-b border-gray-200">
          <div className="flex items-center border border-gray-200 rounded-md px-3 py-2 w-60">
            <i className="fas fa-search text-gray-300 mr-2"></i>
            <input
              className="w-full text-sm text-gray-400 placeholder-gray-300 focus:outline-none"
              placeholder="Search Users..."
              type="text"
            />
          </div>
          <button
            className="flex items-center space-x-1 border border-gray-300 rounded-md px-3 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-100"
            type="button"
          >
            <i className="fas fa-filter"></i>
            <span>Status</span>
          </button>
          <button
            className="flex items-center space-x-1 border border-gray-300 rounded-md px-3 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-100"
            type="button"
          >
            <i className="fas fa-filter"></i>
            <span>Sort Order</span>
          </button>
          <div className="ml-auto flex space-x-3">
            <button
              className="bg-blue-600 text-white text-sm font-semibold rounded-md px-4 py-2 hover:bg-blue-700 flex items-center space-x-2"
              type="button"
            >
              <i className="fas fa-sliders-h"></i>
              <span>Filters</span>
            </button>
            <button
              className="border border-gray-300 rounded-md px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-100 flex items-center space-x-2"
              type="button"
            >
              <i className="fas fa-columns"></i>
              <span>Columns</span>
            </button>
          </div>
        </div>
        <table className="min-w-full text-sm text-left text-gray-700">
          <TableHeader />
          <TableBody />
        </table>
        <TablePagination />
      </div>
    </main>
  );
}

export default MainContent;