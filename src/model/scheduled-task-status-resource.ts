// Octopus REST API v2020.6.4722


/**
 * 
 * @export
 * @interface ScheduledTaskStatusResource
 */
export interface ScheduledTaskStatusResource {
    /**
     * 
     * @type {string}
     * @memberof ScheduledTaskStatusResource
     */
    Id?: string;
    /**
     * 
     * @type {boolean}
     * @memberof ScheduledTaskStatusResource
     */
    IsEnabled?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ScheduledTaskStatusResource
     */
    LastModifiedBy?: string;
    /**
     * 
     * @type {string}
     * @memberof ScheduledTaskStatusResource
     */
    LastModifiedOn?: string;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof ScheduledTaskStatusResource
     */
    Links?: { [key: string]: string; };
    /**
     * 
     * @type {string}
     * @memberof ScheduledTaskStatusResource
     */
    Name?: string;
}
