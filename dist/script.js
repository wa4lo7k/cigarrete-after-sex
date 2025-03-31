document.addEventListener("DOMContentLoaded", () => {
    const trackList = document.getElementById("track-list");
    const listenNowBtn = document.querySelector(".listen-now-btn");
    const shareBtn = document.querySelector(".share-btn");
    
    const songs = [
        { title: "Apocalypse", duration: "4:50", file: "/music/Apocalypse.mp3" },
        { title: "Nothing's Gonna Hurt You Baby", duration: "4:04", file: "/music/Nothings_Gonna_Hurt_You_Baby.mp3" },
        { title: "Sweet", duration: "4:36", file: "/music/Sweet.mp3" },
        { title: "K.", duration: "5:19", file: "/music/K.mp3" },
        { title: "Each Time You Fall In Love", duration: "4:50", file: "/music/Each_Time_You_Fall_In_Love.mp3" },
        { title: "Sunsetz", duration: "3:33", file: "/music/Sunsetz.mp3" },
        { title: "Affection", duration: "5:11", file: "/music/Affection.mp3" },
        { title: "Cry", duration: "4:19", file: "/music/Cry.mp3" },
        { title: "Opera House", duration: "3:46", file: "/music/Opera_House.mp3" },
        { title: "Flash", duration: "3:20", file: "/music/Flash.mp3" }
    ];

    songs.forEach((song, index) => {
        const track = document.createElement("div");
        track.classList.add("track", "flex", "items-center", "justify-between", "py-3", "border-b", "border-gray-700", "px-4", "w-full", "flex-wrap", "gap-2", "md:flex-nowrap");

        track.innerHTML = `
            <div class="flex items-center space-x-4 w-full md:w-auto">
                <span class="text-gray-400 text-lg">${index + 1}</span>
                <button class="play-btn text-white w-12 h-12 flex items-center justify-center rounded-full border border-gray-500 transition duration-300 aspect-square">
                    <i class="ri-play-fill text-2xl"></i>
                </button>
                <audio class="audio-player">
                    <source src="${song.file}" type="audio/mpeg">
                </audio>
                <div class="truncate w-full">
                    <h2 class="text-lg font-semibold truncate">${song.title}</h2>
                    <p class="text-gray-400 text-sm">Cigarettes After Sex</p>
                </div>
            </div>

            <div class="flex items-center space-x-6 w-full md:w-auto justify-between md:justify-end">
                <span class="text-gray-400 text-sm">${song.duration}</span>
                <a href="#" class="share-link text-white hover:text-gray-400 transition duration-300">
                    <i class="ri-share-line"></i>
                </a>
            </div>
        `;
        
        trackList.appendChild(track);
    });

    const audioPlayers = document.querySelectorAll(".audio-player");
    const playButtons = document.querySelectorAll(".play-btn");

    playButtons.forEach((btn, index) => {
        btn.addEventListener("click", () => {
            audioPlayers.forEach((audio, i) => {
                if (i !== index) {
                    audio.pause();
                    playButtons[i].classList.remove("bg-green-300", "text-gray-900");
                    playButtons[i].innerHTML = '<i class="ri-play-fill text-2xl"></i>';
                }
            });

            if (audioPlayers[index].paused) {
                audioPlayers[index].play();
                btn.classList.add("bg-green-300", "text-gray-900");
                btn.innerHTML = '<i class="ri-pause-fill text-2xl"></i>';
            } else {
                audioPlayers[index].pause();
                btn.classList.remove("bg-green-300", "text-gray-900");
                btn.innerHTML = '<i class="ri-play-fill text-2xl"></i>';
            }
        });
    });

    // Listen Now button functionality (plays the first song)
    if (listenNowBtn) {
        listenNowBtn.addEventListener("click", () => {
            if (audioPlayers.length > 0) {
                playButtons[0].click(); // Simulate click on the first song's play button
            }
        });
    }

    // Share button link (Placeholder, update it later)
    if (shareBtn) {
        shareBtn.setAttribute("href", "#"); 
    }

    // Set share links for each song
    const shareLinks = document.querySelectorAll(".share-link");
    shareLinks.forEach((link, index) => {
        link.setAttribute("href", "#"); // Update with actual link later
    });
});
