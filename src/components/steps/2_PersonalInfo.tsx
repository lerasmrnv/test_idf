import { Box,   Checkbox,   FormControl,   FormControlLabel,   FormGroup,   FormHelperText,   FormLabel,   InputLabel,   MenuItem,   Radio,   RadioGroup,   Select,   Stack, TextField } from "@mui/material"


export const PersonalInfo = ({formik} : any) => {
    return (
        <Box  display='flex' flexDirection='column' alignItems='center' gap={4}>
                <Stack
                    direction='column'
                    justifyContent='center'
                    width='100%'
                    gap={4}
                >
                    <TextField  
                        id='firstName'
                        label='First Name'
                        type='text'
                        name='firstName'
                        value={formik.values.firstName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                        helperText={formik.touched.firstName && formik.errors.firstName}
                        fullWidth
                    />
                    <TextField  
                        id='lastName'
                        label='Last Name'
                        type='text'
                        name='lastName'
                        value={formik.values.lastName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                        helperText={formik.touched.lastName && formik.errors.lastName}
                        fullWidth
                    />
                    <TextField 
                        InputLabelProps={{ shrink: true }}
                        id='birthday'
                        label='Birthday'
                        type='date'
                        name='birthday'
                        value={formik.values.birthday}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.birthday && Boolean(formik.errors.birthday)}
                        helperText={formik.touched.birthday && formik.errors.birthday}
                        fullWidth
                    
                    />
                    <FormControl>
                        <FormLabel style={{textAlign: 'center'}}>Gender</FormLabel>
                        <RadioGroup
                            row
                            style={{justifyContent: 'space-around'}}
                            id="sex"
                            name="sex"
                            value={formik.values.sex}
                            onChange={formik.handleChange}
                            onError={formik.touched.sex && Boolean(formik.errors.sex)}
                        >
                            <FormControlLabel value='men' control={<Radio />} label='male'/>
                            <FormControlLabel value='women' control={<Radio />} label='female'/>
                        </RadioGroup>
                        <FormHelperText style={{color: 'red'}}>{formik.touched.sex && formik.errors.sex}</FormHelperText>
                    </FormControl>
                    <Stack direction='column' gap={1}>
                        <FormLabel style={{textAlign: 'center'}}>Your Favorite Ocean</FormLabel>
                        <FormControl style={{width: '50%', alignSelf: 'center'}}>
                                <InputLabel>Ocean</InputLabel>
                                <Select
                                    id="ocean"
                                    name="ocean"
                                    label="Ocean"
                                    value={formik.values.ocean}
                                    onChange={formik.handleChange}
                                    onError={formik.touched.ocean && Boolean(formik.errors.ocean)}
                                >
                                    <MenuItem value='Atlantic'>Atlantic</MenuItem>
                                    <MenuItem value='Pacific'>Pacific</MenuItem>
                                    <MenuItem value='Indian'>Indian</MenuItem>
                                    <MenuItem value='Arctic'>Arctic</MenuItem>
                                </Select>
                                <FormHelperText style={{color: 'red'}}>{formik.touched.ocean && formik.errors.ocean}</FormHelperText>
                        </FormControl>
                    </Stack>
                    <FormControl component="fieldset" variant="standard"  >
                    <FormLabel component='legend' style={{textAlign: 'center'}}>Hobby</FormLabel>
                        <FormGroup 
                            id="hobby"
                            row
                            style={{justifyContent: 'space-around'}}
                            onChange={formik.handleChange}
                            onError={formik.touched.hobby && Boolean(formik.errors.hobby)}
                        >
                            <FormControlLabel
                                label='Sport' 
                                control={
                                    <Checkbox name="hobby" value='Sport' />
                                }
                            />
                            <FormControlLabel
                                label='Beauty' 
                                control={
                                    <Checkbox name="hobby" value='Beauty' />
                                }
                            />
                            <FormControlLabel
                                label='IT' 
                                control={
                                    <Checkbox name="hobby" value='IT' />
                                }
                            />
                            <FormControlLabel
                                label='Pets' 
                                control={
                                    <Checkbox name="hobby" value='Pets' />
                                }
                            />
                            </FormGroup>
                            <FormHelperText style={{color: 'red'}}>{formik.touched.hobby && formik.errors.hobby}</FormHelperText>
                    </FormControl>
                </Stack>
        </Box>
    )
}