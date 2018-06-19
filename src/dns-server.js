let crypto = require('crypto');
let dns = require('native-dns');

let server = dns.createServer();
server.on('request', function (request, response) {
    let domain = request.question[0].name;
    console.log(request);
    if (domain.endsWith('dns.write.plus')) {
        response.answer.push(dns.A({
            name: domain,
            address: request.address.address,
            ttl: 600
        }));
        response.send();
    } else {
        response.answer.push(dns.CNAME({
            name: domain,
            data: 'ghs.googlehosted.com.',
            ttl: 30
        }));
        response.send();
    }
});

server.on('error', function (err, buff, req, res) {
    console.log(err.stack);
});
server.serve(53);