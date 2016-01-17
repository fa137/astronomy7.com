// Get the feed from Phys.org website and export it to A7 central api
import req = require('request');

export class Phys{
    feedSource: string = "";
    siteInfo: Array<string>;
    constructor(){
        // test
        console.log(this.request("http://google.com"));
    }
    request(url){
        return req(url, this.parseXML);
    }
    parseXML(err, res, xml){
        return res;
    }
    getSiteInfo(){
        var siteInfo;
        return siteInfo;
    }
    getFeed(url){
        return this.request(url);
        
    }
    
}