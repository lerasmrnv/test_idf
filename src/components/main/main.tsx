import { Box, styled, Typography } from "@mui/material"
import { SignUp } from "../signUp/signUp"

export const Main = () => {
    const StyledBackground = styled(Box)(() => ({
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FBFAF9', 
    }))
    return (
        <main>
            <StyledBackground>
            <Typography variant="h2" py={3}>Sign Up</Typography>
            <SignUp />
            </StyledBackground>
        </main>
    )
}