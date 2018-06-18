$(document).ready(function () {
  $('#posts').DataTable({
    "processing": true,
    "serverSide": true,
    "ajax": {
      // "url": "https://devws.sahapat.com/v2/partner/TestPaging/getProvince",
      /** for advance paging */
      "url": "https://devws.sahapat.com/v2/partner/invoice/listSOInvoiceHistoryAllNewpaging",
      "dataType": "json",
      "type": "POST",
      // "data": { _token: "{{csrf_token()}}" }
      /** for custom response */
      "data": function (d) {
        d._token = "{{csrf_token()}}";
        d.languagecode = "L001";
        d.orgcode = "SPC";
        d.comcode = "SPC";
        d.corpcode = "SPC";
        d.days = "10";
        d.deliverdays = "5";
        // d.custom = $('#myInput').val();
        // etc
      },
      /** for custom response */
      "dataSrc": function (json) {
        if (json.success) {
          json.draw = json.result.draw;
          json.recordsTotal = json.result.recordsTotal;
          json.recordsFiltered = json.result.recordsFiltered;
          return json.result.data;
        } else {
          return '';
        }
      }
    },
    "columns": [
      // { "data": "PROVINCECODE" },
      // { "data": "PROVINCENAME" },
      // { "data": "LANGUAGECODE" },
      // { "data": "GEOCODE" },
      // { "data": "options" }

      {
        "data": "invoiceno",
        "name": "invoiceno"
      },
      {
        "data": "sono",
        "name": "sono"
      }

    ]
  });
});