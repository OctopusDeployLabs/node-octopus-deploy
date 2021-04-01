// Octopus REST API v2021.2.1290

import { ReleaseChanges } from "./release-changes";
import { RetentionPeriod } from "./retention-period";

/**
 *
 * @export
 * @interface DeploymentResource
 */
export interface DeploymentResource {
  /**
   *
   * @type {Array<ReleaseChanges>}
   * @memberof DeploymentResource
   */
  Changes?: Array<ReleaseChanges>;
  /**
   *
   * @type {string}
   * @memberof DeploymentResource
   */
  ChangesMarkdown?: string;
  /**
   *
   * @type {string}
   * @memberof DeploymentResource
   */
  ChannelId?: string;
  /**
   *
   * @type {string}
   * @memberof DeploymentResource
   */
  Comments?: string;
  /**
   *
   * @type {string}
   * @memberof DeploymentResource
   */
  Created?: string;
  /**
   *
   * @type {string}
   * @memberof DeploymentResource
   */
  DeployedBy?: string;
  /**
   *
   * @type {string}
   * @memberof DeploymentResource
   */
  DeployedById?: string;
  /**
   *
   * @type {Set<string>}
   * @memberof DeploymentResource
   */
  DeployedToMachineIds?: Set<string>;
  /**
   *
   * @type {string}
   * @memberof DeploymentResource
   */
  DeploymentProcessId?: string;
  /**
   *
   * @type {string}
   * @memberof DeploymentResource
   */
  EnvironmentId: string;
  /**
   *
   * @type {Set<string>}
   * @memberof DeploymentResource
   */
  ExcludedMachineIds?: Set<string>;
  /**
   *
   * @type {boolean}
   * @memberof DeploymentResource
   */
  FailureEncountered?: boolean;
  /**
   *
   * @type {boolean}
   * @memberof DeploymentResource
   */
  ForcePackageDownload?: boolean;
  /**
   *
   * @type {boolean}
   * @memberof DeploymentResource
   */
  ForcePackageRedeployment?: boolean;
  /**
   *
   * @type {{ [key: string]: string; }}
   * @memberof DeploymentResource
   */
  FormValues?: { [key: string]: string };
  /**
   *
   * @type {string}
   * @memberof DeploymentResource
   */
  Id?: string;
  /**
   *
   * @type {string}
   * @memberof DeploymentResource
   */
  LastModifiedBy?: string;
  /**
   *
   * @type {string}
   * @memberof DeploymentResource
   */
  LastModifiedOn?: string;
  /**
   *
   * @type {{ [key: string]: string; }}
   * @memberof DeploymentResource
   */
  Links?: { [key: string]: string };
  /**
   *
   * @type {string}
   * @memberof DeploymentResource
   */
  ManifestVariableSetId?: string;
  /**
   *
   * @type {string}
   * @memberof DeploymentResource
   */
  Name?: string;
  /**
   *
   * @type {string}
   * @memberof DeploymentResource
   */
  ProjectId?: string;
  /**
   *
   * @type {string}
   * @memberof DeploymentResource
   */
  QueueTime?: string;
  /**
   *
   * @type {string}
   * @memberof DeploymentResource
   */
  QueueTimeExpiry?: string;
  /**
   *
   * @type {string}
   * @memberof DeploymentResource
   */
  ReleaseId: string;
  /**
   *
   * @type {Set<string>}
   * @memberof DeploymentResource
   */
  SkipActions?: Set<string>;
  /**
   *
   * @type {string}
   * @memberof DeploymentResource
   */
  SpaceId?: string;
  /**
   *
   * @type {Set<string>}
   * @memberof DeploymentResource
   */
  SpecificMachineIds?: Set<string>;
  /**
   *
   * @type {string}
   * @memberof DeploymentResource
   */
  TaskId?: string;
  /**
   *
   * @type {string}
   * @memberof DeploymentResource
   */
  TenantId?: string;
  /**
   *
   * @type {RetentionPeriod}
   * @memberof DeploymentResource
   */
  TentacleRetentionPeriod?: RetentionPeriod;
  /**
   *
   * @type {boolean}
   * @memberof DeploymentResource
   */
  UseGuidedFailure?: boolean;
}
