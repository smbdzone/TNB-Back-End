function toBase64(string) {
    return Buffer.from(string).toString('base64')
}

function fromBase64(base64) {
    return Buffer.from(base64, 'base64').toString('utf-8');
}

module.exports = {
    toBase64,
    fromBase64
};