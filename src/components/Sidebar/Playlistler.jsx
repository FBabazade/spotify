import React from "react";
import Header from "./Playlist/Header";
import List from "./Playlist/List";
import Favories from "./Playlist/Favories";
const playlists = [
  { title: "Yeni playlist", songs: "Seçilen • 52 mahnı" },
  { title: "Yeni playlist", songs: "Seçilen • 52 mahnı" },
  { title: "Yeni playlist", songs: "Seçilen • 52 mahnı" },
  { title: "Yeni playlist", songs: "Seçilen • 52 mahnı" },
];
const Playlistler = () => {
  return (
    <div className="px-2 pb-2 flex flex-col gap-2 h-[590px]">
      <Header />
      <div
        className="flex flex-col overflow-y-auto max-h-screen "
        id="scrollableList"
      >
        <Favories/>
      {playlists.map((playlist,index)=><List key={index} title={playlist.title} songs={playlist.songs}/>)}
      </div>
    </div>
  );
};

export default Playlistler;
