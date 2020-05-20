import React, { useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import TextField from '@material-ui/core/TextField';

function Banner() {
  const [modal, setModal] = useState({ open: false });

  // const actions = [
  //   <FlatButton
  //     type="reset"
  //     label="Reset"
  //     secondary={true}
  //     style={{ float: 'left' }}
  //   />
  //   ,
  //   <FlatButton
  //     label="Cancel"
  //     primary={true}
  //     onClick={handleClose}
  //   />
  //   ,
  //   <FlatButton
  //     type="submit"
  //     label="Submit"
  //     primary={true}
  //   />
  // ];

  function handleOpen() {
    setModal({ open: true });
  }

  function handleClose() {
    setModal({ open: false });
  }

  return (
    <section className="BannerComponent">
      <header>
        <h2 className="hero">
          Connect with businesses on how they they have handled the current climate!
        </h2>

        <button className="bannerButton" onClick={handleOpen} type="button">
          Sign up
        </button>
        <Dialog
          title="Dialog With Custom Width"
          modal={true}
          open={modal.open}
        >
          <form action="/" method="POST" onSubmit={(e) => { e.preventDefault(); alert('Submitted form!'); handleClose(); }}>
            This dialog spans the entire width of the screen.
          <TextField name="email" hintText="Email" />
            <TextField name="pwd" type="password" hintText="Password" />
            <div style={{ textAlign: 'right', padding: 8, margin: '24px -24px -24px -24px' }}>
              {/* {actions} */}
            </div>
          </form>
        </Dialog>
      </header>
    </section>
  );
}

export default Banner;
