import React from 'react'
import { Grid, Typography, Box } from '@mui/material'

const Payment = () => {
    const paymentChannels = [
        // { image: 'gcash.png', alt: 'GCASH' },
        { image: 'maya.png', alt: 'MAYA' },
        { image: 'fp.png', alt: 'Fortune Pay' },
        { image: 'instapay.png', alt: 'Insta Pay' }
    ]
    return (
        <Box sx={{ my: 10 }}>
            <Typography sx={{ fontSize: 20, textTransform: 'uppercase', color: '#f9f9f9', textAlign: 'center', my: 3, fontWeight: 'bold' }}>
                Payment Channels
            </Typography>
            <Grid
                container
                direction="row"
                alignItems="center"
                justifyContent="center"
            >
                {paymentChannels.map((payment, index) => (
                    <Grid item xs={4} sm={3} md={3} lg={2} justifyContent="center" container sx={{ m: 2 }} key={index}>
                        <img src={require(`../assets/payments/${payment.image}`)} alt={payment.alt} className='payment-image'/>
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}

export default Payment