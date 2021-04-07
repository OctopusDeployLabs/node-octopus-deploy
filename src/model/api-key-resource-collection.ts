// Octopus REST API v2021.2.1387

import { ApiKeyResource } from "./api-key-resource";

/**
 *
 * @export
 * @interface ApiKeyResourceCollection
 */
export interface ApiKeyResourceCollection {
  /**
   *
   * @type {string}
   * @memberof ApiKeyResourceCollection
   */
  Id?: string;
  /**
   *
   * @type {Array<ApiKeyResource>}
   * @memberof ApiKeyResourceCollection
   */
  Items?: Array<ApiKeyResource>;
  /**
   *
   * @type {number}
   * @memberof ApiKeyResourceCollection
   */
  ItemsPerPage?: number;
  /**
   *
   * @type {string}
   * @memberof ApiKeyResourceCollection
   */
  ItemType?: string;
  /**
   *
   * @type {string}
   * @memberof ApiKeyResourceCollection
   */
  LastModifiedBy?: string;
  /**
   *
   * @type {string}
   * @memberof ApiKeyResourceCollection
   */
  LastModifiedOn?: string;
  /**
   *
   * @type {number}
   * @memberof ApiKeyResourceCollection
   */
  LastPageNumber?: number;
  /**
   *
   * @type {{ [key: string]: string; }}
   * @memberof ApiKeyResourceCollection
   */
  Links?: { [key: string]: string };
  /**
   *
   * @type {number}
   * @memberof ApiKeyResourceCollection
   */
  NumberOfPages?: number;
  /**
   *
   * @type {number}
   * @memberof ApiKeyResourceCollection
   */
  TotalResults?: number;
}
