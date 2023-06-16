import { PageProps } from "keycloak-theme/PageProps";
import type { KcContext } from "../kcContext";
import type { I18n } from "../i18n";
import bgImg from "../assets/Illustration2.png";

export default function LoginVerifyEmail(
  props: PageProps<
    Extract<KcContext, { pageId: "login-verify-email.ftl" }>,
    I18n
  >
) {
  const { kcContext, i18n, doUseDefaultCss, Template, classes } = props;

  const { msg, msgStr } = i18n;

  const { url, user } = kcContext;

  return (
    <Template
      {...{ kcContext, i18n, doUseDefaultCss, classes }}
      displayMessage={false}
      headerNode={null}
      formWidth="40%"
      bgImgWidth="60%"
      bgImgHeight="968px"
      headerTitle="Verify your email"
      headerSubtitle="And start your research"
      bgImg={bgImg}
    >
      <div className="instruction-wrapper">
        <p className="instruction">
          {msg("emailVerifyInstruction1")}
          &nbsp;&nbsp;
          <span className="email">{user?.email ?? ""}</span>
        </p>

        <p className="instruction">
          {msgStr("emailVerifyInstruction2")}
          <br />
          <br />
          <a href={url.loginAction} className="sendBtn">
            {msg("doClickHere")}
          </a>
          &nbsp;&nbsp;&nbsp;&nbsp;
          {msgStr("emailVerifyInstruction3")}
        </p>
      </div>
    </Template>
  );
}
