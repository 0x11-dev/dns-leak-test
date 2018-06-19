# DNS Leak Test Suite

how to use:

```shell
# run at server side
node src/dns-server.js

#any bash shell
ping "$(cat /dev/urandom | env LC_CTYPE=C tr -dc 'a-zA-Z0-9' | fold -w 32 | head -n 1)".dns.write.plus
```

dig ${radom string}.dns.write.plus, the server will return client ip of resolver. It will be the local dns you used.
