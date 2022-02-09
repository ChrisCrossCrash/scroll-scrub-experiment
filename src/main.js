import 'modern-normalize'
import './styles.scss'

/** @type {HTMLVideoElement} */
const video = document.querySelector('#scroll-vid')

const clamp = (num, min, max) => Math.min(Math.max(num, min), max)

/** Scrub the video playback to the appropriate time depending on the scroll position. */
const scrub = () => {
  const offsetPx = video.getBoundingClientRect().top
  const o = offsetPx
  const w = window.innerHeight
  const scrubProgress = clamp((w - o) / (2 * w), 0, 1)
  video.currentTime = video.duration * scrubProgress
}

window.addEventListener('scroll', scrub)
