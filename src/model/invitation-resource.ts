// Octopus REST API v2020.6.4722


/**
 * 
 * @export
 * @interface InvitationResource
 */
export interface InvitationResource {
    /**
     * 
     * @type {Set<string>}
     * @memberof InvitationResource
     */
    AddToTeamIds: Set<string>;
    /**
     * 
     * @type {string}
     * @memberof InvitationResource
     */
    Expires?: string;
    /**
     * 
     * @type {string}
     * @memberof InvitationResource
     */
    Id?: string;
    /**
     * 
     * @type {string}
     * @memberof InvitationResource
     */
    InvitationCode?: string;
    /**
     * 
     * @type {string}
     * @memberof InvitationResource
     */
    LastModifiedBy?: string;
    /**
     * 
     * @type {string}
     * @memberof InvitationResource
     */
    LastModifiedOn?: string;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof InvitationResource
     */
    Links?: { [key: string]: string; };
    /**
     * 
     * @type {string}
     * @memberof InvitationResource
     */
    SpaceId?: string;
}
