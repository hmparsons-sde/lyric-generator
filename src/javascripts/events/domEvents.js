import artistInfo from '../components/printArtists';
import { emptyField } from '../components/printForm';
import printLyrics from '../components/printLyrics';
import getLyrics from '../helpers/getLyrics';

const domEvents = () => {
  document.querySelector('body').addEventListener('click', (e) => {
    if (e.target.id.includes('search-songs')) {
      e.preventDefault();
      const artist = document.querySelector('#artist').value;
      const title = document.querySelector('#title').value;
      getLyrics(artist, title).then((response) => printLyrics(response));
      if (artist && title) {
        artistInfo(artist.toUpperCase(), title.toUpperCase());
      } else {
        emptyField();
      }
    }
  });
};

export default domEvents;
