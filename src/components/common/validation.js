import React from 'react'

 export function IsValidForm(validateFields,data){
   let errors = validateFields.map(field=>{
       return validateField(field,data[field]);
   }).filter(err=>!!err)
   let errorsMsg = {}
   validateFields.forEach(field=>{
       errorsMsg[field]=validateField(field,data[field]);
   })
   return {validate:!errors.length,errors:errorsMsg}
}

export function validateField(key,value){
    let error = {}
    error[key] = !!value ? '' : 'This field is required'
    
    return error[key]
}
 