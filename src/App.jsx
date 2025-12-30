import React, { useState } from "react";
import UserCard from './components/UserCard'
const App = () => {
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [role, setRole] = useState("");
  const [disc, setDisc] = useState("");
  let realdata = JSON.parse(localStorage.getItem ('all-users') )|| []
  
  const [allusers, setallusers] = useState(realdata);


  const submithandler = (e) => {
    e.preventDefault();
    const olduser = [...allusers]
    olduser.push ({ name, url, role, disc })
    setallusers(olduser);
    localStorage.setItem ('all-users',JSON.stringify (olduser))

    setName("");
    setUrl("");
    setRole("");
    setDisc("");
  };
  const deletehandler = (idx) => {
    let copyuser = [...allusers];
    let conff = confirm (`bhai tu chahtaa h na card delete krna `)
    if (conff) {
      copyuser.splice(idx, 1)
    }
    else {
      alert (`element can not be deletedd`)
    }
    setallusers(copyuser)
     localStorage.setItem ('all-users',JSON.stringify (copyuser))

  }
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-black via-[#0f0f1a] to-black flex flex-col items-center px-4 py-10">
        <form
          onSubmit={submithandler}
          className="w-full max-w-3xl bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl"
        >
          <h2 className="text-3xl font-semibold text-white mb-8 text-center">
            Create User
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input required
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Enter Name"
              className="glass-input"
            />

            <input required
              type="text"
              placeholder="Image URL"
              className="glass-input"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />

            <input
              required
              type="text"
              placeholder="Enter Role"
              className="glass-input"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            />

            <input
              type="text"
              required
              placeholder="User Description"
              className="glass-input"
              value={disc}
              onChange={(e) => setDisc(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="mt-8 w-full bg-emerald-500/90 hover:bg-emerald-500 text-black font-semibold py-3 rounded-xl transition-all duration-300 shadow-lg cursor-pointer"
          >
            Create User
          </button>
        </form>

        <div className="mt-10 w-[80%] flex flex-wrap gap-6 justify-start ">
          {allusers.map((tameem, idx) => (
            <UserCard key={idx} bhai={tameem} deletehandler={deletehandler} idx={idx} />
          ))}



        </div>
      </div>

      <style>
        {`
          .glass-input {
            width: 100%;
            padding: 14px 18px;
            background: rgba(255, 255, 255, 0.06);
            border: 1px solid rgba(255, 255, 255, 0.15);
            border-radius: 12px;
            color: white;
            font-size: 16px;
            outline: none;
            transition: all 0.3s ease;
          }

          .glass-input::placeholder {
            color: rgba(255, 255, 255, 0.5);
          }

          .glass-input:focus {
            border-color: #34d399;
            box-shadow: 0 0 0 1px #34d399;
          }
        `}
      </style>
    </>
  );
};

export default App;
