// Octopus REST API v2020.6.4722

import { CertificateFormat } from './certificate-format';
import { SensitiveValue } from './sensitive-value';
import { TenantedDeploymentMode } from './tenanted-deployment-mode';
import { X509Certificate } from './x509-certificate';

/**
 * 
 * @export
 * @interface CertificateResource
 */
export interface CertificateResource {
    /**
     * 
     * @type {string}
     * @memberof CertificateResource
     */
    Archived?: string;
    /**
     * 
     * @type {Array<X509Certificate>}
     * @memberof CertificateResource
     */
    CertificateChain?: Array<X509Certificate>;
    /**
     * 
     * @type {SensitiveValue}
     * @memberof CertificateResource
     */
    CertificateData?: SensitiveValue;
    /**
     * 
     * @type {CertificateFormat}
     * @memberof CertificateResource
     */
    CertificateDataFormat?: CertificateFormat;
    /**
     * 
     * @type {Set<string>}
     * @memberof CertificateResource
     */
    EnvironmentIds?: Set<string>;
    /**
     * 
     * @type {boolean}
     * @memberof CertificateResource
     */
    HasPrivateKey?: boolean;
    /**
     * 
     * @type {string}
     * @memberof CertificateResource
     */
    Id?: string;
    /**
     * 
     * @type {boolean}
     * @memberof CertificateResource
     */
    IsExpired?: boolean;
    /**
     * 
     * @type {string}
     * @memberof CertificateResource
     */
    IssuerCommonName?: string;
    /**
     * 
     * @type {string}
     * @memberof CertificateResource
     */
    IssuerDistinguishedName?: string;
    /**
     * 
     * @type {string}
     * @memberof CertificateResource
     */
    IssuerOrganization?: string;
    /**
     * 
     * @type {string}
     * @memberof CertificateResource
     */
    LastModifiedBy?: string;
    /**
     * 
     * @type {string}
     * @memberof CertificateResource
     */
    LastModifiedOn?: string;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof CertificateResource
     */
    Links?: { [key: string]: string; };
    /**
     * 
     * @type {string}
     * @memberof CertificateResource
     */
    Name?: string;
    /**
     * 
     * @type {string}
     * @memberof CertificateResource
     */
    NotAfter?: string;
    /**
     * 
     * @type {string}
     * @memberof CertificateResource
     */
    NotBefore?: string;
    /**
     * 
     * @type {string}
     * @memberof CertificateResource
     */
    Notes?: string;
    /**
     * 
     * @type {SensitiveValue}
     * @memberof CertificateResource
     */
    Password?: SensitiveValue;
    /**
     * 
     * @type {string}
     * @memberof CertificateResource
     */
    ReplacedBy?: string;
    /**
     * 
     * @type {boolean}
     * @memberof CertificateResource
     */
    SelfSigned?: boolean;
    /**
     * 
     * @type {string}
     * @memberof CertificateResource
     */
    SerialNumber?: string;
    /**
     * 
     * @type {string}
     * @memberof CertificateResource
     */
    SignatureAlgorithmName?: string;
    /**
     * 
     * @type {string}
     * @memberof CertificateResource
     */
    SpaceId?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof CertificateResource
     */
    SubjectAlternativeNames?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof CertificateResource
     */
    SubjectCommonName?: string;
    /**
     * 
     * @type {string}
     * @memberof CertificateResource
     */
    SubjectDistinguishedName?: string;
    /**
     * 
     * @type {string}
     * @memberof CertificateResource
     */
    SubjectOrganization?: string;
    /**
     * 
     * @type {TenantedDeploymentMode}
     * @memberof CertificateResource
     */
    TenantedDeploymentParticipation?: TenantedDeploymentMode;
    /**
     * 
     * @type {Set<string>}
     * @memberof CertificateResource
     */
    TenantIds?: Set<string>;
    /**
     * 
     * @type {Set<string>}
     * @memberof CertificateResource
     */
    TenantTags?: Set<string>;
    /**
     * 
     * @type {string}
     * @memberof CertificateResource
     */
    Thumbprint?: string;
    /**
     * 
     * @type {number}
     * @memberof CertificateResource
     */
    Version?: number;
}
