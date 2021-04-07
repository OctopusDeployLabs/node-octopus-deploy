// Octopus REST API v2021.2.1387

import { EnvironmentResource } from "./environment-resource";

/**
 *
 * @export
 * @interface EnvironmentResourceCollection
 */
export interface EnvironmentResourceCollection {
  /**
   *
   * @type {string}
   * @memberof EnvironmentResourceCollection
   */
  Id?: string;
  /**
   *
   * @type {Array<EnvironmentResource>}
   * @memberof EnvironmentResourceCollection
   */
  Items?: Array<EnvironmentResource>;
  /**
   *
   * @type {number}
   * @memberof EnvironmentResourceCollection
   */
  ItemsPerPage?: number;
  /**
   *
   * @type {string}
   * @memberof EnvironmentResourceCollection
   */
  ItemType?: string;
  /**
   *
   * @type {string}
   * @memberof EnvironmentResourceCollection
   */
  LastModifiedBy?: string;
  /**
   *
   * @type {string}
   * @memberof EnvironmentResourceCollection
   */
  LastModifiedOn?: string;
  /**
   *
   * @type {number}
   * @memberof EnvironmentResourceCollection
   */
  LastPageNumber?: number;
  /**
   *
   * @type {{ [key: string]: string; }}
   * @memberof EnvironmentResourceCollection
   */
  Links?: { [key: string]: string };
  /**
   *
   * @type {number}
   * @memberof EnvironmentResourceCollection
   */
  NumberOfPages?: number;
  /**
   *
   * @type {number}
   * @memberof EnvironmentResourceCollection
   */
  TotalResults?: number;
}
