// Octopus REST API v2021.2.1290

import { PropertyApplicabilityMode } from "./property-applicability-mode";

/**
 *
 * @export
 * @interface PropertyApplicability
 */
export interface PropertyApplicability {
  /**
   *
   * @type {string}
   * @memberof PropertyApplicability
   */
  DependsOnPropertyName?: string;
  /**
   *
   * @type {object}
   * @memberof PropertyApplicability
   */
  DependsOnPropertyValue?: object;
  /**
   *
   * @type {PropertyApplicabilityMode}
   * @memberof PropertyApplicability
   */
  Mode?: PropertyApplicabilityMode;
}
