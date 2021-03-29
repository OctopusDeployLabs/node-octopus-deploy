// Octopus REST API v2020.6.4722

import { NumericReportSeries } from './numeric-report-series';

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
