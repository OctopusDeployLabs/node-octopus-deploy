// Octopus REST API v2021.2.1387

import { RetentionPeriod } from "./retention-period";

/**
 *
 * @export
 * @interface RunbookRunResource
 */
export interface RunbookRunResource {
  /**
   *
   * @type {string}
   * @memberof RunbookRunResource
   */
  Comments?: string;
  /**
   *
   * @type {string}
   * @memberof RunbookRunResource
   */
  Created?: string;
  /**
   *
   * @type {string}
   * @memberof RunbookRunResource
   */
  DeployedBy?: string;
  /**
   *
   * @type {string}
   * @memberof RunbookRunResource
   */
  DeployedById?: string;
  /**
   *
   * @type {Set<string>}
   * @memberof RunbookRunResource
   */
  DeployedToMachineIds?: Set<string>;
  /**
   *
   * @type {string}
   * @memberof RunbookRunResource
   */
  EnvironmentId: string;
  /**
   *
   * @type {Set<string>}
   * @memberof RunbookRunResource
   */
  ExcludedMachineIds?: Set<string>;
  /**
   *
   * @type {boolean}
   * @memberof RunbookRunResource
   */
  FailureEncountered?: boolean;
  /**
   *
   * @type {boolean}
   * @memberof RunbookRunResource
   */
  ForcePackageDownload?: boolean;
  /**
   *
   * @type {{ [key: string]: string; }}
   * @memberof RunbookRunResource
   */
  FormValues?: { [key: string]: string };
  /**
   *
   * @type {string}
   * @memberof RunbookRunResource
   */
  FrozenRunbookProcessId?: string;
  /**
   *
   * @type {string}
   * @memberof RunbookRunResource
   */
  Id?: string;
  /**
   *
   * @type {string}
   * @memberof RunbookRunResource
   */
  LastModifiedBy?: string;
  /**
   *
   * @type {string}
   * @memberof RunbookRunResource
   */
  LastModifiedOn?: string;
  /**
   *
   * @type {{ [key: string]: string; }}
   * @memberof RunbookRunResource
   */
  Links?: { [key: string]: string };
  /**
   *
   * @type {string}
   * @memberof RunbookRunResource
   */
  ManifestVariableSetId?: string;
  /**
   *
   * @type {string}
   * @memberof RunbookRunResource
   */
  Name?: string;
  /**
   *
   * @type {string}
   * @memberof RunbookRunResource
   */
  ProjectId?: string;
  /**
   *
   * @type {string}
   * @memberof RunbookRunResource
   */
  QueueTime?: string;
  /**
   *
   * @type {string}
   * @memberof RunbookRunResource
   */
  QueueTimeExpiry?: string;
  /**
   *
   * @type {string}
   * @memberof RunbookRunResource
   */
  RunbookId: string;
  /**
   *
   * @type {string}
   * @memberof RunbookRunResource
   */
  RunbookSnapshotId: string;
  /**
   *
   * @type {Set<string>}
   * @memberof RunbookRunResource
   */
  SkipActions?: Set<string>;
  /**
   *
   * @type {string}
   * @memberof RunbookRunResource
   */
  SpaceId?: string;
  /**
   *
   * @type {Set<string>}
   * @memberof RunbookRunResource
   */
  SpecificMachineIds?: Set<string>;
  /**
   *
   * @type {string}
   * @memberof RunbookRunResource
   */
  TaskId?: string;
  /**
   *
   * @type {string}
   * @memberof RunbookRunResource
   */
  TenantId?: string;
  /**
   *
   * @type {RetentionPeriod}
   * @memberof RunbookRunResource
   */
  TentacleRetentionPeriod?: RetentionPeriod;
  /**
   *
   * @type {boolean}
   * @memberof RunbookRunResource
   */
  UseGuidedFailure?: boolean;
}
