function updateQRCode() {
  const url = document.getElementById("url").value;
  const size = parseInt(document.getElementById("size").value);
  const colorDark = document.getElementById("colorDark").value;
  const colorLight = document.getElementById("colorLight").value;

  const qrContainer = document.getElementById("qrcode");
  qrContainer.innerHTML = ""; // clear previous QR

  if (url.trim() === "") {
    document.getElementById("downloadBtn").style.display = "none";
    return;
  }

  // Generate QR code
  new QRCode(qrContainer, {
    text: url,
    width: size,
    height: size,
    colorDark: colorDark,
    colorLight: colorLight,
    correctLevel: QRCode.CorrectLevel.H
  });

  // Show download button
  const downloadBtn = document.getElementById("downloadBtn");
  downloadBtn.style.display = "inline-block";

  downloadBtn.onclick = function() {
    const canvas = qrContainer.querySelector("canvas");
    const imgData = canvas.toDataURL("image/png");

    const link = document.createElement("a");
    link.href = imgData;
    link.download = "qrcode.png";
    link.click();
  };
}

// Attach real-time listeners
document.getElementById("url").addEventListener("input", updateQRCode);
document.getElementById("size").addEventListener("input", updateQRCode);
document.getElementById("colorDark").addEventListener("input", updateQRCode);
document.getElementById("colorLight").addEventListener("input", updateQRCode);
