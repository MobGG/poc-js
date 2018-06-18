$(document).ready(function () {
  var $idown;  // Keep it outside of the function, so it's initialized once.
  var fileUrl = [
    // 'http://app.sahapat.com/newtab/apk/sop-v1.2.1-signed.apk',
    // 'http://app.sahapat.com/newtab/apk/printspc.apk',
    // 'http://app.sahapat.com/newtab/apk/spcserve.apk',
    'http://app.sahapat.com/newtab/apk/test/1.txt',
    'http://app.sahapat.com/newtab/apk/test/2.txt',
    'ftp://nasaftp:ftpnasa@10.109.10.102/WAREHOUSE/sahagroupfair/IT219/B033_B03318F18004B2B.txt'
  ]
  // downloadURL('http://app.sahapat.com/newtab/apk/sop-v1.2.1-signed.apk');

  // for (i = 0; i < fileUrl.length; i++) {
  //   console.log(i);
  //   downloadURL(fileUrl[i]);
  // }

  // multiDownload(fileUrl);
  // myMultiDownload();

  function downloadURL(url) {
    console.log('downloadURL from ' + url);
    if ($idown) {
      $idown.attr('src', url);
    } else {
      $idown = $('<iframe>', { id: 'idown', src: url }).hide().appendTo('body');
    }
  }

  $('#download-btn').on('click', function () {
    // var files = $(this).data('files').split(' ');
    // multiDownload(fileUrl);
    // console.log('test');
    for (let fileIteration = 0; fileIteration < fileUrl.length; fileIteration += 1) {
      setTimeout(() => {
        multiDownload([fileUrl[fileIteration]]);
      }, fileIteration * 200);
    }
  });

  function myMultiDownload() {
    for (let fileIteration = 0; fileIteration < fileUrl.length; fileIteration += 1) {
      setTimeout(() => {
        multiDownload([fileUrl[fileIteration]]);
      }, fileIteration * 200);
    }
  }

});

