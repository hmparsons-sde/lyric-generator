const artistInfo = (artist, title) => {
  document.querySelector('#artist-info').innerHTML = `
  <h1>${title}</h1>
  <h2>By: ${artist}</h2>`;
};

export default artistInfo;
