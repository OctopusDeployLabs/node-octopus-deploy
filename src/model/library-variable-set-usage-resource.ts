// Octopus REST API v2021.2.1387

import { LibraryVariableSetProjectUsage } from "./library-variable-set-project-usage";

/**
 *
 * @export
 * @interface LibraryVariableSetUsageResource
 */
export interface LibraryVariableSetUsageResource {
  /**
   *
   * @type {number}
   * @memberof LibraryVariableSetUsageResource
   */
  CountOfProjectsUserCannotSee?: number;
  /**
   *
   * @type {number}
   * @memberof LibraryVariableSetUsageResource
   */
  CountOfReleasesUserCannotSee?: number;
  /**
   *
   * @type {number}
   * @memberof LibraryVariableSetUsageResource
   */
  CountOfRunbookSnapshotsUserCannotSee?: number;
  /**
   *
   * @type {string}
   * @memberof LibraryVariableSetUsageResource
   */
  Id?: string;
  /**
   *
   * @type {string}
   * @memberof LibraryVariableSetUsageResource
   */
  LastModifiedBy?: string;
  /**
   *
   * @type {string}
   * @memberof LibraryVariableSetUsageResource
   */
  LastModifiedOn?: string;
  /**
   *
   * @type {{ [key: string]: string; }}
   * @memberof LibraryVariableSetUsageResource
   */
  Links?: { [key: string]: string };
  /**
   *
   * @type {Array<LibraryVariableSetProjectUsage>}
   * @memberof LibraryVariableSetUsageResource
   */
  Projects?: Array<LibraryVariableSetProjectUsage>;
}
