document.addEventListener("DOMContentLoaded", function () {
    console.log("Script loaded successfully!");

    document.getElementById('download-btn').addEventListener('click', function () {
        html2canvas(document.querySelector(".result-container")).then(canvas => {
            let link = document.createElement('a');
            link.download = 'shege_result.png';
            link.href = canvas.toDataURL("image/png");
            link.click();
        });
    });

    // Share functionality for Twitter and WhatsApp
document.getElementById("share-twitter").addEventListener("click", function () {
    const url = encodeURIComponent(window.location.href); // URL to share
    const text = encodeURIComponent("I just completed the Shege Calculator Test! Check my results.");
    const tweetUrl = `https://twitter.com/intent/tweet?text=${text}&url=${url}`;
    window.open(tweetUrl, "_blank");
});

document.getElementById("share-whatsapp").addEventListener("click", function () {
    const url = encodeURIComponent(window.location.href); // URL to share
    const text = encodeURIComponent("I just completed the Shege Calculator Test! Check my results.");
    const whatsappUrl = `https://wa.me/?text=${text} ${url}`;
    window.open(whatsappUrl, "_blank");
});
});
