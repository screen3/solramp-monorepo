"use client";
import Link from "next/link";
import React from "react";
import LoginForm from "../../components/Forms/LoginForm";

const Login = () => {
    return (
        <>
            <div className=" px-3 py-3 bx-shadow sm:px-6 md:px-8 max-w-[500px] mx-auto bg-white rounded-lg">
                <div className="py-6 px-4 md:px-6 lg:px-8 login--bx ">
                    <div className="mb-8 text-center space-y-2">
                        <h1 className="text-2xl capitalize font-medium text-[#11161F]">
                            Welcome back
                        </h1>
                        <p className="text-sm ">
                            Don&apos;t have an account?{" "}
                            <Link
                                href={"/auth/signup"}
                                className="text-[#A15DDF]"
                            >
                                Create account
                            </Link>
                        </p>
                    </div>

                    <LoginForm />
                </div>
            </div>
        </>
    );
};

export default Login;
