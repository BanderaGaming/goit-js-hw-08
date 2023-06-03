import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const storageKey = "videoplayer-current-time";
const currentTime = (data) => localStorage.setItem(storageKey,data.seconds);
player.on("timeupdate",throttle(currentTime,1000));
player.setCurrentTime(localStorage.getItem(storageKey));
