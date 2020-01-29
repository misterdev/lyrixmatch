import fetchJsonp from "fetch-jsonp";

const API_KEY = "ba86ae56dbd085f1a001ee4739a8e45b";
const url = (endpoint, params) =>
  `https://api.musixmatch.com/ws/1.1/${endpoint}?format=jsonp&callback=callback&${params}&apikey=${API_KEY}`;

const fetch = url =>
  fetchJsonp(url)
    .then(r => r.json())
    .then(r => Promise.resolve(r.message.body));

// Very bad naive wat of fetching a pool of artists
let artists = null;
fetch(url("chart.artists.get", `page=1&page_size=80&country=it`)).then(
  ({ artist_list }) =>
    (artists = artist_list.map(({ artist }) => artist.artist_name))
);

const getLyrics = commontrack_id =>
  fetch(
    url("track.lyrics.get", `commontrack_id=${commontrack_id}`)
  ).then(({ lyrics }) =>
    Promise.resolve(
      lyrics.lyrics_body
        .split("\n")
        .filter(l => l !== "" && l.length > 20 && l.length < 50)[0]
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
  getTracks(page)
    .then(
      async tracks =>
        await Promise.all(
          tracks.map(async track => ({
            ...track,
            quote: await getLyrics(track.commontrack_id)
          }))
        )
    )
    .then(tracks =>
      Promise.resolve(
        tracks.map(track => {
          const { artist_name, track_name, quote } = track;
          const answer = Math.floor(Math.random() * 2);
          let options = [];
          while (options.length < 3) {
            if (options.length === answer) {
              options.push(artist_name);
            } else {
              const i = Math.floor(Math.random() * artists.length - 1);
              const randomArtist = artists[i];
              if (randomArtist !== artist_name && randomArtist !== "") {
                options.push(randomArtist);
              }
            }
          }
          return {
            quote,
            options,
            answer,
            track: track_name
          };
        })
      )
    );

export { getCards };
