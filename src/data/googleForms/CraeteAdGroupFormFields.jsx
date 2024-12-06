export const CraeteAdGroupFormFields = [
  {
    label: "Ad Group Name",
    required: true,
    name: "adGroupName",
    type: "text",
    placeholder: "Enter Ad Group Name",
  },
  {
    label: "Keyword",
    required: true,
    name: "keyword",
    type: "text",
    placeholder: "Enter Keyword",
  },
  {
    label: "Status",
    required: true,
    name: "status",
    type: "select",
    placeholder: "Select Status",
    options: [
      { label: "Active", value: "active" },
      { label: "Paused", value: "paused" },
    ],
  },
];

export const CreateAddGroupState = {
  adGroupName: "",
  keyword: "",
  status: "",
};
