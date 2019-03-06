import {Menu,} from "electron";

const menuTemplate = [
  {
    role: "undo",
    label: "Undo",
    accelerator: "CommandOrControl+Z",
  },

  {
    role: "redo",
    label: "Redo",
    accelerator: "CommandOrControl+Y",
  },
  {
    type: "separator",
  },

  {
    role: "cut",
    label: "Cut",
    accelerator: "CommandOrControl+X",
  },

  {
    role: "copy",
    label: "Copy",
    accelerator: "CommandOrControl+C",
  },

  {
    role: "paste",
    label: "Paste",
    accelerator: "CommandOrControl+V",
  },

  {
    role: "delete",
    label: "Delete",
    accelerator: "Del",
  },

  {
    role: "selectAll",
    label: "Select All",
    accelerator: "CommandOrControl+A",
  },
];

export default Menu.buildFromTemplate(menuTemplate);
