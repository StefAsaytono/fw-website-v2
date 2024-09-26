import React from 'react'
import { Box, Button, Divider, Typography } from '@mui/material'

const NotFound = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                minHeight: '100vh'
            }}
        >
            <img src={require('../assets/img/NotFound2.png')} alt='Not Found' width={'50%'} />
            <Typography sx={{ color: 'rgb(209 213 219)', fontSize: 20, mx: 2, textAlign: 'center' }}>
                Page Not Found!
            </Typography>
            <Divider />
            <Typography sx={{ color: 'rgb(209 213 219)', fontSize: 20, mx: 2, textAlign: 'center' }}>
                Better go back to safe lands like the Home Page
            </Typography>
            <Button variant='contained' color='indigo' sx={{ color: '#f9f9f9', my: 2 }} href='/'>Back to Home Page</Button>
        </Box>
    )
}

export default NotFound