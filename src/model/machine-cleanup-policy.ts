// Octopus REST API v2021.2.1290

import { DeleteMachinesBehavior } from "./delete-machines-behavior";

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
