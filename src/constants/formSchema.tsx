import { object, string, ref, date, array } from 'yup';
import moment from "moment";

export const FORM_SCHEMA = object().shape({
    mobilePhone: string()
        .matches(/^(\+375)\d{9}$/, 'Start with +375')
        .required('Is rerquired'),
    email: string()
        .email('Incorrect email')
        .required('Is rerquired'),
    password: string()
        .min(8, 'Password less then 8')
        .max(20, 'Password more then 20')
        .required('Is rerquired'),
    confirmPassword: string()
        .oneOf([ref('password')], 'Incorrect password')
        .required('Is rerquired'),
    firstName: string()
        .min(2, 'Name less then 2')
        .max(30, 'Name more then 30')
        .required('Is rerquired'),
    lastName: string()
        .min(2, 'Name less then 2')
        .max(30, 'Name more then 30')
        .required('Is rerquired'),
    birthday: 
        date()
        .test('Should be more than 18', function(value) {
        return moment().diff(moment(value), 'years') >= 18;
        })
        .test( 'Should be less than 90', function(value) {
            return moment().diff(moment(value), 'years') < 90;
        }),
    sex:
        string()
        .required('Is rerquired'),
    ocean: 
        string()
        .oneOf(["Atlantic","Pacific","Indian","Arctic"], 'Choose one of')
        .required('Is rerquired'),
    hobby:
        array()
        .required('Is rerquired'),
})