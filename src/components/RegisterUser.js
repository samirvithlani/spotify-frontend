import React from "react";
import {useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import axios from "axios";

export const RegisterUser = () => {
    const {register, handleSubmit, errors} = useForm();
    const navigate = useNavigate();
    const submit = (data)=>{
        
        axios.post("http://localhost:8000/user/user",data).then(res=>{
            console.log(res);
            navigate("/login");
        })
    }
  return (
    <div>
      <form onSubmit={handleSubmit(submit)}>
      <div class="form-group">
          <label for="exampleInputEmail1">Name</label>
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"   
            placeholder="Enter Email"
            {...register("name")}
          />
          
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            {...register("email")}
          />
          
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            {...register("password")}
          />
        </div>
        
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};
