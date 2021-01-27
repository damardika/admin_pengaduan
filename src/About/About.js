import React, { Component } from 'react';

class About extends Component {
   render() {
      return (
         <div class="container">
         <h2>Table Pengaduan</h2>
                                       
         <div class="table-responsive">          
         <table class="table">
           <thead>
             <tr>
               <th>NO </th>
               <th>Nama</th>
               <th>Alamat kejadian</th>
               <th>jam </th>
               <th>Data Kejadian</th>
               
             </tr>
           </thead>
           <tbody>
             <tr>
               <td>1</td>
               <td>Ahh</td>
               <td>Mantap</td>
               <td>35</td>
               <td>New York</td>
            
             </tr>
           </tbody>
         </table>
         </div>
       </div>
         
         
      ); 
    }
   }


export default About;