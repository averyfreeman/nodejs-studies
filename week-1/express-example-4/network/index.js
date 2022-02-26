const dns = require('dns');

// ensure resolution of given address and hostname. Reference: https://nodejs.org/api/dns.html#dns_dns_resolve_hostname_rrtype_callback
exports.loopback = dns.resolve4('localhost', () => {
	[{ address: '127.0.0.1', ttl: 60 }];
});

exports.port = 3000;
