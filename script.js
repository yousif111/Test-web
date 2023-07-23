document.addEventListener('DOMContentLoaded', function() {
  const adBlockMessage = document.getElementById("adBlockMessage");
  
  const script = document.createElement('script');
  script.src = 'https://cdn.jsdelivr.net/npm/ads-blocker-detector';
  script.onload = function() {
    if (window.adsBlockerDetector === undefined) {
      adBlockMessage.style.display = "block";
    }
  };
  document.head.appendChild(script);
});
