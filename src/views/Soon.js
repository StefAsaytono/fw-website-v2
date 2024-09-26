import React from 'react'
import { Box, Typography } from '@mui/material'

const Soon = () => {
    return(
        <>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                    minHeight: '100vh'
                }}
            >
                <img src={require('../assets/img/soon.png')} alt='Coming Soon' width={'30%'} />
                <Typography sx={{ color: 'rgb(209 213 219)', fontSize: 20, mx: 2, textAlign: 'center' }}>
                    Play demo will be available soon!
                </Typography>
            </Box>
        </>
    )
}

export default Soon