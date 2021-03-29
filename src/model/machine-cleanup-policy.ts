// Octopus REST API v2020.6.4722

import { DeleteMachinesBehavior } from './delete-machines-behavior';

/**
 * 
 * @export
 * @interface MachineCleanupPolicy
 */
export interface MachineCleanupPolicy {
    /**
     * 
     * @type {DeleteMachinesBehavior}
     * @memberof MachineCleanupPolicy
     */
    DeleteMachinesBehavior?: DeleteMachinesBehavior;
    /**
     * 
     * @type {string}
     * @memberof MachineCleanupPolicy
     */
    DeleteMachinesElapsedTimeSpan?: string;
}
