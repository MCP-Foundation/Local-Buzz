import React, { useState } from 'react';

import { Button } from 'grommet';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Form, Modal } from 'react-bootstrap';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'© MCP Foundation '}
      <Link color="inherit" href="/">
        Local Buzz
      </Link>{' '}
      {new Date().getFullYear()}.
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function RegisterForm({ show, handleClose, handleShow }) {
  const classes = useStyles();

  const [topType, setTopType] = useState('WinterHat2');
  const [accessoriesType, setAccessoriesType] = useState('Blank');
  const [hatColor, setHatColor] = useState('Heather');
  const [hairColor, setHairColor] = useState('Black');
  const [facialHairType, setFacialHairType] = useState('Blank');
  const [facialHairColor, setFacialHairColor] = useState('Black');
  const [clothesType, setClothesType] = useState('CollarSweater');
  const [clothesColor, setClothesColor] = useState('Pink');
  const [eyeType, setEyeType] = useState('Default');
  const [eyeBrowType, setEyeBrowType] = useState('Default');
  const [mouthType, setMouthType] = useState('Twinkle');
  const [skinColor, setSkinColor] = useState('Brown');

  const changeTopType = (e) => {
    setTopType(e.target.value);
  };
  const changeAccessoriesType = (e) => {
    setAccessoriesType(e.target.value);
  };
  const changeHatColor = (e) => {
    setHatColor(e.target.value);
  };
  const changeHairColor = (e) => {
    setHairColor(e.target.value);
  };
  const changeFacialHairType = (e) => {
    setFacialHairType(e.target.value);
  };
  const changeFacialHairColor = (e) => {
    setFacialHairColor(e.target.value);
  };
  const changeClothesType = (e) => {
    setClothesType(e.target.value);
  };
  const changeClothesColor = (e) => {
    setClothesColor(e.target.value);
  };
  const changeEyeType = (e) => {
    setEyeType(e.target.value);
  };
  const changeEyeBrowType = (e) => {
    setEyeBrowType(e.target.value);
  };
  const changeMouthType = (e) => {
    setMouthType(e.target.value);
  };
  const changeSkinColor = (e) => {
    setSkinColor(e.target.value);
  };

  const avatarImage = `https://avataaars.io/?avatarStyle=Circle&topType=${topType}&accessoriesType=${accessoriesType}&hatColor=${hatColor}&hairColor=${hairColor}&facialHairType=${facialHairType}&facialHairColor=${facialHairColor}&clotheType=${clothesType}&clotheColor=${clothesColor}&eyeType=${eyeType}&eyebrowType=${eyeBrowType}&mouthType=${mouthType}&skinColor=${skinColor}`;

  // POST method to api to create user
  const registerUser = (e) => {
    e.preventDefault();
    fetch('/api/register', {
      method: 'post',
      body: JSON.stringify({
        name: e.target.elements.name.value,
        username: e.target.elements.username.value,
        email: e.target.elements.email.value,
        password: e.target.elements.password.value,
        address: e.target.elements.address.value,
        avatar: avatarImage,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((response) => {
      if (response.status >= 400) {
        return response.json().catch((errResData) => {
          const error = new Error('Something went wrong!');
          error.data = errResData;
          throw error;
        });
      }
      return response;
    });
    return window.location.replace('/login');
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography className="formTitle" component="h1" variant="h5">
          Sign up
        </Typography>

        {/* Modal for avatar customization */}

        <Button
          primary
          type="submit"
          label="Create an avatar!"
          onClick={handleShow}
        />

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>Design your avatar!</Modal.Header>
          <Modal.Body>
            <div className="avatarPreview">
              <img alt="UserAvatar" src={avatarImage} />
            </div>

            <Form.Group controlId="topTypeForm">
              <Form.Label>Select a hair type</Form.Label>
              <Form.Control as="select" name="topType" onChange={changeTopType}>
                <option value="NoHair">NoHair</option>
                <option value="Eyepatch">Eyepatch</option>
                <option value="Hijab">Hijab</option>
                <option value="Turban">Turban</option>
                <option value="WinterHat1">Winter Hat</option>
                <option value="WinterHat2">Winter Hat with Pattern</option>
                <option value="WinterHat3">Beanie with Pom Pom</option>
                <option value="LongHairBigHair">Long Hair Big Hair</option>
                <option value="LongHairBob">Long Hair Bob</option>
                <option value="LongHairBun">Long Hair Bun</option>
                <option value="LongHairCurly">Long Hair Curly</option>
                <option value="LongHairCurvy">Long Hair Curvy</option>
                <option value="LongHairDreads">Long Hair Dreads</option>
                <option value="LongHairFrida">Long Hair Frida</option>
                <option value="LongHairFro">Long Hair Fro</option>
                <option value="LongHairFroBand">Long Hair Fro with Band</option>
                <option value="LongHairNotTooLong">
                  Long Hair Not TooLong
                </option>
                <option value="LongHairMiaWallace">
                  Long Hair Mia Wallace
                </option>
                <option value="LongHairStraight">Long Hair Straight</option>
                <option value="ShortHairDreads01">
                  Super Short Hair Dreads01
                </option>
                <option value="ShortHairDreads02">Short Hair Dreads</option>
                <option value="ShortHairFrizzle">Short Hair Frizzle</option>
                <option value="ShortHairShaggyMullet">
                  Short Hair Shaggy Mullet
                </option>
                <option value="ShortHairShortCurly">
                  Short Hair Short Curly
                </option>
                <option value="ShortHairShortFlat">
                  Short Hair Short Flat
                </option>
                <option value="ShortHairShortRound">
                  Short Hair Short Round
                </option>
                <option value="ShortHairShortWaved">
                  Short Hair Short Waved
                </option>
                <option value="ShortHairSides">Short Hair Sides</option>
                <option value="ShortHairTheCaesar">
                  Short Hair The Caesar
                </option>
                <option value="ShortHairTheCaesarSidePart">
                  Short Hair The Caesar Side Part
                </option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="hatColorForm">
              <Form.Label>
                If you chose head covering, choose a color!
              </Form.Label>
              <Form.Control
                as="select"
                name="hatColor"
                onChange={changeHatColor}
              >
                <option value="Black">Black</option>
                <option value="Blue02">Blue02</option>
                <option value="Blue03">Blue03</option>
                <option value="Gray01">Gray01</option>
                <option value="Gray02">Gray02</option>
                <option value="Heather">Heather</option>
                <option value="PastelBlue">Pastel Blue</option>
                <option value="PastelGreen">Pastel Green</option>
                <option value="PastelOrange">Pastel Orange</option>
                <option value="PastelRed">Pastel Red</option>
                <option value="PastelYellow">Pastel Yellow</option>
                <option value="Pink">Pink</option>
                <option value="Red">Red</option>
                <option value="White">White</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="hairColorForm">
              <Form.Label>Hair Color</Form.Label>
              <Form.Control
                as="select"
                name="HairColor"
                onChange={changeHairColor}
              >
                <option value="Auburn">Auburn</option>
                <option value="Black">Black</option>
                <option value="Blonde">Blonde</option>
                <option value="BlondeGolden">Blonde Golden</option>
                <option value="Brown">Brown</option>
                <option value="BrownDark">Brown Dark</option>
                <option value="PastelPink">Pastel Pink</option>
                <option value="Platinum">Platinum</option>
                <option value="Red">Red</option>
                <option value="SilverGray">Silver Gray</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="accessoriesTypeForm">
              <Form.Label>Accessories?</Form.Label>
              <Form.Control
                as="select"
                name="accessoriesType"
                onChange={changeAccessoriesType}
              >
                <option value="Blank">Blank</option>
                <option value="Kurt">Kurt</option>
                <option value="Prescription01">Prescription 01</option>
                <option value="Prescription02">Prescription 02</option>
                <option value="Round">Round</option>
                <option value="Sunglasses">Sunglasses</option>
                <option value="Wayfarers">Wayfarers</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="facialHairTypeForm">
              <Form.Label>Facial hair type</Form.Label>
              <Form.Control
                as="select"
                name="facialHairType"
                onChange={changeFacialHairType}
              >
                <option value="Blank">Blank</option>
                <option value="BeardMedium">Beard Medium</option>
                <option value="BeardLight">Beard Light</option>
                <option value="BeardMagestic">Beard Magestic</option>
                <option value="MoustacheFancy">Moustache Fancy</option>
                <option value="MoustacheMagnum">Moustache Magnum</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="facialHairColorForm">
              <Form.Label>If you have facial hair, choose a color!</Form.Label>
              <Form.Control
                as="select"
                name="FacialHairColor"
                onChange={changeFacialHairColor}
              >
                <option value="Auburn">Auburn</option>
                <option value="Black">Black</option>
                <option value="Blonde">Blonde</option>
                <option value="BlondeGolden">Blonde Golden</option>
                <option value="Brown">Brown</option>
                <option value="BrownDark">Brown Dark</option>
                <option value="Platinum">Platinum</option>
                <option value="Red">Red</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="clothesTypeForm">
              <Form.Label>Clothing</Form.Label>
              <Form.Control
                as="select"
                name="clothesType"
                onChange={changeClothesType}
              >
                <option value="BlazerShirt">Navy BlazerShirt</option>
                <option value="BlazerSweater">Navy BlazerSweater</option>
                <option value="CollarSweater">Collar Sweater</option>
                <option value="GraphicShirt">Graphic Shirt</option>
                <option value="Hoodie">Hoodie</option>
                <option value="Overall">Overall</option>
                <option value="ShirtCrewNeck">Shirt Crew Neck</option>
                <option value="ShirtScoopNeck">Shirt Scoop Neck</option>
                <option value="ShirtVNeck">Shirt V Neck</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="clothesColorForm">
              <Form.Label>Clothing Color</Form.Label>
              <Form.Control
                as="select"
                name="clothesColor"
                onChange={changeClothesColor}
              >
                <option value="Black">Black</option>
                <option value="Blue03">Navy</option>
                <option value="Gray01">White</option>
                <option value="Gray02">Gray</option>
                <option value="Heather">Heather</option>
                <option value="PastelBlue">Pastel Blue</option>
                <option value="PastelGreen">Pastel Green</option>
                <option value="PastelOrange">Pastel Orange</option>
                <option value="PastelRed">Pastel Pink</option>
                <option value="PastelYellow">Pastel Yellow</option>
                <option value="Pink">Hot Pink</option>
                <option value="Red">Red</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="eyeTypeForm">
              <Form.Label>Eye Type</Form.Label>
              <Form.Control as="select" name="eyeType" onChange={changeEyeType}>
                <option value="Default">Default</option>
                <option value="Happy">Happy</option>
                <option value="Side">Side</option>
                <option value="Squint">Squint</option>
                <option value="Surprised">Surprised</option>
                <option value="Wink">Wink</option>
                <option value="WinkWacky">Wacky Wink</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="eyeBrowTypeForm">
              <Form.Label>Eyebrow type</Form.Label>
              <Form.Control
                as="select"
                name="eyeBrowType"
                onChange={changeEyeBrowType}
              >
                <option value="Default">Default</option>
                <option value="DefaultNatural">Default Natural</option>
                <option value="FlatNatural">Flat Natural</option>
                <option value="RaisedExcited">Raised Excited</option>
                <option value="UnibrowNatural">Unibrow Natural</option>
                <option value="UpDown">Up Down</option>
                <option value="UpDownNatural">Up Down Natural</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="mouthTypeForm">
              <Form.Label>Mouth type</Form.Label>
              <Form.Control
                as="select"
                name="mouthType"
                onChange={changeMouthType}
              >
                <option value="Default">Default</option>
                <option value="Eating">Eating</option>
                <option value="Serious">Serious</option>
                <option value="Smile">Smile</option>
                <option value="Twinkle">Twinkle</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="skinColorForm">
              <Form.Label>Skin color</Form.Label>
              <Form.Control
                as="select"
                name="skinColor"
                onChange={changeSkinColor}
              >
                <option value="Tanned">Tanned</option>
                <option value="Yellow">Yellow</option>
                <option value="Pale">Pale</option>
                <option value="Light">Light</option>
                <option value="Brown">Brown</option>
                <option value="DarkBrown">DarkBrown</option>
                <option value="Black">Black</option>
              </Form.Control>
            </Form.Group>
            <div className="registerFormButton">
              <Button
                className="avatarFormSubmit"
                primary
                type="submit"
                onClick={handleClose}
                label="Yep, that's me!"
              />
            </div>
          </Modal.Body>
        </Modal>

        <form
          id="registerForm"
          onSubmit={registerUser}
          className={classes.form}
          noValidate
        >
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                htmlFor="name"
                type="text"
                autoComplete="fname"
                name="name"
                variant="outlined"
                required
                fullWidth
                id="name"
                label="Full Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                htmlFor="username"
                type="text"
                variant="outlined"
                required
                fullWidth
                id="username"
                label="User Name"
                name="username"
                autoComplete="username"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                htmlFor="email"
                type="email"
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                htmlFor="password"
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12}>
              <Form.Group controlId="skinColorForm">
                <Form.Label>City</Form.Label>
                <Form.Control as="select" id="address" name="address">
                  <option value="Bronx">Bronx</option>
                  <option value="Brooklyn">Brooklyn</option>
                  <option value="Manhattan">Manhattan</option>
                  <option value="Queens">Queens</option>
                  <option value="Staten Island">Staten Island</option>
                  <option value="Outside of NYC">Outside of NYC</option>
                </Form.Control>
              </Form.Group>
            </Grid>
          </Grid>
          <div className="registerFormButton">
            <Button
              className="avatarFormSubmit"
              primary
              type="submit"
              label="Sign Up"
              className={classes.submit}
            />
          </div>
          <Grid container justify="center">
            <Grid item>
              <Link href="/login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Grid container justify="center">
        <Box mt={8} className="copywrite">
          <Copyright />
        </Box>
      </Grid>
    </Container>
  );
}
