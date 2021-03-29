// Octopus REST API v2020.6.4722


/**
 * 
 * @export
 * @interface SmtpIsConfiguredResource
 */
export interface SmtpIsConfiguredResource {
    /**
     * 
     * @type {string}
     * @memberof SmtpIsConfiguredResource
     */
    Id?: string;
    /**
     * 
     * @type {boolean}
     * @memberof SmtpIsConfiguredResource
     */
    IsConfigured?: boolean;
    /**
     * 
     * @type {string}
     * @memberof SmtpIsConfiguredResource
     */
    LastModifiedBy?: string;
    /**
     * 
     * @type {string}
     * @memberof SmtpIsConfiguredResource
     */
    LastModifiedOn?: string;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof SmtpIsConfiguredResource
     */
    Links?: { [key: string]: string; };
}
