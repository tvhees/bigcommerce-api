// TECH DEBT: Work out if these eslint rules are reasonable in this context
/* eslint-disable @typescript-eslint/no-empty-object-type */
/* eslint-disable @typescript-eslint/no-explicit-any */
import type {
    Operation,
    OperationIndex,
    Parameters,
    Request,
    Response,
} from '../../internal/operation.js';

/**
 * This module contains functionality for narrowing the response type based on input parameters.
 *
 * For example, when requesting a product, specifying `{ include_fields: ['sku'] }` will cause BigCommerce
 * to only return the `id` and `sku` fields (as `id` is always returned). This module ensures that response
 * types reflect the query parameters which were passed in the request.
 *
 * Currently, this module supports `include`, `include_fields` and `exclude_fields`.
 */

export type NarrowResponse<
    Ops extends OperationIndex,
    Req extends Request,
    Rep extends Response,
> = NarrowResponse_<Req['parameters'], Rep, Includes<Ops[Req['requestLine']]>>;

type Includes<Op extends Operation> = Op['parameters'] extends { query?: { include?: infer T } }
    ? T extends ReadonlyArray<infer E>
        ? E
        : T extends string
          ? T
          : never
    : never;

type NarrowResponse_<
    Params extends Parameters,
    Rep extends Response,
    Includes extends string,
> = Rep extends { body: { data?: infer Data; meta?: infer Meta } }
    ? {
          status: Rep['status'];
          body: {
              data: NarrowData<Data, Params['query'], Includes>;
              meta: Meta;
          };
      }
    : Rep;

type NarrowData<Data, Query extends Record<string, any> | undefined, Includes extends string> =
    Data extends ReadonlyArray<infer El>
        ? ReadonlyArray<NarrowData<El, Query, Includes>>
        : Required<
              NarrowFields<Omit<Data, Includes>, Query> &
                  NarrowIncludes<Pick<Data, Includes & keyof Data>, Query>
          >;

type NarrowFields<Data, Query extends Record<string, any> | undefined> = Query extends {
    include_fields: ReadonlyArray<infer F>;
}
    ? Pick<Data, (F | 'id') & keyof Data>
    : Query extends { exclude_fields: ReadonlyArray<infer F | 'id'> }
      ? Omit<Data, F & keyof Data>
      : Data;

type NarrowIncludes<Data, Query extends Record<string, any> | undefined> = Query extends {
    include: ReadonlyArray<infer F>;
}
    ? Pick<Data, F & keyof Data>
    : {};
