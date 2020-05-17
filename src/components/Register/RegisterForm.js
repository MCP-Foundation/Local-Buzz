import React from 'react';

function RegisterForm() {
  return (
    <section className="RegisterFormComponent">
      <form id="registerForm" action="/register" method="post">
        <fieldset>
          <label for="name">Name</label>
          <input id="name" type="text" name="name" />

          <label for="username">Username</label>
          <input id="username" type="text" name="username" />

          <label for="email">Email</label>
          <input id="email" type="email" name="email" />

          <label for="password">Password</label>
          <input id="password" type="password" name="password" />

          <label for="address">Borough</label>
          <select id="address" name="address">
            <option value="BX">Bronx</option>
            <option value="BK">Brooklyn</option>
            <option value="MN">Manhattan</option>
            <option value="QN">Queens</option>
            <option value="SI">Staten Island</option>
          </select>

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
