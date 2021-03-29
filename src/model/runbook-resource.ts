// Octopus REST API v2020.6.4722

import { DeploymentConnectivityPolicy } from './deployment-connectivity-policy';
import { GuidedFailureMode } from './guided-failure-mode';
import { RunbookEnvironmentScope } from './runbook-environment-scope';
import { RunbookRetentionPeriod } from './runbook-retention-period';
import { TenantedDeploymentMode } from './tenanted-deployment-mode';

/**
 * 
 * @export
 * @interface RunbookResource
 */
export interface RunbookResource {
    /**
     * 
     * @type {DeploymentConnectivityPolicy}
     * @memberof RunbookResource
     */
    ConnectivityPolicy?: DeploymentConnectivityPolicy;
    /**
     * 
     * @type {GuidedFailureMode}
     * @memberof RunbookResource
     */
    DefaultGuidedFailureMode?: GuidedFailureMode;
    /**
     * 
     * @type {string}
     * @memberof RunbookResource
     */
    Description?: string;
    /**
     * 
     * @type {Set<string>}
     * @memberof RunbookResource
     */
    Environments?: Set<string>;
    /**
     * 
     * @type {RunbookEnvironmentScope}
     * @memberof RunbookResource
     */
    EnvironmentScope?: RunbookEnvironmentScope;
    /**
     * 
     * @type {string}
     * @memberof RunbookResource
     */
    Id?: string;
    /**
     * 
     * @type {string}
     * @memberof RunbookResource
     */
    LastModifiedBy?: string;
    /**
     * 
     * @type {string}
     * @memberof RunbookResource
     */
    LastModifiedOn?: string;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof RunbookResource
     */
    Links?: { [key: string]: string; };
    /**
     * 
     * @type {TenantedDeploymentMode}
     * @memberof RunbookResource
     */
    MultiTenancyMode?: TenantedDeploymentMode;
    /**
     * 
     * @type {string}
     * @memberof RunbookResource
     */
    Name?: string;
    /**
     * 
     * @type {string}
     * @memberof RunbookResource
     */
    ProjectId?: string;
    /**
     * 
     * @type {string}
     * @memberof RunbookResource
     */
    PublishedRunbookSnapshotId?: string;
    /**
     * 
     * @type {string}
     * @memberof RunbookResource
     */
    RunbookProcessId?: string;
    /**
     * 
     * @type {RunbookRetentionPeriod}
     * @memberof RunbookResource
     */
    RunRetentionPolicy?: RunbookRetentionPeriod;
    /**
     * 
     * @type {string}
     * @memberof RunbookResource
     */
    SpaceId?: string;
}
