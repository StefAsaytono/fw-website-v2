import React from 'react'
import { Backdrop, CircularProgress } from '@mui/material';

const Loading = (props) => {
    return (
        <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={props.open}
        >
            <CircularProgress color="inherit" />
        </Backdrop>
    )
}

export default Loading