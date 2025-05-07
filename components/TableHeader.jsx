import React from 'react';

function TableHeader() {
  return (
    <thead className="bg-gray-50 border-b border-gray-200">
      <tr>
        <th className="w-12 px-4 py-3">
          <input aria-label="Select all users" className="cursor-pointer" type="checkbox" />
        </th>
        <th className="px-4 py-3 font-semibold text-gray-600 cursor-pointer select-none">
          Users
          <i className="fas fa-sort-up ml-1 text-gray-400"></i>
        </th>
        <th className="px-4 py-3 font-semibold text-gray-600 cursor-pointer select-none">
          Phone
          <i className="fas fa-sort text-gray-400"></i>
        </th>
        <th className="px-4 py-3 font-semibold text-gray-600 cursor-pointer select-none">
          Branch
          <i className="fas fa-sort text-gray-400"></i>
        </th>
        <th className="px-4 py-3 font-semibold text-gray-600 cursor-pointer select-none">
          Connected Apps
          <i className="fas fa-sort text-gray-400"></i>
        </th>
        <th className="px-4 py-3 font-semibold text-gray-600 cursor-pointer select-none">
          Tags
          <i className="fas fa-sort text-gray-400"></i>
        </th>
      </tr>
    </thead>
  );
}

export default TableHeader;