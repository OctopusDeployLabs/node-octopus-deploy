// Octopus REST API v2021.2.1290

/**
 *
 * @export
 * @interface EventGroupResource
 */
export interface EventGroupResource {
  /**
   *
   * @type {Array<string>}
   * @memberof EventGroupResource
   */
  EventCategories?: Array<string>;
  /**
   *
   * @type {string}
   * @memberof EventGroupResource
   */
  Id?: string;
  /**
   *
   * @type {{ [key: string]: string; }}
   * @memberof EventGroupResource
   */
  Links?: { [key: string]: string };
  /**
   *
   * @type {string}
   * @memberof EventGroupResource
   */
  Name?: string;
}
