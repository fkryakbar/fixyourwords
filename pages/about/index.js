import React from "react";
import Head from "next/head";
import Link from "next/link";
function index() {
  return (
    <>
      <Head>
        <title>About - FixYourWords</title>
        <meta name="title" content="FixYourWords" />
        <meta
          name="description"
          content="Eliminate mistakes, enhance your writing with confidence
"
        />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="FixYourWords" />
        <meta
          property="og:description"
          content="Eliminate mistakes, enhance your writing with confidence
"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="FixYourWords" />
        <meta
          property="twitter:description"
          content="Eliminate mistakes, enhance your writing with confidence"
        />
      </Head>
      <div className="bg-gray-100 h-fit">
        <div className="navbar bg-base-100">
          <div className="flex-1">
            <Link href={"/"} className="btn btn-ghost normal-case text-xl">
              FixYourWords
            </Link>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
              <li>
                <Link
                  href={"/"}
                  className="btn btn-ghost font-normal capitalize"
                >
                  Home
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="px-2">
        <div className="mt-5  ml-auto mr-auto  min-[200px]:w-sm min-[500px]:w-6/12">
          <div className="text-center  bg-white rounded-md border-2 py-6 px-4 ">
            <h1 className="font-bold min-[200px]:text-3xl min-[800px]:text-5xl">
              FixYourWords
            </h1>
            <div className="text-center mt-3">
              Eliminate mistakes, enhance your writing with confidence
            </div>
          </div>
        </div>
        <div className="mt-4 ml-auto mr-auto min-[200px]:w-sm min-[500px]:w-6/12">
          <div className="bg-white rounded-md border-2 py-6 px-4 ">
            <div className="text-center font-bold text-xl">About</div>
            <hr className="mt-2" />
            <p className="mt-3">
              This App was created by Ahmad Fikri Akbar using Next JS. This app
              is for correcting your writing in English, eliminating mistakes,
              and enhancing your writing with confidence
            </p>
            <br></br>
            <p className="mt-3">
              I hope this app will help you correct your writing
            </p>
            <br></br>
            <p>- Developer</p>
            <br />
          </div>
        </div>
      </div>
    </>
  );
}

export default index;
