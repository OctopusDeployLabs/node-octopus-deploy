// Octopus REST API v2020.6.4722


/**
 * 
 * @export
 * @interface SpaceResource
 */
export interface SpaceResource {
    /**
     * 
     * @type {string}
     * @memberof SpaceResource
     */
    Description?: string;
    /**
     * 
     * @type {string}
     * @memberof SpaceResource
     */
    Id?: string;
    /**
     * 
     * @type {boolean}
     * @memberof SpaceResource
     */
    IsDefault?: boolean;
    /**
     * 
     * @type {string}
     * @memberof SpaceResource
     */
    LastModifiedBy?: string;
    /**
     * 
     * @type {string}
     * @memberof SpaceResource
     */
    LastModifiedOn?: string;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof SpaceResource
     */
    Links?: { [key: string]: string; };
    /**
     * 
     * @type {string}
     * @memberof SpaceResource
     */
    Name?: string;
    /**
     * 
     * @type {Set<string>}
     * @memberof SpaceResource
     */
    SpaceManagersTeamMembers?: Set<string>;
    /**
     * 
     * @type {Set<string>}
     * @memberof SpaceResource
     */
    SpaceManagersTeams?: Set<string>;
    /**
     * 
     * @type {boolean}
     * @memberof SpaceResource
     */
    TaskQueueStopped?: boolean;
}
