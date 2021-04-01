// Octopus REST API v2021.2.1290

/**
 *
 * @export
 * @interface ApiKeyCreatedResource
 */
export interface ApiKeyCreatedResource {
  /**
   *
   * @type {string}
   * @memberof ApiKeyCreatedResource
   */
  ApiKey?: string;
  /**
   *
   * @type {string}
   * @memberof ApiKeyCreatedResource
   */
  Created?: string;
  /**
   *
   * @type {string}
   * @memberof ApiKeyCreatedResource
   */
  Expires?: string;
  /**
   *
   * @type {string}
   * @memberof ApiKeyCreatedResource
   */
  Id?: string;
  /**
   *
   * @type {string}
   * @memberof ApiKeyCreatedResource
   */
  LastModifiedBy?: string;
  /**
   *
   * @type {string}
   * @memberof ApiKeyCreatedResource
   */
  LastModifiedOn?: string;
  /**
   *
   * @type {{ [key: string]: string; }}
   * @memberof ApiKeyCreatedResource
   */
  Links?: { [key: string]: string };
  /**
   *
   * @type {string}
   * @memberof ApiKeyCreatedResource
   */
  Purpose?: string;
  /**
   *
   * @type {string}
   * @memberof ApiKeyCreatedResource
   */
  UserId?: string;
}
