var video;

window.addEventListener("load", function () {
	console.log("Good job opening the window")

});
video = document.getElementById("player1");

video.autoplay = false;

video.loop = false;

document.querySelector("#play").addEventListener("click", function () {
	console.log("Play Video");
	video.play();
	updateVolumeInfo();
});

//pause video
document.querySelector("#pause").addEventListener("click", function () {
	console.log("Pause Video");
	video.pause();
});

// Decrease the playback rate by 10% each click
document.querySelector("#slower").addEventListener("click", function () {
	console.log("Slow Down Video");
	var currRate = video.playbackRate;

	var newRate = currRate - 0.1;

	video.playbackRate = newRate;

	console.log("New Playback Rate: " + newRate);
});
// Increase the playback rate by 10% for each click
document.querySelector("#faster").addEventListener("click", function () {
	console.log("Speed Up Video");

	var currRate = video.playbackRate;
	var newRate = currRate * 1.1;

	video.playbackRate = newRate;

	console.log("New Playback Rate: " + newRate);

});

//Skip ahead in video
document.querySelector("#skip").addEventListener("click", function () {
	console.log("Skip Ahead!");

	var currentTime = video.currentTime;
	var newTime = currentTime + 10;
	var duration = video.duration;

	if (newTime > duration) {
		newTime = 0;
	}

	video.currentTime = newTime;

	console.log("Current Video Time: " + newTime);
});

//Mute controls
document.querySelector("#mute").addEventListener("click", function () {
	console.log("Mute/Unmute Video");

	video.muted = !video.muted;

	var muteButton = document.querySelector("#mute");
	if (video.muted) {
		muteButton.textContent = "Unmute";
	} else {
		muteButton.textContent = "Mute";
	}
});

//Volume changer
document.querySelector("#slider").addEventListener("input", function () {
	var volumeVal = this.value / 100;
	video.volume = volumeVal;
	updateVolumeInfo();
});

//Vintage effect
document.querySelector("#vintage").addEventListener("click", function () {
	console.log("Apply Vintage Effect");
	video.classList.add("oldSchool");
});

//Original effect
document.querySelector("#orig").addEventListener("click", function () {
	console.log("Remove Vintage Effect");
	video.classList.remove("oldSchool");
});

//Volume Information
function updateVolumeInfo() {
	var volElement = document.getElementById("volume");
	var volSlider = document.getElementById("slider");

	var currVol = video.volume;
	volElement.textContent = (currVol * 100).toFixed(0) + "%";
	volSlider.value = currVol * 100;
}

