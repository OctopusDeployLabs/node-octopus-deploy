// Octopus REST API v2021.2.1290

import { ActionUpdateOutcome } from "./action-update-outcome";
import { ActionUpdateRemovedPackageUsage } from "./action-update-removed-package-usage";

/**
 *
 * @export
 * @interface ActionUpdateResultResource
 */
export interface ActionUpdateResultResource {
  /**
   *
   * @type {string}
   * @memberof ActionUpdateResultResource
   */
  Id?: string;
  /**
   *
   * @type {{ [key: string]: string; }}
   * @memberof ActionUpdateResultResource
   */
  Links?: { [key: string]: string };
  /**
   *
   * @type {{ [key: string]: Array<string>; }}
   * @memberof ActionUpdateResultResource
   */
  ManualMergeRequiredReasonsByPropertyName?: { [key: string]: Array<string> };
  /**
   *
   * @type {Array<string>}
   * @memberof ActionUpdateResultResource
   */
  NamesOfNewParametersMissingDefaultValue?: Array<string>;
  /**
   *
   * @type {ActionUpdateOutcome}
   * @memberof ActionUpdateResultResource
   */
  Outcome?: ActionUpdateOutcome;
  /**
   *
   * @type {Array<ActionUpdateRemovedPackageUsage>}
   * @memberof ActionUpdateResultResource
   */
  RemovedPackageUsages?: Array<ActionUpdateRemovedPackageUsage>;
}
