import React from 'react';

function Sidebar() {
  return (
    <aside className="bg-[#121212] w-64 flex flex-col justify-between p-6 rounded-tr-2xl rounded-br-2xl">
      <div>
        <div className="flex items-center mb-10 space-x-3">
          <img
            alt="Metronic logo, white M letter on dark green circle background"
            className="w-8 h-8 rounded-full"
            height="32"
            src="https://storage.googleapis.com/a1aa/image/d3574dad-8530-4447-fa21-a23afae3c370.jpg"
            width="32"
          />
          <span className="text-white font-semibold text-lg select-none">
            Metronic
          </span>
          <i className="fas fa-chevron-down text-gray-400 ml-1"></i>
        </div>
        <button
          className="w-full bg-gray-800 text-gray-300 text-sm font-semibold rounded-md py-2 px-4 mb-6 hover:bg-gray-700 flex items-center justify-center space-x-2"
          type="button"
        >
          <i className="fas fa-plus"></i>
          <span>Add New</span>
        </button>
        <button
          aria-label="Search"
          className="w-10 h-10 bg-gray-800 rounded-md flex items-center justify-center hover:bg-gray-700"
          type="button"
        >
          <i className="fas fa-search text-gray-400"></i>
        </button>
        <div className="mt-10 text-gray-500 uppercase text-xs font-semibold tracking-wider select-none">
          PAGES
        </div>
        <nav className="mt-4 space-y-5 text-gray-400 text-sm font-normal">
          <a className="flex items-center space-x-3 hover:text-white" href="#">
            <i className="far fa-chart-bar text-lg"></i>
            <span>Dashboards</span>
          </a>
          <div className="flex items-center justify-between hover:text-white cursor-pointer">
            <div className="flex items-center space-x-3 text-gray-400 hover:text-white">
              <i className="far fa-user-circle text-lg"></i>
              <span>Public Profile</span>
            </div>
            <i className="fas fa-chevron-down text-gray-400"></i>
          </div>
          <div className="flex items-center justify-between hover:text-white cursor-pointer">
            <div className="flex items-center space-x-3 text-gray-400 hover:text-white">
              <i className="fas fa-cog text-lg"></i>
              <span>My Account</span>
            </div>
            <i className="fas fa-chevron-down text-gray-400"></i>
          </div>
          <div className="flex items-center justify-between hover:text-white cursor-pointer">
            <div className="flex items-center space-x-3 text-gray-400 hover:text-white">
              <i className="fas fa-users text-lg"></i>
              <span>Network</span>
            </div>
            <i className="fas fa-chevron-down text-gray-400"></i>
          </div>
          <div className="flex items-center justify-between hover:text-white cursor-pointer">
            <div className="flex items-center space-x-3 text-gray-400 hover:text-white">
              <i className="fas fa-shopping-cart text-lg"></i>
              <span>Store - Client</span>
            </div>
            <i className="fas fa-chevron-down text-gray-400"></i>
          </div>
          <div className="flex items-center justify-between hover:text-white cursor-pointer">
            <div className="flex items-center space-x-3 text-gray-400 hover:text-white">
              <i className="fas fa-shield-alt text-lg"></i>
              <span>Authentication</span>
            </div>
            <i className="fas fa-chevron-down text-gray-400"></i>
          </div>
        </nav>
        <div className="mt-10 text-gray-500 uppercase text-xs font-semibold tracking-wider select-none">
          OUTLINE
        </div>
        <div className="mt-4 space-y-4">
          <a className="flex items-center space-x-3 text-gray-400 hover:text-white" href="#">
            <img
              alt="X logo black background with white X letter"
              className="w-6 h-6 rounded"
              height="24"
              src="https://storage.googleapis.com/a1aa/image/c8a0ea0b-393f-46ce-faf9-2e5e9f021a40.jpg"
              width="24"
            />
            <span>@keenthemes</span>
          </a>
          <a className="flex items-center space-x-3 text-gray-400 hover:text-white" href="#">
            <img
              alt="Slack logo black background with colored S letter"
              className="w-6 h-6 rounded"
              height="24"
              src="https://storage.googleapis.com/a1aa/image/d7502304-7e51-4b42-2ab3-05d2675deafd.jpg"
              width="24"
            />
            <span>@keenthemes_hub</span>
          </a>
        </div>
      </div>
      <div className="flex items-center justify-between mt-10">
        <img
          alt="User avatar of a man with glasses and beard, circular"
          className="w-10 h-10 rounded-full"
          height="40"
          src="https://storage.googleapis.com/a1aa/image/30eeb385-c0d3-4d4a-9b9d-8ca7828905c2.jpg"
          width="40"
        />
        <button aria-label="Chat" className="text-gray-400 hover:text-gray-200" type="button">
          <i className="far fa-comment-alt"></i>
        </button>
        <button aria-label="Apps" className="text-gray-400 hover:text-gray-200" type="button">
          <i className="fas fa-th-large"></i>
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;