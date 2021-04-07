// Octopus REST API v2021.2.1387

import { LifecycleResource } from "./lifecycle-resource";

/**
 *
 * @export
 * @interface LifecycleResourceCollection
 */
export interface LifecycleResourceCollection {
  /**
   *
   * @type {string}
   * @memberof LifecycleResourceCollection
   */
  Id?: string;
  /**
   *
   * @type {Array<LifecycleResource>}
   * @memberof LifecycleResourceCollection
   */
  Items?: Array<LifecycleResource>;
  /**
   *
   * @type {number}
   * @memberof LifecycleResourceCollection
   */
  ItemsPerPage?: number;
  /**
   *
   * @type {string}
   * @memberof LifecycleResourceCollection
   */
  ItemType?: string;
  /**
   *
   * @type {string}
   * @memberof LifecycleResourceCollection
   */
  LastModifiedBy?: string;
  /**
   *
   * @type {string}
   * @memberof LifecycleResourceCollection
   */
  LastModifiedOn?: string;
  /**
   *
   * @type {number}
   * @memberof LifecycleResourceCollection
   */
  LastPageNumber?: number;
  /**
   *
   * @type {{ [key: string]: string; }}
   * @memberof LifecycleResourceCollection
   */
  Links?: { [key: string]: string };
  /**
   *
   * @type {number}
   * @memberof LifecycleResourceCollection
   */
  NumberOfPages?: number;
  /**
   *
   * @type {number}
   * @memberof LifecycleResourceCollection
   */
  TotalResults?: number;
}
