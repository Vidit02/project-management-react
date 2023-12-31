import React, { useState } from 'react';
import axios, { Axios } from 'axios';
import { useNavigate } from 'react-router-dom'
import { Formik, useFormik } from 'formik';
import { useForm } from 'react-hook-form'

export const Login = (props) => {
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        reset,
        formState: {errors}
    } = useForm()

    const loginUser = async (data) => {
        try{
            const res = await axios.post("http://localhost:9890/user/login",data);
            console.log(res);
            props.viewToast("success",`Welcome back, ${res.data.name}`)
        } catch(err){
            props.viewToast("error",'Invalid Credentials')
        }
        reset();
    }
    return (
        <>
            <main className="main-content  mt-0">
                <section>
                    <div className="page-header min-vh-75">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-4 col-lg-5 col-md-6 d-flex flex-column mx-auto">
                                    <div className="card card-plain mt-8">
                                        <div className="card-header pb-0 text-left bg-transparent">
                                            <h3 className="font-weight-bolder text-info text-gradient">Welcome back</h3>
                                            <p className="mb-0">Enter your email and password to sign in</p>
                                        </div>
                                        <div className="card-body">
                                            <form role="form" onSubmit={handleSubmit(loginUser)}>
                                                <label>Email</label>
                                                <div className="mb-3">
                                                    <input
                                                        type="email"
                                                        className="form-control"
                                                        placeholder="Email" 
                                                        aria-label="Email" 
                                                        aria-describedby="email-addon"
                                                        {...register("emailid",{required:true})} />
                                                </div>
                                                {errors.emailid && <p>Email is required</p>}
                                                <label>Password</label>
                                                <div className="mb-3">
                                                    <input type="password" {...register("password",{required:true})} className="form-control" placeholder="Password" aria-label="Password" aria-describedby="password-addon" />
                                                </div>
                                                {errors.password && <p>Password is required</p>}
                                                <div className="text-center">
                                                    <button type="submit" className="btn bg-gradient-info w-100 mt-4 mb-0">Sign in</button>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="card-footer text-center pt-0 px-lg-2 px-1">
                                            <p className="mb-4 text-sm mx-auto">
                                                Don't have an account?
                                                <a href="javascript:;" className="text-info text-gradient font-weight-bold">Sign up</a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="oblique position-absolute top-0 h-100 d-md-block d-none me-n8">
                                        <div className="oblique-image bg-cover position-absolute fixed-top ms-auto h-100 z-index-0 ms-n6" style={{ backgroundImage: 'url("../img/curved-images/curved6.jpg")' }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}