import React, {forwardRef} from "react";
import './Login.scss';
import mail from './mail.png';

const LoginLabelInput = forwardRef(({img, placeholder, type}, ref) => (
    <div className={'Login'}>
        <span className={'loginIcon'}><img src={img} /></span>
        <input className={'loginInput'} placeholder={placeholder}
               ref={ref} type={type} />
    </div>
))

export default LoginLabelInput;