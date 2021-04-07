// Octopus REST API v2021.2.1387

import { CommunityActionTemplateResource } from "./community-action-template-resource";

/**
 *
 * @export
 * @interface CommunityActionTemplateResourceCollection
 */
export interface CommunityActionTemplateResourceCollection {
  /**
   *
   * @type {string}
   * @memberof CommunityActionTemplateResourceCollection
   */
  Id?: string;
  /**
   *
   * @type {Array<CommunityActionTemplateResource>}
   * @memberof CommunityActionTemplateResourceCollection
   */
  Items?: Array<CommunityActionTemplateResource>;
  /**
   *
   * @type {number}
   * @memberof CommunityActionTemplateResourceCollection
   */
  ItemsPerPage?: number;
  /**
   *
   * @type {string}
   * @memberof CommunityActionTemplateResourceCollection
   */
  ItemType?: string;
  /**
   *
   * @type {string}
   * @memberof CommunityActionTemplateResourceCollection
   */
  LastModifiedBy?: string;
  /**
   *
   * @type {string}
   * @memberof CommunityActionTemplateResourceCollection
   */
  LastModifiedOn?: string;
  /**
   *
   * @type {number}
   * @memberof CommunityActionTemplateResourceCollection
   */
  LastPageNumber?: number;
  /**
   *
   * @type {{ [key: string]: string; }}
   * @memberof CommunityActionTemplateResourceCollection
   */
  Links?: { [key: string]: string };
  /**
   *
   * @type {number}
   * @memberof CommunityActionTemplateResourceCollection
   */
  NumberOfPages?: number;
  /**
   *
   * @type {number}
   * @memberof CommunityActionTemplateResourceCollection
   */
  TotalResults?: number;
}
