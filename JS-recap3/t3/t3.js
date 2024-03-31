'use strict';
const target = document.querySelector('#target');
const browserInfo = getBrowserInfo();
const user = navigator.userAgent;
addParagraph(getBrowserInfo());
addParagraph(getOperatingSys());
const width = window.screen.width;
const height = window.screen.height;

addParagraph(`width : ${width} height : ${height}`);
const availableWidth = window.screen.availWidth;
const availableHeight = window.screen.availHeight;
addParagraph(
  `Available width: ${availableWidth} Available Height: ${availableHeight}`
);
const currentDate = new Date().toLocaleDateString('fi-FI', {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
});
addParagraph(currentDate);
const currentTime = new Date().toLocaleTimeString('fi-FI', {
  hour: 'numeric',
  minute: 'numeric',
});
addParagraph(currentTime);
function getBrowserInfo() {
  const user = navigator.userAgent;
  let browserInfo;
  const browserRegex = /(?:Edg\/|Chrome\/|Safari\/)(\d+)/;
  const match = user.match(browserRegex);
  if (match) {
    browserInfo = match[0];
    const version = match[1];
    if (user.includes('Edg') || user.includes('Edge')) {
      browserInfo = `Microsoft Edge ${version}`;
    }
  }
  if (browserInfo === undefined) {
    browserInfo = 'undefined';
  }
  browserInfo = browserInfo.replace('/', ' ');

  return browserInfo;
}
function getOperatingSys() {
  let osInfo;

  if (user.includes('Windows NT 10.0')) {
    osInfo = 'Windows 10';
  } else if (user.includes('Windows NT 6.3')) {
    osInfo = 'Windows 8.1';
  } else if (user.includes('Windows NT 6.2')) {
    osInfo = 'Windows 8';
  } else if (user.includes('Windows NT 6.1')) {
    osInfo = 'Windows 7';
  } else if (user.includes('Windows NT 6.0')) {
    osInfo = 'Windows Vista';
  } else if (user.includes('Windows NT 5.1')) {
    osInfo = 'Windows XP';
  } else if (user.includes('Macintosh')) {
    osInfo = 'Mac OS';
  } else if (user.includes('Linux')) {
    osInfo = 'Linux';
  } else {
    osInfo = 'Unknown Operating System';
  }
  return osInfo;
}
function addParagraph(text) {
  const p = document.createElement('p');
  p.innerText = text;
  target.appendChild(p);
}
//olis ollu paljon helpompaa jos user-agent client hintit toimis firefoxissaki
