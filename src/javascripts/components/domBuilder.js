const domBuilder = () => {
  document.querySelector('body').innerHTML = `
  <div id="form-container"></div>
  <div id="artist-info"></div>
  <div id="content-container"></div>`;
};

export default domBuilder;
