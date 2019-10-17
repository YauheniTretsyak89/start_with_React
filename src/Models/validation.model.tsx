import React from 'react'
import IFieldModel from './field.model';

interface IValidationModel{
    isFormValid:boolean,
    invalidFields:IFieldModel[]
}

export default IValidationModel;