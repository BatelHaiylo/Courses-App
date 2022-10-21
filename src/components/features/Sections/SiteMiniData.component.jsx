import "./SiteMiniData.css";
import { awrapper } from "../../../dummydata";
import StyledCard from "../Card/Card.component";

// export default function SiteMiniData() {
//   return (
//     <>
//       <section className='mini-data'>
//         <div className='container grid'>
//           {awrapper.map((val,index) => {
//             return (
//               <div className='box flex' key={index}>
//                 <div className='img'>
//                   <img src={val.cover} alt='' />
//                 </div>
//                 <div className='text'>
//                   <h1>{val.data}</h1>
//                   <h3>{val.title}</h3>
//                 </div>
//               </div>
//             )
//           })}
//         </div>
//       </section>
//     </>
//   )
// };

import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

export default function SiteMiniData() {
  return (
    <Box sx={{ flexGrow: 1 }}  className='mini-data'>
      <Grid
        container
        spacing={{ xs: 4, md: 2 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {awrapper.map((val, index) => {
          return (
            <Grid item xs={2} sm={4} md={3} key={index}  className='box flex'>
                <div className="img">
                  <img src={val.cover} alt="" />
                </div>
                <div className="text">
                  <h1>{val.data}</h1>
                  <h3>{val.title}</h3>
                </div>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}
