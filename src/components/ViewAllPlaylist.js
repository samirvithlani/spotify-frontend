import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";



export const ViewAllPlaylist = () => {

    const [playlists, setplaylists] = useState([])
    const fetchPlaylist = async () => {

        axios.get("http://localhost:8000/playlist/playlistdata").then((res) => {
            setplaylists(res.data);
        });
    };
    const removesongFromPlaylist = async (playlistid,id) => {
        
        var songs ={
            songId:id
        }
        console.log(id);
        axios.put(`http://localhost:8000/playlist/playlist1/${playlistid}`,songs
        ).then((res) => {
            console.log(res);
            fetchPlaylist();
        });
    }

    useEffect(() => {
      
    
      fetchPlaylist();
    }, [])
    
  return (
    <div>
          <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th> 
          </tr>
        </thead>
        <tbody>
          {
                playlists.map((playlist,index)=>{   
                    return(
                        <tr>
                            <th scope="row">{index+1}</th>
                            
                            <td>{playlist.name}</td>
                            <td>{playlist.artist}</td>
                            <td>
                            <ul>
                                {
                                    playlist.songs.map((song)=>{
                                        return(
                                            <>
                                            <li>{song.name}</li>
                                            <li>
                                                <button onClick={()=>{
                                                    removesongFromPlaylist(playlist._id,song._id)
                                                }} class="btn btn-danger">Remove song</button>
                                            </li>
                                            </>
                                        )
                                    })
                                }
                            </ul>
                            </td>
                        </tr>
                    )
                })
          }
          
        </tbody>
      </table>

    </div>
  )
}
