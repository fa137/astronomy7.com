'use strict';

describe('The main view', function () {
    var page;

    beforeEach(function () {
        browser.get('/index.html');
        page = require('./main.po');
    });

    it('should have app name inside angular-material toolbar', function () {
        expect(page.logo.getText()).toContain('ASTRONOMY7');
    });

});
