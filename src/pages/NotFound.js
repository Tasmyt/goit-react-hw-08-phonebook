import { useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button, Subtitle } from "./pages.styled";

export const NotFound = () => {
const location = useLocation();
const navigate = useNavigate();
const backLocation = useRef(location.state?.from ?? '/');
const goBack = () => {
    navigate(backLocation.current);
  };
    return (
    <>
    <Button type="button" onClick={goBack}>
        Go back
    </Button>
    <Subtitle>
        Sorry, page not found
    </Subtitle>
    </>
)};