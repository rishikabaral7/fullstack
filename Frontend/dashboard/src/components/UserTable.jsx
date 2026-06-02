import React from "react";
import useFetch from "../hook/UseFetch";

const UserTable = ({ users }) => {
  // const {data, loading, error} = useFetch();

  const activeUsers = users?.filter((user, index) => index % 2 === 0);
  return (
    <div>
      <table className="min-w-full bg-white border border-gray-400 border-collapse table-fixed">
        <thead>
          <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
            <th className="border border-gray-300 px-4 py-2">Name</th>
            <th className="border border-gray-300 px-4 py-2">Location</th>
            <th className="border border-gray-300 px-4 py-2">Email</th>
            <th className="border border-gray-300 px-4 py-2">Date of Birth</th>
            <th className="border border-gray-300 px-4 py-2">Gender</th>
            <th className="border border-gray-300 px-4 py-2">Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {activeUsers?.map((user) => (
            <tr key={user.login.uuid}>
              <td className="border border-gray-300 px-4 py-2">
                {user.name.first}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {user.location.city}
              </td>
              <td className="border border-gray-300 px-4 py-2">{user.email}</td>
              <td className="border border-gray-300 px-4 py-2">
                {new Date(user.dob.date).toLocaleDateString()}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {user.gender}
              </td>
              <td className="border border-gray-300 px-4 py-2">{user.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
