import { createUseI18n } from "keycloakify/login";

export const { useI18n } = createUseI18n({
  // NOTE: Here you can override the default i18n messages
  // or define new ones that, for example, you would have
  // defined in the Keycloak admin UI for UserProfile
  // https://user-images.githubusercontent.com/6702424/182050652-522b6fe6-8ee5-49df-aca3-dba2d33f24a5.png
  en: {
    alphanumericalCharsOnly: "Only alphanumerical characters",
    gender: "Gender",
    // Here we overwrite the default english value for the message "doForgotPassword"
    doForgotPassword: "Forgot Password?",
    doLogIn: "Log In",
    doRegister: "Sign Up",
    noAccount: "Don’t have an account?",
    doRegisterBtn: "Create account",
    backToLogin: "Back to Login",
    backToApplication: "Back to application",

    loginTitleHtml: "Let's get",
    loginSubtitleHtml: "Log in to Untitled to start creating magic.",
    loginSpecialTitleHtml: " creative!",
    registerTitleHtml: "Connect and bring your creative ideas to life.",
    resetPasswordTitleHtml: "Perform a password reset",
    resetPasswordSubtitleHtml: "To continue his research",

    emailVerifyInstruction1:
      "An email with instructions to verify your email address has been sent to your address",
    updatePasswordTitle: "Update your password",

    doSubmit: "Submit",

    proceedWithAction: "Click here to proceed",
  },

  ru: {
    alphanumericalCharsOnly: "Только буквенно-цифровые символы",
    gender: "Пол",
    doForgotPassword: "Забыли пароль?",
    doLogIn: "Войти",
    doRegister: "Зарегистрироваться",
    noAccount: "У вас нет аккаунта?",
    doRegisterBtn: "Создать аккаунт",
    backToLogin: "Вернуться к логину",
    backToApplication: "Вернуться к приложению",

    loginTitleHtml: "Давай скорее",
    loginSubtitleHtml: "Заходи в Untitled и начинай создавать магию",
    loginSpecialTitleHtml: "создавать",
    registerTitleHtml: "Подключайся и воплощай свои творческие идеи в жизнь.",
    resetPasswordTitleHtml: "Выполните сброс пароля",
    resetPasswordSubtitleHtml: "Чтобы продолжить свои исследования",

    emailVerifyInstruction1:
      "На ваш адрес было отправлено письмо с инструкциями по проверке вашей электронной почты",
    updatePasswordTitle: "Обновите свой пароль",

    doSubmit: "Подтвердить",

    proceedWithAction: "Нажмите здесь, чтобы продолжить",
  },
});

export type I18n = NonNullable<ReturnType<typeof useI18n>>;
