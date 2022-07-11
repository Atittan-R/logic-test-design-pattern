const notifier = require("mail-notifier");

const user = "pao22304.ar@gmail.com";
const password = "shdibqfrxjxrchdu";
const imap = {
    user: user,
    password: password,
    host: "imap.gmail.com",
    port: 993,
    tls: true,
    tlsOptions: {
        rejectUnauthorized: false
    },
    authTimeout: 10000
};

const n = notifier(imap);
n.on('end', () => n.start()) // session closed
    .on('mail', mail => {
        try {
            console.log(mail)
        } catch (error) {
            console.log(error)
        }
    })
    .start(() => {
        console.log("Listening for a new email...");
    });