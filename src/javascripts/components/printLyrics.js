const printLyrics = (response) => {
  document.querySelector('#content-container').innerHTML = `
  <p>${response}</p>
  `;
};

export default printLyrics;
