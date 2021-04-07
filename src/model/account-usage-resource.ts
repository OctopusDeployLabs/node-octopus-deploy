// Octopus REST API v2021.2.1387

import { LibraryVariableSetUsageEntry } from "./library-variable-set-usage-entry";
import { ProjectVariableSetUsage } from "./project-variable-set-usage";
import { ReleaseUsage } from "./release-usage";
import { RunbookSnapshotUsage } from "./runbook-snapshot-usage";
import { RunbookStepUsage } from "./runbook-step-usage";
import { StepUsage } from "./step-usage";
import { TargetUsageEntry } from "./target-usage-entry";

/**
 *
 * @export
 * @interface AccountUsageResource
 */
export interface AccountUsageResource {
  /**
   *
   * @type {Array<StepUsage>}
   * @memberof AccountUsageResource
   */
  DeploymentProcesses?: Array<StepUsage>;
  /**
   *
   * @type {string}
   * @memberof AccountUsageResource
   */
  Id?: string;
  /**
   *
   * @type {string}
   * @memberof AccountUsageResource
   */
  LastModifiedBy?: string;
  /**
   *
   * @type {string}
   * @memberof AccountUsageResource
   */
  LastModifiedOn?: string;
  /**
   *
   * @type {Array<LibraryVariableSetUsageEntry>}
   * @memberof AccountUsageResource
   */
  LibraryVariableSets?: Array<LibraryVariableSetUsageEntry>;
  /**
   *
   * @type {{ [key: string]: string; }}
   * @memberof AccountUsageResource
   */
  Links?: { [key: string]: string };
  /**
   *
   * @type {Array<ProjectVariableSetUsage>}
   * @memberof AccountUsageResource
   */
  ProjectVariableSets?: Array<ProjectVariableSetUsage>;
  /**
   *
   * @type {Array<ReleaseUsage>}
   * @memberof AccountUsageResource
   */
  Releases?: Array<ReleaseUsage>;
  /**
   *
   * @type {Array<RunbookStepUsage>}
   * @memberof AccountUsageResource
   */
  RunbookProcesses?: Array<RunbookStepUsage>;
  /**
   *
   * @type {Array<RunbookSnapshotUsage>}
   * @memberof AccountUsageResource
   */
  RunbookSnapshots?: Array<RunbookSnapshotUsage>;
  /**
   *
   * @type {Array<TargetUsageEntry>}
   * @memberof AccountUsageResource
   */
  Targets?: Array<TargetUsageEntry>;
}
