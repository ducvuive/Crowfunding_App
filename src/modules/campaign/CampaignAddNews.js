import React from "react";
import { useForm } from "react-hook-form";
import FormGroup from "../../components/common/FormGroup";
import FormRow from "../../components/common/FormRow";
import { Input } from "../../components/input";
import Label from "../../components/label_duc/Label";

const CampaignAddNews = () => {
  const { handleSunmit, control } = useForm();
  return (
    <div className="px-10 py-[66px] bg-white rounded-xl ">
      <div className="mb-10 text-center">
        <h1 className="inline-block py-4 text-2xl font-bold rounded-lg text-text2 px-14 bg-text4 bg-opacity-5">
          Start a Campaign 🚀
        </h1>
      </div>
      <form>
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
            <Label htmlFor="campaignTitel">Campaign Titel *</Label>
          </FormGroup>
        </FormRow>
      </form>
    </div>
  );
};

export default CampaignAddNews;
