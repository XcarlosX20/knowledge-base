import { Container, AppBar, IconButton, Box, Button, Toolbar } from '@mui/material';
import Search from './Search';
import styles from '../styles/Header.module.css';
import Link from 'next/link';
const Header = () => {
    //Navbar
    return (

        <AppBar className={styles.header} position={'static'} color={'default'} w={10}>
            <Toolbar>
                <Link href="https://thefutures.io/">
                    <a>
                        <img className={styles.logo}
                            src="https://res.cloudinary.com/do5yybhwe/image/upload/v1637262553/Knowledge%20base%20page/logo_thefutures_black_vfdmop.png"
                            alt="logo-black" />
                    </a>
                </Link>
                <Search />
                <Box sx={{ display: 'grid', gridTemplateRows: 'repeat(2, 1fr)' }}>
                    <Button size={'large'} color={'error'}>LogIn</Button>
                    <Button size={'large'} color={'error'}>SignIn</Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default Header;