"use client";
import React, { useEffect } from "react";
import SignUpForm from "../../components/Forms/SignUpForm";
import Link from "next/link";

export default function SignUp() {
   
    return (
        <>
            <div className=" px-3 py-3 bx-shadow sm:px-4 max-w-[500px] mx-auto bg-white rounded-lg">
                <div className="py-6 px-4 md:px-6 lg:px-8 login--bx ">
                    <div className="mb-8 text-center space-y-2">
                        <h1 className="text-2xl capitalize font-medium text-[#11161F]">
                            Create an account
                        </h1>
                        <p className="text-sm ">
                            Already have an account?{" "}
                            <Link
                                href={"/auth/login"}
                                className="text-[#A15DDF]"
                            >
                                Log in
                            </Link>
                        </p>
                    </div>

                    <SignUpForm />
                </div>
            </div>
        </>
    );
}
