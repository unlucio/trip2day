import { useState } from "react";
import FacebookLogin from 'react-facebook-login';

export default function LoginFacebook() {
    const [auth, setAuth] = useState(false)
    const [name, setName] = useState("")
    const [picture, setPicture] = useState("")

    const responseFacebook = response => {
        console.log(response);
        if (response.status !== 'unknown') {
            setAuth(true);
            setName(response.name);
            setPicture(response.picture.data.url)
        };

    }

    const componentClicked = () => {
        console.log('Facebook btn clicked');
    }

    let facebookData;

    return (
        auth ? facebookData = (
            <div style={{
                width: '400px',
                margin: 'auto',
                background: '#f4f4f4',
                padding: '20px',
                color: '#000'
            }}>
                <img src={picture} alt={name} />
                <h2>Welcome {name}!</h2>
            </div>
        ) :
            facebookData = (<FacebookLogin
                appId="817785445725598"
                autoLoad={true}
                fields="name,picture"
                onClick={componentClicked}
                callback={responseFacebook} />),
        <>
            {facebookData}
        </>
    )
}