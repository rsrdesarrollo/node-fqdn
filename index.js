var os = require('os');
var dns = require('dns');

module.exports = function(cb){

    var uqdn = os.hostname();
    dns.lookup(uqdn, { hints: dns.ADDRCONFIG }, function(err, ip) {
        if(err) throw err;
        
        dns.lookupService(ip, 0, function (err, fqdn) {
            if (err) throw err;
            
            cb(fqdn);
        });
    });
}
