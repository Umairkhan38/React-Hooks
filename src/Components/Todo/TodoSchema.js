import * as Yup from  'yup';


const TodoSchema=()=>Yup.object({
title:Yup.string().min(2).max(30).required("Please Enter the Title properly!"),
description:Yup.string().min(5).max(100).required("Please Enter the Description properly!"),
category:Yup.string().required('Please Select the Category!'),
bgColor:Yup.string().required('Please Select the Colour!')

})


export {TodoSchema}; 