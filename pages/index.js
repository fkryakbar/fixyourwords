import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import {
  GrammarlyEditorPlugin,
  GrammarlyButton,
} from "@grammarly/editor-sdk-react";
export default function Home() {
  const [loading, setLoading] = useState("ok");
  const [input, setInput] = useState("");
  const [focusOnce, setFocusOnce] = useState(false);
  const [intervalID, setIntervalID] = useState(0);
  const textAreaOnFocus = () => {
    if (focusOnce == false) {
      const myInterval = setInterval(() => {
        if (
          document
            .querySelector(".grammarly-button")
            .shadowRoot.querySelector("._1o9qyag0")
            .querySelector('[aria-label="Grammarly Settings"]')
            .getAttribute("data-grammarly-status") == "loading"
        ) {
          setLoading("loading");
        } else {
          setLoading("ok");
        }
      }, 1000);
      setFocusOnce(true);
      setIntervalID(myInterval);
    }
  };
  const clearCheckingInterval = () => {
    clearInterval(intervalID);
    setFocusOnce(false);
  };
  return (
    <>
      <Head>
        <title>FixYourWords</title>
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
            <Link
              onClick={(e) => clearCheckingInterval()}
              href={"/"}
              className="btn btn-ghost normal-case text-xl"
            >
              FixYourWords
            </Link>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
              <li>
                <Link
                  onClick={(e) => clearCheckingInterval()}
                  href={"/about"}
                  className="btn btn-ghost font-normal capitalize"
                >
                  About
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
          <form action="" onSubmit={(e) => e.preventDefault()}>
            <div className="bg-white rounded-md border-2 py-6 px-4 ">
              <GrammarlyEditorPlugin clientId="client_NxmSYgyiv3XRJ1A57EUeAh">
                <textarea
                  className="textarea w-full textarea-bordered"
                  autoFocus
                  onClick={(e) => textAreaOnFocus()}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type something here..."
                />
              </GrammarlyEditorPlugin>
              <div>
                {loading == "loading" && input != "" ? (
                  <p className="text-slate-400">Status : Checking...</p>
                ) : (
                  <p className="text-slate-400">Status : Ok</p>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
      <GrammarlyButton
        tonePosition="right"
        className="grammarly-button mt-5 hidden"
      />
    </>
  );
}
