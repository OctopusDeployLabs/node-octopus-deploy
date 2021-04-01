// Octopus REST API v2021.2.1290

import { DeploymentTargetResource } from "./deployment-target-resource";

/**
 *
 * @export
 * @interface DeploymentTargetResourceCollection
 */
export interface DeploymentTargetResourceCollection {
  /**
   *
   * @type {string}
   * @memberof DeploymentTargetResourceCollection
   */
  Id?: string;
  /**
   *
   * @type {Array<DeploymentTargetResource>}
   * @memberof DeploymentTargetResourceCollection
   */
  Items?: Array<DeploymentTargetResource>;
  /**
   *
   * @type {number}
   * @memberof DeploymentTargetResourceCollection
   */
  ItemsPerPage?: number;
  /**
   *
   * @type {string}
   * @memberof DeploymentTargetResourceCollection
   */
  ItemType?: string;
  /**
   *
   * @type {string}
   * @memberof DeploymentTargetResourceCollection
   */
  LastModifiedBy?: string;
  /**
   *
   * @type {string}
   * @memberof DeploymentTargetResourceCollection
   */
  LastModifiedOn?: string;
  /**
   *
   * @type {number}
   * @memberof DeploymentTargetResourceCollection
   */
  LastPageNumber?: number;
  /**
   *
   * @type {{ [key: string]: string; }}
   * @memberof DeploymentTargetResourceCollection
   */
  Links?: { [key: string]: string };
  /**
   *
   * @type {number}
   * @memberof DeploymentTargetResourceCollection
   */
  NumberOfPages?: number;
  /**
   *
   * @type {number}
   * @memberof DeploymentTargetResourceCollection
   */
  TotalResults?: number;
}
