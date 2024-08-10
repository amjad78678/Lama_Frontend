import { useMutation, useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import Dropzone from "react-dropzone";
import { FaRegEdit } from "react-icons/fa";
import { editUserData, getUserData } from "../../api/server";
import Loader from "../common/Loader";
import toast from "react-hot-toast";

const Settings = () => {
  const {
    isLoading,
    data: user,
    refetch,
  } = useQuery({
    queryKey: ["userDataInSettings"],
    queryFn: getUserData,
  });

  const [file, setFile] = useState(null);
  const [previewImage, setPreviewImage] = useState(
    user?.data?.user?.image || null
  );
  const handleDropFile = (file) => {
    setFile(file);
    setPreviewImage(URL.createObjectURL(file));
  };

  console.log("iam userData", user);

  const [userData, setUserData] = useState({
    name: user?.data?.user?.name,
    email: user?.data?.user?.email,
    image: user?.data?.user?.image,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const { mutate: updateUserMutate } = useMutation({
    mutationFn: editUserData,
    onSuccess: (res) => {
      if (res.data.success) {
        refetch();
        toast.success(res.data.message);
      }
    },
  });

  const handleSubmit = () => {
    const formData = new FormData();

    Object.keys(userData).forEach((key) => {
      formData.append(key, userData[key]);
    });
    if (file) {
      formData.append("image", file);
    }
    updateUserMutate(formData);
  };

  return isLoading && !user ? (
    <Loader />
  ) : (
    <div className="flex flex-col gap-4">
      <h1 className="text-4xl text-purple font-bold my-8">Account Settings</h1>
      <div className="grid grid-cols-12">
        <div className=" col-span-3 h-36  ">
          <div className="relative h-full flex justify-center items-center">
            <img
              className="h-full  cursor-pointer"
              src={previewImage || userData.image}
              alt=""
            />
            <Dropzone
              onDrop={(acceptedFiles) => handleDropFile(acceptedFiles[0])}
            >
              {({ getRootProps, getInputProps }) => (
                <section>
                  <div {...getRootProps()}>
                    <input {...getInputProps()} />
                    <button className="absolute cursor-pointer bottom-0 right-5 h-10 w-10  rounded-full font-bold border-2 border-black text-xl flex justify-center items-center ">
                      <FaRegEdit className="text-2xl " />
                    </button>
                  </div>
                </section>
              )}
            </Dropzone>
          </div>
        </div>

        <div className="col-span-9">
          <div className=" grid grid-cols-2  items-center space-x-10">
            <div className="w-full ">
              <h1 className="text-xl font-bold my-2">User Name</h1>
              <input
                name="name"
                value={userData.name}
                onChange={handleInputChange}
                className="w-full border px-4 py-2 rounded-lg"
                type="text"
              />
            </div>
            <div className="flex flex-col justify-start items-start ">
              <h1 className="text-xl font-bold my-2">Email</h1>
              <input
                name="email"
                value={userData.email}
                onChange={handleInputChange}
                disabled
                className="w-full border px-4 py-2 rounded-lg"
                type="text"
              />
            </div>
          </div>
          <button
            onClick={handleSubmit}
            className="mt-4 bg-purple px-6 rounded-lg font-bold text-white w-[8vw] py-2 text-xl"
          >
            Save
          </button>
        </div>
      </div>

      <div>
        <h1 className="text-4xl text-purple font-bold my-8">Subscriptions</h1>

        <div className="bg-gradient-to-r from-[#7C3AED] to-[#5B21B6] flex justify-center items-center px-6 py-4 rounded-lg">
          <div className="flex justify-between flex-grow px-4 py-2">
            <h1 className="text-white text-2xl">
              You are currently on the{" "}
              <span className="underline font-bold">Ques AI Basic Plan!</span>
            </h1>

            <button className="bg-white px-6 rounded-lg font-bold text-purple">
              Upgrade
            </button>
          </div>
        </div>
      </div>
      <button className="font-bold text-red-500 underline text-start">
        Cancel Subscription
      </button>
    </div>
  );
};

export default Settings;
