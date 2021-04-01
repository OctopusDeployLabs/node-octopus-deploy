// Octopus REST API v2021.2.1290

import { ConnectivityCheck } from "./connectivity-check";
import { ListApiMetadata } from "./list-api-metadata";
import { OptionsMetadata } from "./options-metadata";
import { PropertyApplicability } from "./property-applicability";

/**
 *
 * @export
 * @interface DisplayInfo
 */
export interface DisplayInfo {
  /**
   *
   * @type {ConnectivityCheck}
   * @memberof DisplayInfo
   */
  ConnectivityCheck?: ConnectivityCheck;
  /**
   *
   * @type {string}
   * @memberof DisplayInfo
   */
  Description?: string;
  /**
   *
   * @type {string}
   * @memberof DisplayInfo
   */
  Label?: string;
  /**
   *
   * @type {ListApiMetadata}
   * @memberof DisplayInfo
   */
  ListApi?: ListApiMetadata;
  /**
   *
   * @type {OptionsMetadata}
   * @memberof DisplayInfo
   */
  Options?: OptionsMetadata;
  /**
   *
   * @type {PropertyApplicability}
   * @memberof DisplayInfo
   */
  PropertyApplicability?: PropertyApplicability;
  /**
   *
   * @type {boolean}
   * @memberof DisplayInfo
   */
  ReadOnly?: boolean;
  /**
   *
   * @type {boolean}
   * @memberof DisplayInfo
   */
  Required?: boolean;
  /**
   *
   * @type {boolean}
   * @memberof DisplayInfo
   */
  ShowCopyToClipboard?: boolean;
}
