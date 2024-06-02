import React, { useState } from 'react'

function Admin() {
  const [loading, setLoading] =useState(false);
  const [data, setData] = useState([]);

const fetchData = async () =>{
  setLoading(true);
  const response = await fetch('http://localhost:5000/')
  const data = await response.json();
  setData(data);
  console.log(data);
}

  return (
    <>
    <div className="container mt-3 " style={{minHeight:"100vh"}}>
      <div className="text-center mb-3">
        <h1 className="m-4">Admin</h1>
        <button className="btn btn-primary" onClick={fetchData}>
          Show Users
        </button>
      </div>

      {loading && (
        <div className="table-responsive">
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Agreement</th>
                
              </tr>
            </thead>
            <tbody>
              {data.map((d, i) => {
                return (
                  <tr key={d._id}>
                    <th scope="row">{i + 1}</th>
                    <td>{d.name}</td>
                    <td>{d.email}</td>
                    <td>{d.termscheck ? "Yes" : "No"}</td>
                    
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  </>
  )
}

export default Admin