// Octopus REST API v2021.2.1387

import { DeploymentProcessResource } from "./deployment-process-resource";

/**
 *
 * @export
 * @interface DeploymentProcessResourceCollection
 */
export interface DeploymentProcessResourceCollection {
  /**
   *
   * @type {string}
   * @memberof DeploymentProcessResourceCollection
   */
  Id?: string;
  /**
   *
   * @type {Array<DeploymentProcessResource>}
   * @memberof DeploymentProcessResourceCollection
   */
  Items?: Array<DeploymentProcessResource>;
  /**
   *
   * @type {number}
   * @memberof DeploymentProcessResourceCollection
   */
  ItemsPerPage?: number;
  /**
   *
   * @type {string}
   * @memberof DeploymentProcessResourceCollection
   */
  ItemType?: string;
  /**
   *
   * @type {string}
   * @memberof DeploymentProcessResourceCollection
   */
  LastModifiedBy?: string;
  /**
   *
   * @type {string}
   * @memberof DeploymentProcessResourceCollection
   */
  LastModifiedOn?: string;
  /**
   *
   * @type {number}
   * @memberof DeploymentProcessResourceCollection
   */
  LastPageNumber?: number;
  /**
   *
   * @type {{ [key: string]: string; }}
   * @memberof DeploymentProcessResourceCollection
   */
  Links?: { [key: string]: string };
  /**
   *
   * @type {number}
   * @memberof DeploymentProcessResourceCollection
   */
  NumberOfPages?: number;
  /**
   *
   * @type {number}
   * @memberof DeploymentProcessResourceCollection
   */
  TotalResults?: number;
}
