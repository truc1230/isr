module.exports = {
    CONTINUE: { status: 100, code: 100, message: 'CONTINUE' },
    SWITCHING_PROTOCOLS: { status: 101, code: 101, message: 'SWITCHING_PROTOCOLS' },
    OK: { status: 200, code: 200, message: 'OK' },
    CREATED: { status: 201, code: 201, message: 'CREATED' },
    ACCEPTED: { status: 202, code: 202, message: 'ACCEPTED' },
    NON_AUTHORITATIVE_INFORMATION: { status: 203, code: 203, message: 'NON_AUTHORITATIVE_INFORMATION' },
    NO_CONTENT: { status: 204, code: 204, message: 'NO_CONTENT' },
    RESET_CONTENT: { status: 205, code: 205, message: 'RESET_CONTENT' },
    PARTIAL_CONTENT: { status: 206, code: 206, message: 'PARTIAL_CONTENT' },
    MULTIPLE_CHOICES: { status: 300, code: 300, message: 'MULTIPLE_CHOICES' },
    MOVED_PERMANENTLY: { status: 301, code: 301, message: 'MOVED_PERMANENTLY' },
    FOUND: { status: 302, code: 302, message: 'FOUND' },
    SEE_OTHER: { status: 303, code: 303, message: 'SEE_OTHER' },
    NOT_MODIFIED: { status: 304, code: 304, message: 'NOT_MODIFIED' },
    USE_PROXY: { status: 305, code: 305, message: 'USE_PROXY' },
    TEMPORARY_REDIRECT: { status: 307, code: 307, message: 'TEMPORARY_REDIRECT' },
    BAD_REQUEST: { status: 400, code: 400, message: 'BAD_REQUEST' },
    UNAUTHORIZED: { status: 401, code: 401, message: 'UNAUTHORIZED' },
    PAYMENT_REQUIRED: { status: 402, code: 402, message: 'PAYMENT_REQUIRED' },
    FORBIDDEN: { status: 403, code: 403, message: 'FORBIDDEN' },
    NOT_FOUND: { status: 404, code: 404, message: 'NOT_FOUND' },
    METHOD_NOT_ALLOWED: { status: 405, code: 405, message: 'METHOD_NOT_ALLOWED' },
    NOT_ACCEPTABLE: { status: 406, code: 406, message: 'NOT_ACCEPTABLE' },
    PROXY_AUTHENTICATION_REQUIRED: { status: 407, code: 407, message: 'PROXY_AUTHENTICATION_REQUIRED' },
    REQUEST_TIMEOUT: { status: 408, code: 408, message: 'REQUEST_TIMEOUT' },
    CONFLICT: { status: 409, code: 409, message: 'CONFLICT' },
    GONE: { status: 410, code: 410, message: 'GONE' },
    LENGTH_REQUIRED: { status: 411, code: 411, message: 'LENGTH_REQUIRED' },
    PRECONDITION_FAILED: { status: 412, code: 412, message: 'PRECONDITION_FAILED' },
    REQUEST_ENTITY_TOO_LARGE: { status: 413, code: 413, message: 'REQUEST_ENTITY_TOO_LARGE' },
    REQUEST_URI_TOO_LONG: { status: 414, code: 414, message: 'REQUEST_URI_TOO_LONG' },
    UNSUPPORTED_MEDIA_TYPE: { status: 415, code: 415, message: 'UNSUPPORTED_MEDIA_TYPE' },
    REQUESTED_RANGE_NOT_SATISFIABLE: {
        status: 416,
        code: 416,
        message: 'REQUESTED_RANGE_NOT_SATISFIABLE',
        description: '',
    },
    EXPECTATION_FAILED: { status: 417, code: 417, message: 'EXPECTATION_FAILED' },
    UNPROCESSABLE_ENTITY: { status: 422, code: 422, message: 'UNPROCESSABLE_ENTITY' },
    TOO_MANY_REQUESTS: { status: 429, code: 429, message: 'TOO_MANY_REQUESTS' },
    INTERNAL_SERVER_ERROR: { status: 500, code: 500, message: 'INTERNAL_SERVER_ERROR' },
    NOT_IMPLEMENTED: { status: 501, code: 501, message: 'NOT_IMPLEMENTED' },
    BAD_GATEWAY: { status: 502, code: 502, message: 'BAD_GATEWAY' },
    SERVICE_UNAVAILABLE: { status: 503, code: 503, message: 'SERVICE_UNAVAILABLE' },
    GATEWAY_TIMEOUT: { status: 504, code: 504, message: 'GATEWAY_TIMEOUT' },

    // For spot
    UNKNOWN: { status: 400, code: 1000, message: 'UNKNOWN' },
    INVALID_ORDER_TYPE: { status: 400, code: 1110, message: 'INVALID_ORDER_TYPE' },
    INVALID_SIDE: { status: 400, code: 1111, message: 'INVALID_SIDE' },
    BAD_SYMBOL: { status: 400, code: 1112, message: 'BAD_SYMBOL' },
    NO_SUCH_ORDER: { status: 400, code: 2013, message: 'NO_SUCH_ORDER' },
    TRADE_NOT_ALLOWED: { status: 400, code: 3004, message: 'TRADE_NOT_ALLOWED' },
    BALANCE_NOT_ENOUGH: { status: 400, code: 6000, message: 'BALANCE_NOT_ENOUGH' },

    INVALID_USER: { status: 400, code: 6000, message: 'INVALID_USER' },
    INVALID_INPUT: { status: 400, code: 6000, message: 'INVALID_INPUT' },

    NOT_FOUND_ORDER: { status: 400, code: 6101, message: 'NOT_FOUND_ORDER' },
    NOT_ENOUGH_BASE_ASSET: { status: 400, code: 6102, message: 'NOT_ENOUGH_BASE_ASSET' },
    NOT_ENOUGH_QUOTE_ASSET: { status: 400, code: 6103, message: 'NOT_ENOUGH_QUOTE_ASSET' },

    BROKER_ERROR: { status: 400, code: 6104, message: 'BROKER_ERROR' },
    INSTRUMENT_NOT_LISTED_FOR_TRADING_YET: { status: 400, code: 6105, message: 'INSTRUMENT_NOT_LISTED_FOR_TRADING_YET' },

    NOT_ENOUGH_FEE_ASSET: { status: 400, code: 6106, message: 'NOT_ENOUGH_FEE_ASSET' },
    STOP_LIMIT_INVALID_STOP_PRICE: { status: 400, code: 6107, message: 'STOP_LIMIT_INVALID_STOP_PRICE' },
    STOP_LIMIT_UNKNOWN_LAST_PRICE: { status: 400, code: 6108, message: 'STOP_LIMIT_UNKNOWN_LAST_PRICE' },
    STOP_LIMIT_INVALID_MIN_TOTAL: { status: 400, code: 6109, message: 'STOP_LIMIT_INVALID_MIN_TOTAL' },
    ORDER_TYPE_NOT_SUPPORT: { status: 400, code: 6110, message: 'ORDER_TYPE_NOT_SUPPORT' },

    INVALID_REQUEST_ASSET: { status: 400, code: 6200, message: 'INVALID_REQUEST_ASSET' },
    INVALID_SWAP_REQUEST_ID: { status: 400, code: 6201, message: 'INVALID_SWAP_REQUEST_ID' },
    PRICE_CHANGED: { status: 400, code: 6202, message: 'PRICE_CHANGED' },
    PRICE_FILTER: {
        status: 400,
        code: 9000,
        message: 'PRICE_FILTER',
        description: 'price is too high, too low, and/or not following the tick size rule for the symbol.',
    },
    PERCENT_PRICE: {
        status: 400,
        code: 9001,
        message: 'PERCENT_PRICE',
        description: 'price is X% too high or X% too low from the average weighted price over the last Y minutes.',
    },
    LOT_SIZE: {
        status: 400,
        code: 9002,
        message: 'LOT_SIZE',
        description: 'quantity is too high, too low, and/or not following the step size rule for the symbol.',
    },
    MIN_NOTIONAL: {
        status: 400,
        code: 9003,
        message: 'MIN_NOTIONAL',
        description: 'price * quantity is too low to be a valid order for the symbol.',
    },
    ICEBERG_PARTS: {
        status: 400,
        code: 9004,
        message: 'ICEBERG_PARTS',
        description: 'ICEBERG order would break into too many parts; icebergQty is too small.',
    },
    MARKET_LOT_SIZE: {
        status: 400,
        code: 9005,
        message: 'MARKET_LOT_SIZE',
        description: "MARKET order's quantity is too high, too low, and/or not following the step size rule for the symbol.",
    },
    MAX_POSITION: {
        status: 400,
        code: 9006,
        message: 'MAX_POSITION',
        description: "The account's position has reached the maximum defined limit.",
    },
    MAX_NUM_ORDERS: {
        status: 400,
        code: 9007,
        message: 'MAX_NUM_ORDERS',
        description: 'Account has too many open orders on the symbol.',
    },
    MAX_ALGO_ORDERS: {
        status: 400,
        code: 9008,
        message: 'MAX_ALGO_ORDERS',
        description: 'Account has too many open stop loss and/or take profit orders on the symbol.',
    },
    MAX_NUM_ICEBERG_ORDERS: {
        status: 400,
        code: 9009,
        message: 'MAX_NUM_ICEBERG_ORDERS',
        description: 'Account has too many open iceberg orders on the symbol.',
    },
    EXCHANGE_MAX_NUM_ORDERS: {
        status: 400,
        code: 9010,
        message: 'EXCHANGE_MAX_NUM_ORDERS',
        description: 'Account has too many open orders on the exchange.',
    },
    EXCHANGE_MAX_ALGO_ORDERS: {
        status: 400,
        code: 9011,
        message: 'EXCHANGE_MAX_ALGO_ORDERS',
        description: 'Account has too many open stop loss and/or take profit orders on the exchange.',
    },
    PHONE_NUMBER_EXISTED: {
        status: 'error',
        code: 8000,
        message: 'PHONE_EXISTED',
        description: 'Phone number is existed.',
    },
    PHONE_NUMBER_INVALID: {
        status: 400,
        code: 8002,
        message: 'PHONE_INVALID',
        description: 'Your phone number is invalid.',
    },
    SECURITY_CHECKPASS_REQUIRED: {
        status: 400,
        code: 8004,
        message: 'SECURITY_CHECKPASS_REQUIRED',
        description: 'Cannot take action at the moment, please try again.',
    },
    SECURITY_CHECKPASS_NOT_FOUND: {
        status: 400,
        code: 8005,
        message: 'SECURITY_CHECKPASS_NOT_FOUND',
        description: 'Cannot send verification code at the moment, please try again.',
    },
    SECURITY_CHECKPASS_EXPIRED: {
        status: 400,
        code: 8006,
        message: 'SECURITY_CHECKPASS_EXPIRED',
        description: 'The action is expired, please try again.',
    },
    SECURITY_CHECKPASS_TOO_MANY_SEND_REQUEST: {
        status: 400,
        code: 8007,
        message: 'SECURITY_CHECKPASS_TOO_MANY_SEND_REQUEST',
        description: 'You are requesting too many time, please try again.',
    },
    SECURITY_CHECKPASS_METHOD_NOT_SUPPORTED: {
        status: 400,
        code: 8008,
        message: 'SECURITY_CHECKPASS_METHOD_NOT_SUPPORTED',
        description: 'OTP requesting method is not valid.',
    },
    SECURITY_CHECKPASS_INVALID_OTP: {
        status: 400,
        code: 8011,
        message: 'SECURITY_CHECKPASS_INVALID_OTP',
        description: 'OTP codes does not correct, please try again.',
    },
    KYC_INVALID_COUNTRY: {
        status: 400,
        code: 2001,
        message: 'KYC_INVALID_COUNTRY',
        description: 'Country is not valid, please try again.',
    },
    KYC_INVALID_IMAGE: {
        status: 400,
        code: 2002,
        message: 'KYC_INVALID_IMAGE',
        description: 'Image is not valid, please try again.',
    },
    KYC_INVALID_IDENTITY_NUMBER: {
        status: 400,
        code: 2003,
        message: 'KYC_INVALID_IDENTITY_NUMBER',
        description: 'Identity number is invalid, please try again.',
    },
    KYC_EXIST_IDENTITY_NUMBER: {
        status: 400,
        code: 2004,
        message: 'KYC_EXIST_IDENTITY_NUMBER',
        description: 'Identity number is existed, please try again.',
    },
    KYC_EXIST_BANK_ACCOUNT: {
        status: 400,
        code: 2005,
        message: 'KYC_EXIST_BANK_ACCOUNT',
        description: 'Bank account is existed, please try again.',
    },
    KYC_CANNOT_MODIFY_AFTER_APPROVED: {
        status: 400,
        code: 2006,
        message: 'KYC_CANNOT_MODIFY_AFTER_APPROVED',
        description: 'You cannot modify your KYC data after it was approved.',
    },
    KYC_IDENTITY_IS_MISSING: {
        status: 400,
        code: 2007,
        message: 'KYC_IDENTITY_IS_MISSING',
        description: 'Identity number is missing, please try again.',
    },
    KYC_DOCUMENTS_IS_MISSING: {
        status: 400,
        code: 2008,
        message: 'KYC_DOCUMENTS_IS_MISSING',
        description: 'Images are missing, please try again.',
    },
    KYC_PENDING_APPROVAL: {
        status: 400,
        code: 2009,
        message: 'KYC_PENDING_APPROVAL',
        description: 'Your account are pending to be approved.',
    },
    KYC_INVALID_BANK_ACCOUNT: {
        status: 400,
        code: 2010,
        message: 'KYC_INVALID_BANK_ACCOUNT',
        description: 'Bank account is invalid, please try again.',
    },
    CHANGE_PASSWORD_MISSING_CURRENT_PASSWORD: {
        status: 400,
        code: 8300,
        message: 'CHANGE_PASSWORD_MISSING_CURRENT_PASSWORD',
        description: 'Current password is missing, please try again.',
    },
    CHANGE_PASSWORD_CURRENT_PASSWORD_INVALID: {
        status: 400,
        code: 8301,
        message: 'CHANGE_PASSWORD_CURRENT_PASSWORD_INVALID',
        description: 'Current password is invalid, please try again.',
    },
    CHANGE_PASSWORD_SAME_PASSWORD: {
        status: 400,
        code: 8302,
        message: 'CHANGE_PASSWORD_SAME_PASSWORD',
        description: 'New password must not be the same as current password.',
    },
    CHANGE_PASSWORD_NEW_PASSWORD_INVALID: {
        status: 400,
        code: 8303,
        message: 'CHANGE_PASSWORD_NEW_PASSWORD_INVALID',
        description: 'New password is invalid, please try again.',
    },
    // Set email
    USER_EMAIL_EXISTED: {
        status: 400,
        code: 8304,
        message: 'USER_EMAIL_EXISTED',
        description: 'Email is existed.',
    },
    USER_EMAIL_INVALID: {
        status: 400,
        code: 8305,
        message: 'USER_EMAIL_INVALID',
        description: 'Email is invalid.',
    },
    // Set avatar
    USER_AVATAR_INVALID: {
        status: 400,
        code: 8306,
        message: 'USER_AVATAR_INVALID',
        description: 'Avatar is invalid.',
    },
    // TOTP
    TOTP_ALREADY_SET: {
        status: 400,
        code: 8400,
        message: 'TOTP_ALREADY_SET',
        description: 'Google Authenticator has already been enabled.',
    },
    TOTP_INVALID: {
        status: 400,
        code: 8401,
        message: 'TOTP_INVALID',
        description: 'TOTP is invalid.',
    },
    TOTP_NOT_ENABLED: {
        status: 400,
        code: 8402,
        message: 'TOTP_NOT_ENABLED',
        description: 'Google Authenticator hasn\'t been enabled.',
    },
    // Username
    USERNAME_EXISTED: {
        status: 400,
        code: 8306,
        message: 'USERNAME_EXISTED',
        description: 'Username is existed.',
    },
    USERNAME_INVALID: {
        status: 400,
        code: 8307,
        message: 'USERNAME_INVALID',
        description: 'Username is invalid.',
    },
    USERNAME_ALREADY_SET: {
        status: 400,
        code: 8308,
        message: 'USERNAME_ALREADY_SET',
        description: 'Username has already been set.',
    },
    REF_EDIT_TIME_TOO_CLOSE: {
        status: 400,
        code: 8320,
        message: 'REF_EDIT_TIME_TOO_CLOSE',
        description: 'Time between each ref edit is too close.',
    },
    REF_EDIT_REF_USER_NOT_FOUND: {
        status:
        400,
        code: 8321,
        message: 'REF_EDIT_REF_USER_NOT_FOUND',
        description: 'The referrer does not exist.',
    },
    REF_EDIT_SAME_USER: {
        status: 400,
        code: 8322,
        message: 'REF_EDIT_SAME_USER',
        description: 'You cannot use your own referral code.',
    },
    REF_EDIT_CIRCLE: {
        status: 400,
        code: 8323,
        message: 'REF_EDIT_CIRCLE',
        description: 'You cannot set referral code of the user whose their referrer is you.',
    },
    FILTER_MIN_AMOUNT: {
        status: 400,
        code: 9200,
        message: 'FILTER_MIN_AMOUNT',
        description: 'The amount of ATS is not enough to be staked.',
    },
    FILTER_MAX_AMOUNT: {
        status: 400,
        code: 9201,
        message: 'FILTER_MAX_AMOUNT',
        description: 'The amount of ATS is too much to be staked.',
    },
    BALANCE_INSUFFICIENT: {
        status: 400,
        code: 9202,
        message: 'BALANCE_INSUFFICIENT',
        description: 'Your balance is not enough.',
    },
    MAX_PENDING_ORDER_EXCEEDED: {
        status: 400,
        code: 9203,
        message: 'MAX_PENDING_ORDER_EXCEEDED',
        description: 'You are having too many pending stake order, please try later.',
    },
    IEO_BUY_BALANCE_INSUFFICIENT: {
        status: 400,
        code: 14100,
        message: 'IEO_BUY_BALANCE_INSUFFICIENT',
        description: 'Your balance is insufficient.',
    },
    IEO_PROJECT_NOT_FOUND: {
        status: 400,
        code: 14101,
        message: 'IEO_PROJECT_NOT_FOUND',
        description: 'IEO project not found, please try again.',
    },
    IEO_BUY_AMOUNT_INVALID: {
        status: 400,
        code: 14102,
        message: 'IEO_BUY_AMOUNT_INVALID',
        description: 'The buy amount is invalid, please try again.',
    },
    IEO_BUY_TIME_INVALID: {
        status: 400,
        code: 14103,
        message: 'IEO_BUY_TIME_INVALID',
        description: 'Project is not ongoing',
    },
    IEO_BUY_COMPLETED: {
        status: 400,
        code: 14104,
        message: 'IEO_BUY_COMPLETED',
        description: 'Project is completed',
    },
    IEO_BUY_USER_EXCEED_MAX_QTY: {
        status: 400,
        code: 14105,
        message: 'IEO_BUY_USER_EXCEED_MAX_QTY',
        description: 'Remaining qty is not enough',
    },
    POOL_STATUS_INVALID: {
        status: 400,
        code: 16001,
        message: 'POOL_STATUS_INVALID',
        description: 'Pool status is invalid',
    },
    CHARGE_TOO_LOW: {
        status: 400,
        code: 16002,
        message: 'CHARGE_TOO_LOW',
        description: 'The charge are lower than the minimum amount',
    },
    NOT_ENOUGH_ASSET: {
        status: 400,
        code: 16003,
        message: 'NOT_ENOUGH_ASSET',
        description: 'Remaining asset is not enough',
    },
    REACH_MAX_POOL: {
        status: 400,
        code: 16004,
        message: 'REACH_MAX_POOL',
        description: 'The earning pool is maxed',
    },
    WITHDRAW_TYPE_INVALID: {
        status: 400,
        code: 16005,
        message: 'WITHDRAW_TYPE_INVALID',
        description: 'Withdraw type is invalid',
    },
    POOL_ENDED: {
        status: 400,
        code: 16007,
        message: 'POOL_ENDED',
        description: 'Pool is ended',
    },
    POOL_NOT_START: {
        status: 400,
        code: 16008,
        message: 'POOL_NOT_START',
        description: 'Pool not start yet',
    },
    REACH_MAX_LIMIT_INDIVIDUAL: {
        status: 400,
        code: 16009,
        message: 'REACH_MAX_LIMIT_INDIVIDUAL',
        description: "Your deposit is exceeded your pool's slot",
    },
    MASTER_NOT_ENOUGH_BASE_ASSET: {
        status: 400,
        code: 16010,
        message: 'MASTER_NOT_ENOUGH_BASE_ASSET',
        description: 'The reward available balance is temporarily not enough',
    },
    WITHDRAW_LIMIT_PER_BANK_ACCOUNT: {
        status: 400,
        code: 10502,
        message: 'WITHDRAW_LIMIT_PER_BANK_ACCOUNT',
        description: 'Exceeds maximum amount per bank account',
    },
};
