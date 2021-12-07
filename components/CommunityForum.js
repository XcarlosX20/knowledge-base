import { useState } from 'react';
import { Box, Container, Typography, Modal, Grid } from '@mui/material';
import { styled } from '@mui/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import styles from '../styles/CommunityForum.module.css';
const CommunityForum = () => {
    const matches = useMediaQuery('(min-width:768px)');
    const Side = styled(Box)({
        overflow: 'scroll',
        height: '60vh',
        padding: '0 30px',
        width: "100%",
    });
    //Forum from modal
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        height: 80 + 'vh',
        width: 80 + 'vw',
        bgcolor: '#FFFF',
        boxShadow: 24,
        p: 4
    };
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                className="animate__animated animate__slideInRight box"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Text in a modal
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                    </Typography>
                </Box>
            </Modal>
            <Container>
                {matches ? (
                    <Grid container spacing={2}>
                        <Grid item xs={8}>
                            .container
                        </Grid>
                        <Grid item xs={4}>
                            <Side>
                                <Typography noWrap zeroMinWidth variant="h3" mb={1} align="center">Community forum</Typography>
                                <ul>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                </ul>
                            </Side>
                        </Grid>
                    </Grid>
                ) : 
                (<div onClick={handleOpen} className={styles.entry}>
                community forum
                </div>)}

            </Container>
        </>
    );
}

export default CommunityForum;