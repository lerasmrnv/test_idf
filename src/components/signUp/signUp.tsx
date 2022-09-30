import { useState} from 'react'
import { Box, Breadcrumbs, Link, Typography, styled, Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from "@mui/material"
import { SignUpInfo } from "../steps/1_SignUpInfo"
import { useFormik} from 'formik'
import { VALUES_FORM } from "../../constants/valuesForm"
import { PersonalInfo } from "../steps/2_PersonalInfo";
import { FORM_SCHEMA } from "../../constants/formSchema";
import style from './style.module.scss';

const StyledButton =  styled(Button)(({theme}) => ({
    marginTop: '32px',
    height: '50px',
    padding: '0',
    width: '150px',
    borderRadius: '50px',    
    backgroundColor: '#3772FF',
    color: '#FFFFFF',
    fontSize: '12px',
    fontWeight: '400',
    lineHeight: '16px',
    textTransform: 'capitalize',
    [theme.breakpoints.down('md')]: {
        fontSize: '14px',   
        lineHeight: '10px',
        width: '100px',
        borderRadius: '24px',
    },
    '&:hover': {
        backgroundColor: '#FFFFFF',
        color: '#000000',
        border: '2px solid #E6E8EC',
    }
}))

export const SignUp = () => {
    const [step, setStep] = useState<number>(1);
    const [open, setOpen] = useState<boolean>(false);

    const handleClose = () => {
        setOpen((prev)=> !prev);
    }

    const formik = useFormik({
        initialValues: VALUES_FORM,
        validationSchema: FORM_SCHEMA,
        onSubmit: () => { setOpen((prev)=> !prev)  }
    })
  return (
    <>
    <Box width={{ xl: '500px', lg: '450px', md: '400px', sm: '350px', xs: '250px'}} py={{lg: 14, md: 12, sm: 8, xs: 4 }}>

        <Breadcrumbs style={{marginBottom: '42px'}}>
            <Link onClick={() => {setStep((step) => step = 1)}} underline='none' style={{cursor: 'pointer'}}>First step</Link>
            {!!(step > 1) && <Link underline='none' >Second step</Link>}
        </Breadcrumbs>
        
        <form onSubmit={formik.handleSubmit} style={{display: 'flex', flexDirection: 'column'}}>

            {!!(step===1) && <SignUpInfo formik={formik} />}
            {!!(step===2) && <PersonalInfo formik={formik} />}

            {!!(step===2) &&
            <div style={{display: 'flex', justifyContent: 'space-between', flexDirection: 'row'}}>
                <StyledButton
                    type='button'
                    onClick={() => {setStep((prev) => prev - 1)}}>
                    <Typography fontSize='13px'>Change SignUp Information</Typography>
                </StyledButton>
                <button className={style.button} type='submit'><Typography>Complete</Typography></button>
                </div>
            }
            {!!(step===1) &&
                <div style={{display: 'flex', justifyContent: 'end'}}>
                    <StyledButton
                        type='button'
                        onClick={() => {setStep((prev) => prev + 1)}}
                        >
                        <Typography>Next</Typography>
                    </StyledButton>
                </div>
            }
            
            <Dialog
                open={open}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description">
                <DialogTitle id="alert-dialog-title">Data:</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">First name: {formik.values.firstName}</DialogContentText>
                    <DialogContentText id="alert-dialog-description">Last name: {formik.values.lastName}</DialogContentText>
                    <DialogContentText id="alert-dialog-description">Mobile Phone: {formik.values.mobilePhone}</DialogContentText>
                    <DialogContentText id="alert-dialog-description">Password: {formik.values.password}</DialogContentText>
                    <DialogContentText id="alert-dialog-description">Email: {formik.values.email}</DialogContentText>
                    <DialogContentText id="alert-dialog-description">Birthday: {formik.values.birthday}</DialogContentText>
                    <DialogContentText id="alert-dialog-description">Ocean: {formik.values.ocean}</DialogContentText>
                    <DialogContentText id="alert-dialog-description">Hobby: {formik.values.hobby}</DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}><Typography>Close</Typography></Button>
                </DialogActions>
            </Dialog>
        </form>
    </Box>
    </>
  )
}
