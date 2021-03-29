// Octopus REST API v2020.6.4722

import { WorkerPoolResource } from './worker-pool-resource';

/**
 * 
 * @export
 * @interface WorkerPoolSummaryResource
 */
export interface WorkerPoolSummaryResource {
    /**
     * 
     * @type {{ [key: string]: number; }}
     * @memberof WorkerPoolSummaryResource
     */
    MachineEndpointSummaries?: { [key: string]: number; };
    /**
     * 
     * @type {{ [key: string]: number; }}
     * @memberof WorkerPoolSummaryResource
     */
    MachineHealthStatusSummaries?: { [key: string]: number; };
    /**
     * 
     * @type {Array<string>}
     * @memberof WorkerPoolSummaryResource
     */
    MachineIdsForCalamariUpgrade?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof WorkerPoolSummaryResource
     */
    MachineIdsForTentacleUpgrade?: Array<string>;
    /**
     * 
     * @type {boolean}
     * @memberof WorkerPoolSummaryResource
     */
    TentacleUpgradesRequired?: boolean;
    /**
     * 
     * @type {number}
     * @memberof WorkerPoolSummaryResource
     */
    TotalDisabledMachines?: number;
    /**
     * 
     * @type {number}
     * @memberof WorkerPoolSummaryResource
     */
    TotalMachines?: number;
    /**
     * 
     * @type {WorkerPoolResource}
     * @memberof WorkerPoolSummaryResource
     */
    WorkerPool?: WorkerPoolResource;
}
