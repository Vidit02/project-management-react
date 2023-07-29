import React from "react"
export const Signup = (props) => {
    return (
        <>
            <main className="main-content mt-0">
                <section className="min-vh-100 mb-8">
                    <div className="page-header align-items-start min-vh-50 pt-5 pb-11 m-3 border-radius-lg" style={{ backgroundImage: 'url("../img/curved-images/curved14.jpg")' }}>
                        <span className="mask bg-gradient-dark opacity-6"></span>
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-5 text-center mx-auto">
                                    <h1 className="text-white mb-2 mt-5">Welcome!</h1>
                                    <p className="text-lead text-white">Use these awesome forms to login or create new account in your project for free.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row mt-lg-n10 mt-md-n11 mt-n10">
                            <div className="col-xl-4 col-lg-5 col-md-7 mx-auto">
                                <div className="card z-index-0">
                                    <div className="card-header text-center pt-4">
                                        <h5>Register with</h5>
                                    </div>
                                    {/* <div className="row px-xl-5 px-sm-4 px-3">
                                        <div className="mt-2 position-relative text-center">
                                            <p className="text-sm font-weight-bold mb-2 text-secondary text-border d-inline z-index-2 bg-white px-3">
                                                or
                                            </p>
                                        </div>
                                    </div> */}
                                    <div className="card-body">
                                        <form role="form text-left">
                                            <div class="mb-3">
                                                <input type="text" class="form-control" placeholder="Name" aria-label="Name" aria-describedby="email-addon"/>
                                            </div>
                                            <div class="mb-3">
                                                <input type="email" class="form-control" placeholder="Email" aria-label="Email" aria-describedby="email-addon"/>
                                            </div>
                                            <div class="mb-3">
                                                <input type="password" class="form-control" placeholder="Password" aria-label="Password" aria-describedby="password-addon"/>
                                            </div>
                                            <div class="text-center">
                                                <button type="button" class="btn bg-gradient-dark w-100 my-4 mb-2">Sign up</button>
                                            </div>
                                            <p class="text-sm mt-3 mb-0">Already have an account? <a className="text-dark font-weight-bolder">Sign in</a></p>
                                        </form>
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