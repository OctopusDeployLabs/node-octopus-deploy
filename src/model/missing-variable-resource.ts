// Octopus REST API v2020.6.4722


/**
 * 
 * @export
 * @interface MissingVariableResource
 */
export interface MissingVariableResource {
    /**
     * 
     * @type {string}
     * @memberof MissingVariableResource
     */
    EnvironmentId?: string;
    /**
     * 
     * @type {string}
     * @memberof MissingVariableResource
     */
    LibraryVariableSetId?: string;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof MissingVariableResource
     */
    Links?: { [key: string]: string; };
    /**
     * 
     * @type {string}
     * @memberof MissingVariableResource
     */
    ProjectId?: string;
    /**
     * 
     * @type {string}
     * @memberof MissingVariableResource
     */
    VariableTemplateId?: string;
    /**
     * 
     * @type {string}
     * @memberof MissingVariableResource
     */
    VariableTemplateName?: string;
}
