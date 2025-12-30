import React from "react";

const UserCard = (naaaaaa) => {
  return (
    <div
      className="relative w-60 max-w-sm 
                 bg-white/5 backdrop-blur-xl 
                 border border-white/10 
                 rounded-2xl p-6 
                 shadow-2xl 
                 transition-all duration-300 
                 hover:scale-[1.03] hover:shadow-emerald-500/20 overflow-hidden"
    >
            <button
        onClick={() => naaaaaa.deletehandler(naaaaaa.idx)}
        className="absolute top-3 right-3 w-9 h-9 rounded-full 
                   bg-red-500/20 border border-red-500/30
                   text-red-400 hover:bg-red-500 hover:text-white
                   transition-all duration-300 shadow-lg"
      >
        ✕
      </button>

      <div
        className="w-28 h-28 mx-auto rounded-full overflow-hidden 
                   border-2 border-emerald-400/40 shadow-lg"
      >
        <img
          src={naaaaaa.bhai.url}
          alt="user"
          className="w-full h-full object-cover capitalize"
        />
      </div>

      <div className="text-center mt-5">
        <h1 className="text-2xl font-semibold text-white tracking-wide capitalize">
          {naaaaaa.bhai.name}
        </h1>

        <h4 className="text-emerald-400 text-xl font-light mt-1 capitalize">
          {naaaaaa.bhai.disc}
        </h4>

        <h3 className="text-gray-300 text-xl mt-1 font-light capitalize leading-relaxed px-2">
          {naaaaaa.bhai.role}
        </h3>
      </div>
    </div>
  );
};

export default UserCard;
