import { clsx } from "keycloakify/tools/clsx";
import type { PageProps } from "keycloakify/login/pages/PageProps";
import { useGetClassName } from "keycloakify/login/lib/useGetClassName";
import type { KcContext } from "../kcContext";
import type { I18n } from "../i18n";
import bgImg from "../assets/Illustration.png";
import { HiOutlineMail } from "react-icons/hi";

export default function LoginResetPassword(
  props: PageProps<
    Extract<KcContext, { pageId: "login-reset-password.ftl" }>,
    I18n
  >
) {
  const { kcContext, i18n, doUseDefaultCss, Template, classes } = props;

  const { getClassName } = useGetClassName({
    doUseDefaultCss,
    classes,
  });

  const { url, realm, auth } = kcContext;

  const { msg, msgStr } = i18n;

  return (
    <Template
      {...{ kcContext, i18n, doUseDefaultCss, classes }}
      displayMessage={false}
      headerNode={null}
      infoNode={msg("emailInstruction")}
      formWidth="50%"
      bgImgWidth="50%"
      bgImg={bgImg}
      bgImgHeight="968px"
      headerTitle={msgStr("resetPasswordTitleHtml")}
      headerSubtitle={msgStr("resetPasswordSubtitleHtml")}
    >
      <form
        id="kc-reset-password-form"
        className={getClassName("kcFormClass")}
        action={url.loginAction}
        method="post"
      >
        <div className={getClassName("kcFormGroupClass")}>
          <label htmlFor="username" className={getClassName("kcLabelClass")}>
            {!realm.loginWithEmailAllowed
              ? msg("username")
              : !realm.registrationEmailAsUsername
              ? msg("usernameOrEmail")
              : msg("email")}
          </label>

          <div className="input-container">
            <HiOutlineMail className="icon"/>
            <input
              placeholder="Username or Email"
              type="text"
              id="username"
              name="username"
              className={getClassName("kcInputClass")}
              autoFocus
              defaultValue={
                auth !== undefined && auth.showUsername
                  ? auth.attemptedUsername
                  : undefined
              }
            />
          </div>
        </div>
        <div
          className={clsx(
            getClassName("kcFormGroupClass"),
            getClassName("kcFormSettingClass")
          )}
        >
          <div
            id="kc-form-options"
            className={getClassName("kcFormOptionsClass")}
          >
            <div className={getClassName("kcFormOptionsWrapperClass")}>
              <span style={{ textAlign: "end", marginTop: "20px" }}>
                <a className="kcBackToLoginBtn" href={url.loginUrl}>
                  {msgStr("backToLogin")}
                </a>
              </span>
            </div>
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
              value={msgStr("doSubmit")}
            />
          </div>
        </div>
      </form>
    </Template>
  );
}
