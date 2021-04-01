// Octopus REST API v2021.2.1290

import { MachineConnectivityBehavior } from "./machine-connectivity-behavior";

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
