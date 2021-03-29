// Octopus REST API v2020.6.4722


/**
 * 
 * @export
 * @interface MigrationImportResource
 */
export interface MigrationImportResource {
    /**
     * 
     * @type {boolean}
     * @memberof MigrationImportResource
     */
    DeletePackageOnCompletion?: boolean;
    /**
     * 
     * @type {string}
     * @memberof MigrationImportResource
     */
    FailureCallbackUri?: string;
    /**
     * 
     * @type {string}
     * @memberof MigrationImportResource
     */
    Id?: string;
    /**
     * 
     * @type {boolean}
     * @memberof MigrationImportResource
     */
    IsDryRun?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof MigrationImportResource
     */
    IsEncryptedPackage?: boolean;
    /**
     * 
     * @type {string}
     * @memberof MigrationImportResource
     */
    LastModifiedBy?: string;
    /**
     * 
     * @type {string}
     * @memberof MigrationImportResource
     */
    LastModifiedOn?: string;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof MigrationImportResource
     */
    Links?: { [key: string]: string; };
    /**
     * 
     * @type {boolean}
     * @memberof MigrationImportResource
     */
    OverwriteExisting?: boolean;
    /**
     * 
     * @type {string}
     * @memberof MigrationImportResource
     */
    PackageFeedSpaceId?: string;
    /**
     * 
     * @type {string}
     * @memberof MigrationImportResource
     */
    PackageId?: string;
    /**
     * 
     * @type {string}
     * @memberof MigrationImportResource
     */
    PackageVersion?: string;
    /**
     * 
     * @type {string}
     * @memberof MigrationImportResource
     */
    Password?: string;
    /**
     * 
     * @type {string}
     * @memberof MigrationImportResource
     */
    SuccessCallbackUri?: string;
    /**
     * 
     * @type {string}
     * @memberof MigrationImportResource
     */
    TaskId?: string;
}
