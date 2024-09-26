import React from 'react'
import { Box, Typography } from '@mui/material'

const Soon = () => {
    return(
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                minHeight: '100%',
                border: 'solid 1px #FFF',
                padding: '3rem 2rem',
                borderRadius: '10px'
            }}
        >
            <img src={require('../assets/img/soon.png')} alt='Coming Soon' width={'40%'} />
            <Typography sx={{ color: 'rgb(209 213 219)', fontSize: 20, mx: 2, textAlign: 'center' }}>
                Play demo will be available soon!
            </Typography>
        </Box>
    )
}

export default Soon