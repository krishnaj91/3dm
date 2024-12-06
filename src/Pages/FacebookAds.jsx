import { useState } from "react";
import CustomModal from "../Components/Views/CustomModal";
import CustomViewer from "../Components/Views/CustomViewer";

import axios from "axios";
import { Button } from "react-bootstrap";
import {
  campaignFormFields,
  campaignState,
} from "../data/faceBookForms/campaignFormFields";

const FacebookAds = () => {
  const [campaignFormData, setCampaignFormData] = useState(campaignState);
  const [campaignLoading, setCampaignLoading] = useState(false);
  const [campaignVisible, setCampaignVisible] = useState(false);

  const handleCampaignClose = () => {
    setCampaignVisible(false);
  };

  const handleCampaignVisibleSubmit = async () => {
    setCampaignLoading(true);
    console.log(campaignFormData);
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      console.log(response.data);
      setCampaignLoading(false);
      handleCampaignClose();
    } catch (err) {
      console.log(err);
      setCampaignLoading(false);
    }
  };

  return (
    <div>
      <Button onClick={() => setCampaignVisible(true)}>Create Campaign</Button>
      <CustomModal
        title="Create New Campaign"
        openModal={campaignVisible}
        handleClose={handleCampaignClose}
        bodyComponent={
          <CustomViewer
            formData={campaignFormData}
            setFormData={setCampaignFormData}
            formStateConfig={campaignFormFields}
            handleSubmit={handleCampaignVisibleSubmit}
            handleClose={handleCampaignClose}
            loading={campaignLoading}
          />
        }
      />
    </div>
  );
};

export default FacebookAds;
