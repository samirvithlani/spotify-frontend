import React from "react";

import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";

export const AddSongs = () => {
  const { register, handleSubmit, errors } = useForm();
  const navigate = useNavigate();
  const submit = (data) => {
    axios.post("http://localhost:8000/song/song", data).then((res) => {
      navigate("/listsongs");
    });
  };
  return (
    <div>
      <h1>ADD SONGS</h1>

      <form onSubmit={handleSubmit(submit)}>
        <div class="form-group">
          <label for="exampleInputEmail1">song name</label>
          <input
            type="text"
            class="form-control"      
            placeholder="Enter song name"
            {...register("name")}
          />
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Movie Name</label>
          <input
            type="text"
            class="form-control"      
            placeholder="Enter song name"
            {...register("movieName")}
          />
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Relese Year</label>
          <input
            type="text"
            class="form-control"      
            placeholder="Enter song name"
            {...register("year")}
          />
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Singer</label>
          <input
            type="text"
            class="form-control"      
            placeholder="Enter song name"
            {...register("artist")}
          />
        </div>
        
        <button type="submit" class="btn btn-primary">
          Add Song
        </button>
      </form>
    </div>
  );
};
