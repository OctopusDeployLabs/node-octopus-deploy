// Octopus REST API v2020.6.4722

import { CommunicationStyle } from './communication-style';

/**
 * 
 * @export
 * @interface EndpointResource
 */
export interface EndpointResource {
    /**
     * 
     * @type {CommunicationStyle}
     * @memberof EndpointResource
     */
    CommunicationStyle?: CommunicationStyle;
    /**
     * 
     * @type {string}
     * @memberof EndpointResource
     */
    Id?: string;
    /**
     * 
     * @type {string}
     * @memberof EndpointResource
     */
    LastModifiedBy?: string;
    /**
     * 
     * @type {string}
     * @memberof EndpointResource
     */
    LastModifiedOn?: string;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof EndpointResource
     */
    Links?: { [key: string]: string; };
}
