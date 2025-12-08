import React, { useEffect } from "react";

export default function CreateStory() {

  useEffect(() => {
    // TAGS
    const addTagBtn = document.getElementById("add-tag");
    const uploadBtn = document.getElementById("upload-btn");

    addTagBtn.addEventListener("click", () => {
      const tagInput = document.getElementById("tag-input");
      const tagList = document.getElementById("tag-list");

      const tagText = tagInput.value.trim();
      if (tagText === "") return;

      const tag = document.createElement("span");
      tag.textContent = tagText;

      tag.addEventListener("click", () => tag.remove());

      tagList.appendChild(tag);
      tagInput.value = "";
    });

    // UPLOAD
    uploadBtn.addEventListener("click", () => {
      alert("Story uploaded (demo)");
    });
  }, []);

  return (
    <>
      <style>{`
        body {
            background: #141414;
            font-family: "Arial", sans-serif;
            margin: 0;
            padding: 0;
        }
        .container {
            width: 390px;
            margin: 20px auto;
            background: #f3efea;
            padding: 18px;
            border-radius: 18px;
            box-shadow: 0px 8px 25px rgba(0,0,0,0.45);
        }
        .top-nav {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 15px;
        }
        .icon-btn {
            background: none;
            border: none;
            font-size: 26px;
            cursor: pointer;
        }
        .logo {
            width: 50px;
        }
        .card {
            background: white;
            padding: 18px;
            margin-top: 18px;
            border-radius: 15px;
            box-shadow: 0px 6px 18px rgba(0,0,0,0.25);
        }
        label {
            font-size: 12px;
            color: #444;
            margin-top: 10px;
            display: block;
        }
        input, textarea {
            width: 95%;
            margin-top: 6px;
            padding: 10px;
            border-radius: 10px;
            border: 1px solid #ccc;
            font-size: 14px;
            background: #fff;
        }
        textarea {
            height: 95px;
            resize: none;
        }
        .upload-box {
            border: 2px dashed #bfbfbf;
            padding: 35px 0 25px 0;
            text-align: center;
            border-radius: 12px;
            font-size: 14px;
            color: #666;
            position: relative;
        }
        .upload-box::before {
            content: "📷";
            position: absolute;
            top: -5px;
            left: 50%;
            transform: translateX(-50%);
            font-size: 26px;
            background: #f3efea;
            padding: 4px 10px;
            border-radius: 50%;
        }
        .location-btn {
            width: 100%;
            padding: 12px;
            background: #f6f2ec;
            border-radius: 10px;
            border: 1px solid #dcd2c7;
            font-size: 14px;
            cursor: pointer;
            display: flex;
            align-items: center;
            gap: 8px;
            color: #4a3f35;
        }
        .location-btn::before {
            content: "📍";
            font-size: 18px;
            color: #4a3f35;
        }
        .tag-row {
            display: flex;
            gap: 10px;
        }
        #add-tag {
            padding: 10px 18px;
            background: #3e5d87;
            color: white;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            font-size: 14px;
            height: 40px;
        }
        #tag-list span {
            background: #ececec;
            padding: 6px 10px;
            border-radius: 6px;
            margin-right: 5px;
            display: inline-block;
            cursor: pointer;
            font-size: 12px;
        }
        .upload-btn-wrapper {
            text-align: right;
            margin-top: 20px;
        }
        .upload-story-btn {
            background: #3e5d87;
            color: white;
            padding: 10px 18px;
            font-size: 14px;
            border: none;
            border-radius: 10px;
            cursor: pointer;
        }
      `}</style>

      <div className="container">
        {/* TOP NAV */}
        <div className="top-nav">
          <button className="icon-btn">←</button>
          <img src="logo.png" className="logo" alt="logo" />
          <button className="icon-btn">💾</button>
        </div>

        {/* STORY DETAILS */}
        <div className="card">
          <h3>Story Details</h3>

          <label>Title</label>
          <input type="text" id="story-title" placeholder="Enter story title" />

          <label>Description</label>
          <textarea id="story-description" placeholder="Enter your story description..." />
        </div>

        {/* PHOTOS */}
        <div className="card">
          <h3>Photos</h3>
          <div className="upload-box">
            Tap to add video and images
          </div>
        </div>

        {/* LOCATION */}
        <div className="card">
          <h3>Location</h3>
          <button className="location-btn">Add Location</button>
        </div>

        {/* TAGS */}
        <div className="card">
          <h3>Tags</h3>

          <div className="tag-row">
            <input id="tag-input" type="text" placeholder="Add a tag" />
            <button id="add-tag">Add</button>
          </div>

          <div id="tag-list"></div>
        </div>

        {/* UPLOAD BUTTON */}
        <div className="upload-btn-wrapper">
          <button className="upload-story-btn" id="upload-btn">
            Upload Story
          </button>
        </div>
      </div>
    </>
  );
}