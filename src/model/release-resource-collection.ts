// Octopus REST API v2021.2.1290

import { ReleaseResource } from "./release-resource";

/**
 *
 * @export
 * @interface ReleaseResourceCollection
 */
export interface ReleaseResourceCollection {
  /**
   *
   * @type {string}
   * @memberof ReleaseResourceCollection
   */
  Id?: string;
  /**
   *
   * @type {Array<ReleaseResource>}
   * @memberof ReleaseResourceCollection
   */
  Items?: Array<ReleaseResource>;
  /**
   *
   * @type {number}
   * @memberof ReleaseResourceCollection
   */
  ItemsPerPage?: number;
  /**
   *
   * @type {string}
   * @memberof ReleaseResourceCollection
   */
  ItemType?: string;
  /**
   *
   * @type {string}
   * @memberof ReleaseResourceCollection
   */
  LastModifiedBy?: string;
  /**
   *
   * @type {string}
   * @memberof ReleaseResourceCollection
   */
  LastModifiedOn?: string;
  /**
   *
   * @type {number}
   * @memberof ReleaseResourceCollection
   */
  LastPageNumber?: number;
  /**
   *
   * @type {{ [key: string]: string; }}
   * @memberof ReleaseResourceCollection
   */
  Links?: { [key: string]: string };
  /**
   *
   * @type {number}
   * @memberof ReleaseResourceCollection
   */
  NumberOfPages?: number;
  /**
   *
   * @type {number}
   * @memberof ReleaseResourceCollection
   */
  TotalResults?: number;
}
