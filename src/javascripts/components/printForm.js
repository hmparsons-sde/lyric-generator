const printForm = () => {
  document.querySelector('#form-container').innerHTML = `
  <div class="d-flex justify-content-center">
  <form>
  <div class="form-group">
    <label for="artist" class="form-label" id="artist-label">Artist</label>
    <input type="text" class="form-control" id="artist" aria-describedby="artist" placeholder="Cherry Glazerr">
  </div>
  <div class="form-group">
    <label for="title" class="form-label">Title</label>
    <input type="text" class="form-control" id="title" placeholder="Rabbit Hole">
  </div>
  <button type="submit" id="search-songs" class="btn">Submit</button>
</form>
</div>`;
};

const emptyField = () => {
  document.querySelector('#artist-info').innerHTML = `
  <h1>Please Enter an Artist + Title</h1>
  `;
};

export { emptyField, printForm };
