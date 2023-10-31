const btns = document.querySelectorAll('.btns button');
const defaultVideo = document.querySelector('.default-video');
const videos = document.querySelectorAll('.video video');

function changeVideoSource(e) {
  hideAllVideos();
  let currentVideo = document.getElementById(e.target.dataset.id);
  currentVideo.classList.remove('hide');
  currentVideo.load(); // Reload the video to apply the new source
  currentVideo.play(); // Play the new video
}

btns.forEach((btn) => {
  btn.addEventListener('click', changeVideoSource);
});

function hideAllVideos() {
  videos.forEach((video) => {
    video.classList.add('hide');
    video.pause(); // Pause the video to stop the sound
  });
}

videos.forEach((video) => {
  video.addEventListener('timeupdate', () => {
    // Check if the video has reached the end (time >= duration)
    if (video.currentTime >= video.duration) {
      hideAllVideos();
      defaultVideo.classList.remove('hide');
      defaultVideo.load(); // Reload the video to apply the new source
      defaultVideo.play(); // Play the new video
      defaultVideo.muted = false; // Unmute the default video
    }
  });
});
