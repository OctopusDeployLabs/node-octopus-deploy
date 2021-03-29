// Octopus REST API v2020.6.4722

import { EndpointResource } from './endpoint-resource';
import { MachineModelHealthStatus } from './machine-model-health-status';
import { MachineModelStatus } from './machine-model-status';

/**
 * 
 * @export
 * @interface WorkerResource
 */
export interface WorkerResource {
    /**
     * 
     * @type {EndpointResource}
     * @memberof WorkerResource
     */
    Endpoint?: EndpointResource;
    /**
     * 
     * @type {boolean}
     * @memberof WorkerResource
     */
    HasLatestCalamari?: boolean;
    /**
     * 
     * @type {MachineModelHealthStatus}
     * @memberof WorkerResource
     */
    HealthStatus?: MachineModelHealthStatus;
    /**
     * 
     * @type {string}
     * @memberof WorkerResource
     */
    Id?: string;
    /**
     * 
     * @type {boolean}
     * @memberof WorkerResource
     */
    IsDisabled?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof WorkerResource
     */
    IsInProcess?: boolean;
    /**
     * 
     * @type {string}
     * @memberof WorkerResource
     */
    LastModifiedBy?: string;
    /**
     * 
     * @type {string}
     * @memberof WorkerResource
     */
    LastModifiedOn?: string;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof WorkerResource
     */
    Links?: { [key: string]: string; };
    /**
     * 
     * @type {string}
     * @memberof WorkerResource
     */
    MachinePolicyId?: string;
    /**
     * 
     * @type {string}
     * @memberof WorkerResource
     */
    Name?: string;
    /**
     * 
     * @type {string}
     * @memberof WorkerResource
     */
    OperatingSystem?: string;
    /**
     * 
     * @type {string}
     * @memberof WorkerResource
     */
    ShellName?: string;
    /**
     * 
     * @type {string}
     * @memberof WorkerResource
     */
    ShellVersion?: string;
    /**
     * 
     * @type {string}
     * @memberof WorkerResource
     */
    SpaceId?: string;
    /**
     * 
     * @type {MachineModelStatus}
     * @memberof WorkerResource
     */
    Status?: MachineModelStatus;
    /**
     * 
     * @type {string}
     * @memberof WorkerResource
     */
    StatusSummary?: string;
    /**
     * 
     * @type {string}
     * @memberof WorkerResource
     */
    Thumbprint?: string;
    /**
     * 
     * @type {string}
     * @memberof WorkerResource
     */
    Uri?: string;
    /**
     * 
     * @type {Set<string>}
     * @memberof WorkerResource
     */
    WorkerPoolIds?: Set<string>;
}
