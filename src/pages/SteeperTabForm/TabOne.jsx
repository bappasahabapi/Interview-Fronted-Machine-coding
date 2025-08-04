import React from 'react'
import { CustomTextInput } from './CustomTextInput';

const TabOne = ({data,setData}) => {
 
    const {name,email, password,phone}=data;
    const handleChange =(e)=>{


        const {name, value}=e.target
        setData((preData)=>({
            ...preData,
            [name]:value
        }));

        // setData({...data,   name:e.target.value}) // bad pattern 
        // setData((pre=>({
        //     ...pre,
        //     name:e.target.value
        // })))

        //take dynamic data first way .
        
    };
    return (
    <div>
        <b>TabOne: Login Page</b> 
        <hr  style={{width:"10%", marginLeft:'0px'}} />

        <div>

            <div>
                <label >Name* : {" "}</label>
                <input 
                type="text"
                name='name'
                placeholder='Name'
                value={name}
                onChange={handleChange}
                // required
                 />
            </div>
            <div>
                <label >Email: {" "}</label>
                <input 
                type="text"
                name='email'
                placeholder='Email'
                value={email}
                onChange={handleChange}
                 />
            </div>
            <div>
                <label >Password: {" "}</label>
                <input 
                type="password"
                name='password'
                placeholder='Passord'
                value={password}
                onChange={handleChange}
                 />
            </div>
            <CustomTextInput
                type='text'
                name='phone'
                value={phone}
                label={'Phone'}
                placeholder={'phone'}
                onChange={handleChange}
            />
        </div>
    </div>
  )
}

export default TabOne