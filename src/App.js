import './App'
import React from 'react'
 import {Table} from 'react-bootstrap'
function App(){
    // const students = [1,2,3,4,5]
  const students = [
    {name:'Shubham',rollno:12,show:0,address:[
      {houseno:123,city:'Lucknow'},
      {houseno:123,city:'Lucknow'},
      {houseno:123,city:'Lucknow'},
      {houseno:123,city:'Lucknow'}
    ]},
    {name:'Borly',rollno:13,show:1,address:[
      {houseno:123,city:'Lucknow'},
      {houseno:123,city:'Lucknow'},
      {houseno:123,city:'Lucknow'},
      {houseno:123,city:'Lucknow'}
    ]},
    {name:'Goku',rollno:14,show:1,address:[
      {houseno:123,city:'Lucknow'},
      {houseno:123,city:'Lucknow'},
      {houseno:123,city:'Lucknow'},
      {houseno:123,city:'Lucknow'}
    ]},
    {name:'Bardock',rollno:15,show:1,address:[
      {houseno:123,city:'Lucknow'},
      {houseno:123,city:'Lucknow'},
      {houseno:123,city:'Lucknow'},
      {houseno:123,city:'Lucknow'}
    ]}
  ]
  return(
    <div className="App"> 
      <h1>Array in React</h1>
      <Table striped bordered hover>
        <thead>
        <tr>
          <th>Name</th>
          <th>Roll number</th> 
          <th>Show</th> 
          <th>Address</th> 
        </tr>
        </thead>
        <tbody>
            {
              students.map((item,index)=>
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.rollno}</td>
                  <td>{item.show}</td>
                  <td>
                    <Table>
                      <tbody>
                      { 
                        item.address ?
                        item.address.map((addres,ind)=>
                            <tr key={ind}>
                              <td>{addres.houseno}</td>  
                              <td>{addres.city}</td>
                            </tr>
                          ):null
                        }
                      </tbody>
                    </Table>
                  </td>

                </tr>
              )
            }
        </tbody>
     </Table>
    </div>
  )
}
export default App;