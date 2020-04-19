import React, {useRef} from "react";
import LoginLabelInput from "./LoginLabelInput";
import '../../styles/utils.scss';
import mail from './mail.png';
import lock from './lock.png';

function requestToLogin(idReference, pwReference) {
    const id = idReference.current;
    const pw = pwReference.current;

    //Logic
}

function LoginForm() {
    const idReference = useRef();
    const pwReference = useRef();

    return (
        <form onSubmit={requestToLogin(idReference, pwReference)}>
            <LoginLabelInput ref={idReference} placeholder={'아이디'}
                             type={'text'} img={mail} />
            <LoginLabelInput ref={pwReference} placeholder={'비밀번호'}
                             type={'password'} img={lock} />
            <button type={'submit'} className={'btn space-top pull-right'}>Sign In</button>
        </form>
    );
}

export default LoginForm;