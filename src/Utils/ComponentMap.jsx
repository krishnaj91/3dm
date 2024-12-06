import CustomInputCalander from "../Components/controls/CustomInputCalander";
import CustomInputSelect from "../Components/controls/CustomInputSelect";
import CustomInputSwitch from "../Components/controls/CustomInputSwitch";
import CustomInputText from "../Components/controls/CustomInputText";

const ComponentMap = {
  text: CustomInputText,
  number: CustomInputText,
  select: CustomInputSelect,
  switch: CustomInputSwitch,
  date: CustomInputCalander,
};

export default ComponentMap;
