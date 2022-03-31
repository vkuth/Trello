import { ValidationPipe, HttpStatus } from "@nestjs/common";

const PASSWORD_RULE=/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/;
const PASSWORD_RULE_MESSAGE='Passwords must be at least 8 characters, including a number, an uppercase letter, and a lowercase letter.'
const VALIDTION_PIPE=new ValidationPipe({errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY})

export const REGEX={
    PASSWORD_RULE,
}

export const MESSAGES={
    PASSWORD_RULE_MESSAGE,
}

export const SETTINGS={
    VALIDTION_PIPE,
}