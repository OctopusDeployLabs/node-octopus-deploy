// Octopus REST API v2021.2.1290

import { EndpointResource } from "./endpoint-resource";
import { MachineModelHealthStatus } from "./machine-model-health-status";
import { MachineModelStatus } from "./machine-model-status";
import { TenantedDeploymentMode } from "./tenanted-deployment-mode";

/**
 *
 * @export
 * @interface DeploymentTargetResource
 */
export interface DeploymentTargetResource {
  /**
   *
   * @type {string}
   * @memberof DeploymentTargetResource
   */
  Architecture?: string;
  /**
   *
   * @type {EndpointResource}
   * @memberof DeploymentTargetResource
   */
  Endpoint?: EndpointResource;
  /**
   *
   * @type {Set<string>}
   * @memberof DeploymentTargetResource
   */
  EnvironmentIds?: Set<string>;
  /**
   *
   * @type {boolean}
   * @memberof DeploymentTargetResource
   */
  HasLatestCalamari?: boolean;
  /**
   *
   * @type {MachineModelHealthStatus}
   * @memberof DeploymentTargetResource
   */
  HealthStatus?: MachineModelHealthStatus;
  /**
   *
   * @type {string}
   * @memberof DeploymentTargetResource
   */
  Id?: string;
  /**
   *
   * @type {boolean}
   * @memberof DeploymentTargetResource
   */
  IsDisabled?: boolean;
  /**
   *
   * @type {boolean}
   * @memberof DeploymentTargetResource
   */
  IsInProcess?: boolean;
  /**
   *
   * @type {string}
   * @memberof DeploymentTargetResource
   */
  LastModifiedBy?: string;
  /**
   *
   * @type {string}
   * @memberof DeploymentTargetResource
   */
  LastModifiedOn?: string;
  /**
   *
   * @type {{ [key: string]: string; }}
   * @memberof DeploymentTargetResource
   */
  Links?: { [key: string]: string };
  /**
   *
   * @type {string}
   * @memberof DeploymentTargetResource
   */
  MachinePolicyId?: string;
  /**
   *
   * @type {string}
   * @memberof DeploymentTargetResource
   */
  Name?: string;
  /**
   *
   * @type {string}
   * @memberof DeploymentTargetResource
   */
  OperatingSystem?: string;
  /**
   *
   * @type {Set<string>}
   * @memberof DeploymentTargetResource
   */
  Roles?: Set<string>;
  /**
   *
   * @type {string}
   * @memberof DeploymentTargetResource
   */
  ShellName?: string;
  /**
   *
   * @type {string}
   * @memberof DeploymentTargetResource
   */
  ShellVersion?: string;
  /**
   *
   * @type {string}
   * @memberof DeploymentTargetResource
   */
  SpaceId?: string;
  /**
   *
   * @type {MachineModelStatus}
   * @memberof DeploymentTargetResource
   */
  Status?: MachineModelStatus;
  /**
   *
   * @type {string}
   * @memberof DeploymentTargetResource
   */
  StatusSummary?: string;
  /**
   *
   * @type {TenantedDeploymentMode}
   * @memberof DeploymentTargetResource
   */
  TenantedDeploymentParticipation?: TenantedDeploymentMode;
  /**
   *
   * @type {Set<string>}
   * @memberof DeploymentTargetResource
   */
  TenantIds?: Set<string>;
  /**
   *
   * @type {Set<string>}
   * @memberof DeploymentTargetResource
   */
  TenantTags?: Set<string>;
  /**
   *
   * @type {string}
   * @memberof DeploymentTargetResource
   */
  Thumbprint?: string;
  /**
   *
   * @type {string}
   * @memberof DeploymentTargetResource
   */
  Uri?: string;
}
