// Octopus REST API v2020.6.4722

import { DynamicWorkerType } from './dynamic-worker-type';

/**
 * 
 * @export
 * @interface WorkerPoolDynamicWorkerTypesResource
 */
export interface WorkerPoolDynamicWorkerTypesResource {
    /**
     * 
     * @type {string}
     * @memberof WorkerPoolDynamicWorkerTypesResource
     */
    Id?: string;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof WorkerPoolDynamicWorkerTypesResource
     */
    Links?: { [key: string]: string; };
    /**
     * 
     * @type {Array<DynamicWorkerType>}
     * @memberof WorkerPoolDynamicWorkerTypesResource
     */
    WorkerTypes?: Array<DynamicWorkerType>;
}
