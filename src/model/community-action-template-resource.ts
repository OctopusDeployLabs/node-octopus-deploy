// Octopus REST API v2020.6.4722

import { ActionTemplateParameterResource } from './action-template-parameter-resource';
import { PropertyValueResource } from './property-value-resource';

/**
 * 
 * @export
 * @interface CommunityActionTemplateResource
 */
export interface CommunityActionTemplateResource {
    /**
     * 
     * @type {string}
     * @memberof CommunityActionTemplateResource
     */
    Author?: string;
    /**
     * 
     * @type {string}
     * @memberof CommunityActionTemplateResource
     */
    Description?: string;
    /**
     * 
     * @type {string}
     * @memberof CommunityActionTemplateResource
     */
    HistoryUrl?: string;
    /**
     * 
     * @type {string}
     * @memberof CommunityActionTemplateResource
     */
    Id?: string;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof CommunityActionTemplateResource
     */
    Links?: { [key: string]: string; };
    /**
     * 
     * @type {string}
     * @memberof CommunityActionTemplateResource
     */
    Name?: string;
    /**
     * 
     * @type {Array<ActionTemplateParameterResource>}
     * @memberof CommunityActionTemplateResource
     */
    Parameters?: Array<ActionTemplateParameterResource>;
    /**
     * 
     * @type {{ [key: string]: PropertyValueResource; }}
     * @memberof CommunityActionTemplateResource
     */
    Properties?: { [key: string]: PropertyValueResource; };
    /**
     * 
     * @type {string}
     * @memberof CommunityActionTemplateResource
     */
    Type?: string;
    /**
     * 
     * @type {number}
     * @memberof CommunityActionTemplateResource
     */
    Version?: number;
    /**
     * 
     * @type {string}
     * @memberof CommunityActionTemplateResource
     */
    Website?: string;
}
