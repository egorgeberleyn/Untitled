import { clsx } from "keycloakify/tools/clsx";
import { PageProps } from "keycloak-theme/PageProps";
import { useGetClassName } from "keycloakify/login/lib/useGetClassName";
import type { KcContext } from "../kcContext";
import type { I18n } from "../i18n";
import bgImg from "../assets/Illustration2.png";
import { RiLock2Line } from "react-icons/ri";
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

export default function LoginUpdatePassword(
  props: PageProps<
    Extract<KcContext, { pageId: "login-update-password.ftl" }>,
    I18n
  >
) {
  const { kcContext, i18n, doUseDefaultCss, Template, classes } = props;

  const [passwordVisible, setPasswordVisible] = useState(false);

  const { getClassName } = useGetClassName({
    doUseDefaultCss,
    classes,
  });

  const { msg, msgStr } = i18n;

  const { url, messagesPerField, isAppInitiatedAction, username } = kcContext;

  return (
    <Template
      {...{ kcContext, i18n, doUseDefaultCss, classes }}
      headerNode={null}
      headerTitle={msgStr("updatePasswordTitle")}
      formWidth="50%"
      bgImgWidth="50%"
      bgImg={bgImg} 
      bgImgHeight="968px"    
    >
      <form
        id="kc-passwd-update-form"
        className={getClassName("kcFormClass")}
        action={url.loginAction}
        method="post"
      >
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          readOnly={true}
          autoComplete="username"
          style={{ display: "none" }}
        />
        <input
          type="password"
          id="password"
          name="password"
          autoComplete="current-password"
          style={{ display: "none" }}
        />

        <div
          className={clsx(
            getClassName("kcFormGroupClass"),
            messagesPerField.printIfExists(
              "password",
              getClassName("kcFormGroupErrorClass")
            )
          )}
        >
          <label
            htmlFor="password-new"
            className={getClassName("kcLabelClass")}
          >
            {msg("passwordNew")}
          </label>

          <div className="input-container">
            <RiLock2Line className="icon" />
            <input
              placeholder="New password"
              type={passwordVisible ? "text" : "password"}
              id="password-new"
              name="password-new"
              autoFocus
              autoComplete="new-password"
              className={getClassName("kcInputClass")}
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
              type={passwordVisible ? "text" : "password"}
              placeholder="Confirm password"
              id="password-confirm"
              name="password-confirm"
              autoComplete="new-password"
              className={getClassName("kcInputClass")}
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

        <div className={getClassName("kcFormGroupClass")}>
          <div
            id="kc-form-options"
            className={getClassName("kcFormOptionsClass")}
          >
            <div className={getClassName("kcFormOptionsWrapperClass")}>
              {isAppInitiatedAction && (
                <div className="checkbox">
                  <label>
                    <input
                      type="checkbox"
                      id="logout-sessions"
                      name="logout-sessions"
                      value="on"
                      checked
                    />
                    {msgStr("logoutOtherSessions")}
                  </label>
                </div>
              )}
            </div>
          </div>

          <div
            id="kc-form-buttons"
            className={getClassName("kcFormButtonsClass")}
          >
            {isAppInitiatedAction ? (
              <>
                <input
                  className={clsx(
                    getClassName("kcButtonClass"),
                    getClassName("kcButtonLargeClass")
                  )}
                  type="submit"
                  value={msgStr("doSubmit")}
                />
                <button
                  className={clsx(
                    getClassName("kcButtonClass"),
                    getClassName("kcButtonDefaultClass"),
                    getClassName("kcButtonLargeClass")
                  )}
                  type="submit"
                  name="cancel-aia"
                  value="true"
                >
                  {msg("doCancel")}
                </button>
              </>
            ) : (
              <input
                className={clsx(
                  getClassName("kcButtonClass"),
                  getClassName("kcButtonBlockClass"),
                  getClassName("kcButtonLargeClass")
                )}
                type="submit"
                value={msgStr("doSubmit")}
              />
            )}
          </div>
        </div>
      </form>
    </Template>
  );
}
