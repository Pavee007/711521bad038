const axios = require('axios');
var myHeaders =  new Headers()

/**you need to get the token and put it in myToken var.
   Where to store the token is the real question, you need
   to take care about the storage you choose beacause of
   the security risks*/

myHeaders.append('Authorization','Bearer'+'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzEyMjEzMjE5LCJpYXQiOjE3MTIyMTI5MTksImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjI4MDhhY2JlLWNhYmUtNDc0ZS04MzA5LTUzMWFlZDdhNjFhYiIsInN1YiI6ImtpdC4yNS4yMWJhZDAzOEBnbWFpbC5jb20ifSwiY29tcGFueU5hbWUiOiJaT09NIFRlY2giLCJjbGllbnRJRCI6IjI4MDhhY2JlLWNhYmUtNDc0ZS04MzA5LTUzMWFlZDdhNjFhYiIsImNsaWVudFNlY3JldCI6InNMV3p4TExZaENCWEFCUFUiLCJvd25lck5hbWUiOiJQYXZpdGggS3VtYXIiLCJvd25lckVtYWlsIjoia2l0LjI1LjIxYmFkMDM4QGdtYWlsLmNvbSIsInJvbGxObyI6IjcxMTUyMWJhZDAzOCJ9.RVfTlEzOcNyGz7EtbsnOxKP1bG9WWwQ3NH54E3FDiJI');

fetch( 'http://20.244.56.144/test/primes', {
    credentials: 'include',
    headers: myHeaders,
    method: 'GET'
}).then( res => {
    
    return res.json();
}).then( res => {

    console.log(res)
});