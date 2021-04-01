// Octopus REST API v2021.2.1290

import { DeploymentResource } from "./deployment-resource";

/**
 *
 * @export
 * @interface DeploymentResourceCollection
 */
export interface DeploymentResourceCollection {
  /**
   *
   * @type {string}
   * @memberof DeploymentResourceCollection
   */
  Id?: string;
  /**
   *
   * @type {Array<DeploymentResource>}
   * @memberof DeploymentResourceCollection
   */
  Items?: Array<DeploymentResource>;
  /**
   *
   * @type {number}
   * @memberof DeploymentResourceCollection
   */
  ItemsPerPage?: number;
  /**
   *
   * @type {string}
   * @memberof DeploymentResourceCollection
   */
  ItemType?: string;
  /**
   *
   * @type {string}
   * @memberof DeploymentResourceCollection
   */
  LastModifiedBy?: string;
  /**
   *
   * @type {string}
   * @memberof DeploymentResourceCollection
   */
  LastModifiedOn?: string;
  /**
   *
   * @type {number}
   * @memberof DeploymentResourceCollection
   */
  LastPageNumber?: number;
  /**
   *
   * @type {{ [key: string]: string; }}
   * @memberof DeploymentResourceCollection
   */
  Links?: { [key: string]: string };
  /**
   *
   * @type {number}
   * @memberof DeploymentResourceCollection
   */
  NumberOfPages?: number;
  /**
   *
   * @type {number}
   * @memberof DeploymentResourceCollection
   */
  TotalResults?: number;
}
