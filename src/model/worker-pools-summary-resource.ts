// Octopus REST API v2021.2.1387

import { WorkerPoolSummaryResource } from "./worker-pool-summary-resource";

/**
 *
 * @export
 * @interface WorkerPoolsSummaryResource
 */
export interface WorkerPoolsSummaryResource {
  /**
   *
   * @type {{ [key: string]: number; }}
   * @memberof WorkerPoolsSummaryResource
   */
  MachineEndpointSummaries?: { [key: string]: number };
  /**
   *
   * @type {{ [key: string]: number; }}
   * @memberof WorkerPoolsSummaryResource
   */
  MachineHealthStatusSummaries?: { [key: string]: number };
  /**
   *
   * @type {Array<string>}
   * @memberof WorkerPoolsSummaryResource
   */
  MachineIdsForCalamariUpgrade?: Array<string>;
  /**
   *
   * @type {Array<string>}
   * @memberof WorkerPoolsSummaryResource
   */
  MachineIdsForTentacleUpgrade?: Array<string>;
  /**
   *
   * @type {boolean}
   * @memberof WorkerPoolsSummaryResource
   */
  TentacleUpgradesRequired?: boolean;
  /**
   *
   * @type {number}
   * @memberof WorkerPoolsSummaryResource
   */
  TotalDisabledMachines?: number;
  /**
   *
   * @type {number}
   * @memberof WorkerPoolsSummaryResource
   */
  TotalMachines?: number;
  /**
   *
   * @type {Array<WorkerPoolSummaryResource>}
   * @memberof WorkerPoolsSummaryResource
   */
  WorkerPoolSummaries?: Array<WorkerPoolSummaryResource>;
}
