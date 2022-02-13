const DownloadPage = require('../pageobjects/Download.page'); //importing Page from pageobject

    describe('1 FD Download page', function () {                   //"describe\it" mocha function
        it('should download "some-file.txt" file', async () => {  //description of what this function should do
            await DownloadPage.open();
            await expect(href="download/some-file.txt").toHaveLink('download/some-file.txt').true; //supposed a file to be downloaded
            $(download/some-file.txt).click();
        });
    });
