// Octopus REST API v2020.6.4722

import { MachineConnectivityBehavior } from './machine-connectivity-behavior';

/**
 * 
 * @export
 * @interface MachineConnectivityPolicy
 */
export interface MachineConnectivityPolicy {
    /**
     * 
     * @type {MachineConnectivityBehavior}
     * @memberof MachineConnectivityPolicy
     */
    MachineConnectivityBehavior?: MachineConnectivityBehavior;
}
