// Octopus REST API v2021.2.1290

import { InterruptionResource } from "./interruption-resource";

/**
 *
 * @export
 * @interface InterruptionResourceCollection
 */
export interface InterruptionResourceCollection {
  /**
   *
   * @type {string}
   * @memberof InterruptionResourceCollection
   */
  Id?: string;
  /**
   *
   * @type {Array<InterruptionResource>}
   * @memberof InterruptionResourceCollection
   */
  Items?: Array<InterruptionResource>;
  /**
   *
   * @type {number}
   * @memberof InterruptionResourceCollection
   */
  ItemsPerPage?: number;
  /**
   *
   * @type {string}
   * @memberof InterruptionResourceCollection
   */
  ItemType?: string;
  /**
   *
   * @type {string}
   * @memberof InterruptionResourceCollection
   */
  LastModifiedBy?: string;
  /**
   *
   * @type {string}
   * @memberof InterruptionResourceCollection
   */
  LastModifiedOn?: string;
  /**
   *
   * @type {number}
   * @memberof InterruptionResourceCollection
   */
  LastPageNumber?: number;
  /**
   *
   * @type {{ [key: string]: string; }}
   * @memberof InterruptionResourceCollection
   */
  Links?: { [key: string]: string };
  /**
   *
   * @type {number}
   * @memberof InterruptionResourceCollection
   */
  NumberOfPages?: number;
  /**
   *
   * @type {number}
   * @memberof InterruptionResourceCollection
   */
  TotalResults?: number;
}
