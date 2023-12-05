import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

const emailRegex = /^\S+@\S+\.\S+$/;

const Form = ({ smallScreen }) => {
  const [formData, setFormData] = useState({
    email: "",
    isValidEmail: true,
    error: "",
  });

  const handleOnChange = (event) => {
    setFormData({ ...formData, email: event.target.value });
  };

  const handleFormSubmit = (event, from) => {
    if (event.key === "Enter" || from === "onClick") {
      if (
        formData.email === "" ||
        (formData.email !== "" && !emailRegex.test(formData.email))
      ) {
        setFormData({
          ...formData,
          error: "Please enter a valid email",
          isValidEmail: false,
        });
        return;
      }
      setFormData({ ...formData, error: "", isValidEmail: true });
      window.location.href = "https://app.loch.one/welcome.";
    }
  };

  return (
    <Box
      sx={{
        height: smallScreen ? 1 : "100vh",
        width: "auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 3,
          margin: "25%",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            color: "#B0B1B3",
            lineHeight: "3rem",
            fontSize: "2.5rem",
          }}
        >
          Sign up for exclusive access.
        </Typography>
        <TextField
          fullWidth
          placeholder="Your email address"
          size="medium"
          onChange={handleOnChange}
          onKeyDown={handleFormSubmit}
          error={!Boolean(formData.isValidEmail)}
          helperText={formData.error}
          sx={{
            "& .MuiInputBase-input": {
              borderColor: "#E5E5E6",
              padding: "20px 24px",
              borderRadius: 1,
            },
            "&.Mui-focused .MuiInputBase-input": {
              borderColor: "#E5E5E6",
            },
          }}
        />
        <Button
          variant="contained"
          fullWidth
          sx={{ padding: "1.1rem 1.4rem", fontSize: "1rem", borderRadius: 2 }}
          onClick={(event) => handleFormSubmit(event, "onClick")}
        >
          Get started
        </Button>
        <Typography
          sx={{
            fontSize: "1rem",
            fontWeight: "600",
            lineHeight: "1.2rem",
            mt: 1,
            whiteSpace: "nowrap",
          }}
        >
          You’ll receive an email with an invite link to join.
        </Typography>
      </Box>
    </Box>
  );
};

export default Form;
