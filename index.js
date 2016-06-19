var os = require('os');
var dns = require('dns');
var deasync = require('deasync');

module.exports = deasync(function(cb){

    var uqdn = os.hostname();
    dns.lookup(uqdn, { hints: dns.ADDRCONFIG }, function(err, ip) {
        if(err) return cb(err);
        
        dns.lookupService(ip, 0, function (err, fqdn) {
            if (err) return cb(err);
            
            cb(null, fqdn);
        });
    });
});
