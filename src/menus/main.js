import themes from "../catalogues/themes";
import editorTypes from "../types/editor";
import { commit } from "../processes/main/actions";

export default [
  {
    label: "File",
    submenu: [
      {
        label: "Open File...",
        accelerator: "CommandOrControl+O"
      },
      {
        label: "Save",
        accelerator: "CommandOrControl+S"
      },
      {
        label: "Save as...",
        accelerator: "CommandOrControl+Shift+S"
      },
      {
        type: "separator"
      },
      {
        label: "Quit",
        role: "quit",
        accelerator: "CommandOrControl+Q"
      }
    ]
  },
  {
    label: "Edit",
    role: "editMenu"
  },
  {
    label: "View",
    submenu: [
      {
        label: "Toggle view",
        accelerator: "CommandOrControl+\\"
      },
      {
        label: "Toggle fullscreen",
        role: "togglefullscreen"
      },
      {
        label: "Editor theme",
        submenu: themes.map(theme => ({
          label: theme,
          click: () => {
            commit(editorTypes.mutations.setTheme, { theme });
          }
        }))
      }
    ]
  },
  {
    label: "Debugger",
    submenu: [
      {
        label: "Compile",
        accelerator: "F10"
      },
      {
        label: "Compile & Run",
        accelerator: "CommandOrControl+F10"
      },
      {
        type: "separator"
      },
      {
        label: "Run",
        accelerator: "F5"
      },
      {
        label: "Forward",
        accelerator: "CommandOrControl+F5"
      },
      {
        label: "Stop",
        accelerator: "CommandOrControl+End"
      },
      {
        type: "separator"
      },
      {
        label: "Reset Canvas",
        accelerator: "CommandOrControl+Delete"
      }
    ]
  },
  {
    label: "Window",
    role: "windowMenu"
  },
  {
    label: "Help",
    submenu: [
      {
        label: "About Karel",
        accelerator: "F1"
      },
      {
        label: "About KarelJS"
      },
      {
        type: "separator"
      },
      {
        label: "About the Author"
      },
      {
        label: "Fork me on GitHub"
      }
    ]
  }
];
