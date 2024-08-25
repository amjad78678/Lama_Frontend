import { useMutation } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { addWidgetConfiguration } from "../../../api/server";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";
import SaveButton from "../../common/SaveButton";

const General = ({ widget, refetch }) => {
  const { projectId } = useParams();
  const [widgetData, setWidgetData] = useState({
    projectId: projectId,
    chatbotName: "",
    welcomeMessage: "",
    inputPlaceholder: "",
  });

  useEffect(() => {
    if (widget) {
      setWidgetData((prevData) => ({
        ...prevData,
        chatbotName: widget.chatbotName || "",
        welcomeMessage: widget.welcomeMessage || "",
        inputPlaceholder: widget.inputPlaceholder || "",
      }));
    }
  }, [widget]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setWidgetData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const { isPending, mutate: addWidgetMutate } = useMutation({
    mutationFn: addWidgetConfiguration,
    onSuccess: (res) => {
      if (res.data.success) {
        toast.success(res.data.message);
        refetch();
      }
    },
    onError: (error) => {
      console.log(error);
    },
  });
  return (
    <div className="flex flex-col gap-2">
      <div>
        <h1 className="font-bold text-lg mb-2 ">Chatbot Name</h1>
        <input
          onChange={handleInputChange}
          value={widgetData.chatbotName}
          name="chatbotName"
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
          onChange={handleInputChange}
          value={widgetData.welcomeMessage}
          name="welcomeMessage"
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
          onChange={handleInputChange}
          value={widgetData.inputPlaceholder}
          name="inputPlaceholder"
          type="text"
          className="w-full text-xl border rounded-lg py-2 px-2"
        />
        <p className="text-xs my-1">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.{" "}
        </p>
      </div>

      <SaveButton
        onClick={() => addWidgetMutate(widgetData)}
        isPending={isPending}
      />
    </div>
  );
};

export default General;
