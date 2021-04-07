// Octopus REST API v2021.2.1387

import { SensitiveValue } from "./sensitive-value";

/**
 *
 * @export
 * @interface ApiKeyResource
 */
export interface ApiKeyResource {
  /**
   *
   * @type {SensitiveValue}
   * @memberof ApiKeyResource
   */
  ApiKey?: SensitiveValue;
  /**
   *
   * @type {string}
   * @memberof ApiKeyResource
   */
  Created?: string;
  /**
   *
   * @type {string}
   * @memberof ApiKeyResource
   */
  Expires?: string;
  /**
   *
   * @type {string}
   * @memberof ApiKeyResource
   */
  Id?: string;
  /**
   *
   * @type {string}
   * @memberof ApiKeyResource
   */
  LastModifiedBy?: string;
  /**
   *
   * @type {string}
   * @memberof ApiKeyResource
   */
  LastModifiedOn?: string;
  /**
   *
   * @type {{ [key: string]: string; }}
   * @memberof ApiKeyResource
   */
  Links?: { [key: string]: string };
  /**
   *
   * @type {string}
   * @memberof ApiKeyResource
   */
  Purpose?: string;
  /**
   *
   * @type {string}
   * @memberof ApiKeyResource
   */
  UserId?: string;
}
