/**
 * This file was auto-generated by openapi-typescript and ts-morph.
 * Do not make direct changes to the file.
 */

export interface paths {
    readonly "/customers/subscribers": {
        readonly parameters: {
            readonly query?: never;
            readonly header: {
                /** @description The [MIME type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) of the response body. */
                readonly Accept: components["parameters"]["Accept"];
            };
            readonly path?: never;
            readonly cookie?: never;
        };
        /**
         * Get Subscribers
         * @description Returns a list of *Subscribers*. Optional filter parameters can be passed in.
         */
        readonly get: operations["getSubscribers"];
        /**
         * Create a Subscriber
         * @description Creates a *Subscriber*.
         *
         *     **Required Fields**
         *     * email
         *
         *     **Read Only Fields**
         *     * id
         */
        readonly post: operations["createSubscriber"];
        /**
         * Delete Subscribers
         * @description By default, it deletes all subscribers. Use a filter to avoid deleting all subscribers in a store.
         */
        readonly delete: operations["deleteSubscribers"];
    };
    readonly "/customers/subscribers/{subscriber_id}": {
        readonly parameters: {
            readonly query?: never;
            readonly header: {
                /** @description The [MIME type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) of the response body. */
                readonly Accept: components["parameters"]["Accept"];
            };
            readonly path?: never;
            readonly cookie?: never;
        };
        /**
         * Get a Subscriber
         * @description Returns a *Subscriber*.
         */
        readonly get: operations["getSubscriber"];
        /**
         * Update a Subscriber
         * @description Updates a *Subscriber*.
         *
         *     **Read Only Fields**
         *     * id
         */
        readonly put: operations["updateSubscriber"];
        /**
         * Delete a Subscriber
         * @description Deletes a *Subscriber*.
         */
        readonly delete: operations["deleteSubscriber"];
    };
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        /**
         * subscriber_Full
         * @description Full subscriber object returned in responses.
         */
        readonly subscriber_Full: components["schemas"]["subscriber_Base"] & {
            /** @description The unique numeric ID of the subscriber; increments sequentially. */
            readonly id?: number;
            /**
             * Format: date-time
             * @description The date on which the subscriber was modified.
             *
             */
            readonly date_modified?: string;
            /**
             * Format: date-time
             * @description The date of which the subscriber was created.
             *
             */
            readonly date_created?: string;
            /**
             * @description Shows the active subscriptions a shopper may have. If the consents array is empty, the user has unsubscribed or didn’t enable the newsletter subscription checkbox during checkout. The array will contain consent types like 'marketing_newsletter' and 'abandoned_cart'.
             * @example [
             *       "marketing_newsletter"
             *     ]
             */
            readonly consents?: readonly ("marketing_newsletter" | "abandoned_cart")[];
        };
        /**
         * subscriber_Base
         * @description Common Subscriber properties.
         */
        readonly subscriber_Base: {
            /** @description The email of the subscriber. Must be unique.
             *      */
            readonly email?: string;
            /** @description The first name of the subscriber.
             *      */
            readonly first_name?: string;
            /** @description The last name of the subscriber.
             *      */
            readonly last_name?: string;
            /** @description The source of the subscriber. Values are: `storefront`, `order`, or `custom`.
             *      */
            readonly source?: string;
            /** @description The ID of the source order, if source was an order.
             *      */
            readonly order_id?: number | null;
            /** @description The channel ID where the subscriber was created. */
            readonly channel_id?: number;
            /**
             * @description Shows the active subscriptions a shopper may have. If the consents array is empty, the user has unsubscribed or didn’t enable the newsletter subscription checkbox during checkout. The array will contain consent types like 'marketing_newsletter' and 'abandoned_cart'.
             * @example [
             *       "abandoned_cart"
             *     ]
             */
            readonly consents?: readonly ("marketing_newsletter" | "abandoned_cart")[];
        };
        readonly Subscriber: {
            /** @description The unique numeric ID of the subscriber; increments sequentially.
             *      */
            readonly id?: number;
            /** @description The email of the subscriber. Must be unique.
             *      */
            readonly email?: string;
            /** @description The first name of the subscriber.
             *      */
            readonly first_name?: string;
            /** @description The last name of the subscriber.
             *      */
            readonly last_name?: string;
            /** @description The source of the subscriber. Values are: `storefront`, `order`, or `custom`.
             *      */
            readonly source?: string;
            /** @description The ID of the source order, if source was an order.
             *      */
            readonly order_id?: number | null;
        } & {
            /**
             * Format: date-time
             * @description The date on which the subscriber was modified.
             *
             */
            readonly date_modified?: string;
            /**
             * Format: date-time
             * @description The date of which the subscriber was created.
             *
             */
            readonly date_created?: string;
        };
        /**
         * subscriber_Post
         * @description The model for a POST to create a subscriber.
         *
         */
        readonly subscriber_Post: components["schemas"]["subscriber_Base"];
        /**
         * subscriber_Put
         * @description The model for a PUT to update a subscriber.
         *
         */
        readonly subscriber_Put: components["schemas"]["subscriber_Base"];
        /**
         * Collection Meta
         * @description Data about the response, including pagination and collection totals.
         */
        readonly CollectionMeta: {
            /**
             * Pagination
             * @description Data about the response, including pagination and collection totals.
             */
            readonly pagination?: {
                /**
                 * @description Total number of items in the result set.
                 *
                 * @example 36
                 */
                readonly total?: number;
                /**
                 * @description Total number of items in the collection response.
                 *
                 * @example 36
                 */
                readonly count?: number;
                /**
                 * @description The amount of items returned in the collection per page, controlled by the limit parameter.
                 *
                 * @example 50
                 */
                readonly per_page?: number;
                /**
                 * @description The page you are currently on within the collection.
                 *
                 * @example 1
                 */
                readonly current_page?: number;
                /**
                 * @description The total number of pages in the collection.
                 *
                 * @example 1
                 */
                readonly total_pages?: number;
                /** @description Pagination links for the previous and next parts of the whole collection.
                 *      */
                readonly links?: {
                    /** @description Link to the previous page returned in the response.
                     *      */
                    readonly previous?: string;
                    /**
                     * @description Link to the current page returned in the response.
                     *
                     * @example ?page=1&limit=50
                     */
                    readonly current?: string;
                    /** @description Link to the next page returned in the response.
                     *      */
                    readonly next?: string;
                };
            };
        };
        /**
         * Pagination
         * @description Data about the response, including pagination and collection totals.
         */
        readonly Pagination: {
            /**
             * @description Total number of items in the result set.
             *
             * @example 36
             */
            readonly total?: number;
            /**
             * @description Total number of items in the collection response.
             *
             * @example 36
             */
            readonly count?: number;
            /**
             * @description The amount of items returned in the collection per page, controlled by the limit parameter.
             *
             * @example 50
             */
            readonly per_page?: number;
            /**
             * @description The page you are currently on within the collection.
             *
             * @example 1
             */
            readonly current_page?: number;
            /**
             * @description The total number of pages in the collection.
             *
             * @example 1
             */
            readonly total_pages?: number;
            /** @description Pagination links for the previous and next parts of the whole collection.
             *      */
            readonly links?: {
                /** @description Link to the previous page returned in the response.
                 *      */
                readonly previous?: string;
                /**
                 * @description Link to the current page returned in the response.
                 *
                 * @example ?page=1&limit=50
                 */
                readonly current?: string;
                /** @description Link to the next page returned in the response.
                 *      */
                readonly next?: string;
            };
        };
        /**
         * Response meta
         * @description Response metadata.
         */
        readonly OpenMeta: {
            readonly [key: string]: unknown;
        };
        /** Error Response */
        readonly ErrorResponse: {
            /** @description The HTTP status code.
             *      */
            readonly status?: number;
            /** @description The error title describing the particular error.
             *      */
            readonly title?: string;
            readonly type?: string;
            readonly instance?: string;
        } & {
            /** Detailed Errors */
            readonly errors?: {
                readonly [key: string]: unknown;
            };
        };
        /**
         * Base Error
         * @description Error payload for the BigCommerce API.
         *
         */
        readonly BaseError: {
            /** @description The HTTP status code.
             *      */
            readonly status?: number;
            /** @description The error title describing the particular error.
             *      */
            readonly title?: string;
            readonly type?: string;
            readonly instance?: string;
        };
        /**
         * Not Found
         * @description Error payload for the BigCommerce API.
         */
        readonly NotFound: {
            /** @description 404 HTTP status code.
             *      */
            readonly status?: number;
            /** @description The error title describing the particular error. */
            readonly title?: string;
            readonly type?: string;
            readonly instance?: string;
        };
        /** Detailed Errors */
        readonly DetailedErrors: {
            readonly [key: string]: unknown;
        };
    };
    responses: {
        readonly subscriberCollection_Resp: {
            headers: {
                readonly [name: string]: unknown;
            };
            content: {
                readonly "application/json": {
                    readonly data?: readonly components["schemas"]["subscriber_Full"][];
                    readonly meta?: components["schemas"]["CollectionMeta"];
                };
            };
        };
        readonly subscriber_Resp: {
            headers: {
                readonly [name: string]: unknown;
            };
            content: {
                readonly "application/json": {
                    readonly data?: components["schemas"]["subscriber_Full"];
                    readonly meta?: components["schemas"]["OpenMeta"];
                };
            };
        };
    };
    parameters: {
        /** @description Filter items by email.
         *      */
        readonly FilterEmailParam: string;
        /** @description Filter items by first_name.
         *      */
        readonly FilterFirstNameParam: string;
        /** @description Filter items by last_name.
         *      */
        readonly FilterLastNameParam: string;
        /** @description Filter items by source.
         *      */
        readonly FilterSourceParam: string;
        /** @description Filter items by order_id.
         *      */
        readonly FilterOrderIdParam: number;
        /** @description Filter items by date_modified. For example `v3/catalog/products?date_last_imported:min=2018-06-15` */
        readonly FilterDateModifiedParam: string;
        /** @description Filter items by minimum date modified, for example, `2024-05-14T09:34:00` or `2024-05-14`. Returns metafields modified after this date. */
        readonly FilterDateModifiedMinParam: string;
        /** @description Filter items by maximum date modified, for example, `2024-05-14T09:34:00` or `2024-05-14`. Returns metafields modified before this date. */
        readonly FilterDateModifiedMaxParam: string;
        /** @description Filter items by date_created.
         *      */
        readonly FilterDateCreatedParam: string;
        /** @description Filter items by minimum date created, for example, `2024-05-14T09:34:00` or `2024-05-14`. Returns metafields created after this date. */
        readonly FilterDateCreatedMinParam: string;
        /** @description Filter items by maximum date created, for example, `2024-05-14T09:34:00` or `2024-05-14`. Returns metafields created before this date. */
        readonly FilterDateCreatedMaxParam: string;
        /** @description Specifies the page number in a limited (paginated) list of products. */
        readonly PageParam: number;
        /** @description Controls the number of items per page in a limited (paginated) list of products. */
        readonly LimitParam: number;
        /** @description Scripts field name to sort by.
         *      */
        readonly ScriptsSortKeyParam: "name" | "description" | "date_created" | "date_modified";
        /** @description Sort direction. Acceptable values are: `asc`, `desc`.
         *      */
        readonly DirectionParam: "asc" | "desc";
        /** @description Filter items by ID.
         *      */
        readonly IdParam: number;
        /** @description Filter items by ID.
         *     `id:in=4,5,6`
         *      */
        readonly IdInParam: readonly number[];
        /** @description The ID of the subscriber requested.
         *      */
        readonly SubscriberIdParam: number;
        /** @description The [MIME type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) of the response body. */
        readonly Accept: string;
        /** @description The [MIME type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) of the request body. */
        readonly ContentType: string;
    };
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export interface operations {
    readonly getSubscribers: {
        readonly parameters: {
            readonly query: {
                /** @description Filter items by email.
                 *      */
                readonly email?: components["parameters"]["FilterEmailParam"];
                /** @description Filter items by first_name.
                 *      */
                readonly first_name?: components["parameters"]["FilterFirstNameParam"];
                /** @description Filter items by last_name.
                 *      */
                readonly last_name?: components["parameters"]["FilterLastNameParam"];
                /** @description Filter items by source.
                 *      */
                readonly source?: components["parameters"]["FilterSourceParam"];
                /** @description Filter items by order_id.
                 *      */
                readonly order_id?: components["parameters"]["FilterOrderIdParam"];
                /** @description Filter items by date_created.
                 *      */
                readonly date_created?: components["parameters"]["FilterDateCreatedParam"];
                /** @description Filter items by minimum date created, for example, `2024-05-14T09:34:00` or `2024-05-14`. Returns metafields created after this date. */
                readonly "date_created:min"?: components["parameters"]["FilterDateCreatedMinParam"];
                /** @description Filter items by maximum date created, for example, `2024-05-14T09:34:00` or `2024-05-14`. Returns metafields created before this date. */
                readonly "date_created:max"?: components["parameters"]["FilterDateCreatedMaxParam"];
                /** @description Filter items by date_modified. For example `v3/catalog/products?date_last_imported:min=2018-06-15` */
                readonly date_modified?: components["parameters"]["FilterDateModifiedParam"];
                /** @description Filter items by minimum date modified, for example, `2024-05-14T09:34:00` or `2024-05-14`. Returns metafields modified after this date. */
                readonly "date_modified:min"?: components["parameters"]["FilterDateModifiedMinParam"];
                /** @description Filter items by maximum date modified, for example, `2024-05-14T09:34:00` or `2024-05-14`. Returns metafields modified before this date. */
                readonly "date_modified:max"?: components["parameters"]["FilterDateModifiedMaxParam"];
                /** @description Specifies the page number in a limited (paginated) list of products. */
                readonly page?: components["parameters"]["PageParam"];
                /** @description Controls the number of items per page in a limited (paginated) list of products. */
                readonly limit?: components["parameters"]["LimitParam"];
                /** @description Filter items by ID.
                 *      */
                readonly id: components["parameters"]["IdParam"];
                /** @description Filter items by ID.
                 *     `id:in=4,5,6`
                 *      */
                readonly "id:in"?: components["parameters"]["IdInParam"];
            };
            readonly header?: {
                /** @description The [MIME type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) of the response body. */
                readonly Accept?: components["parameters"]["Accept"];
            };
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly requestBody?: never;
        readonly responses: {
            readonly 200: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": {
                        readonly data?: readonly components["schemas"]["subscriber_Full"][];
                        readonly meta?: components["schemas"]["CollectionMeta"];
                    };
                };
            };
        };
    };
    readonly createSubscriber: {
        readonly parameters: {
            readonly query?: never;
            readonly header?: {
                /** @description The [MIME type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) of the response body. */
                readonly Accept?: components["parameters"]["Accept"];
                /** @description The [MIME type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) of the request body. */
                readonly "Content-Type"?: components["parameters"]["ContentType"];
            };
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": components["schemas"]["subscriber_Post"];
            };
        };
        readonly responses: {
            readonly 200: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": {
                        readonly data?: components["schemas"]["subscriber_Full"];
                        readonly meta?: components["schemas"]["OpenMeta"];
                    };
                };
            };
            /** @description The `Subscriber` was in conflict with another subscriber. This is the result of duplicate unique values, such as email.
             *      */
            readonly 409: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": {
                        /** Detailed Errors */
                        readonly errors?: {
                            readonly [key: string]: unknown;
                        };
                        readonly instance?: string;
                        /** @description The HTTP status code.
                         *      */
                        readonly status?: number;
                        /** @description The error title describing the particular error.
                         *      */
                        readonly title?: string;
                        readonly type?: string;
                    };
                };
            };
            /** @description The `Subscriber` was not valid. This is the result of missing required fields, or of invalid data. See the response for more details.
             *      */
            readonly 422: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": {
                        /** Detailed Errors */
                        readonly errors?: {
                            readonly [key: string]: unknown;
                        };
                        readonly instance?: string;
                        /** @description The HTTP status code.
                         *      */
                        readonly status?: number;
                        /** @description The error title describing the particular error.
                         *      */
                        readonly title?: string;
                        readonly type?: string;
                    };
                };
            };
        };
    };
    readonly deleteSubscribers: {
        readonly parameters: {
            readonly query?: {
                /** @description Filter items by email.
                 *      */
                readonly email?: components["parameters"]["FilterEmailParam"];
                /** @description Filter items by first_name.
                 *      */
                readonly first_name?: components["parameters"]["FilterFirstNameParam"];
                /** @description Filter items by last_name.
                 *      */
                readonly last_name?: components["parameters"]["FilterLastNameParam"];
                /** @description Filter items by source.
                 *      */
                readonly source?: components["parameters"]["FilterSourceParam"];
                /** @description Filter items by order_id.
                 *      */
                readonly order_id?: components["parameters"]["FilterOrderIdParam"];
                /** @description Filter items by date_created.
                 *      */
                readonly date_created?: components["parameters"]["FilterDateCreatedParam"];
                /** @description Filter items by date_modified. For example `v3/catalog/products?date_last_imported:min=2018-06-15` */
                readonly date_modified?: components["parameters"]["FilterDateModifiedParam"];
            };
            readonly header?: {
                /** @description The [MIME type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) of the response body. */
                readonly Accept?: components["parameters"]["Accept"];
            };
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly requestBody?: never;
        readonly responses: {
            readonly 204: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    readonly getSubscriber: {
        readonly parameters: {
            readonly query?: never;
            readonly header?: {
                /** @description The [MIME type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) of the response body. */
                readonly Accept?: components["parameters"]["Accept"];
            };
            readonly path: {
                /** @description The ID of the `Subscriber` requested.
                 *      */
                readonly subscriber_id: number;
            };
            readonly cookie?: never;
        };
        readonly requestBody?: never;
        readonly responses: {
            readonly 200: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": {
                        readonly data?: components["schemas"]["subscriber_Full"];
                        readonly meta?: components["schemas"]["OpenMeta"];
                    };
                };
            };
            /** @description The resource was not found.
             *      */
            readonly 404: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": {
                        /** @description 404 HTTP status code.
                         *      */
                        readonly status?: number;
                        /** @description The error title describing the particular error. */
                        readonly title?: string;
                        readonly type?: string;
                        readonly instance?: string;
                    };
                };
            };
        };
    };
    readonly updateSubscriber: {
        readonly parameters: {
            readonly query?: never;
            readonly header?: {
                /** @description The [MIME type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) of the response body. */
                readonly Accept?: components["parameters"]["Accept"];
                /** @description The [MIME type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) of the request body. */
                readonly "Content-Type"?: components["parameters"]["ContentType"];
            };
            readonly path: {
                /** @description The ID of the `Subscriber` requested.
                 *      */
                readonly subscriber_id: number;
            };
            readonly cookie?: never;
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": components["schemas"]["subscriber_Put"];
            };
        };
        readonly responses: {
            readonly 200: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": {
                        readonly data?: components["schemas"]["subscriber_Full"];
                        readonly meta?: components["schemas"]["OpenMeta"];
                    };
                };
            };
            /** @description The resource was not found.
             *      */
            readonly 404: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": {
                        /** @description 404 HTTP status code.
                         *      */
                        readonly status?: number;
                        /** @description The error title describing the particular error. */
                        readonly title?: string;
                        readonly type?: string;
                        readonly instance?: string;
                    };
                };
            };
            /** @description The `Subscriber` was in conflict with another subscriber. This is the result of duplicate unique values, such as `email`.
             *      */
            readonly 409: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": {
                        /** Detailed Errors */
                        readonly errors?: {
                            readonly [key: string]: unknown;
                        };
                        readonly instance?: string;
                        /** @description The HTTP status code.
                         *      */
                        readonly status?: number;
                        /** @description The error title describing the particular error.
                         *      */
                        readonly title?: string;
                        readonly type?: string;
                    };
                };
            };
            /** @description The `Subscriber` was not valid. This is the result of missing required fields, or of invalid data. See the response for more details.
             *      */
            readonly 422: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": {
                        /** Detailed Errors */
                        readonly errors?: {
                            readonly additionalProperties?: string;
                        };
                        readonly instance?: string;
                        /** @description The HTTP status code.
                         *      */
                        readonly status?: number;
                        /** @description The error title describing the particular error.
                         *      */
                        readonly title?: string;
                        readonly type?: string;
                    };
                };
            };
        };
    };
    readonly deleteSubscriber: {
        readonly parameters: {
            readonly query?: never;
            readonly header?: {
                /** @description The [MIME type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) of the response body. */
                readonly Accept?: components["parameters"]["Accept"];
            };
            readonly path: {
                /** @description The ID of the `Subscriber` requested.
                 *      */
                readonly subscriber_id: number;
            };
            readonly cookie?: never;
        };
        readonly requestBody?: never;
        readonly responses: {
            readonly 204: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
}
