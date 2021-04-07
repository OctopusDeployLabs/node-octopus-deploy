// Octopus REST API v2021.2.1387

import { CalamariUpdateBehavior } from "./calamari-update-behavior";
import { TentacleUpdateBehavior } from "./tentacle-update-behavior";

/**
 *
 * @export
 * @interface MachineUpdatePolicy
 */
export interface MachineUpdatePolicy {
  /**
   *
   * @type {CalamariUpdateBehavior}
   * @memberof MachineUpdatePolicy
   */
  CalamariUpdateBehavior?: CalamariUpdateBehavior;
  /**
   *
   * @type {string}
   * @memberof MachineUpdatePolicy
   */
  TentacleUpdateAccountId?: string;
  /**
   *
   * @type {TentacleUpdateBehavior}
   * @memberof MachineUpdatePolicy
   */
  TentacleUpdateBehavior?: TentacleUpdateBehavior;
}
