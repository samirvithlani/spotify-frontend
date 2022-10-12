import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";

export const PlayLists = () => {
  const [songs, setsongs] = useState([]);
  const [user, setuser] = useState({});
  const { register, handleSubmit, errors } = useForm();
  const navigate = useNavigate();

  const fetchAllSongs = async () => {
    axios.get("http://localhost:8000/song/song").then((res) => {
      setsongs(res.data);
    });
  };
  useEffect(() => {
    fetchAllSongs();
    var id = localStorage.getItem("id")
    if(id!==null || id!==undefined){
        axios.get(`http://localhost:8000/user/user/${id}`).then((res) => {
            setuser(res.data);
        });
    }
  }, []);

  const submit = (data) => {
    var songs = {
        name: data.name,
        songs: data.songs,
        user: user._id
    }
    axios.post("http://localhost:8000/playlist/playlist", songs).then((res) => {
        console.log(res);
        navigate("/");
        });
  };

  return (
    <div>
      <h1>ADD SONGS</h1>

      <form onSubmit={handleSubmit(submit)}>
        <div class="form-group">
          <label for="exampleInputEmail1">Play-list Naem</label>
          <input
            type="text"
            class="form-control"
            placeholder="Enter song name"
            {...register("name")}
          />
        </div>

        <>
          <ol>
            {songs.map((song) => {
              return (
                <li>
                  <input
                    type="checkbox"
                    class="form-check-input"
                    {...register("songs")}
                    value={song._id}
                  />{" "}
                  <h5>Name:{song.name}</h5><h6>Artist: {song.artist}</h6>
                </li>
              );
            })}
          </ol>
        </>

        <div>
          <button type="submit" class="btn btn-primary">
            Add Song
          </button>
        </div>
      </form>
    </div>
  );
};
