import React, { useEffect, useState } from "react";
import  axios from "axios";
import { Link } from "react-router-dom";

export const ListSongs = () => {

    
    const [songs, setsongs] = useState([])
    const deleteSong = (id)=>{
        axios.delete(`http://localhost:8000/song/song/${id}`).then(res=>{
            
            fetchAllSongs();
        })
    }
    const fetchAllSongs = async () => {
        
        axios.get("http://localhost:8000/song/song").then((res) => {
            setsongs(res.data)
        })
        
    }
    useEffect(() => {
        fetchAllSongs()
    }, [])
    
  return (
    <div>
      <h1>SONG LIST</h1>
      <Link className="btn btn-info" to="/addsong">
            ADD SONGS
      </Link>

      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Singer</th>
            <th scope="col">Movie Name</th>
            <th scope="col">Year</th>
            <th scope="col">
                Action
            </th>
          </tr>
        </thead>
        <tbody>
          {
                songs.map((song,index)=>{
                    return(
                        <tr>
                            <th scope="row">{index+1}</th>
                            
                            <td>{song.name}</td>
                            <td>{song.artist}</td>
                            <td>{song.movieName}</td>
                            <td>{song.year}</td>
                            <td>
                                <button onClick={()=>{deleteSong(song._id)}}class="btn btn-danger">Delete</button>
                            </td>
                        </tr>
                    )
                }
                )
          }
          
        </tbody>
      </table>
    </div>
  );
};
