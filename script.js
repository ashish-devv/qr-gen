var makeqr = function () {
  var link = document.getElementById("linktext").value;
  if (document.getElementById("linktext").value.length == 0) {
    alert("Please Fill the data");
  } else {
    var typeNumber = 4;
    var errorCorrectionLevel = "L";
    var qr = qrcode(typeNumber, errorCorrectionLevel);
    qr.addData(link);
    qr.make();
    console.log(link);
    document.getElementById("image").innerHTML = qr.createImgTag();
  }
};
var printDiv = function () {
  var divContents = document.getElementById("image").innerHTML;
  var a = window.open("", "", "height=500, width=500");
  a.document.write("<html>");
  a.document.write("<body > <h1>QR CODE: <br>");
  a.document.write(divContents);
  a.document.write("</body></html>");
  a.document.close();
  a.print();
};
