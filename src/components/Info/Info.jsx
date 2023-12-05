import {
  Box,
  Button,
  Checkbox,
  Divider,
  Grid,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import Cohorts from "../../assets/Image/Cohorts.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./Info.css";
import { Pagination } from "swiper/modules";
import notifyMe from "../../assets/Icon/notify.svg";
import bell from "../../assets/Icon/Bell.svg";
import barChart from "../../assets/Icon/bar-chart.svg";
import clock from "../../assets/Icon/clock.svg";
import eye from "../../assets/Icon/Eye.svg";
import logo from "../../assets/Icon/Vector.svg";

const Carousel = () => {
  return (
    <Swiper
      loop={true}
      slidesPerView={"auto"}
      spaceBetween={30}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      modules={[Pagination]}
      className="mySwiper"
    >
      <SwiperSlide>
        <Box
          sx={{
            ...cauroselBox,
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "space-between",
              gap: 3,
            }}
          >
            <img
              style={{
                width: "28px",
                height: "auto",
              }}
              src={notifyMe}
              alt="notifyMe_Icon"
            />
            <Button
              sx={{
                padding: "5px 0 !important",
                marginRight: "-12px",
                marginTop: "-6px",
              }}
              variant="text"
            >
              Save
            </Button>
          </Box>
          <Typography
            variant="subtitle2"
            sx={{
              lineHeight: "1rem",
              fontWeight: "500",
              fontSize: "0.9rem",
            }}
          >
            We’ll be sending notifications to you here
          </Typography>
          <TextField size="small" placeholder="Enter email" />
        </Box>
      </SwiperSlide>
      <SwiperSlide>
        <Box
          sx={{
            ...cauroselBox,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "space-between",
              gap: 3,
            }}
          >
            <img
              style={{
                width: "28px",
                height: "auto",
              }}
              src={barChart}
              alt="barChart_Icon"
            />
            <Checkbox
              sx={{
                padding: "5px 0 !important",
                marginRight: "-4px",
                marginTop: "-7px",
              }}
              defaultChecked
            />
          </Box>
          <Box>
            <Typography
              variant="subtitle2"
              sx={{
                lineHeight: "1rem",
                fontWeight: "500",
                fontSize: "0.75rem",
                mb: 1.5,
              }}
            >
              Notify me when any wallets move more than
            </Typography>
            <Select
              value="1000"
              sx={{
                backgroundColor: "#E5E5E680",
                "&:hover": {
                  backgroundColor: "#E5E5E680",
                },
                height: "25px",
                width: 85,
                my: 0.4,
                "& .MuiSvgIcon-root": {
                  fontSize: "1.2rem",
                },
                ".MuiSelect-select": {
                  fontSize: "0.8rem",
                },
              }}
              fullWidth
              size="small"
            >
              <MenuItem value="1000">$1000</MenuItem>
            </Select>
          </Box>
        </Box>
      </SwiperSlide>
      <SwiperSlide>
        <Box
          sx={{
            ...cauroselBox,
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "space-between",
              gap: 3,
            }}
          >
            <img
              style={{
                width: "28px",
                height: "auto",
              }}
              src={clock}
              alt="barChart_Icon"
            />
            <Checkbox
              sx={{
                padding: "5px 0 !important",
                marginRight: "-4px",
                marginTop: "-7px",
              }}
              defaultChecked
            />
          </Box>
          <Box>
            <Typography
              sx={{
                lineHeight: "1rem",
                fontWeight: "500",
                fontSize: "0.75rem",
              }}
            >
              Notify me when any wallet dormant for
            </Typography>
            <Select
              value="30 days"
              sx={{
                backgroundColor: "#E5E5E680",
                "&:hover": {
                  backgroundColor: "#E5E5E680",
                },
                height: "25px",
                width: 100,
                my: 0.4,
                "& .MuiSvgIcon-root": {
                  fontSize: "1.2rem",
                },
                ".MuiSelect-select": {
                  fontSize: "0.8rem",
                },
              }}
              fullWidth
              size="small"
            >
              <MenuItem value="30 days"> {">30 days"}</MenuItem>
            </Select>
            <Typography
              sx={{
                lineHeight: "1rem",
                fontWeight: "500",
                fontSize: "0.75rem",
              }}
            >
              becomes active
            </Typography>
          </Box>
        </Box>
      </SwiperSlide>
    </Swiper>
  );
};

const Info = ({ smallScreen }) => {

  return (
    <Box
      sx={{
        backgroundImage:
          "linear-gradient(to top right, #1FA911, #1FA911, #2F15D0, #2F15D0, #000000, #000000)",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: 1,
      }}
    >
      <Box
        sx={{
          padding: smallScreen ? 2 : 6,
        }}
      >
        <Box
          sx={{
            marginRight: smallScreen ? -2 : -6,
          }}
        >
          <Grid
            container
            alignItems="flex-start"
            justifyContent="space-between"
            spacing={4}
          >
            <Grid item xs={12} md={6}>
              <Box sx={{ mr: 2 }}>
                <img
                  style={{
                    width: "32px",
                    height: "auto",
                  }}
                  src={bell}
                  alt="bell_Icon"
                />
                <Typography
                  variant="h4"
                  sx={{
                    fontSize: "1.5rem",
                    color: "#F2F2F2",
                    textShadow: "0px 4px 4px 0px #00000040",
                    my: 1,
                    lineHeight: "2rem",
                  }}
                >
                  Get notified when a highly correlated whale makes a move
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: "1rem",
                    color: "#F2F2F2",
                    fontWeight: "500",
                    lineHeight: "1.2rem",
                  }}
                >
                  Find out when a certain whale moves more than any preset
                  amount on-chain or when a dormant whale you care about becomes
                  active.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{
                // boxShadow: "inset 400px 300px 500px rgba(0, 0, 0, 0.5)",
                zIndex: 10,

              }}>
                <Carousel />
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ py: smallScreen ? 4 : 6 }}>
          <Grid
            container
            alignItems="flex-start"
            justifyContent="space-between"
            spacing={5}
          >
            <Grid item xs={12} sm={12} md={6}>
              <Box>
                <img src={Cohorts} alt="Cohorts_Banner" />
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <Box
                sx={{
                  textAlign: "right",
                  ml: 5,
                }}
              >
                <img
                  style={{
                    width: "32px",
                    height: "auto",
                  }}
                  src={eye}
                  alt="eye_icon"
                />
                <Typography
                  variant="h4"
                  sx={{
                    fontSize: "1.5rem",
                    color: "#F2F2F2",
                    textShadow: "0px 4px 4px 0px #00000040",
                    my: 1,
                    lineHeight: "2rem",
                  }}
                >
                  Watch what the whales are doing
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: "1rem",
                    color: "#F2F2F2",
                    fontWeight: "500",
                    lineHeight: "1.2rem",
                  }}
                >
                  All whales are not equal. Know exactly what the whales
                  impacting YOUR portfolio are doing.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box
          sx={{
            marginRight: smallScreen ? -2 : -6,
          }}
        >
          <Grid
            container
            alignItems="flex-end"
            justifyContent="space-between"
            spacing={4}
          >
            <Grid order={smallScreen ? 2 : 1} item xs={12}>
              <Box sx={{ pr: smallScreen ? 2 : 6 }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: "1.2rem",
                    color: "#F2F2F2",
                    textShadow: "0px 4px 4px 0px #00000040",
                    my: 0.5,
                    lineHeight: "2rem",
                    textAlign: "right",
                  }}
                >
                  Testimonials
                </Typography>

                <Divider
                  sx={{
                    border: "1px solid #E5E5E680",
                  }}
                />
              </Box>
            </Grid>
            <Grid item order={smallScreen ? 1 : 2} xs={4} md={2}>
              <Box sx={{ mb: smallScreen && -5 }}>
                <img
                  style={{
                    height: "100%",
                    width: "100%",
                  }}
                  src={logo}
                  alt="eye_icon"
                />
              </Box>
            </Grid>
            <Grid item order={3} xs={12} md={10}>
              <Box>
                <Swiper
                  slidesPerView={"auto"}
                  spaceBetween={30}
                  modules={[Pagination]}
                  className="mySwiper"
                >
                  {Testimonials.map(({ id, name, title, message }) => (
                    <SwiperSlide key={id}>
                      <Box
                        sx={{
                          backgroundColor: "#FFFFFF",
                          padding: 2.5,
                          borderRadius: 3,
                          boxShadow: "0px 4px 10px 0px #0000000A",
                          height: "7rem",
                          width: "auto",
                        }}
                      >
                        <Typography
                          variant="h6"
                          sx={{
                            color: "#19191A",
                            fontSize: "1rem",
                            fontWeight: 600,
                            mb: 1.8,
                          }}
                        >
                          {name}
                          <span
                            style={{
                              fontSize: "0.9rem",
                              fontWeight: "500",
                              color: "#96979A",
                              padding: "0px 7px 5px",
                            }}
                          >
                            {title}
                          </span>
                        </Typography>
                        <Typography
                          variant="body1"
                          sx={{
                            color: "#1D2129",
                            fontWeight: "500",
                            lineHeight: "1.2rem",
                            fontSize: "1rem",
                          }}
                        >
                          {message}
                        </Typography>
                      </Box>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default Info;

const Testimonials = [
  {
    id: 1,
    name: "Jack F",
    title: "Ex Blackrock PM",
    message:
      "“Love how Loch integrates portfolio analytics and whale watching into one unified app.”",
  },
  {
    id: 2,
    name: "Yash P",
    title: "Research, 3poch Crypto Hedge Fund",
    message:
      "“I use Loch everyday now. I don't think I could analyze crypto whale trends markets without it. I'm addicted!”",
  },
  {
    id: 3,
    name: "Shiv S",
    title: "Co-Founder Magik Labs",
    message:
      "“Managing my own portfolio is helpful and well designed. What’s really interesting is watching the whales though. No one else has made whale tracking so simple.”",
  },
];

const cauroselBox = {
  backgroundColor: "#FFFFFF",
  padding: 2,
  borderRadius: 3,
  boxShadow: "0px 4px 10px 0px #0000000A",
  height: "9rem",
  width: "auto",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
};
