import auth0 from 'auth0-js';
import history from '../History/history';

// https://auth0.com/docs/quickstart/spa/react/01-login#authentication-with-auth0
// ctrl f provide a login control

export default class Auth {
    auth0 = new auth0.WebAuth({
        domain: 'round-robin.auth0.com',
        clientID: 'ntF-WuX4rEdpBd-D0ImF715XtoFbxLHt',
        redirectUri: 'http://localhost:3000/callback',
        audience: 'https://round-robin.auth0.com/userinfo',
        responseType: 'token id_token',
        scope: 'openid'
    })

    constructor() {
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
        this.handleAuthentication = this.handleAuthentication.bind(this);
        this.isAuthenticated = this.isAuthenticated.bind(this);
    }

    handleAuthentication() {
        this.auth0.parseHash((err, authResult)=>{
            if (authResult && authResult.accessToken && authResult.idToken){
                this.setSession(authResult);
                history.replace('/home');
            } else if (err){
                history.replace('/home');
                console.log(err);
            }
        })
    }

    setSession(authResult) {
        let expiresAt = JSON.stringify((authResult.espiresIn * 1000) + new Date().getTime());
        localStorage.setItem('access_token', authResult.accessToken);
        localStorage.setItem('id_token', authResult.idToken);
        localStorage.setItem('expires_at', expiresAt);
        history.replace('/home');
    }

    logout() {
        localStorage.removeItem('access_token');
        localStorage.removeItem('id_token');
        localStorage.removeItem('expires_at');
        history.replace('/home');
    }

    isAuthenticated() {
        let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
        return new Date().getTime() < expiresAt;
    }

    login(){
        this.auth0.authorize();
    }
}