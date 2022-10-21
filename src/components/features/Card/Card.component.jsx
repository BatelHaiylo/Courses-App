import * as React from 'react';
import { Card, CardContent } from '@mui/material'; 

export default function StyledCard({children}) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        {children}
      </CardContent>
    </Card>
  );
}
