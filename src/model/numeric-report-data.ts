// Octopus REST API v2021.2.1387

import { NumericReportSeries } from "./numeric-report-series";

/**
 *
 * @export
 * @interface NumericReportData
 */
export interface NumericReportData {
  /**
   *
   * @type {Array<string>}
   * @memberof NumericReportData
   */
  Labels?: Array<string>;
  /**
   *
   * @type {Array<NumericReportSeries>}
   * @memberof NumericReportData
   */
  Series?: Array<NumericReportSeries>;
}
