// Octopus REST API v2021.2.1290

import { StepUsageEntry } from "./step-usage-entry";

/**
 *
 * @export
 * @interface StepUsage
 */
export interface StepUsage {
  /**
   *
   * @type {string}
   * @memberof StepUsage
   */
  ProjectId?: string;
  /**
   *
   * @type {string}
   * @memberof StepUsage
   */
  ProjectName?: string;
  /**
   *
   * @type {string}
   * @memberof StepUsage
   */
  ProjectSlug?: string;
  /**
   *
   * @type {Array<StepUsageEntry>}
   * @memberof StepUsage
   */
  Steps?: Array<StepUsageEntry>;
}
