// Get the feed from Phys.org website and export it to A7 central api
var req = require('request');
var Phys = (function () {
    function Phys() {
        this.feedSource = "";
        // test
        console.log(this.request("http://google.com"));
    }
    Phys.prototype.request = function (url) {
        return req(url, this.parseXML);
    };
    Phys.prototype.parseXML = function (err, res, xml) {
        return res;
    };
    Phys.prototype.getSiteInfo = function () {
        var siteInfo;
        return siteInfo;
    };
    Phys.prototype.getFeed = function (url) {
        return this.request(url);
    };
    return Phys;
})();
exports.Phys = Phys;
