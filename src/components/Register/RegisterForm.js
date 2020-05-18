import React from 'react';

function RegisterForm({ registerUser }) {
  return (
    <section className="RegisterFormComponent">
      <form id="registerForm" onSubmit={registerUser} action="/register" method="post">
        <fieldset>
          <label htmlFor="name">Name</label>
          <input id="name" type="text" name="name" />

          <label htmlFor="username">Username</label>
          <input id="username" type="text" name="username" />

          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" />

          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" />

          <label htmlFor="address">Borough</label>
          <select id="address" name="address">
            <option value="BX">Bronx</option>
            <option value="BK">Brooklyn</option>
            <option value="MN">Manhattan</option>
            <option value="QN">Queens</option>
            <option value="SI">Staten Island</option>
          </select>

          <label htmlFor="state">State</label>
          <select id="state" name="state">
            <option value="NY">NY</option>
          </select>

          <input type="submit" value="Sign Up" />
        </fieldset>
      </form>
    </section>
  );
}

export default RegisterForm;
