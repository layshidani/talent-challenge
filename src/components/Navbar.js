import React from 'react';
import { Tabs, Pills, Nav } from 'react-bootstrap'
import Tab from './Tab';

function Navbar(props) {             
        const TabStyle = {
          fontSize: '30px',
          textTransform: 'uppercase',
          backgroundColor: '#20343A',
          color: '#E7E7E7',         
        };    

        const AdminTabs = {
            backgroundColor: '#f1f1f1'
        }
        
        // const nav-pills.nav-link.active = {
        //     backgroundColor: '#640000';
        // } 
        
        // a {
        //     color: #2e382e;
        // }
        
        // .form-control{
        //     margin-top: 15px;
        
        // }
 
 return (
   <div className='AdminDash'>
     <div  style={AdminTabs}  class="container home-tabs rounded pt-3 pb-3">
       <Tabs style={TabStyle} fill variant="tabs" variant="pills" >         
       <Tab eventKey="pending" title="Clientes Pendentes"/>       
       <Tab eventKey="approved" title="Clientes Aprovados"/>
       <Tab eventKey="refused" title="Clientes Recusados"/>
       </Tabs>
     </div>
   </div>
 );
}
export default Navbar;