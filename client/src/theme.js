import { createMuiTheme, responsiveFontSizes } from "@mui/system";

let theme = createMuiTheme({
    palette: {
        primary: {
            main: "#d75f5f",
        },
        secondary: {
            main: "#a3ccc3",
        },
        text: {
            primary: "#232F37",
            secondary: "#ffffff",
        },
    },
    typography: {
        fontSize: 14,
        h2: {
            fontWeight: 700,
        },
        body1: {
            fontWeight: 300,
        },
    },
    overrides: {
        MuiButton: {
            label: {
                color: "#ffffff",
            },
            contained: {
                border: "2px solid #d75f5f",
            },
            outlined: {
                border: "2px solid #ffffff",
            },
        },
        MuiStepper: {
            root: {
                backgroundColor: "transparent",
            },
        },
        MuiStepIcon: {
            active: {
                color: "#d75f5f",
            },
            completed: {
                color: "#5B6966 !important",
            },
        },
    },
});

theme = responsiveFontSizes(theme);

export default theme;

/* 

// You can define device sizes and use it in your theme object
const allDevices = "@media (min-width:320px) and  (max-width: 1024px)";
const allPhones = "@media (min-width:320px) and  (max-width: 767px)";
const portraitPhones = "@media (min-width:320px) and  (max-width: 480px)";
const landscapePhones = "@media (min-width:481px) and  (max-width: 767px)";
const tablets = "@media (min-width:768px) and  (max-width: 1024px)";

const MuiTheme = {
  palette: {
    primary: { main: "#E54E55" },
    secondary: { main: "#26B1EF" },
  },
  typography: {
    fontFamily: [
      "Montserrat",
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
    ].join(","),
    h1: {
      fontSize: "4rem",
      fontWeight: "700",
      [allPhones]: {
        fontSize: "3.2rem",
      },
    },
    h2: {
      fontSize: "3.5rem",
      fontWeight: "700",
      [allPhones]: {
        fontSize: "2.75rem",
      },
      "&.page-title": {
        marginBottom: "120px",
      },
    },
  },
  overrides: {
    // Style sheet name ⚛️
    MuiTypography: {
      // Name of the rule
      gutterBottom: {
        marginBottom: "20px",
      },
    },
    MuiTabs: {
      flexContainer: {
        borderBottom: "1px solid #ddd",
      },
      indicator: {
        height: "3px",
        borderRadius: "5px 5px 0 0",
      },
    },
    MuiButton: {
      sizeLarge: {
        paddingTop: "15px",
        paddingBottom: "15px",
      },
    },
  },
};

export default MuiTheme; */
