import { Box,  Stack, TextField } from "@mui/material"



export const SignUpInfo = ({formik} : any) => {
    return (
        <Box  display='flex' flexDirection='column' alignItems='center' gap={4}>
                <Stack
                    direction='column'
                    justifyContent='center'
                    width='100%'
                    gap={4}
                >
                    <TextField  
                        id='mobilePhone'
                        label='Mobile Phone'
                        type='text'
                        name='mobilePhone'
                        value={formik.values.mobilePhone}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.mobilePhone && Boolean(formik.errors.mobilePhone)}
                        helperText={formik.touched.mobilePhone && formik.errors.mobilePhone}
                        fullWidth
                    />
                    <TextField 
                        id='email'
                        label='Email'
                        type='text'
                        name='email'
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.email && Boolean(formik.errors.email)}
                        helperText={formik.touched.email && formik.errors.email}
                        fullWidth
                    />
                    <TextField 
                        id='password'
                        label='Password'
                        type='password'
                        name='password'
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.password && Boolean(formik.errors.password)}
                        helperText={formik.touched.password && formik.errors.password}
                        fullWidth
                    />


                    <TextField 
                        id='confirmPassword'
                        label='Confirm Password'
                        type='password'
                        name='confirmPassword'
                        value={formik.values.confirmPassword}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
                        helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
                        fullWidth
                    />
                </Stack>
        </Box>
    )
}
