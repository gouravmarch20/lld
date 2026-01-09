// builder-user-demo.js

// ----------------------------
// Simple User model
// ----------------------------
class User {
  constructor({ firstName, lastName, email, password }) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    Object.freeze(this); // make immutable
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  toJSON() {
    return {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      fullName: this.fullName,
    };
  }
}

// ----------------------------
// Validators (composable)
// ----------------------------

// Each validator is a function that receives full data and returns
// null (ok) or { field, message } error.

function required(field, msg) {
  return function (data) {
    if (!data[field] || data[field].trim() === "") {
      return { field, message: msg || `${field} is required` };
    }
    return null;
  };
}

const minLength = (field, min, msg) => (data) => {
  const val = data[field];
  if (val && val.length < min)
    return { field, message: msg || `${field} must be ≥ ${min} characters` };
  return null;
};

const isEmail = (field, msg) => (data) => {
  const val = data[field];
  const re = /^[^@\\s]+@[^@\\s]+\\.[^@\\s]+$/;
  if (!re.test(val))
    return { field, message: msg || `${field} must be a valid email` };
  return null;
};

// Multi-field validators
const fullNameRequired = () => (data) => {
  if (!data.firstName && !data.lastName)
    return {
      field: "name",
      message: "firstName and lastName are both required",
    };
  return null;
};

const emailNotPassword = () => (data) => {
  if (data.email && data.password && data.email === data.password)
    return { field: "password", message: "password cannot equal email" };
  return null;
};

const passwordComplexity = () => (data) => {
  const p = data.password || "";
  if (!/[A-Z]/.test(p) || !/[0-9]/.test(p) || p.length < 8)
    return {
      field: "password",
      message: "password must contain uppercase, number, and be ≥ 8 chars",
    };
  return null;
};

// ----------------------------
// Validator composer & runner
// ----------------------------

function composeValidators(...validators) {
  return function (data) {
    const errors = [];
    for (const validator of validators) {
      const result = validator(data);
      if (result) errors.push(result);
    }
    return errors;
  };
}

// ----------------------------
// Builder class
// ----------------------------
class UserBuilder {
  constructor() {
    this._data = {};
    this._validators = composeValidators(
      // required
      required("firstName"),
      required("lastName"),
      required("email"),
      required("password"),
      //
      isEmail("email"),
      minLength("password", 8),
      fullNameRequired(),
      emailNotPassword(),
      passwordComplexity()
    );
  }

  setFirstName(name) {
    this._data.firstName = name;
    return this;
  }

  setLastName(name) {
    this._data.lastName = name;
    return this;
  }

  setEmail(email) {
    this._data.email = email;
    return this;
  }

  setPassword(password) {
    this._data.password = password;
    return this;
  }

  build() {
    const errors = this._validators(this._data);
    if (errors.length) {
      const err = new Error("Validation failed");
      err.validation = errors;
      throw err;
    }
    return new User(this._data);
  }
}

// ----------------------------
// Demo
// ----------------------------
function demo() {
  try {
    const user = new UserBuilder()
      .setFirstName("Asha")
      .setLastName("Verma")
      .setEmail("asha@example.com")
      .setPassword("Asha@1234")
      .build();

    console.log("✅ User created:", user.toJSON());
  } catch (e) {
    console.error("❌ Validation errors:", e.validation);
  }

  try {
    const badUser = new UserBuilder()
      .setFirstName("")
      .setLastName("")
      .setEmail("bademail")
      .setPassword("email") // same as email
      .build();
  } catch (e) {
    console.error("❌ Bad user errors:", e.validation);
  }
}

demo();
