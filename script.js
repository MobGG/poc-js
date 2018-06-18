function test() {
  alert("asdaldskajsskjdsaskdjkasjdkakddzsjnjasbfkajfbhsasbf");

}

// refer: https://github.com/lindell/JsBarcode
function genBarcode() {
  let barcodeData = "";
  barcodeData = document.getElementById("barcodeInput").value.toString();
  // console.log("barcodeData:" + barcodeData);
  JsBarcode("#barcode", barcodeData, {
    // format: "pharmacode",
    // format: "pharmacode",
    lineColor: "#0aa",
    width: 4,
    height: 40,
    displayValue: true
  });
}

function genBarcodeDom() {
  let barcodeData = "";
  barcodeData = document.getElementById("barcodeInput").value.toString();

  let domBarcode;
  domBarcode = document.createElement("img");
  // domBarcode.setAttribute("id", "bc");
  JsBarcode(domBarcode, barcodeData, {
    // format: "pharmacode",
    // lineColor: "#0aa",
    width: 2,
    height: 100,
    displayValue: true
  });
  // document.body.appendChild(domBarcode);

  if (document.getElementById("divBarcode").hasChildNodes()) {
    document.getElementById("divBarcode").innerHTML = "";
    // alert("removedChild");
  }
  document.getElementById("divBarcode").appendChild(domBarcode);
}

// refer: https://github.com/davidshimjs/qrcodejs
function genQrcode() {
  let qrCodeData = "";
  let qrCanvas;
  qrCodeData = document.getElementById("qrcodeInput").value.toString();
  // console.log("barcodeData:" + barcodeData);
  document.getElementById("qrcode").innerHTML = "";// clear old qrcode

  qrCanvas = document.getElementById("qrcode");
  new QRCode(qrCanvas, {
    text: qrCodeData,
    width: 128,
    height: 128,
    // width: '3cm',
    // height: '3cm',
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H
  });

  qrCanvas.style.color = "red";
  qrCanvas.style.width = "5cm";
  qrCanvas.style.height = "5cm";

  var x = document.getElementsByTagName("img");
  x[0].style.width = "4cm";
  x[0].style.height = "4cm";

}
