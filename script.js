window.onload = function() {
  const adBlockMessage = document.getElementById("adBlockMessage");
  const testAd = document.createElement("div");
  testAd.innerHTML = "&nbsp;";
  testAd.className = "adsbox";
  adBlockMessage.appendChild(testAd);

  // فحص ما إذا كان العنصر المخفي ما زال مخفيًا (يدل على عمل Ad Blocker)
  if (testAd.offsetHeight === 0) {
    adBlockMessage.style.display = "block";
  }
  
  adBlockMessage.removeChild(testAd);
};
