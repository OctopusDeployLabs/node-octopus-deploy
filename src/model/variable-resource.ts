// Octopus REST API v2020.6.4722

import { VariablePromptOptions } from './variable-prompt-options';
import { VariableResourceScope } from './variable-resource-scope';
import { VariableType } from './variable-type';

/**
 * 
 * @export
 * @interface VariableResource
 */
export interface VariableResource {
    /**
     * 
     * @type {string}
     * @memberof VariableResource
     */
    Description?: string;
    /**
     * 
     * @type {string}
     * @memberof VariableResource
     */
    Id?: string;
    /**
     * 
     * @type {boolean}
     * @memberof VariableResource
     */
    IsEditable?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof VariableResource
     */
    IsSensitive?: boolean;
    /**
     * 
     * @type {string}
     * @memberof VariableResource
     */
    Name?: string;
    /**
     * 
     * @type {VariablePromptOptions}
     * @memberof VariableResource
     */
    Prompt?: VariablePromptOptions;
    /**
     * 
     * @type {VariableResourceScope}
     * @memberof VariableResource
     */
    Scope?: VariableResourceScope;
    /**
     * 
     * @type {VariableType}
     * @memberof VariableResource
     */
    Type?: VariableType;
    /**
     * 
     * @type {string}
     * @memberof VariableResource
     */
    Value?: string;
}
