import { assert } from "keycloakify/tools/assert";
import type { PageProps } from "keycloakify/login/pages/PageProps";
import type { KcContext } from "../kcContext";
import type { I18n } from "../i18n";
import bgImg from "../assets/Illustration2.png";

export default function Info(
  props: PageProps<Extract<KcContext, { pageId: "info.ftl" }>, I18n>
) {
  const { kcContext, i18n, doUseDefaultCss, Template, classes } = props;

  const { msgStr, msg } = i18n;

  assert(kcContext.message !== undefined);

  const {
    messageHeader,
    message,
    requiredActions,
    skipLink,
    pageRedirectUri,
    actionUri,
    client,
  } = kcContext;

  return (
    <Template
      {...{ kcContext, i18n, doUseDefaultCss, classes }}
      displayMessage={false}
      headerNode={null}
      headerTitle={
        messageHeader !== undefined ? (
          <>{messageHeader}</>
        ) : (
          <>{message.summary}</>
        )
      }
      bgImg={bgImg}
      formWidth="40%"
      bgImgWidth="60%"
      bgImgHeight="968px"
    >
      <div id="kc-info-message">
        <p className="instruction">
          {message.summary}
          <br/><br/>

          {requiredActions !== undefined && (
            <b>
              {requiredActions
                .map((requiredAction) =>
                  msgStr(`requiredAction.${requiredAction}` as const)
                )
                .join(",")}
            </b>
          )}
        </p>
        {!skipLink && pageRedirectUri !== undefined ? (
          <p>
            <a href={pageRedirectUri}>{msg("backToApplication")}</a>
          </p>
        ) : actionUri !== undefined ? (
          <p>
            <a className="sendBtn" href={actionUri}>{msg("proceedWithAction")}</a>
          </p>
        ) : (
          client.baseUrl !== undefined && (
            <p>
              <a href={client.baseUrl}>{msg("backToApplication")}</a>
            </p>
          )
        )}
      </div>
    </Template>
  );
}
