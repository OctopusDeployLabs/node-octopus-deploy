// Octopus REST API v2021.2.1387

import { ReleaseUsageEntry } from "./release-usage-entry";
import { RunbookSnapshotUsageEntry } from "./runbook-snapshot-usage-entry";

/**
 *
 * @export
 * @interface ProjectVariableSetUsage
 */
export interface ProjectVariableSetUsage {
  /**
   *
   * @type {boolean}
   * @memberof ProjectVariableSetUsage
   */
  IsCurrentlyBeingUsedInProject?: boolean;
  /**
   *
   * @type {string}
   * @memberof ProjectVariableSetUsage
   */
  ProjectId?: string;
  /**
   *
   * @type {string}
   * @memberof ProjectVariableSetUsage
   */
  ProjectName?: string;
  /**
   *
   * @type {string}
   * @memberof ProjectVariableSetUsage
   */
  ProjectSlug?: string;
  /**
   *
   * @type {Array<ReleaseUsageEntry>}
   * @memberof ProjectVariableSetUsage
   */
  Releases?: Array<ReleaseUsageEntry>;
  /**
   *
   * @type {Array<RunbookSnapshotUsageEntry>}
   * @memberof ProjectVariableSetUsage
   */
  RunbookSnapshots?: Array<RunbookSnapshotUsageEntry>;
}
