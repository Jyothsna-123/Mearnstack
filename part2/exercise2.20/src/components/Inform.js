import React from 'react'

const Inform=({small})=>{

    return(
           <div>
            <table>
                <tbody>
                   <tr>
                      <td>{small.name} </td>
                      <td>{small.number}</td>
                   </tr>
               </tbody>
           </table>
           </div>

    )

}

export default Inform