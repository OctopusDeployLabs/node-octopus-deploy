// Octopus REST API v2020.6.4722

import { MachineScriptPolicyRunType } from './machine-script-policy-run-type';

/**
 * 
 * @export
 * @interface MachineScriptPolicy
 */
export interface MachineScriptPolicy {
    /**
     * 
     * @type {MachineScriptPolicyRunType}
     * @memberof MachineScriptPolicy
     */
    RunType?: MachineScriptPolicyRunType;
    /**
     * 
     * @type {string}
     * @memberof MachineScriptPolicy
     */
    ScriptBody?: string;
}
