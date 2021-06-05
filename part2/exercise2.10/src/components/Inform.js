import React from 'react'

const Inform=({sort})=>{

    return(
           <div>
            <table>
                <tbody>
                   <tr>
                      <td>{sort.name} </td>
                      <td>{sort.number}</td>
                   </tr>
               </tbody>
           </table>
           </div>

    )

}

export default Inform