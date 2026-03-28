// script.js
$(document).ready(function () {
    $("#downloadBtn").on("click", function () {
        const url = $("#videoUrl").val().trim();

        if (!url) {
            alert("⚠️ Please paste a TikTok video link!");
            return;
        }
        if (!url.includes("tiktok.com")) {
            alert("⚠️ Please enter a valid TikTok URL.");
            return;
        }

        $("#resultSection").removeClass("d-none").hide().fadeIn(800);
        $("#statusText").text("Fetching video details...");

        setTimeout(() => {
            $("#statusText").text("Removing watermark & preparing HD...");
            $("#videoTitle").text("Viral TikTok Dance Challenge 🔥");

            // Simulate video preview
            setTimeout(() => {
                $("#previewContainer").html(`
                    <video controls autoplay loop class="w-100 h-100" style="object-fit: cover;">
                        <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4">
                    </video>
                `);
            }, 1400);
        }, 1100);
    });
});

function simulateDownload(type) {
    let msg = "";
    let file = "";

    if (type === "hd") {
        msg = "HD Video (No Watermark)";
        file = "tiktok_hd_no_watermark.mp4";
    } else if (type === "fhd") {
        msg = "FHD Quality Video";
        file = "tiktok_fhd.mp4";
    } else if (type === "audio") {
        msg = "Original Audio (MP3)";
        file = "tiktok_audio.mp3";
    }

    const toast = $(`<div class="position-fixed bottom-0 end-0 p-3" style="z-index: 9999;">
        <div class="toast show bg-success text-white" role="alert">
            <div class="toast-body">
                📥 ${msg} downloaded successfully!<br>
                <small>${file}</small>
            </div>
        </div>
    </div>`);

    $("body").append(toast);

    setTimeout(() => {
        toast.fadeOut(600, function () { $(this).remove(); });
    }, 4000);

    console.log(`Simulated download: ${file}`);
}
