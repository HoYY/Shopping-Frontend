import React, {useRef} from "react";
import LoginLabelInput from "./LoginLabelInput";
import '../../styles/utils.scss';
import mail from './mail.png';
import lock from './lock.png';

function handleSubmit(idReference, pwReference, event) {
    event.preventDefault();

    const loginUser = {
        id: idReference.current.value,
        password: pwReference.current.value
    }

    fetch('http://127.0.0.1:8080/login', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(loginUser)
    })
    .then(response =>
        response.json().then(json => {
            console.log(json);
        })
    );
}

function LoginForm() {
    const idReference = useRef();
    const pwReference = useRef();

    return (
        <form onSubmit={(event => handleSubmit(idReference, pwReference, event))}>
            <LoginLabelInput ref={idReference} name={'id'}
                             placeholder={'아이디'} type={'text'}
                             img={mail} />
            <LoginLabelInput ref={pwReference} name={'password'}
                             placeholder={'비밀번호'} type={'password'}
                             img={lock} />
            <button type={'submit'} className={'btn space-top pull-right'}>Sign In</button>
        </form>
    );
}

export default LoginForm;