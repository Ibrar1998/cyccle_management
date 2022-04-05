import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  listDetail: {
    display: "flex",
    flexGrow: (props) => props.flexGrow || 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: (props) => (props.leftAlign ? "flex-end" : "flex-start"),
    "&& > *": {
      margin: "0 !important",
    },
  },
  listTile: {
    display: "flex",
    border: "1px solid rgb(207, 207, 207)",
    padding: "20px",
    margin: "10px 0",
    borderRadius: "5px",
  },
});

export default useStyles;
