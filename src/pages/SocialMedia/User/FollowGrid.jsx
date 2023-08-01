import React from "react";
import PropTypes from "prop-types";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
export default function FollowGrid(props) {
  return (
    <div
      styles={{
        paddingTop: "2px",
        display: "flex",
        // flexDirection:'row',
        flexWrap: "wrap",
        justifyContent: "space-around",
        overflow: "hidden",
        background: "#ffff",
      }}
    >
      <Grid
        cellHeight={160}
        styles={{
          width: 500,
          height: 220,
        }}
        cols={4}
      >
        {props.people.map((person, i) => {
          return (
            <Grid style={{ height: 220 }} key={i}>
              <Link to={"/SocialMedia/User/" + person._id}>
                <Avatar
                  src={
                    process.env.REACT_APP_NODE_JS + "posts/photo/" + person._id
                  }
                  styles={{
                    width: "60%",
                    height: "60%",
                    margin: "auto",
                  }}
                />
                <Typography
                  styles={{
                    textAlign: "center",
                    marginTop: 10,
                  }}
                >
                  {person.name}
                </Typography>
              </Link>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}

FollowGrid.propTypes = {
  people: PropTypes.array.isRequired,
};
