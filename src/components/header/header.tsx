import logo from '../../assets/header/logo.svg';
import { Box, Stack } from '@mui/material';

export const Header = () => {
    return (
        <header>
            <Box
                py={1}
                px={{ xl: 18, lg: 16, md: 12, sm: 8, xs: 4 }}
                boxShadow="0 10px 30px 4px rgba(85, 105, 135, 0.03)">
                <Stack
                    direction='row'
                    justifyContent='space-between'
                    alignItems="center"
                    flexWrap="wrap">
                    <img src={logo} alt='logo' width='120px' />
                </Stack>
            </Box>
        </header>
    )
}