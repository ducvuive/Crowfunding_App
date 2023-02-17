import React, { useMemo } from "react";
import { useForm } from "react-hook-form";
import FormGroup from "../../components/common/FormGroup";
import FormRow from "../../components/common/FormRow";
import { Input, Textarea } from "../../components/input";
import Label from "../../components/label_duc/Label";
import { Dropdown } from "../../components/dropdown";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import ImageUploader from "quill-image-uploader";
import axios from "axios";
Quill.register("modules/imageUploader", ImageUploader);

const CampaignAddNews = () => {
  const { handleSubmit, control } = useForm();
  const [content, setContent] = React.useState("");
  const handleAddNewCampaign = (values) => {};
  const modules = useMemo(
    () => ({
      toolbar: [
        ["bold", "italic", "underline", "strike"],
        ["blockquote"],
        [{ header: 1 }, { header: 2 }], // custom button values
        [{ list: "ordered" }, { list: "bullet" }],
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        ["link", "image"],
      ],
      imageUploader: {
        // imgbbAPI
        upload: async (file) => {
          // const bodyFormData = new FormData();
          // bodyFormData.append("image", file);
          // const response = await axios({
          //   method: "post",
          //   url: imgbbAPI,
          //   data: bodyFormData,
          //   headers: {
          //     "Content-Type": "multipart/form-data",
          //   },
          // });
          // return response.data.data.url;
        },
      },
    }),
    []
  );
  return (
    <div className="px-10 py-[66px] bg-white rounded-xl ">
      <div className="mb-10 text-center">
        <h1 className="inline-block py-4 text-2xl font-bold rounded-lg text-text2 px-14 bg-text4 bg-opacity-5">
          Start a Campaign 🚀
        </h1>
      </div>
      <form onSubmit={handleSubmit(handleAddNewCampaign)}>
        <FormRow>
          <FormGroup>
            <Label htmlFor="campaignTitel">Campaign Titel *</Label>
            <Input
              control={control}
              name="campaignTitel"
              placeholder="Write a titel"
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label>Select a category *</Label>
            {/* Dropdown */}
            <Dropdown>
              <Dropdown.Select placeholder="Select the category"></Dropdown.Select>
              <Dropdown.List>
                <Dropdown.Option>Architecture</Dropdown.Option>
                <Dropdown.Option>Crypto</Dropdown.Option>
              </Dropdown.List>
            </Dropdown>
          </FormGroup>
        </FormRow>
        <FormGroup>
          <Label htmlFor="short_description">Short Description *</Label>
          <Textarea
            name="short_description"
            id="short_description"
            placeholder="Write a short description...."
            control={control}
          ></Textarea>
        </FormGroup>
        <FormGroup>
          <Label>Story *</Label>
          <ReactQuill
            placeholder="Write your story......"
            modules={modules}
            theme="snow"
            value={content}
            onChange={setContent}
          />
        </FormGroup>
      </form>
    </div>
  );
};

export default CampaignAddNews;
