import React from 'react'
import { Grid, Typography, Box } from '@mui/material'

const GamePartners = () => {
    const gameProvider = [
        // { provider:  'alfastreet.png', name: 'Alfastreet' },
        { provider:  'aruze.png', name: 'Aruze Gaming' },
        { provider:  'bfgames.png', name: 'BF Gaming' },
        { provider:  'bigtime.png', name: 'BigTime Gaming' },
        { provider:  'caleta.png', name: 'Caleta Gaming' },
        { provider:  'evolution.png', name: 'Evolution Gaming' }, 
        // { provider:  'highlight.svg', name: 'Highlight' },
        { provider:  'maxfair.png', name: 'MaxFair' },
        { provider:  'netent.png', name: 'NetEnt' },
        { provider:  'nolimit.png', name: 'NoLimit City' },
        // { provider:  'ortiz.png', name: 'Ortiz Gaming' },
        { provider:  'realtime.png', name: 'Real Time Gaming' },
        // { provider:  'red-thunder.png', name: 'Red Thunder Gaming' },
        { provider:  'sa.png', name: 'SA Gaming' },
        { provider:  'tomhorn.png', name: 'Tom Horn Gaming' },
        { provider:  'vibra.png', name: 'Vibra Gaming' },
        { provider:  'zitro.png', name: 'Zitro Gaming' }
    ]
    return (
        <Box sx={{ mt: 10, mb: 8 }}>
            <Typography sx={{ fontSize: 20, textTransform: 'uppercase', color: '#f9f9f9', textAlign: 'center', my: 3, fontWeight: 'bold' }}>
                GAMING PARTNERS
            </Typography>
            <Grid container direction="row" alignItems="center" justifyContent="center">
                {gameProvider.map((prov, index) => (
                    <Grid item xs={4} sm={3} md={3} lg={2} justifyContent="center" container sx={{ m: 2 }} key={index}>
                        <img src={require(`../assets/providers/${prov.provider}`)} alt={prov.name} className='provider-image'/>
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}

export default GamePartners