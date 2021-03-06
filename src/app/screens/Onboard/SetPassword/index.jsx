import React, { useState } from "react";
import Input from "../../../components/Form/input";
import Button from "../../../components/button";
import { useHistory } from "react-router-dom";
import utils from "../../../../common/lib/utils";

const initialFormData = Object.freeze({
  password: "",
  passwordConfirmation: "",
});

export default function SetPassword() {
  const history = useHistory();
  const [formData, setFormData] = useState(initialFormData);

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value.trim(),
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const { password, passwordConfirmation } = formData;
    if (password !== passwordConfirmation) {
      alert("Passwords don't match.");
    } else {
      try {
        await utils.call("setPassword", { password });
        history.push("/connect-lnd");
      } catch (e) {
        console.log(e.message);
      }
    }
  }

  return (
    <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8">
      <div className="relative">
        <div className="h-32">
          <img className="mb-12" src="https://i.ibb.co/3F3mCkR/logox.png" />
        </div>
        <h1 className="text-3xl font-bold mt-4">Secure the bag!</h1>
        <p className="text-gray-500 mt-6">
          You need to set a password so we can lock the wallet when it’s not
          being used. The browser is not the most secure environment and access
          to your node needs to be kept private when not in use.
        </p>
        <p className="text-orange-bitcoin mt-2">Check out this guides.</p>
        <form onSubmit={handleSubmit}>
          <div className="w-4/5">
            <div className="mt-6">
              <label
                htmlFor="email"
                className="block font-medium text-gray-700"
              >
                Set a password
              </label>
              <div>
                <Input
                  name="password"
                  type="password"
                  required
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="mt-6">
              <label
                htmlFor="email"
                className="block font-medium text-gray-700"
              >
                Lets confirm you typed it correct.
              </label>
              <div className="mt-1">
                <Input
                  name="passwordConfirmation"
                  type="password"
                  required
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div className="mt-8 w-2/5">
            <Button label="Let's GOO!" type="submit" />
          </div>
        </form>
      </div>

      <div
        className="mt-10 -mx-4 relative lg:mt-0 lg:flex lg:items-center"
        aria-hidden="true"
      >
        <img src="https://i.ibb.co/QfF1PP6/Frame-20.png" />
      </div>
    </div>
  );
}
