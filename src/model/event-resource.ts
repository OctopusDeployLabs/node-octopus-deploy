// Octopus REST API v2021.2.1290

import { ChangeDetails } from "./change-details";
import { EventReference } from "./event-reference";

/**
 *
 * @export
 * @interface EventResource
 */
export interface EventResource {
  /**
   *
   * @type {string}
   * @memberof EventResource
   */
  Category?: string;
  /**
   *
   * @type {ChangeDetails}
   * @memberof EventResource
   */
  ChangeDetails?: ChangeDetails;
  /**
   *
   * @type {string}
   * @memberof EventResource
   */
  Comments?: string;
  /**
   *
   * @type {string}
   * @memberof EventResource
   */
  Details?: string;
  /**
   *
   * @type {string}
   * @memberof EventResource
   */
  Id?: string;
  /**
   *
   * @type {string}
   * @memberof EventResource
   */
  IdentityEstablishedWith?: string;
  /**
   *
   * @type {boolean}
   * @memberof EventResource
   */
  IsService?: boolean;
  /**
   *
   * @type {string}
   * @memberof EventResource
   */
  LastModifiedBy?: string;
  /**
   *
   * @type {string}
   * @memberof EventResource
   */
  LastModifiedOn?: string;
  /**
   *
   * @type {{ [key: string]: string; }}
   * @memberof EventResource
   */
  Links?: { [key: string]: string };
  /**
   *
   * @type {string}
   * @memberof EventResource
   */
  Message?: string;
  /**
   *
   * @type {string}
   * @memberof EventResource
   */
  MessageHtml?: string;
  /**
   *
   * @type {Array<EventReference>}
   * @memberof EventResource
   */
  MessageReferences?: Array<EventReference>;
  /**
   *
   * @type {string}
   * @memberof EventResource
   */
  Occurred?: string;
  /**
   *
   * @type {Set<string>}
   * @memberof EventResource
   */
  RelatedDocumentIds?: Set<string>;
  /**
   *
   * @type {string}
   * @memberof EventResource
   */
  SpaceId?: string;
  /**
   *
   * @type {string}
   * @memberof EventResource
   */
  UserAgent?: string;
  /**
   *
   * @type {string}
   * @memberof EventResource
   */
  UserId?: string;
  /**
   *
   * @type {string}
   * @memberof EventResource
   */
  Username?: string;
}
