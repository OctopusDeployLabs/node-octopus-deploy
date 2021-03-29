// Octopus REST API v2020.6.4722

import { SelectedPackage } from './selected-package';

/**
 * 
 * @export
 * @interface RunbookSnapshotResource
 */
export interface RunbookSnapshotResource {
    /**
     * 
     * @type {string}
     * @memberof RunbookSnapshotResource
     */
    Assembled?: string;
    /**
     * 
     * @type {string}
     * @memberof RunbookSnapshotResource
     */
    FrozenProjectVariableSetId?: string;
    /**
     * 
     * @type {string}
     * @memberof RunbookSnapshotResource
     */
    FrozenRunbookProcessId?: string;
    /**
     * 
     * @type {string}
     * @memberof RunbookSnapshotResource
     */
    Id?: string;
    /**
     * 
     * @type {string}
     * @memberof RunbookSnapshotResource
     */
    LastModifiedBy?: string;
    /**
     * 
     * @type {string}
     * @memberof RunbookSnapshotResource
     */
    LastModifiedOn?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof RunbookSnapshotResource
     */
    LibraryVariableSetSnapshotIds?: Array<string>;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof RunbookSnapshotResource
     */
    Links?: { [key: string]: string; };
    /**
     * 
     * @type {string}
     * @memberof RunbookSnapshotResource
     */
    Name?: string;
    /**
     * 
     * @type {string}
     * @memberof RunbookSnapshotResource
     */
    Notes?: string;
    /**
     * 
     * @type {string}
     * @memberof RunbookSnapshotResource
     */
    ProjectId?: string;
    /**
     * 
     * @type {string}
     * @memberof RunbookSnapshotResource
     */
    ProjectVariableSetSnapshotId?: string;
    /**
     * 
     * @type {string}
     * @memberof RunbookSnapshotResource
     */
    RunbookId?: string;
    /**
     * 
     * @type {Array<SelectedPackage>}
     * @memberof RunbookSnapshotResource
     */
    SelectedPackages?: Array<SelectedPackage>;
    /**
     * 
     * @type {string}
     * @memberof RunbookSnapshotResource
     */
    SpaceId?: string;
}
