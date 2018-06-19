let crypto = require('crypto');
let dns = require('native-dns');

let server = dns.createServer();
let i = 0;
server.on('request', function (request, response) {
    let domain = request.question[0].name;
    console.log(request);
    if (domain.endsWith('dns.write.plus')) { // sub.domain.com
        // client.rpush(domain, request.address.address)
        response.answer.push(dns.A({
            name: domain,
            address: request.address.address, // 1.2.3.4
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
// response.answer.push(dns.A({
//   name: request.question[0].name,
//   address: '45.76.146.140',
//   ttl: 600
// }));