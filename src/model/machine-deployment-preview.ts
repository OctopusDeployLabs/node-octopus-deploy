// Octopus REST API v2020.6.4722

import { MachineStatus } from './machine-status';

/**
 * 
 * @export
 * @interface MachineDeploymentPreview
 */
export interface MachineDeploymentPreview {
    /**
     * 
     * @type {boolean}
     * @memberof MachineDeploymentPreview
     */
    HasLatestCalamari?: boolean;
    /**
     * 
     * @type {MachineStatus}
     * @memberof MachineDeploymentPreview
     */
    HealthStatus?: MachineStatus;
    /**
     * 
     * @type {string}
     * @memberof MachineDeploymentPreview
     */
    Id?: string;
    /**
     * 
     * @type {string}
     * @memberof MachineDeploymentPreview
     */
    Name?: string;
}
