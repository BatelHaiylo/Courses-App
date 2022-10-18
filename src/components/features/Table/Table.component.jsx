// import { CoursesData } from "../../../services/Courses/CoursesData";

// export default function Table() {
//     return ( 
//         <table>
//             <thead>
//                 <tr>
//                 {
//                 Object.keys(CoursesData[0]).map((item,index)=><th key={index}>{item}</th>)
//                 }</tr>
//             </thead>
//             <tbody>
//                 <tr>
//                  {
//                     CoursesData.map((obj,index) => 
//                     <tr key={index}>
//                         {Object.values(obj).map((item, index) =>{
//                             typeof(item) != "object"?
//                             <tr key={index}>{item}</tr>
//                             :
//                             Object.values(item).map((part, index)=>{
//                                 <tr key={index}>{part}</tr>
//                             })
//                         })}
//                     </tr>
//                     )
//                  }
//                 </tr>
//             </tbody>
//         </table>
//     );
// };

import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { CoursesData } from "../../../services/Courses/CoursesData";

export default function CourseTable() {
  return (
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
            <TableRow>
            {
                Object.keys(CoursesData[0]).map((item,index)=><TableCell key={index}  align="right">{item}</TableCell>)
            }
            </TableRow>
        </TableHead>
        <TableBody>
            {
                CoursesData.map((obj,index)=>{
                    <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                        {
                            Object.values(obj).map(item=>
                                typeof(item) == "object" ?
                                (<TableCell  align="right">{item}</TableCell>)
                                :
                                (<TableCell align="right">{item.name}</TableCell>)
                            )
                        }
                    </TableRow>
                })
            }
        </TableBody>
    </Table>
    </TableContainer>
    );
}

            {/* {
                CoursesData.map((obj,index) =>
                    <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    {
                    Object.values(obj).map(item =>{
                        typeof(item) != "object"? 
                        (<TableCell  align="right">{item}</TableCell>)
                        :
                        (Object.values(item).map(value => {
                            <TableCell  align="right">{value}</TableCell>
                        }))
                    }
                    )
                    }
                    </TableRow>)

            } */}
