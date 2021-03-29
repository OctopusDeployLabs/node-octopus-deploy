// Octopus REST API v2020.6.4722

import { FeedType } from './feed-type';
import { PackageAcquisitionLocation } from './package-acquisition-location';

/**
 * 
 * @export
 * @interface FeedResource
 */
export interface FeedResource {
    /**
     * 
     * @type {FeedType}
     * @memberof FeedResource
     */
    FeedType?: FeedType;
    /**
     * 
     * @type {string}
     * @memberof FeedResource
     */
    Id?: string;
    /**
     * 
     * @type {string}
     * @memberof FeedResource
     */
    LastModifiedBy?: string;
    /**
     * 
     * @type {string}
     * @memberof FeedResource
     */
    LastModifiedOn?: string;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof FeedResource
     */
    Links?: { [key: string]: string; };
    /**
     * 
     * @type {string}
     * @memberof FeedResource
     */
    Name?: string;
    /**
     * 
     * @type {Array<PackageAcquisitionLocation>}
     * @memberof FeedResource
     */
    PackageAcquisitionLocationOptions?: Array<PackageAcquisitionLocation>;
    /**
     * 
     * @type {string}
     * @memberof FeedResource
     */
    SpaceId?: string;
}
