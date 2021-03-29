// Octopus REST API v2020.6.4722

import { WorkerPoolType } from './worker-pool-type';

/**
 * 
 * @export
 * @interface WorkerPoolSupportedTypesResource
 */
export interface WorkerPoolSupportedTypesResource {
    /**
     * 
     * @type {string}
     * @memberof WorkerPoolSupportedTypesResource
     */
    Id?: string;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof WorkerPoolSupportedTypesResource
     */
    Links?: { [key: string]: string; };
    /**
     * 
     * @type {Array<WorkerPoolType>}
     * @memberof WorkerPoolSupportedTypesResource
     */
    SupportedPoolTypes?: Array<WorkerPoolType>;
}
