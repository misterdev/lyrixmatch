import fetchJsonp from "fetch-jsonp";


const url = (endpoint, params) =>
    `https://api.musixmatch.com/ws/1.1/${endpoint}?format=jsonp&callback=callback&${params}&apikey=${API_KEY}`;

const fetch = url =>
  fetchJsonp(url)
    .then(r => r.json())
    .then(r => {
      console.log("RESPONSE", r);
      return Promise.resolve(r.message.body);
    });

const getLyrics = commontrack_id =>
  fetch(
    url("track.lyrics.get", `commontrack_id=${commontrack_id}`)
  ).then(({ lyrics }) =>
    Promise.resolve(
      lyrics.lyrics_body
        .split("\n")
        .filter(l => l.length > 20 && l.length < 50)[0]
    )
  );

const getTracks = page =>
  fetch(
    url(
      "chart.tracks.get",
      `page=${page}&page_size=10&country=it&f_has_lyrics=1`
    )
  ).then(({ track_list }) =>
    Promise.resolve(
      track_list.map(({ track }) => {
        const { commontrack_id, artist_name, track_name } = track;
        return {
          commontrack_id,
          artist_name,
          track_name
        };
      })
    )
  );

const getCards = page =>
  getTracks(page).then(
    async tracks =>
      await Promise.all(
        tracks.map(async track => ({
          ...track,
          track: await getLyrics(track.commontrack_id)
        }))
      )
  );

export default getCards;
export {
    getArtists
}

// export default () => {
//   //   getLyrics("81663574").then(x => console.log("lyric ", x));
//   getCards(1).then(r => console.log("hey", r));
// };
