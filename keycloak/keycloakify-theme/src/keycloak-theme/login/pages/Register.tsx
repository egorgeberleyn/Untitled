// ejected using 'npx eject-keycloak-page'
import { clsx } from "keycloakify/tools/clsx";
import { PageProps } from "keycloak-theme/PageProps";
import { useGetClassName } from "keycloakify/login/lib/useGetClassName";
import type { KcContext } from "../kcContext";
import type { I18n } from "../i18n";
import { RiLock2Line } from "react-icons/ri";
import { FiUser, FiUsers } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { Stack } from "@mui/material";
import bgImg from "../assets/Illustration2.png";
import { useState } from "react";
import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai";

export default function Register(
  props: PageProps<Extract<KcContext, { pageId: "register.ftl" }>, I18n>
) {
  const { kcContext, i18n, doUseDefaultCss, Template, classes } = props;

  const [passwordVisible, setPasswordVisible] = useState(false);

  const { getClassName } = useGetClassName({
    doUseDefaultCss,
    classes,
  });

  const {
    url,
    messagesPerField,
    register,
    realm,
    passwordRequired,
    recaptchaRequired,
    recaptchaSiteKey,
  } = kcContext;

  const { msg, msgStr } = i18n;

  return (
    <Template
      {...{ kcContext, i18n, doUseDefaultCss, classes }}
      headerNode={null}
      bgImg={bgImg}
      bgImgHeight="968px"
      bgImgWidth="50%"
      formWidth="50%"
      headerTitle={msgStr("registerTitleHtml")}
    >
      <form
        id="kc-register-form"
        className={getClassName("kcFormClass")}
        action={url.registrationAction}
        method="post"
      >
        <div
          className={clsx(
            getClassName("kcFormGroupClass"),
            messagesPerField.printIfExists(
              "email",
              getClassName("kcFormGroupErrorClass")
            )
          )}
        >
          <label htmlFor="email" className={getClassName("kcLabelClass")}>
            {msg("email")}
          </label>

          <div className="input-container">
            <HiOutlineMail className="icon" />
            <input
              placeholder="Email"
              type="text"
              id="email"
              className={getClassName("kcInputClass")}
              name="email"
              defaultValue={register.formData.email ?? ""}
              autoComplete="email"
            />
          </div>
        </div>
        {/* {!realm.registrationEmailAsUsername && (
            <div
              style={{ width: "49%" }}
              className={clsx(
                getClassName("kcFormGroupClass"),
                messagesPerField.printIfExists(
                  "username",
                  getClassName("kcFormGroupErrorClass")
                )
              )}
            >
              <label
                htmlFor="username"
                className={getClassName("kcLabelClass")}
              >
                {msg("username")}
              </label>

              <div className="input-container">
                <MdOutlineDriveFileRenameOutline className="icon" />
                <input
                  type="text"
                  placeholder="Username"
                  id="username"
                  className={getClassName("kcInputClass")}
                  name="username"
                  defaultValue={register.formData.username ?? ""}
                  autoComplete="username"
                />
              </div>
            </div>
          )} */}

        <Stack direction="row" justifyContent={"space-between"}>
          <div
            style={{ width: "49%" }}
            className={clsx(
              getClassName("kcFormGroupClass"),
              messagesPerField.printIfExists(
                "firstName",
                getClassName("kcFormGroupErrorClass")
              )
            )}
          >
            <label htmlFor="firstName" className={getClassName("kcLabelClass")}>
              {msg("firstName")}
            </label>

            <div className="input-container">
              <FiUser className="icon" />
              <input
                placeholder="First name"
                type="text"
                id="firstName"
                className={getClassName("kcInputClass")}
                name="firstName"
                defaultValue={register.formData.firstName ?? ""}
              />
            </div>
          </div>

          <div
            style={{ width: "49%" }}
            className={clsx(
              getClassName("kcFormGroupClass"),
              messagesPerField.printIfExists(
                "lastName",
                getClassName("kcFormGroupErrorClass")
              )
            )}
          >
            <label htmlFor="lastName" className={getClassName("kcLabelClass")}>
              {msg("lastName")}
            </label>

            <div className="input-container">
              <FiUsers className="icon" />
              <input
                placeholder="Second name"
                type="text"
                id="lastName"
                className={getClassName("kcInputClass")}
                name="lastName"
                defaultValue={register.formData.lastName ?? ""}
              />
            </div>
          </div>
        </Stack>
        {passwordRequired && (
          <>
            <Stack direction="row" justifyContent="space-between">
              <div
                style={{ width: "49%" }}
                className={clsx(
                  getClassName("kcFormGroupClass"),
                  messagesPerField.printIfExists(
                    "password",
                    getClassName("kcFormGroupErrorClass")
                  )
                )}
              >
                <label
                  htmlFor="password"
                  className={getClassName("kcLabelClass")}
                >
                  {msg("password")}
                </label>

                <div className="input-container">
                  <RiLock2Line className="icon" />
                  <input
                    placeholder="Password"
                    type={passwordVisible ? "text" : "password"}
                    id="password"
                    className={getClassName("kcInputClass")}
                    name="password"
                    autoComplete="new-password"
                  />
                  {passwordVisible ? (
                    <AiOutlineEye
                      className="passwordEye"
                      onClick={() => setPasswordVisible(false)}
                    />
                  ) : (
                    <AiOutlineEyeInvisible
                      className="passwordEye"
                      onClick={() => setPasswordVisible(true)}
                    />
                  )}
                </div>
              </div>
              <div
                style={{ width: "49%" }}
                className={clsx(
                  getClassName("kcFormGroupClass"),
                  messagesPerField.printIfExists(
                    "password-confirm",
                    getClassName("kcFormGroupErrorClass")
                  )
                )}
              >
                <label
                  htmlFor="password-confirm"
                  className={getClassName("kcLabelClass")}
                >
                  {msg("passwordConfirm")}
                </label>

                <div className="input-container">
                  <RiLock2Line className="icon" />
                  <input
                    placeholder="Confirm password"
                    type={passwordVisible ? "text" : "password"}
                    id="password-confirm"
                    className={getClassName("kcInputClass")}
                    name="password-confirm"
                  />
                  {passwordVisible ? (
                    <AiOutlineEye
                      className="passwordEye"
                      onClick={() => setPasswordVisible(false)}
                    />
                  ) : (
                    <AiOutlineEyeInvisible
                      className="passwordEye"
                      onClick={() => setPasswordVisible(true)}
                    />
                  )}
                </div>
              </div>
            </Stack>
          </>
        )}
        {recaptchaRequired && (
          <div className="form-group">
            <div className={getClassName("kcInputWrapperClass")}>
              <div
                className="g-recaptcha"
                data-size="compact"
                data-sitekey={recaptchaSiteKey}
              ></div>
            </div>
          </div>
        )}
        <div className={getClassName("kcFormGroupClass")}>
          <div id="kc-form-options" className="kcFormOptions">
            <span>
              <a className="kcBackToLoginBtn" href={url.loginUrl}>
                {msgStr("backToLogin")}
              </a>
            </span>
          </div>

          <div
            id="kc-form-buttons"
            className={getClassName("kcFormButtonsClass")}
          >
            <input
              className={clsx(
                getClassName("kcButtonClass"),
                getClassName("kcButtonBlockClass"),
                getClassName("kcButtonLargeClass")
              )}
              type="submit"
              value={msgStr("doRegisterBtn")}
            />
          </div>
        </div>
      </form>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        sx={{ mt: "345px", fontSize: "16px" }}
      >
        <p>Untitled.app © 2023</p>
        <a
          className="register-link"
          style={{
            color: "#72767b",
            textDecoration: "none",
            cursor: "pointer",
          }}
        >
          Privacy Policy
        </a>
      </Stack>
    </Template>
  );
}
