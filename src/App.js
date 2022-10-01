import './App'
import React from 'react'
 import {Table} from 'react-bootstrap'
function App(){
    // const students = [1,2,3,4,5]
  const students = [
    {name:'Shubham',rollno:12},
    {name:'Borly',rollno:13},
    {name:'Goku',rollno:14},
    {name:'Bardock',rollno:15},
    {name:'Vegeta',rollno:16},
  ]
  return(
    <div className="App"> 
      <h1>Array in React</h1>
      <Table striped bordered hover>
        <thead>
        <tr>
          <th>Name</th>
          <th>Roll number</th>
        </tr>
        </thead>
        <tbody>
            {
              students.map((item,index)=>
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.rollno}</td>
                </tr>
              )
            }
        </tbody>
     </Table>
    </div>
  )
}
export default App;