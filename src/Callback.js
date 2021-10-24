import React from "react";
import {useState,useEffect} from "react";
import Table from 'react-bootstrap/Table';




function Callback() {

  const [datas,setData] = useState([]);
  const [eror,setError] = useState(null);
  const [load,setLoad] = useState (false);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then((result) =>{
      setLoad(true);
      setData(result);      
    },

    (eror) =>{
      setLoad(true);
      setError(eror);
    }
    )
  }, [])

  if (eror) {
    return <div>Error: {Error.message}</div>;  
  } else if (!load){
    return <div> Loading..... </div>
  }else{
    return(
      <Table bordered hover striped variant='dark'>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Address</th>
              <th>Company</th>
            </tr>
          </thead>
          <tbody>
          {datas.map(data => (
            <tr key={data.id}>
              <td>{data.id}</td>
              <td>{data.name}</td>
              <td>{data.username}</td>
              <td>{data.email}</td>
              <td>{data.address.street},{data.address.suite},{data.address.city}</td>
              <td>{data.company.name}</td>
            </tr>
          ))}
          </tbody>
        </Table>
    );
  }
   
}

export default Callback;


// const data = fetch('https://jsonplaceholder.typicode.com/users');
// data 
// .then(function(res) { return res.json()})
// .then(res =>{
//     document.getElementById('data').innerHTML =render(res)
// })

// function render(result) {
//     let table = "";
//     result.forEach((data) => {
//       table += `<tr>
//                   <td>${data.id}</td>
//                   <td>${data.name}</td>
//                   <td>${data.username}</td>
//                   <td>${data.email}</td>
//                   <td>
//                     ${data.address.street},
//                     ${data.address.suite}, 
//                     ${data.address.city}
//                    </td>
//                   <td>${data.company.name}</td>
//                 </tr>`;
//     });
//     return table;
//   }
  
//   function load() {
//     return `<tr>
//       <td colspan="6" class="text-center">Loading...</td>
//     </tr>`;
//   }
// export default render;
// export default load;