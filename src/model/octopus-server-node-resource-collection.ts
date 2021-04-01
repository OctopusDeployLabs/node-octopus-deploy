// Octopus REST API v2021.2.1290

import { OctopusServerNodeResource } from "./octopus-server-node-resource";

/**
 *
 * @export
 * @interface OctopusServerNodeResourceCollection
 */
export interface OctopusServerNodeResourceCollection {
  /**
   *
   * @type {string}
   * @memberof OctopusServerNodeResourceCollection
   */
  Id?: string;
  /**
   *
   * @type {Array<OctopusServerNodeResource>}
   * @memberof OctopusServerNodeResourceCollection
   */
  Items?: Array<OctopusServerNodeResource>;
  /**
   *
   * @type {number}
   * @memberof OctopusServerNodeResourceCollection
   */
  ItemsPerPage?: number;
  /**
   *
   * @type {string}
   * @memberof OctopusServerNodeResourceCollection
   */
  ItemType?: string;
  /**
   *
   * @type {string}
   * @memberof OctopusServerNodeResourceCollection
   */
  LastModifiedBy?: string;
  /**
   *
   * @type {string}
   * @memberof OctopusServerNodeResourceCollection
   */
  LastModifiedOn?: string;
  /**
   *
   * @type {number}
   * @memberof OctopusServerNodeResourceCollection
   */
  LastPageNumber?: number;
  /**
   *
   * @type {{ [key: string]: string; }}
   * @memberof OctopusServerNodeResourceCollection
   */
  Links?: { [key: string]: string };
  /**
   *
   * @type {number}
   * @memberof OctopusServerNodeResourceCollection
   */
  NumberOfPages?: number;
  /**
   *
   * @type {number}
   * @memberof OctopusServerNodeResourceCollection
   */
  TotalResults?: number;
}
