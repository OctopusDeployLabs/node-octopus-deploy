// Octopus REST API v2020.6.4722

import { CommitDetails } from './commit-details';
import { WorkItemLink } from './work-item-link';

/**
 * 
 * @export
 * @interface OctopusPackageMetadataMappedResource
 */
export interface OctopusPackageMetadataMappedResource {
    /**
     * 
     * @type {string}
     * @memberof OctopusPackageMetadataMappedResource
     */
    BuildEnvironment?: string;
    /**
     * 
     * @type {string}
     * @memberof OctopusPackageMetadataMappedResource
     */
    BuildNumber?: string;
    /**
     * 
     * @type {string}
     * @memberof OctopusPackageMetadataMappedResource
     */
    BuildUrl?: string;
    /**
     * 
     * @type {Array<CommitDetails>}
     * @memberof OctopusPackageMetadataMappedResource
     */
    Commits?: Array<CommitDetails>;
    /**
     * 
     * @type {string}
     * @memberof OctopusPackageMetadataMappedResource
     */
    Created?: string;
    /**
     * 
     * @type {string}
     * @memberof OctopusPackageMetadataMappedResource
     */
    Id?: string;
    /**
     * 
     * @type {string}
     * @memberof OctopusPackageMetadataMappedResource
     */
    IncompleteDataWarning?: string;
    /**
     * 
     * @type {string}
     * @memberof OctopusPackageMetadataMappedResource
     */
    IssueTrackerName?: string;
    /**
     * 
     * @type {string}
     * @memberof OctopusPackageMetadataMappedResource
     */
    LastModifiedBy?: string;
    /**
     * 
     * @type {string}
     * @memberof OctopusPackageMetadataMappedResource
     */
    LastModifiedOn?: string;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof OctopusPackageMetadataMappedResource
     */
    Links?: { [key: string]: string; };
    /**
     * 
     * @type {string}
     * @memberof OctopusPackageMetadataMappedResource
     */
    PackageId?: string;
    /**
     * 
     * @type {string}
     * @memberof OctopusPackageMetadataMappedResource
     */
    VcsCommitNumber?: string;
    /**
     * 
     * @type {string}
     * @memberof OctopusPackageMetadataMappedResource
     */
    VcsCommitUrl?: string;
    /**
     * 
     * @type {string}
     * @memberof OctopusPackageMetadataMappedResource
     */
    VcsRoot?: string;
    /**
     * 
     * @type {string}
     * @memberof OctopusPackageMetadataMappedResource
     */
    VcsType?: string;
    /**
     * 
     * @type {string}
     * @memberof OctopusPackageMetadataMappedResource
     */
    Version?: string;
    /**
     * 
     * @type {Array<WorkItemLink>}
     * @memberof OctopusPackageMetadataMappedResource
     */
    WorkItems?: Array<WorkItemLink>;
}
