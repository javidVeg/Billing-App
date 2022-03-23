const accountSid = 'ACb54314614a2003021f74a102a97d0f80';
const authToken = '427a3e3e6170639a2ddccfe4d80a1a3e';
const client = require ('twilio')(accountSid, authToken);

client.messages
    .create({
        body: 'Test Test Testicals',
        from: '+15626858029',
        to: '+15622718898'
    })
    .then((messages) => console.log(messages))
    .catch((err) => console.error(err))
