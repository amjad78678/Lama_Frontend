import React from "react";
import { MdEdit } from "react-icons/md";
import { IoSearchCircleOutline } from "react-icons/io5";

const TranscriptEdit = () => {

  
  return (
    <div className="">
      <h1 className="text-4xl text-purple font-bold my-8">Edit Transcript</h1>

      <div className="border border-purple rounded-lg p-4">
        <div className="flex justify-between items-center">
          <button className="flex gap-1 justify-center items-center bg-gray-600 text-white px-3 py-2 rounded-full ">
            <MdEdit />
            <h1>Edit Mode</h1>
          </button>

          <IoSearchCircleOutline className="text-4xl text-purple" />
        </div>
        <div className="mx-2">
          <h1 className="text-2xl font-bold text-purple my-2">Speaker</h1>

          <p className="text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores id
            dolorum assumenda aliquam consequuntur nam, consectetur cum?
            Obcaecati, repellat! Vero, ex, dolores quidem ratione similique
            atque nemo inventore nobis perferendis quisquam soluta veniam
            asperiores ullam voluptatum? Doloribus harum quod recusandae ipsum!
            Dignissimos sunt perspiciatis quam ut, molestias quae sequi minus
            minima quas illum cupiditate eum iusto obcaecati hic. Necessitatibus
            eaque hic consectetur, laborum corrupti quos. Nobis beatae nisi,
            officiis quibusdam voluptas illum iure sequi unde sapiente excepturi
            similique officia nostrum magnam tenetur ipsum ipsam voluptate
            deserunt assumenda! Minus aperiam voluptates, ea ratione repellat
            sed explicabo maiores, nesciunt, dolor cupiditate voluptas.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TranscriptEdit;
