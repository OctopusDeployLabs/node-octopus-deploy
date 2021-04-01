// Octopus REST API v2021.2.1290

import { EnvironmentResource } from "./environment-resource";

/**
 *
 * @export
 * @interface EnvironmentSummaryResource
 */
export interface EnvironmentSummaryResource {
  /**
   *
   * @type {EnvironmentResource}
   * @memberof EnvironmentSummaryResource
   */
  Environment?: EnvironmentResource;
  /**
   *
   * @type {{ [key: string]: number; }}
   * @memberof EnvironmentSummaryResource
   */
  MachineEndpointSummaries?: { [key: string]: number };
  /**
   *
   * @type {{ [key: string]: number; }}
   * @memberof EnvironmentSummaryResource
   */
  MachineHealthStatusSummaries?: { [key: string]: number };
  /**
   *
   * @type {Array<string>}
   * @memberof EnvironmentSummaryResource
   */
  MachineIdsForCalamariUpgrade?: Array<string>;
  /**
   *
   * @type {Array<string>}
   * @memberof EnvironmentSummaryResource
   */
  MachineIdsForTentacleUpgrade?: Array<string>;
  /**
   *
   * @type {{ [key: string]: number; }}
   * @memberof EnvironmentSummaryResource
   */
  MachineTenantSummaries?: { [key: string]: number };
  /**
   *
   * @type {{ [key: string]: number; }}
   * @memberof EnvironmentSummaryResource
   */
  MachineTenantTagSummaries?: { [key: string]: number };
  /**
   *
   * @type {boolean}
   * @memberof EnvironmentSummaryResource
   */
  TentacleUpgradesRequired?: boolean;
  /**
   *
   * @type {number}
   * @memberof EnvironmentSummaryResource
   */
  TotalDisabledMachines?: number;
  /**
   *
   * @type {number}
   * @memberof EnvironmentSummaryResource
   */
  TotalMachines?: number;
}
