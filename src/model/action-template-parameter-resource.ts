// Octopus REST API v2020.6.4722

import { PropertyValueResource } from './property-value-resource';

/**
 * 
 * @export
 * @interface ActionTemplateParameterResource
 */
export interface ActionTemplateParameterResource {
    /**
     * 
     * @type {PropertyValueResource}
     * @memberof ActionTemplateParameterResource
     */
    DefaultValue?: PropertyValueResource;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof ActionTemplateParameterResource
     */
    DisplaySettings?: { [key: string]: string; };
    /**
     * 
     * @type {string}
     * @memberof ActionTemplateParameterResource
     */
    HelpText?: string;
    /**
     * 
     * @type {string}
     * @memberof ActionTemplateParameterResource
     */
    Id?: string;
    /**
     * 
     * @type {string}
     * @memberof ActionTemplateParameterResource
     */
    Label?: string;
    /**
     * 
     * @type {string}
     * @memberof ActionTemplateParameterResource
     */
    Name?: string;
}
