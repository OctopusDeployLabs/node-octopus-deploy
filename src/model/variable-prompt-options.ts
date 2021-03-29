// Octopus REST API v2020.6.4722


/**
 * 
 * @export
 * @interface VariablePromptOptions
 */
export interface VariablePromptOptions {
    /**
     * 
     * @type {string}
     * @memberof VariablePromptOptions
     */
    Description?: string;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof VariablePromptOptions
     */
    DisplaySettings?: { [key: string]: string; };
    /**
     * 
     * @type {string}
     * @memberof VariablePromptOptions
     */
    Label?: string;
    /**
     * 
     * @type {boolean}
     * @memberof VariablePromptOptions
     */
    Required?: boolean;
}
