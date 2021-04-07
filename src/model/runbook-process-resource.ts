// Octopus REST API v2021.2.1387

import { DeploymentStepResource } from "./deployment-step-resource";

/**
 *
 * @export
 * @interface RunbookProcessResource
 */
export interface RunbookProcessResource {
  /**
   *
   * @type {string}
   * @memberof RunbookProcessResource
   */
  Id?: string;
  /**
   *
   * @type {string}
   * @memberof RunbookProcessResource
   */
  LastModifiedBy?: string;
  /**
   *
   * @type {string}
   * @memberof RunbookProcessResource
   */
  LastModifiedOn?: string;
  /**
   *
   * @type {string}
   * @memberof RunbookProcessResource
   */
  LastSnapshotId?: string;
  /**
   *
   * @type {{ [key: string]: string; }}
   * @memberof RunbookProcessResource
   */
  Links?: { [key: string]: string };
  /**
   *
   * @type {string}
   * @memberof RunbookProcessResource
   */
  ProjectId?: string;
  /**
   *
   * @type {string}
   * @memberof RunbookProcessResource
   */
  RunbookId?: string;
  /**
   *
   * @type {string}
   * @memberof RunbookProcessResource
   */
  SpaceId?: string;
  /**
   *
   * @type {Array<DeploymentStepResource>}
   * @memberof RunbookProcessResource
   */
  Steps?: Array<DeploymentStepResource>;
  /**
   *
   * @type {number}
   * @memberof RunbookProcessResource
   */
  Version: number;
}
