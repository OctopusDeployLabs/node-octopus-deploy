// Octopus REST API v2020.6.4722

import { Form } from './form';

/**
 * 
 * @export
 * @interface InterruptionResource
 */
export interface InterruptionResource {
    /**
     * 
     * @type {boolean}
     * @memberof InterruptionResource
     */
    CanTakeResponsibility?: boolean;
    /**
     * 
     * @type {string}
     * @memberof InterruptionResource
     */
    CorrelationId?: string;
    /**
     * 
     * @type {string}
     * @memberof InterruptionResource
     */
    Created?: string;
    /**
     * 
     * @type {Form}
     * @memberof InterruptionResource
     */
    Form?: Form;
    /**
     * 
     * @type {boolean}
     * @memberof InterruptionResource
     */
    HasResponsibility?: boolean;
    /**
     * 
     * @type {string}
     * @memberof InterruptionResource
     */
    Id?: string;
    /**
     * 
     * @type {boolean}
     * @memberof InterruptionResource
     */
    IsLinkedToOtherInterruption?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof InterruptionResource
     */
    IsPending?: boolean;
    /**
     * 
     * @type {string}
     * @memberof InterruptionResource
     */
    LastModifiedBy?: string;
    /**
     * 
     * @type {string}
     * @memberof InterruptionResource
     */
    LastModifiedOn?: string;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof InterruptionResource
     */
    Links?: { [key: string]: string; };
    /**
     * 
     * @type {Set<string>}
     * @memberof InterruptionResource
     */
    RelatedDocumentIds?: Set<string>;
    /**
     * 
     * @type {Set<string>}
     * @memberof InterruptionResource
     */
    ResponsibleTeamIds?: Set<string>;
    /**
     * 
     * @type {string}
     * @memberof InterruptionResource
     */
    ResponsibleUserId?: string;
    /**
     * 
     * @type {string}
     * @memberof InterruptionResource
     */
    SpaceId?: string;
    /**
     * 
     * @type {string}
     * @memberof InterruptionResource
     */
    TaskId?: string;
    /**
     * 
     * @type {string}
     * @memberof InterruptionResource
     */
    Title?: string;
}
