import React, { useState } from 'react'
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from '@mui/material'

const AgeVerification = () => {
    const [open, setOpen] = useState(() => {
        if(sessionStorage.getItem('age') === null) {
            return true
        }
        else {
            return false
        }
    })

    const handleClick21 = () => {
        setOpen(false)
        sessionStorage.setItem('age', 21)
        
    }

    const handleClose = () => {
        window.open("https://www.google.com/", "_self")
    }

    return (
        <Dialog
            open={open}
            aria-labelledby="responsive-dialog-title"
        >
            <DialogTitle sx={{ textTransform: 'uppercase' }}>
                Welcome to Fastwin
            </DialogTitle>
            <DialogContent>
                <DialogContentText sx={{ textTransform: 'uppercase', fontWeight: 'bold' }}>
                    Age Verification!
                </DialogContentText>
                <DialogContentText>
                    To enter this website, please confirm that you are at least 21 years old. 
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button color='secondary' onClick={handleClose}>
                    Close
                </Button>
                <Button onClick={handleClick21}>
                    Im over 21 years old
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default AgeVerification