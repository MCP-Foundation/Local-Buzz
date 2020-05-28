import React, { useState } from 'react';
import { Form, Modal } from 'react-bootstrap';
import { Button } from 'grommet';

function AvatarForm({ show, handleClose }) {
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

  return (
    <div>
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
              <option value="LongHairNotTooLong">Long Hair NotTooLong</option>
              <option value="LongHairMiaWallace">Long Hair MiaWallace</option>
              <option value="LongHairStraight">Long Hair Straight</option>
              <option value="ShortHairDreads01">
                Super Short Hair Dreads01
              </option>
              <option value="ShortHairDreads02">Short Hair Dreads</option>
              <option value="ShortHairFrizzle">Short Hair Frizzle</option>
              <option value="ShortHairShaggyMullet">
                ShortHairShaggyMullet
              </option>
              <option value="ShortHairShortCurly">ShortHairShortCurly</option>
              <option value="ShortHairShortFlat">ShortHairShortFlat</option>
              <option value="ShortHairShortRound">ShortHairShortRound</option>
              <option value="ShortHairShortWaved">ShortHairShortWaved</option>
              <option value="ShortHairSides">ShortHairSides</option>
              <option value="ShortHairTheCaesar">ShortHairTheCaesar</option>
              <option value="ShortHairTheCaesarSidePart">
                ShortHairTheCaesarSidePart
              </option>
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="hatColorForm">
            <Form.Label>If you chose head covering, choose a color!</Form.Label>
            <Form.Control as="select" name="hatColor" onChange={changeHatColor}>
              <option value="Black">Black</option>
              <option value="Blue02">Blue02</option>
              <option value="Blue03">Blue03</option>
              <option value="Gray01">Gray01</option>
              <option value="Gray02">Gray02</option>
              <option value="Heather">Heather</option>
              <option value="PastelBlue">PastelBlue</option>
              <option value="PastelGreen">PastelGreen</option>
              <option value="PastelOrange">PastelOrange</option>
              <option value="PastelRed">PastelRed</option>
              <option value="PastelYellow">PastelYellow</option>
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
              <option value="BlondeGolden">BlondeGolden</option>
              <option value="Brown">Brown</option>
              <option value="BrownDark">BrownDark</option>
              <option value="PastelPink">PastelPink</option>
              <option value="Platinum">Platinum</option>
              <option value="Red">Red</option>
              <option value="SilverGray">SilverGray</option>
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
              <option value="Prescription01">Prescription01</option>
              <option value="Prescription02">Prescription02</option>
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
              <option value="BeardMedium">BeardMedium</option>
              <option value="BeardLight">BeardLight</option>
              <option value="BeardMagestic">BeardMagestic</option>
              <option value="MoustacheFancy">MoustacheFancy</option>
              <option value="MoustacheMagnum">MoustacheMagnum</option>
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="facialHairColorForm">
            <Form.Label>If you have facial hair, choose a color!</Form.Label>
            <Form.Control
              as="select"
              name="FacialHairColor"
              onChange={changeHairColor}
            >
              <option value="Auburn">Auburn</option>
              <option value="Black">Black</option>
              <option value="Blonde">Blonde</option>
              <option value="BlondeGolden">BlondeGolden</option>
              <option value="Brown">Brown</option>
              <option value="BrownDark">BrownDark</option>
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
              <option value="CollarSweater">CollarSweater</option>
              <option value="GraphicShirt">GraphicShirt</option>
              <option value="Hoodie">Hoodie</option>
              <option value="Overall">Overall</option>
              <option value="ShirtCrewNeck">ShirtCrewNeck</option>
              <option value="ShirtScoopNeck">ShirtScoopNeck</option>
              <option value="ShirtVNeck">ShirtVNeck</option>
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
              <option value="PastelYellow">PastelYellow</option>
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

          <Button
            className="avatarFormSubmit"
            primary
            type="submit"
            label="Yep, that's me!"
          />
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default { AvatarForm };
