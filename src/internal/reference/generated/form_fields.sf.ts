/**
 * This file was auto-generated by openapi-typescript and ts-morph.
 * Do not make direct changes to the file.
 */

export interface paths {
    readonly "/form-fields": {
        readonly parameters: {
            readonly query?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        /**
         * Get Form Fields
         * @description Gets form fields.
         *
         *     > #### Note
         *     > * Substitute your storefront domain for `yourstore.example.com`.
         *     > * The Send a Test Request feature is not currently supported for this endpoint.
         */
        readonly get: operations["getFormFields"];
    };
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        /** @description Group of form field groups */
        readonly FormFieldGroups: {
            readonly customerAccount?: components["schemas"]["FormFields"];
            readonly shippingAddress?: components["schemas"]["FormFields"];
            readonly billingAddress?: components["schemas"]["FormFields"];
        };
        /** @description List of form fields for the group */
        readonly FormFields: readonly components["schemas"]["FormField"][];
        /** @description Form Field */
        readonly FormField: {
            /** @description Field unique ID */
            readonly id?: string;
            /** @description Field name */
            readonly name?: string;
            /** @description Whether this is a custom field or system built-in field. */
            readonly custom?: boolean;
            /** @description User-friendly label */
            readonly label?: string;
            /** @description Whether this field is required or not */
            readonly required?: boolean;
            /** @description The field unique ID */
            readonly default?: string;
            /**
             * @description Type of the value hold by the field
             * @enum {string}
             */
            readonly type?: "integer" | "string" | "array" | "date";
            /**
             * @description Type of the field
             * @enum {string}
             */
            readonly fieldType?: "checkbox" | "text" | "date" | "multiline" | "radio" | "dropdown";
            /** @description The minimum valid value for the field (integer and date type only). */
            readonly min?: string;
            /** @description The minimum valid value for the field (integer and date type only). */
            readonly max?: string;
            /** @description The maximum length for the value (string type only). */
            readonly maxLength?: number;
            /** @description Whether the field represents a password field (password field type only). */
            readonly secret?: boolean;
            /** @description Password requirements (password field type only). */
            readonly requirements?: {
                /**
                 * @description Regex expression for the required alpha characters.
                 * @example [A-Za-z]
                 */
                readonly alpha?: string;
                /**
                 * @description Description for the password requirements.
                 * @example Passwords must be at least 7 characters and contain both alphabetic and numeric characters.
                 */
                readonly description?: string;
                /** @description Minimum password length. */
                readonly minlength?: number;
                /**
                 * @description Regex expression for the required numeric characters.
                 * @example [0-9]
                 */
                readonly numeric?: string;
            };
            /** @description Extra data for radio, dropdown and checkbox field types. */
            readonly options?: {
                /** @description Placeholder text for dropdown field type. */
                readonly helperLabel?: string;
                /** @description List of possible values for this field. */
                readonly items?: readonly {
                    readonly label?: string;
                    readonly value?: string;
                }[];
            };
        };
    };
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export interface operations {
    readonly getFormFields: {
        readonly parameters: {
            readonly query?: {
                readonly filter?: readonly ("customerAccount" | "shippingAddress" | "billingAddress")[];
            };
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly requestBody?: never;
        readonly responses: {
            /** @description Returns an object with form fields groups. */
            readonly 200: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["FormFieldGroups"];
                };
            };
        };
    };
}
