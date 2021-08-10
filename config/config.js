exports.creds = {
    identityMetadata: 'https://login.microsoftonline.com/common/v2.0/.well-known/openid-configuration',

    clientID: `82ec14a4-0562-46af-9836-dc8c8402c10e`,

    clientSecret: `2W4-DH5Q-zi5-~B~Rccag3I3Hl7.QVw4q9`,

    responseType: 'code id_token',

    responseMode: 'form_post',

    redirectUrl: 'http://localhost:2121/auth/openid/return',

    allowHttpForRedirectUrl: true,

    validateIssuer: false,

    issuer: null,

    passReqToCallback: false,

    useCookieInsteadOfSession: false,

    cookieEncryptionKeys: [
        { 'key': '12345678901234567890123456789012', 'iv': '123456789012' },
        { 'key': 'abcdefghijklmnopqrstuvwxyzabcdef', 'iv': 'abcdefghijkl' }
    ],

    scope: ['profile', 'offline_access', 'https://graph.microsoft.com/mail.read'],

    loggingLevel: false,

    nonceLifetime: null,

    nonceMaxAmount: 5,

    clockSkew: null,
};

exports.destroySessionUrl = 'http://localhost:2121';

exports.useMongoDBSessionStore = false;

exports.databaseUri = 'mongodb://localhost/OIDCStrategy';

exports.mongoDBSessionMaxAge = 24 * 60 * 60;