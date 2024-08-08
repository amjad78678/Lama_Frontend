import React from "react";

const General = () => {
  return (
    <div className="flex flex-col gap-2">
      <div>
        <h1 className="font-bold text-lg mb-2 ">Chatbot Name</h1>
        <input
          type="text"
          className="w-full text-xl border rounded-lg py-2 px-2"
        />
        <p className="text-xs my-1">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.{" "}
        </p>
      </div>
      <div>
        <h1 className="font-bold text-lg mb-2">Welcome Message</h1>
        <input
          type="text"
          className="w-full text-xl border rounded-lg py-2 px-2"
        />
        <p className="text-xs my-1">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.{" "}
        </p>
      </div>
      <div>
        <h1 className="font-bold text-lg mb-2">Input placeholder</h1>
        <input
          type="text"
          className="w-full text-xl border rounded-lg py-2 px-2"
        />
        <p className="text-xs my-1">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.{" "}
        </p>
      </div>
    </div>
  );
};

export default General;
