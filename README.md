# DNS Leak Test Suite

how to use:

> node src/dns-server.js # run at server side
> ping "$(cat /dev/urandom | env LC_CTYPE=C tr -dc 'a-zA-Z0-9' | fold -w 32 | head -n 1)".dns.write.plus #any bash shell

dig ${radom string}.dns.write.plus, the server will return client ip of resolver. It will be the local dns you used.
