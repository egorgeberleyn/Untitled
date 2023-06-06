import type { PageProps } from "keycloakify/login/pages/PageProps";
import type { KcContext } from "../kcContext";
import type { I18n } from "../i18n";
import bgImg from "../assets/Illustration2.png";

export default function Error(
  props: PageProps<Extract<KcContext, { pageId: "error.ftl" }>, I18n>
) {
  const { kcContext, i18n, doUseDefaultCss, Template, classes } = props;

  const { message, client } = kcContext;

  const { msg } = i18n;

  return (
    <Template
      {...{ kcContext, i18n, doUseDefaultCss, classes }}
      displayMessage={false}
      headerNode={null}
      headerTitle={msg("errorTitle")}
      bgImg={bgImg}
      formWidth="40%"
      bgImgWidth="60%"
      bgImgHeight="968px"
    >
      <div id="kc-error-message">
        <p className="instruction">{message.summary}</p>
        {client !== undefined && client.baseUrl !== undefined && (
          <>
            <br />
            <p>
              <a
                id="backToApplication"
                href={client.baseUrl}
                className="sendBtn"
              >
                {msg("backToApplication")}
              </a>
            </p>
          </>
        )}
      </div>
    </Template>
  );
}
