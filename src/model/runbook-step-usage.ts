// Octopus REST API v2021.2.1387

import { StepUsageEntry } from "./step-usage-entry";

/**
 *
 * @export
 * @interface RunbookStepUsage
 */
export interface RunbookStepUsage {
  /**
   *
   * @type {string}
   * @memberof RunbookStepUsage
   */
  ProcessId?: string;
  /**
   *
   * @type {string}
   * @memberof RunbookStepUsage
   */
  ProjectId?: string;
  /**
   *
   * @type {string}
   * @memberof RunbookStepUsage
   */
  ProjectName?: string;
  /**
   *
   * @type {string}
   * @memberof RunbookStepUsage
   */
  ProjectSlug?: string;
  /**
   *
   * @type {string}
   * @memberof RunbookStepUsage
   */
  RunbookId?: string;
  /**
   *
   * @type {string}
   * @memberof RunbookStepUsage
   */
  RunbookName?: string;
  /**
   *
   * @type {Array<StepUsageEntry>}
   * @memberof RunbookStepUsage
   */
  Steps?: Array<StepUsageEntry>;
}
