import { useState } from "react";
import CustomModal from "../Components/Views/CustomModal";
import CustomViewer from "../Components/Views/CustomViewer";
import { Button } from "react-bootstrap";
import {
  campaignFormFields,
  campaignState,
} from "../data/googleForms/campaignFormFields";
import {
  CraeteAdGroupFormFields,
  CreateAddGroupState,
} from "../data/googleForms/CraeteAdGroupFormFields";
import {
  CreateAdFormFields,
  CreateAdState,
} from "../data/googleForms/CreateAdFormFields";

const GoogleAds = () => {
  const [campaignVisible, setCampaignVisible] = useState(false);
  const [campaignFormData, setCampaignFormData] = useState(campaignState);

  const [createAdVisible, setCreateAdVisible] = useState(false);
  const [createAdFormData, setCreateAdFormData] = useState(CreateAdState);

  const [createAdGroupVisible, setCreateAdGroupVisible] = useState(false);
  const [createAdGroupFormData, setCreateAdGroupFormData] =
    useState(CreateAddGroupState);

  const handleCampaignOpen = () => {
    setCampaignVisible(true);
  };

  const handleCampaignClose = () => {
    setCampaignVisible(false);
  };

  const handleCampaignSubmit = () => {
    handleCampaignClose();
  };

  const handleCreateAdGroupOpen = () => {
    setCreateAdGroupVisible(true);
  };

  const handleCreateAdGroupClose = () => {
    setCreateAdGroupVisible(false);
  };

  const handleCreateAdGroupSubmit = () => {
    handleCreateAdGroupClose();
  };

  const handleCreateAdOpen = () => {
    setCreateAdVisible(true);
  };

  const handleCreateAdClose = () => {
    setCreateAdVisible(false);
  };

  const handleCreateAdSubmit = () => {
    handleCreateAdClose();
  };

  return (
    <div>
      <Button variant="primary" onClick={handleCampaignOpen}>
        Create Campaign
      </Button>
      <Button variant="primary" onClick={handleCreateAdGroupOpen}>
        Create Ad Group
      </Button>
      <Button variant="primary" onClick={handleCreateAdOpen}>
        Create Ad
      </Button>

      <CustomModal
        openModal={campaignVisible}
        title="Create New Campaign"
        handleClose={handleCampaignClose}
        bodyComponent={
          <CustomViewer
            formData={campaignFormData}
            setFormData={setCampaignFormData}
            formStateConfig={campaignFormFields}
            handleClose={handleCampaignClose}
            handleSubmit={handleCampaignSubmit}
          />
        }
      />

      <CustomModal
        openModal={createAdGroupVisible}
        title="Create New Ad Group"
        handleClose={handleCreateAdGroupClose}
        bodyComponent={
          <CustomViewer
            formData={createAdGroupFormData}
            setFormData={setCreateAdGroupFormData}
            formStateConfig={CraeteAdGroupFormFields}
            handleClose={handleCreateAdGroupClose}
            handleSubmit={handleCreateAdGroupSubmit}
          />
        }
      />

      <CustomModal
        openModal={createAdVisible}
        title="Create New Ad"
        handleClose={handleCreateAdClose}
        bodyComponent={
          <CustomViewer
            formData={createAdFormData}
            setFormData={setCreateAdFormData}
            formStateConfig={CreateAdFormFields}
            handleClose={handleCreateAdClose}
            handleSubmit={handleCreateAdSubmit}
          />
        }
      />
    </div>
  );
};

export default GoogleAds;
