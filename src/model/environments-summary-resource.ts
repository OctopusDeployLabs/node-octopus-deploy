// Octopus REST API v2021.2.1387

import { EnvironmentSummaryResource } from "./environment-summary-resource";

/**
 *
 * @export
 * @interface EnvironmentsSummaryResource
 */
export interface EnvironmentsSummaryResource {
  /**
   *
   * @type {Array<EnvironmentSummaryResource>}
   * @memberof EnvironmentsSummaryResource
   */
  EnvironmentSummaries?: Array<EnvironmentSummaryResource>;
  /**
   *
   * @type {{ [key: string]: number; }}
   * @memberof EnvironmentsSummaryResource
   */
  MachineEndpointSummaries?: { [key: string]: number };
  /**
   *
   * @type {{ [key: string]: number; }}
   * @memberof EnvironmentsSummaryResource
   */
  MachineHealthStatusSummaries?: { [key: string]: number };
  /**
   *
   * @type {Array<string>}
   * @memberof EnvironmentsSummaryResource
   */
  MachineIdsForCalamariUpgrade?: Array<string>;
  /**
   *
   * @type {{ [key: string]: number; }}
   * @memberof EnvironmentsSummaryResource
   */
  MachineTenantSummaries?: { [key: string]: number };
  /**
   *
   * @type {{ [key: string]: number; }}
   * @memberof EnvironmentsSummaryResource
   */
  MachineTenantTagSummaries?: { [key: string]: number };
  /**
   *
   * @type {boolean}
   * @memberof EnvironmentsSummaryResource
   */
  TentacleUpgradesRequired?: boolean;
  /**
   *
   * @type {number}
   * @memberof EnvironmentsSummaryResource
   */
  TotalDisabledMachines?: number;
  /**
   *
   * @type {number}
   * @memberof EnvironmentsSummaryResource
   */
  TotalMachines?: number;
}
