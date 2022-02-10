import './snowpack/pkg/modern-normalize.css.proxy.js'
import './styles.css.proxy.js'

/** @type {HTMLVideoElement} */
const video = document.querySelector('#scroll-vid')

const clamp = (num, min, max) => Math.min(Math.max(num, min), max)

/** Scrub the video playback to the appropriate time depending on the scroll position. */
const scrub = () => {
  // Don't interrupt in-progress video seeking.
  if (video.seeking) return
  // The `+1` makes the playback stop at frame 64/128,
  // so that the background is perfectly centered and
  // flat when the video is filling the screen.
  const o = video.getBoundingClientRect().top + 1
  const w = window.innerHeight
  const scrubProgress = clamp((w - o) / (2 * w), 0, 1)
  video.currentTime = video.duration * scrubProgress
}

window.addEventListener('scroll', scrub)
