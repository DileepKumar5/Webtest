import Image from "next/image";
import { users } from "@/data/users";

export default function UserTable() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">App Roster</h1>

      <div className="overflow-x-auto rounded-lg border border-gray-200">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-gray-50">
            <tr>
              <th className="p-4">User</th>
              <th className="p-4">Phone</th>
              <th className="p-4">Branch</th>
              <th className="p-4">Connected Apps</th>
              <th className="p-4">Tags</th>
              <th className="p-4">Enforce</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {users.map((user) => (
              <tr key={user.id} className="hover:bg-gray-50">
                <td className="p-4 flex items-center gap-2">
                  <Image src={user.avatar} alt={user.name} width={32} height={32} className="rounded-full" />
                  {user.name}
                </td>
                <td className="p-4">{user.phone}</td>
                <td className="p-4">{user.branch}</td>
                <td className="p-4 flex gap-2">
                  {user.connectedApps.map((icon, i) => (
                    <Image
                      key={i}
                      src={`/icons/${icon}`}
                      alt={icon}
                      width={20}
                      height={20}
                      className="rounded"
                    />
                  ))}
                </td>
                <td className="p-4">{user.tags.join(", ")}</td>
                <td className="p-4">
                  <div
                    className={`w-10 h-5 rounded-full ${
                      user.enforce ? "bg-blue-600" : "bg-gray-300"
                    }`}
                  >
                    <div
                      className={`w-5 h-5 bg-white rounded-full shadow transform transition-transform ${
                        user.enforce ? "translate-x-5" : ""
                      }`}
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
