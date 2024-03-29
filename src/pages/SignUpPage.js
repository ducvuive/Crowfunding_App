import useToggleValue from "../hooks/useToggleValue";
import React, { useState } from "react";
import LayoutAuthentication from "../layouts/LayoutAuthentication";
import Label from "../components/label_duc/Label";
import FormGroup from "../components/common/FormGroup";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Input } from "../components/input";
import { IconEyeToggle } from "../components/icons";
import { Checkbox } from "../components/checkbox";
import { Button } from "../components/button";
import { useDispatch } from "react-redux";
import { authRegister } from "../store/auth/auth-slice";

const schema = yup.object({
  name: yup.string().required("This field is required"),
  email: yup
    .string()
    .email("Invalid email address")
    .required("This field is required"),
  password: yup
    .string()
    .required("This field is required")
    .min(8, "Password must be 8 character "),
});

const SignUpPage = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onSubmit", // khi submit thi moi bat su kien
  });
  const dispatch = useDispatch();
  const handleSignUp = (values) => {
    dispatch(authRegister(values));
  };
  const { value: acceptTerm, handleToggleValue: handleToggleTerm } =
    useToggleValue();
  const { value: showPassword, handleToggleValue: handleTogglePassword } =
    useToggleValue();
  // const [acceptTerm, setAcceptTerm] = useState(false);
  // const handleToggleTerm = () => {
  //   setAcceptTerm(!acceptTerm);
  // };
  //const [showPassword, setShowPassword] = useState(false);
  // const handleTogglePassword = () => {
  //   setShowPassword(!showPassword);
  // };
  return (
    <LayoutAuthentication heading="Sign Up">
      <p className="mb-6 text-xs font-normal text-center lg:text-sm text-text3 lg:mb-8">
        Already have an account?{" "}
        <Link to="/login" className="font-medium underline text-primary">
          {" "}
          Login
        </Link>
      </p>
      <button className="flex items-center justify-center w-full py-4 mb-5 text-base font-semibold border gap-x-3 border-strock rounded-xl text-text2 dark:text-white dark:border-darkStroke">
        <img src="/icon-google.png" alt="" />
        <p className="text-base font-semibold text-text2 dark:text-white">
          Sign up with google
        </p>
      </button>
      <p className="mb-4 text-xs font-normal text-center lg:text-sm lg:mb-8 text-text2 dark:text-white">
        Or sign up with email
      </p>
      <form onSubmit={handleSubmit(handleSignUp)}>
        <FormGroup>
          <Label htmlFor="name">Full Name *</Label>
          <Input
            // name dung de danh id cho khi an vao label thi input nhan
            control={control}
            name="name"
            placeholder="Jhon Doe"
            error={errors.name?.message}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">Email*</Label>
          <Input
            control={control}
            name="email"
            type="email"
            placeholder="example@gmail.com"
            error={errors.email?.message}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Password*</Label>
          <Input
            control={control}
            name="password"
            type={`${showPassword ? "text" : "password"}`}
            placeholder="Create a password"
            error={errors.password?.message}
          >
            <IconEyeToggle
              open={showPassword}
              onClick={handleTogglePassword}
            ></IconEyeToggle>
          </Input>
        </FormGroup>
        <div className="flex mb-5 item-start gap-x-5">
          <Checkbox name="term" checked={acceptTerm} onClick={handleToggleTerm}>
            <p className="flex-1 text-xs lg:text-sm text-text2 dark:text-text3">
              I agree to the
              <span className="underline text-secondary">
                {" "}
                Terms of Use
              </span>{" "}
              and have read and understand the
              <span className="underline text-secondary"> Privacy policy.</span>
            </p>
          </Checkbox>
        </div>
        <Button className="w-full" type="submit" kind="primary">
          Create my account
        </Button>

        {/* <Button className="w-full bg-primary" type="submit">
          Create my account
        </Button> */}
      </form>
    </LayoutAuthentication>
  );
};

export default SignUpPage;
