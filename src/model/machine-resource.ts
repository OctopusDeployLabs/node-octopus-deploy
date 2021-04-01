// Octopus REST API v2021.2.1290

import { EndpointResource } from "./endpoint-resource";
import { MachineModelHealthStatus } from "./machine-model-health-status";
import { MachineModelStatus } from "./machine-model-status";

/**
 *
 * @export
 * @interface MachineResource
 */
export interface MachineResource {
  /**
   *
   * @type {string}
   * @memberof MachineResource
   */
  Architecture?: string;
  /**
   *
   * @type {EndpointResource}
   * @memberof MachineResource
   */
  Endpoint?: EndpointResource;
  /**
   *
   * @type {boolean}
   * @memberof MachineResource
   */
  HasLatestCalamari?: boolean;
  /**
   *
   * @type {MachineModelHealthStatus}
   * @memberof MachineResource
   */
  HealthStatus?: MachineModelHealthStatus;
  /**
   *
   * @type {string}
   * @memberof MachineResource
   */
  Id?: string;
  /**
   *
   * @type {boolean}
   * @memberof MachineResource
   */
  IsDisabled?: boolean;
  /**
   *
   * @type {boolean}
   * @memberof MachineResource
   */
  IsInProcess?: boolean;
  /**
   *
   * @type {string}
   * @memberof MachineResource
   */
  LastModifiedBy?: string;
  /**
   *
   * @type {string}
   * @memberof MachineResource
   */
  LastModifiedOn?: string;
  /**
   *
   * @type {{ [key: string]: string; }}
   * @memberof MachineResource
   */
  Links?: { [key: string]: string };
  /**
   *
   * @type {string}
   * @memberof MachineResource
   */
  MachinePolicyId?: string;
  /**
   *
   * @type {string}
   * @memberof MachineResource
   */
  Name?: string;
  /**
   *
   * @type {string}
   * @memberof MachineResource
   */
  OperatingSystem?: string;
  /**
   *
   * @type {string}
   * @memberof MachineResource
   */
  ShellName?: string;
  /**
   *
   * @type {string}
   * @memberof MachineResource
   */
  ShellVersion?: string;
  /**
   *
   * @type {MachineModelStatus}
   * @memberof MachineResource
   */
  Status?: MachineModelStatus;
  /**
   *
   * @type {string}
   * @memberof MachineResource
   */
  StatusSummary?: string;
  /**
   *
   * @type {string}
   * @memberof MachineResource
   */
  Thumbprint?: string;
  /**
   *
   * @type {string}
   * @memberof MachineResource
   */
  Uri?: string;
}
