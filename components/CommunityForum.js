import { useState } from 'react';
import { Box, Container, Typography, Drawer, List, ListItem } from '@mui/material';
import { styled } from '@mui/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import styles from '../styles/CommunityForum.module.css';
//CREAR EL CONTEXT QUE conectara la api con el server
const CommunityForum = () => {
    const matches = useMediaQuery('(min-width:768px)');
    const Side = styled(Box)({
        height: '100%',
        padding: '0 10px',
        width: "100%",
    })
    const forum = {
        width: '75vw',
        padding: '1rem',
    }
    //Forum from modal on mobile
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <>
           <Drawer
           anchor='right'
           open={open}
           onClose={handleClose}>
                <Box sx={forum}>
                    <Side overflow="scroll">
                        <Typography variant="h3" mb={1} align="center">Community forum</Typography>
                        <List>
                            <ListItem disablePadding >Lorem ipsum dolor sit amet, consectetur adipiscing elit mobile.</ListItem>
                            <ListItem disablePadding >Lorem ipsum dolor sit amet, consectetur adipiscing elit.</ListItem>
                            <ListItem disablePadding >Lorem ipsum dolor sit amet, consectetur adipiscing elit.</ListItem>
                            <ListItem disablePadding >Lorem ipsum dolor sit amet, consectetur adipiscing elit.</ListItem>
                            <ListItem disablePadding >Lorem ipsum dolor sit amet, consectetur adipiscing elit.</ListItem>
                            <ListItem disablePadding >Lorem ipsum dolor sit amet, consectetur adipiscing elit.</ListItem>
                            <ListItem disablePadding >Lorem ipsum dolor sit amet, consectetur adipiscing elit.</ListItem>
                            <ListItem disablePadding >Lorem ipsum dolor sit amet, consectetur adipiscing elit.</ListItem>
                            <ListItem disablePadding >Lorem ipsum dolor sit amet, consectetur adipiscing elit.</ListItem>
                        </List>
                    </Side>
                </Box>
            </Drawer>
            <Container>
                {matches? (

                    <Side>
                        <Typography variant="h3" mb={1} align="center">Community forum</Typography>
                        <List>
                            <ListItem >Lorem ipsum dolor sit amet, consectetur adipiscing .</ListItem>
                            <ListItem >Lorem ipsum dolor sit amet, consectetur adipiscing elit.</ListItem>
                            <ListItem >Lorem ipsum dolor sit amet, consectetur adipiscing elit.</ListItem>
                            <ListItem >Lorem ipsum dolor sit amet, consectetur adipiscing elit.</ListItem>
                            <ListItem >Lorem ipsum dolor sit amet, consectetur adipiscing elit.</ListItem>
                            <ListItem >Lorem ipsum dolor sit amet, consectetur adipiscing elit.</ListItem>
                            <ListItem >Lorem ipsum dolor sit amet, consectetur adipiscing elit.</ListItem>
                            <ListItem >Lorem ipsum dolor sit amet, consectetur adipiscing elit.</ListItem>
                            <ListItem >Lorem ipsum dolor sit amet, consectetur adipiscing elit.</ListItem>
                        </List>
                    </Side>
                ) :
                    (!open ? <div onClick={handleOpen} 
                    className={`${styles.entry} box`}>
                        Community forum
                    </div>: null)}

            </Container>
        </>
    );
}

export default CommunityForum;