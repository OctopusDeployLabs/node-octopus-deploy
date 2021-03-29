// Octopus REST API v2020.6.4722


/**
 * 
 * @export
 * @interface ModelError
 */
export interface ModelError {
    /**
     * 
     * @type {object}
     * @memberof ModelError
     */
    Details?: object;
    /**
     * 
     * @type {string}
     * @memberof ModelError
     */
    ErrorMessage?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof ModelError
     */
    Errors?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof ModelError
     */
    FullException?: string;
    /**
     * 
     * @type {string}
     * @memberof ModelError
     */
    HelpLink?: string;
    /**
     * 
     * @type {string}
     * @memberof ModelError
     */
    HelpText?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof ModelError
     */
    ParsedHelpLinks?: Array<string>;
}
