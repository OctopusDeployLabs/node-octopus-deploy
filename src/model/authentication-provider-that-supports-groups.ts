// Octopus REST API v2020.6.4722


/**
 * 
 * @export
 * @interface AuthenticationProviderThatSupportsGroups
 */
export interface AuthenticationProviderThatSupportsGroups {
    /**
     * 
     * @type {string}
     * @memberof AuthenticationProviderThatSupportsGroups
     */
    Id?: string;
    /**
     * 
     * @type {boolean}
     * @memberof AuthenticationProviderThatSupportsGroups
     */
    IsRoleBased?: boolean;
    /**
     * 
     * @type {string}
     * @memberof AuthenticationProviderThatSupportsGroups
     */
    LookupUri?: string;
    /**
     * 
     * @type {string}
     * @memberof AuthenticationProviderThatSupportsGroups
     */
    Name?: string;
    /**
     * 
     * @type {boolean}
     * @memberof AuthenticationProviderThatSupportsGroups
     */
    SupportsGroupLookup?: boolean;
}
