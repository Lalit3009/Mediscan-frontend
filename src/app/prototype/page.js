"use client";

import Breadcrumb from "@/components/Common/Breadcrumb";
import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import IconUpload from "./image-upload";
import Bargraph from "./bargraph";

const Prototype = () => {
  const [file, setFile] = useState(null);
  const [link, setLink] = useState("");
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [label, setLabel] = useState("");

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/png, image/jpg, image/jpeg",
    onDrop: (acceptedFiles) => {
      setFile(
        Object.assign(acceptedFiles[0], {
          preview: URL.createObjectURL(acceptedFiles[0]),
        }),
      );
    },
  });

  useEffect(() => {
    if (file) {
      const formData = new FormData();
      formData.append("file", file);
      const fetchData = async () => {
        setLoading(true);
        try {
          const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/predict`, {
            method: "POST",
            body: formData,
          });
          const res = await response.json();
          setLabel(res["prediction"]);
          setData(res["probabilities"]);
        } catch (error) {
          console.error("Error:", error);
          setLabel("Error");
        }
        setLoading(false);
      };

      fetchData();
    }
  }, [file]);

  // useEffect(() => {
  //   if (file) {
  //     setTimeout(() => {
  //       console.log("STATE CHANGED");
  //       setLabel("Something");
  //       console.log(label);
  //     }, 5000);
  //   }
  // }, [file]);

  async function handleLinkUpload() {
    setLoading(true);
    await fetch(link)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.blob();
      })
      .then((blob) => {
        setFile(
          Object.assign(blob, {
            preview: URL.createObjectURL(blob),
          }),
        );
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching image:", error);
        setLoading(false);
      });
  }

  function handleReset() {
    setFile(null);
    setData(null);
    setLabel("");
    setLink("");
    setLoading(false);
  }

  return (
    <>
      <Breadcrumb
        pageName="Prototype"
        description="Upload your chest X-ray (CXR) image by dragging it into the rectangle or click inside to select your image otherwise paste link in input box"
      />

      <section className="p-[120px]">
        {!file && (
          <div className="container">
            <div className="-mx-4 flex flex-col items-center justify-center">
              <div className="flex h-[350px] w-[550px] items-center justify-center rounded-lg border-2 border-dashed border-blue-500 bg-primary/5 p-4 text-primary dark:bg-primary/10">
                <div
                  className="flex h-full w-full flex-col items-center justify-center gap-[30px]"
                  {...getRootProps()}
                >
                  <input {...getInputProps()} />
                  <IconUpload />
                  <p className="text-xl">
                    Drag & Drop CXR Image here OR Click to Browse.
                  </p>
                </div>
              </div>

              <div className="py-[50px] text-3xl text-slate-400">Or</div>

              <div className="flex w-[50%] justify-center">
                <input
                  type="text"
                  value={link}
                  onChange={(e) => setLink(e.target.value)}
                  placeholder="Paste image link here"
                  className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                />
                <button
                  className="flex items-center justify-center rounded-sm bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark"
                  onClick={handleLinkUpload}
                  disabled={link ? false : true}
                >
                  Upload
                </button>
              </div>
            </div>
            <div className="-mx-4 flex flex-wrap" data-wow-delay=".15s">
              <div className="w-full px-4"></div>
            </div>
          </div>
        )}
        {file && (
          <div className="flex flex-col justify-center">
            <div
              className={`container flex gap-[30px] ${label ? "justify-between" : "justify-center"}`}
            >
              <div>
                <img src={file.preview} className="aspect-auto w-[400px]" />
                {(!label)&& <div class="scanner" />}
              </div>
              {label && data && (
                <>
                  <div className="flex-1 relative">
                    {data ? <Bargraph data={data} /> : "DATA NHI HAI"}
                    <p className="absolute top-0 right-0 text-2xl text-[#001b89d4] dark:text-[#fff]">Prediction: <b>{label}</b></p>
                  </div>
                </>
              )}
            </div>
            <button
              className="mx-auto mt-20 flex w-[300px] items-center justify-center rounded-sm bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark"
              onClick={handleReset}
            >
              Upload Another
            </button>
          </div>
        )}
      </section>
    </>
  );
};

export default Prototype;
