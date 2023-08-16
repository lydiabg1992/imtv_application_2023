const clientId = 'd58246cf6f224d91884fa4d060690d9e';
const redirectUri = 'http://localhost:3000';
const scopes = ['user-read-private', 'user-read-email'];


function generateRandomString(length) {
    let text = '';
    let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  
    for (let i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }


  async function generateCodeChallenge(codeVerifier) {
    const encoder = new TextEncoder();
    const data = encoder.encode(codeVerifier);
    const digest = await window.crypto.subtle.digest('SHA-256', data);


    function base64encode(string) {
      return btoa(String.fromCharCode.apply(null, new Uint8Array(string)))
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace(/=+$/, '');
    }
  
    return base64encode(digest);
  }
  

let codeVerifier = generateRandomString(128);

generateCodeChallenge(codeVerifier).then(codeChallenge => {
  let state = generateRandomString(16);
  let scope = 'user-read-private user-read-email';

  localStorage.setItem('code_verifier', codeVerifier);

  let args = new URLSearchParams({
    response_type: 'code',
    client_id: clientId,
    scope: scope,
    redirect_uri: redirectUri,
    state: state,
    code_challenge_method: 'S256',
    code_challenge: codeChallenge
  });

  window.location = 'https://accounts.spotify.com/authorize?' + args;
});


const urlParams = new URLSearchParams(window.location.search);
let code = urlParams.get('code');

if (code) {
    let storedCodeVerifier = localStorage.getItem('codeVerifier');

    fetch('https://accounts.spotify.com/api/token', {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
            grant_type: 'authorization_code',
            code:code,
            redirect_uri: redirectUri,
            client_id:clientId,
            code_verifier: storedCodeVerifier 
        })
    })
    .then(response => response.json())
    .then(date => {
        const accessToken = data.access_token;
        console.log('Access Token:', accessToken);
    })
    .catch(error => {
        console.error('Error', error);
    })
}


async function getProfile(accessToken) {
    let accessToken = localStorage.getItem('access_token');
  
    const response = await fetch('https://api.spotify.com/v1/me', {
      headers: {
        Authorization: 'Bearer ' + accessToken
      }
    });
  
    const data = await response.json();
  }
  