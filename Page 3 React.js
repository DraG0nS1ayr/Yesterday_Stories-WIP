import React, { useEffect } from "react";

export default function ProfileSettings() {

  useEffect(() => {
    /* --- PROFILE PICTURE --- */
    const profilePicBtn = document.getElementById("profilePicBtn");
    const uploadPic = document.getElementById("uploadPic");

    profilePicBtn.addEventListener("click", () => {
      uploadPic.click();
    });

    uploadPic.addEventListener("change", function () {
      const file = this.files[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = (e) => {
        document.getElementById("profilePic").src = e.target.result;
      };
      reader.readAsDataURL(file);
    });

    /* --- PAYMENT OPEN CARD FORM --- */
    document.getElementById("openCardForm").addEventListener("click", () => {
      const form = document.getElementById("cardForm");
      form.style.display = form.style.display === "block" ? "none" : "block";
    });

    /* --- PAYMENT SAVE CARD --- */
    document.getElementById("saveCard").addEventListener("click", () => {
      const name = document.getElementById("cardName").value;
      const number = document.getElementById("cardNumber").value;
      const expiry = document.getElementById("cardExpiry").value;

      if (!name || !number || !expiry) {
        alert("Please fill all fields");
        return;
      }

      const masked = "•••• " + number.slice(-4);
      const list = document.getElementById("payment-list");

      const box = document.createElement("div");
      box.className = "payment-box";

      box.innerHTML = `
        <div class="payment-left">
            <strong>${masked}</strong><br>
            <span style="font-size:13px;color:#666;">${name}</span><br>
            <span style="font-size:12px;color:#777;">Expires ${expiry}</span>
        </div>

        <button class="delete-btn">🗑</button>
      `;

      list.appendChild(box);

      // Reset form
      document.getElementById("cardForm").style.display = "none";
      document.getElementById("cardName").value = "";
      document.getElementById("cardNumber").value = "";
      document.getElementById("cardExpiry").value = "";
      document.getElementById("cardCVV").value = "";
    });

    /* --- DELETE PAYMENT CARD --- */
    document.addEventListener("click", (e) => {
      if (e.target.classList.contains("delete-btn")) {
        e.target.closest(".payment-box").remove();
      }
    });

  }, []);

  return (
    <>

      <style>{`
        body {
            background: #121212;
            font-family: Arial, sans-serif;
            margin: 0;
        }
        .container {
            width: 390px;
            margin: 25px auto;
            background: #f8f5f2;
            padding: 20px;
            border-radius: 18px;
            box-shadow: 0px 8px 25px rgba(0,0,0,0.45);
        }
        .top-nav {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .icon-btn {
            background: none;
            border: none;
            font-size: 26px;
            cursor: pointer;
        }
        .save-btn {
            border: 2px solid #444;
            padding: 6px 12px;
            border-radius: 10px;
            background: transparent;
            font-size: 20px;
            filter: grayscale(100%);
        }
        .card {
            background: white;
            padding: 18px;
            margin-top: 18px;
            border-radius: 15px;
            box-shadow: 0px 6px 18px rgba(0,0,0,0.25);
        }
        .subtitle {
            font-size: 12px;
            color: #555;
            margin-bottom: 8px;
        }
        .profile-pic-btn {
            width: 70px;
            height: 70px;
            border-radius: 50%;
            overflow: hidden;
            border: 2px solid #ddd;
            cursor: pointer;
            margin: 10px 0;
        }
        .profile-pic-btn img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        .member-label {
            font-size: 13px;
            margin-bottom: 10px;
            color: #444;
        }
        label {
            font-size: 14px;
            margin-top: 10px;
            display: block;
        }
        input {
            width: 95%;
            padding: 10px;
            margin-top: 5px;
            border-radius: 10px;
            border: 1px solid #ccc;
            background: #fafafa;
            font-size: 15px;
        }
        .payment-box {
            background: #ffffff;
            border: 1px solid #ddd;
            padding: 14px;
            border-radius: 10px;
            margin-top: 12px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .delete-btn {
            background: none;
            border: none;
            font-size: 20px;
            color: #b50000;
            cursor: pointer;
        }
        .add-btn {
            width: 100%;
            padding: 12px;
            margin-top: 10px;
            background: #ffffff;
            border-radius: 10px;
            border: 1px solid #ccc;
            cursor: pointer;
        }
        .payment-form {
            background: #ffffff;
            padding: 14px;
            border-radius: 12px;
            margin-top: 12px;
            border: 1px solid #ddd;
            display: none;
        }
        .input-large {
            width: 100%;
            padding: 12px;
            border-radius: 10px;
            border: none;
            margin-top: 6px;
            background: #fafafa;
            font-size: 15px;
        }
        .save-card-btn {
            width: 100%;
            padding: 12px;
            margin-top: 10px;
            background: #c10000;
            color: white;
            border-radius: 10px;
            border: none;
            cursor: pointer;
        }
        .signout-btn {
            width: 100%;
            padding: 12px;
            background: #ffffff;
            border-radius: 10px;
            border: 1px solid #ccc;
            cursor: pointer;
        }
        .delete-account-btn {
            width: 100%;
            padding: 12px;
            margin-top: 10px;
            background: #c10000;
            color: white;
            border-radius: 10px;
            border: none;
            cursor: pointer;
        }
      `}</style>

      {/* PAGE CONTENT */}
      <div className="container">

        {/* Top Navigation */}
        <div className="top-nav">
          <button className="icon-btn">&lt;</button>
          <img src="logo.png" width="50" alt="Logo" />
          <button className="save-btn">💾</button>
        </div>

        {/* Profile Section */}
        <div className="card">
          <h3>Profile Information</h3>
          <p className="subtitle">Manage your personal information and profile picture</p>

          {/* Hidden file input */}
          <input type="file" id="uploadPic" accept="image/*" style={{ display: "none" }} />

          {/* Tap to change profile picture */}
          <button className="profile-pic-btn" id="profilePicBtn">
            <img id="profilePic" src="https://via.placeholder.com/70" alt="Profile" />
          </button>

          <p className="member-label">Member since September 2025</p>

          <label>Name</label>
          <input type="text" placeholder="User Name" />

          <label>Email</label>
          <input type="email" placeholder="username@example.com" />

          <label>Bio</label>
          <input type="text" placeholder="I love travel." />
        </div>

        {/* Payment Methods */}
        <div className="card">
          <h3>Payment Methods</h3>
          <p className="subtitle">Manage your payment options</p>

          {/* Payment List */}
          <div id="payment-list"></div>

          {/* Add Payment */}
          <button id="openCardForm" className="add-btn">
            + Add Payment Method
          </button>

          {/* Card Form */}
          <div id="cardForm" className="payment-form">
            <label>Cardholder Name</label>
            <input type="text" id="cardName" placeholder="John Doe" />

            <label>Card Number</label>
            <input type="text" id="cardNumber" placeholder="1234 5678 9012 3456" maxLength="19" />

            <label>Expiry Date</label>
            <input type="month" id="cardExpiry" />

            <label>CVV</label>
            <input type="text" id="cardCVV" placeholder="123" maxLength="4" />

            <button id="saveCard" className="save-card-btn">Save Card</button>
          </div>
        </div>

        {/* Account Actions */}
        <div className="card">
          <h3>Account Actions</h3>
          <p className="subtitle">Manage your account</p>

          <button className="signout-btn">Sign Out</button>
          <button className="delete-account-btn">Delete Account</button>
        </div>

      </div>
    </>
  );
}