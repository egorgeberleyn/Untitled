// ejected using 'npx eject-keycloak-page'
import { useState, type FormEventHandler } from "react";
import { clsx } from "keycloakify/tools/clsx";
import { useConstCallback } from "keycloakify/tools/useConstCallback";
import type { PageProps } from "keycloakify/login/pages/PageProps";
import { useGetClassName } from "keycloakify/login/lib/useGetClassName";
import type { KcContext } from "../kcContext";
import type { I18n } from "../i18n";
import { RiLock2Line } from "react-icons/ri";
import {HiOutlineMail} from "react-icons/hi";
import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai";
import { Divider } from "@mui/material"
import bgImg from "../assets/Illustration.png";

export default function Login(props: PageProps<Extract<KcContext, { pageId: "login.ftl" }>, I18n>) {
    const { kcContext, i18n, doUseDefaultCss, Template, classes } = props;
    const [passwordVisible, setPasswordVisible] = useState(false);

    const { getClassName } = useGetClassName({
        doUseDefaultCss,
        classes
    });

    const { social, realm, url, usernameEditDisabled, login, auth, registrationDisabled } = kcContext;

    const { msg, msgStr } = i18n;

    const [isLoginButtonDisabled, setIsLoginButtonDisabled] = useState(false);

    const onSubmit = useConstCallback<FormEventHandler<HTMLFormElement>>(e => {
        e.preventDefault();

        setIsLoginButtonDisabled(true);

        const formElement = e.target as HTMLFormElement;

        //NOTE: Even if we login with email Keycloak expect username and password in
        //the POST request.
        formElement.querySelector("input[name='email']")?.setAttribute("name", "username");

        formElement.submit();
    });

    return (
        <Template
            {...{ kcContext, i18n, doUseDefaultCss, classes }}
            displayInfo={social.displayInfo}
            displayWide={realm.password && social.providers !== undefined}
            headerNode={null}
            infoNode={
                realm.password &&
                realm.registrationAllowed &&
                !registrationDisabled && (
                    <div id="kc-registration">
                        <span>
                            {msg("noAccount")}
                            <a tabIndex={6} href={url.registrationUrl}>
                                {msg("doRegister")}
                            </a>
                        </span>
                    </div>
                )
            }
            bgImg={bgImg}
            bgImgHeight="968px"
            bgImgWidth="50%"
            formWidth="50%" 
            headerSubtitle={msgStr("loginSubtitleHtml")}
            headerTitle={<>{msgStr("loginTitleHtml")}
            <span className="special-title">{msgStr("loginSpecialTitleHtml")}</span></>}
        >
            <div id="kc-form" className={clsx(realm.password && social.providers !== undefined && getClassName("kcContentWrapperClass"))}>
                <div
                    id="kc-form-wrapper"
                    className={clsx(
                        realm.password &&
                            social.providers && [getClassName("kcFormSocialAccountContentClass"), getClassName("kcFormSocialAccountClass")]
                    )}
                >
                    {realm.password && (
                        <form id="kc-form-login" onSubmit={onSubmit} action={url.loginAction} method="post">
                            <div className={getClassName("kcFormGroupClass")}>
                                {(() => {
                                    const label = !realm.loginWithEmailAllowed
                                        ? "username"
                                        : realm.registrationEmailAsUsername
                                        ? "email"
                                        : "usernameOrEmail";

                                    const autoCompleteHelper: typeof label = label === "usernameOrEmail" ? "username" : label;

                                    return (
                                        <>
                                            <label htmlFor={autoCompleteHelper} className={getClassName("kcLabelClass")}>
                                                {msg(label)}
                                            </label>
                                            <div className="input-container">                                              
                                                <HiOutlineMail className="icon"/>
                                                <input                                               
                                                    placeholder="Email"
                                                    tabIndex={1}
                                                    id={autoCompleteHelper}
                                                    className={getClassName("kcInputClass")}                                          
                                                    name={autoCompleteHelper}
                                                    defaultValue={login.username ?? ""}
                                                    type="text"
                                                    {...(usernameEditDisabled
                                                        ? { "disabled": true }
                                                        : {
                                                            "autoFocus": true,
                                                            "autoComplete": "off"
                                                        })}
                                                />              
                                            </div>                            
                                        </>
                                    );
                                })()}
                            </div>
                            <div className={getClassName("kcFormGroupClass")}>
                                <label htmlFor="password" className={getClassName("kcLabelClass")}>
                                    {msg("password")}
                                </label>
                                <div className="input-container">
                                    <RiLock2Line className="icon"/>
                                    <input
                                        placeholder="Password"
                                        tabIndex={2}
                                        id="password"
                                        className={getClassName("kcInputClass")}
                                        name="password"
                                        type={passwordVisible ? "text" : "password"}
                                        autoComplete="off"
                                    />
                                    {passwordVisible 
                                        ? <AiOutlineEye className="passwordEye" onClick={() => setPasswordVisible(false)}/> 
                                        : <AiOutlineEyeInvisible className="passwordEye" onClick={() => setPasswordVisible(true)}/>}
                                </div>                               
                            </div>
                            <div className={clsx(getClassName("kcFormGroupClass"), getClassName("kcFormSettingClass"))}>
                                <div id="kc-form-options">
                                    {realm.rememberMe && !usernameEditDisabled && (
                                        <div className="checkbox">
                                            <label className="checkboxLabel">
                                                <input
                                                    tabIndex={3}
                                                    id="rememberMe"
                                                    name="rememberMe"
                                                    type="checkbox"
                                                    {...(login.rememberMe
                                                        ? {
                                                              "checked": true
                                                          }
                                                        : {})}
                                                />
                                                {msg("rememberMe")}
                                            </label>
                                        </div>
                                    )}
                                </div>
                                <div className={getClassName("kcFormOptionsWrapperClass")}>
                                    {realm.resetPasswordAllowed && (
                                        <span>
                                            <a tabIndex={5} href={url.loginResetCredentialsUrl}>
                                                {msg("doForgotPassword")}
                                            </a>
                                        </span>
                                    )}
                                </div>
                            </div>
                            <div id="kc-form-buttons" className={getClassName("kcFormGroupClass")}>
                                <input
                                    type="hidden"
                                    id="id-hidden-input"
                                    name="credentialId"
                                    {...(auth?.selectedCredential !== undefined
                                        ? {
                                              "value": auth.selectedCredential
                                          }
                                        : {})}
                                />
                                <input
                                    tabIndex={4}
                                    className={clsx(
                                        getClassName("kcButtonClass"),                                        
                                        getClassName("kcButtonBlockClass"),
                                        getClassName("kcButtonLargeClass")
                                    )}
                                    name="login"
                                    id="kc-login"
                                    type="submit"
                                    value={msgStr("doLogIn")}
                                    disabled={isLoginButtonDisabled}
                                />
                            </div>
                        </form>
                    )}
                    <Divider sx={{"&::before, &::after": {borderColor: "#686B6E"}, color: '#686B6E', mt: '30px' }}>
                        or continue with
                    </Divider>
                </div>

                

                {realm.password && social.providers !== undefined && (
                    <div
                        id="kc-social-providers"
                        className={clsx(getClassName("kcFormSocialAccountContentClass"), getClassName("kcFormSocialAccountClass"))}
                    >
                        <ul
                            className={clsx(
                                getClassName("kcFormSocialAccountListClass"),
                                social.providers.length > 1 && getClassName("kcFormSocialAccountDoubleListClass")
                            )}
                        >                      
                            {social.providers.map(p => (
                                <li key={p.providerId} className={getClassName("kcFormSocialAccountListLinkClass")}>                                
                                    <a href={p.loginUrl} id={`zocial-${p.alias}`} className={`zocial ${p.providerId}`}>
                                        <span>{p.displayName}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </Template>
    );
}
