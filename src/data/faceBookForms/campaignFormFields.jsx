export const campaignFormFields = [
  {
    label: "Name",
    required: true,
    name: "name",
    type: "text",
    placeholder: "Enter Name",
  },
  {
    label: "Objective",
    required: true,
    name: "objective",
    type: "select",
    options: [
      { value: "OUTCOME_SALES", label: "OUTCOME_SALES" },
      { value: "OUTCOME_TRAFFIC", label: "OUTCOME_TRAFFIC" },
      { value: "OUTCOME_ENGAGEMENT", label: "OUTCOME_ENGAGEMENT" },
      { value: "OUTCOME_AWARENESS", label: "OUTCOME_AWARENESS" },
      {
        value: "OUTCOME_APP_PROMOTION",
        label: "OUTCOME_APP_PROMOTION",
      },
    ],
    placeholder: "Select Objective",
  },
  {
    label: "Buying Type",
    required: true,
    name: "BuyingType",
    type: "select",
    options: [
      { value: "AUCTION", label: "AUCTION" },
      { value: "RESERVATION", label: "RESERVATION" },
    ],
    placeholder: "Enter Buying Type",
  },
  {
    label: "Advantage Campaign Budget",
    required: false,
    name: "Advantagecampaignbudget",
    type: "switch",
  },
  {
    label: "Special Ad Category",
    required: true,
    name: "specialAdCategory",
    type: "text",
    placeholder: "Select Special Ad Category",
  },
  {
    label: "Status",
    required: true,
    name: "status",
    type: "select",
    options: [
      { value: "ACTIVE", label: "ACTIVE" },
      { value: "PAUSED", label: "PAUSED" },
    ],
    placeholder: "Select Status",
  },
];

export const campaignState = {
  name: "",
  objective: "",
  BuyingType: "",
  Advantagecampaignbudget: false,
  specialAdCategory: "",
  status: "",
};
