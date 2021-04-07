// Octopus REST API v2021.2.1387

import { LibraryVariableSetReleaseUsageEntry } from "./library-variable-set-release-usage-entry";
import { LibraryVariableSetRunbookSnapshotUsageEntry } from "./library-variable-set-runbook-snapshot-usage-entry";

/**
 *
 * @export
 * @interface LibraryVariableSetProjectUsage
 */
export interface LibraryVariableSetProjectUsage {
  /**
   *
   * @type {boolean}
   * @memberof LibraryVariableSetProjectUsage
   */
  IsCurrentlyBeingUsedInProject?: boolean;
  /**
   *
   * @type {string}
   * @memberof LibraryVariableSetProjectUsage
   */
  ProjectId?: string;
  /**
   *
   * @type {string}
   * @memberof LibraryVariableSetProjectUsage
   */
  ProjectName?: string;
  /**
   *
   * @type {string}
   * @memberof LibraryVariableSetProjectUsage
   */
  ProjectSlug?: string;
  /**
   *
   * @type {Array<LibraryVariableSetReleaseUsageEntry>}
   * @memberof LibraryVariableSetProjectUsage
   */
  Releases?: Array<LibraryVariableSetReleaseUsageEntry>;
  /**
   *
   * @type {Array<LibraryVariableSetRunbookSnapshotUsageEntry>}
   * @memberof LibraryVariableSetProjectUsage
   */
  RunbookSnapshots?: Array<LibraryVariableSetRunbookSnapshotUsageEntry>;
}
