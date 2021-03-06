import { Button, ButtonProps, styled } from "@mui/material";
import { rgba } from "polished";

const RibbonButton = styled((props: ButtonProps) => (
  <Button {...props} color="white" />
))(({ theme }) => ({
  padding: theme.spacing(0, 2),
  borderRadius: 0,
  borderColor: theme.palette.white.main,
  [theme.breakpoints.down("mobile")]: {
    padding: theme.spacing(0, 1.5),
    borderRadius: theme.spacing(0.5, 0.5, 0, 0),
  },
  boxShadow: "none",
  "&:hover": {
    backgroundColor: rgba(theme.palette.white.main, 0.04),
  },
  "&.active": {
    background: theme.palette.midtoneBrighter.main,
    borderBottomStyle: "solid",
    borderBottomWidth: "3px",
  },
}));
export default RibbonButton;
