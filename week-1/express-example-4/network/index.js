const dns = require('dns');
// ensure resolution of given address and hostname
// https://nodejs.org/api/dns.html#dns_dns_resolve_hostname_rrtype_callback
exports.loopback = dns.resolve4('localhost', () => {
	[{ address: '127.0.0.1', ttl: 60 }];
});
