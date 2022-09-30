
import { Box } from '@mui/material';

export const Footer = () => {
    return (
        <footer>
            <Box
                height='7vh'
                px={{ xl: 18, lg: 16, md: 12, sm: 8, xs: 4 }}
                boxShadow="0 10px 30px 4px rgba(85, 105, 135, 0.03)"
                style={{backgroundColor: '#23262F', opacity: '0.5'}}>
            </Box>
        </footer>
    )
}