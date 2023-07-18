import React from "react";

import { ArrowBackOutlined } from "@mui/icons-material";
import "./watch.scss";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Watch() {
  const location = useLocation();
  const { movie } = location.state;
  console.log(movie);
  return (
    <div className="watch">
      <Link to="/">
        <div className="back">
          <ArrowBackOutlined />
          Home
        </div>
      </Link>
      <iframe className="video" autoPlay src={movie.video} />
    </div>
  );
}
