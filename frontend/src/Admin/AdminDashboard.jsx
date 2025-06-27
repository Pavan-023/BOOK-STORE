import React from 'react';

export default function AdminDashboard() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen" >
      <h1 className="text-3xl font-bold text-blue-800 mb-4" style={{textAlign:"center"}}><span style={{fontSize:"60px",color:"red"}}>A</span>dmin <span style={{fontSize:"60px",color:"red"}}>D</span>ashboard</h1>
      <p className="text-gray-600 mb-8" style={{textAlign:"center"}}>Manage books, inventory, and users here.</p>

     <div style={{marginLeft:"200px",padding:"5%"}}>
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" id="ad">
        <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-2">Books</h2><br />
          <p className="text-gray-600 mb-4">Add, update, or remove books in the catalog .</p><br />
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Manage Books
          </button>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition" id="ad">
          <h2 className="text-xl font-semibold mb-2">Inventory</h2>
          <p className="text-gray-600 mb-4">Track and update stock levels.</p>
          <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
            Manage Inventory
          </button>
        </div>

        <div className="bg-blue rounded-2xl shadow-md p-6 hover:shadow-lg transition" id="ad">
          <h2 className="text-xl font-semibold mb-2">👥 Users</h2>
          <p className="text-gray-600 mb-4">View and manage user accounts.</p>
          <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">
            Manage Users
          </button>
        </div>
      </div></div>
    </div>
  );
}
