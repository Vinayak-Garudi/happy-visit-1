import React from 'react';
import { Link } from 'react-router-dom';
import Map from '../components/Map/Map';
import List from '../components/List/List';
import PlaceDetails from '../components/PlaceDetails/PlaceDetails';
import { Grid } from '@material-ui/core';
import { Autocomplete } from '@react-google-maps/api';
import { AppBar, Toolbar, Typography, InputBase, Box } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import useStyles from '../components/HomeStyle';




const Home = () => {
  const classes = useStyles();
  return (
    <>
      {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">

          <ul className="navbar-nav me-auto mb-2 mb-lg-0">

            <li className="nav-item">
              <Link className="navbar-brand" to={"/"}>Happy-Visit</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to={"/"}>Home</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to={"/account"}>Account</Link>
            </li>

            <li>
              <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
              </form>
            </li>
          </ul>

        </div>
      </nav> */}

      <AppBar position="static">
        <Toolbar className={classes.Toolbar}>
          <Typography variant="h5" className={classes.title}>
            Happy-Visit
          </Typography>
          <Box display="flex">
            <Typography variant="h6" className={classes.title}>
              Explore new places
            </Typography>
            {/* <Autocomplete> */}
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase placeholder="Search..." classes={{ root: classes.inputRoot, input: classes.inputInput }} />
            </div>
            {/* </Autocomplete> */}
          </Box>
        </Toolbar>
      </AppBar>

      <br /> <br />

      <div>
        <Link className="Trekking" to={"/trekking"}>Trekking</Link>
      </div>
      <div>
        <Link className="Heritage" to={"/heritage"}>Heritage</Link>
      </div>
      <div>
        <Link className="Wildlife" to={"/wildlife"}>Wildlife</Link>
      </div>
      <div>
        <Link className="Pilgrimage" to={"/pilgrimage"}>Pilgrimage</Link>
      </div>
      <div>
        <Link className="HillStations" to={"/hillstations"}>Hill Stations</Link>
      </div>
      <div>
        <Link className="BeachTour" to={"/beachtour"}>Beach Tour</Link>
      </div>
      <br /> <br /> <br />

      {/* <CssBaseline /> */}
      <Grid container spacing={3} style={{ width: '100%' }}>
        <Grid item xs={12} md={4}>
          <List />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map />
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
