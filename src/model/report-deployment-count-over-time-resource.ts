// Octopus REST API v2020.6.4722

import { NumericReportData } from './numeric-report-data';

/**
 * 
 * @export
 * @interface ReportDeploymentCountOverTimeResource
 */
export interface ReportDeploymentCountOverTimeResource {
    /**
     * 
     * @type {string}
     * @memberof ReportDeploymentCountOverTimeResource
     */
    Id?: string;
    /**
     * 
     * @type {string}
     * @memberof ReportDeploymentCountOverTimeResource
     */
    LastModifiedBy?: string;
    /**
     * 
     * @type {string}
     * @memberof ReportDeploymentCountOverTimeResource
     */
    LastModifiedOn?: string;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof ReportDeploymentCountOverTimeResource
     */
    Links?: { [key: string]: string; };
    /**
     * 
     * @type {string}
     * @memberof ReportDeploymentCountOverTimeResource
     */
    ProjectId?: string;
    /**
     * 
     * @type {NumericReportData}
     * @memberof ReportDeploymentCountOverTimeResource
     */
    ReportData?: NumericReportData;
}
