"use client";
import { useState } from "react";
import Image from "next/image";
import { ChevronDown, LayoutGrid, Search, SlidersHorizontal } from "lucide-react";


const users = [
  {
    name: "Sophia Lee",
    phone: "(702) 555-1234",
    branch: "Las Vegas, NV",
    avatar: "/avatars/300-30.png",
    apps: ["google-analytics.svg", "jira.svg"],
    tags: ["Communications", "Collaboration"],
    enforce: false,
  },
  {
    name: "Mason Lewis",
    phone: "(213) 555-7891",
    branch: "Los Angeles, CA",
    avatar: "/avatars/300-29.png",
    apps: ["slack.svg", "twitch-purple.svg"],
    tags: ["Professional Network", "Recruitment"],
    enforce: true,
  },
  {
    name: "Olivia Green",
    phone: "(312) 555-3456",
    branch: "Chicago, IL",
    avatar: "/avatars/300-28.png",
    apps: ["google-analytics.svg", "jira.svg"],
    tags: ["Social Media", "Marketing"],
    enforce: false,
  },
  {
    name: "Henry King",
    phone: "(415) 555-7890",
    branch: "San Francisco, CA",
    avatar: "/avatars/300-27.png",
    apps: ["sololearn.svg", "monetha.svg"],
    tags: ["CRM", "Sales"],
    enforce: true,
  },
  {
    name: "Ella White",
    phone: "(702) 555-5678",
    branch: "Las Vegas, NV",
    avatar: "/avatars/300-26.png",
    apps: ["twitch-purple.svg", "google-analytics.svg"],
    tags: ["Cloud Storage", "Files"],
    enforce: true,
  },
];

export default function AppRoster() {
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  const startIdx = (currentPage - 1) * rowsPerPage;
  const endIdx = startIdx + rowsPerPage;
  const displayedUsers = users.slice(startIdx, endIdx);

  const totalPages = Math.ceil(users.length / rowsPerPage);

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="relative">
            <Search className="absolute left-2 top-2.5 w-4 h-4 text-gray-500" />
            <input
              type="text"
              placeholder="Search Users..."
              className="pl-8 pr-3 py-2 border rounded-md text-sm"
            />
          </div>
          <button className="border rounded-md px-3 py-2 text-sm flex items-center gap-1">
            Status <ChevronDown className="w-4 h-4" />
          </button>
          <button className="border rounded-md px-3 py-2 text-sm flex items-center gap-1">
            Sort Order <ChevronDown className="w-4 h-4" />
          </button>
        </div>
        <div className="flex gap-2">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md flex items-center gap-2 text-sm">
            <SlidersHorizontal className="w-4 h-4" /> Filters
          </button>
          <button className="border rounded-md px-3 py-2 text-sm flex items-center gap-2">
            <LayoutGrid className="w-4 h-4" /> Columns
          </button>
        </div>
      </div>

      <div className="overflow-auto border rounded-xl">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="p-3 text-left"><input type="checkbox" /></th>
              <th className="p-3 text-left">Users</th>
              <th className="p-3 text-left">Phone</th>
              <th className="p-3 text-left">Branch</th>
              <th className="p-3 text-left">Connected Apps</th>
              <th className="p-3 text-left">Tags</th>
              <th className="p-3 text-left">Enforce</th>
            </tr>
          </thead>
          <tbody>
            {displayedUsers.map((user, i) => (
              <tr key={i} className="border-t hover:bg-gray-50">
                <td className="p-3"><input type="checkbox" /></td>
                <td className="p-3 flex items-center gap-2">
                  <Image src={user.avatar} alt={user.name} width={32} height={32} className="rounded-full" />
                  <span className="font-medium">{user.name}</span>
                </td>
                <td className="p-3">{user.phone}</td>
                <td className="p-3">{user.branch}</td>
                <td className="p-3 flex gap-2">
                  {user.apps.map((app, j) => (
                    <Image
                      key={j}
                      src={`/icons/${app}`}
                      alt={app}
                      width={20}
                      height={20}
                    />
                  ))}
                </td>
                <td className="p-3 space-x-1">
                  {user.tags.map((tag, k) => (
                    <span key={k}>{tag}</span>
                  ))}
                </td>
                <td className="p-3">
                  <div
                    className={`w-10 h-5 rounded-full relative cursor-pointer ${
                      user.enforce ? "bg-blue-600" : "bg-gray-300"
                    }`}
                  >
                    <div
                      className={`absolute w-5 h-5 bg-white rounded-full shadow-md top-0 transition-transform duration-300 ${
                        user.enforce ? "translate-x-5" : "translate-x-0"
                      }`}
                    ></div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-between mt-4 text-sm">
        <div className="flex items-center gap-2">
          <span>Rows per page</span>
          <select
            value={rowsPerPage}
            onChange={(e) => {
              setRowsPerPage(Number(e.target.value));
              setCurrentPage(1);
            }}
            className="border px-2 py-1 rounded-md"
          >
            {[5, 10, 15].map((num) => (
              <option key={num} value={num}>{num}</option>
            ))}
          </select>
        </div>
        <div>
          <span>
            {startIdx + 1} - {Math.min(endIdx, users.length)} of {users.length}
          </span>
          <div className="inline-flex ml-4">
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                className={`px-2 py-1 rounded-md mx-0.5 ${
                  i + 1 === currentPage ? "bg-gray-200" : "hover:bg-gray-100"
                }`}
                onClick={() => setCurrentPage(i + 1)}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}