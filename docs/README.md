# Documentation for Octopus Server API

<a name="documentation-for-api-endpoints"></a>
## Documentation for API Endpoints

All URIs are relative to *http://localhost/api*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*AccountsApi* | [**createAccount**](client/AccountsApi.md#createaccount) | **POST** /accounts | Create a AccountResource
*AccountsApi* | [**createAccountSpaces**](client/AccountsApi.md#createaccountspaces) | **POST** /{baseSpaceId}/accounts | Create a AccountResource
*AccountsApi* | [**deleteAccount**](client/AccountsApi.md#deleteaccount) | **DELETE** /accounts/{id} | Delete a AccountResource by ID
*AccountsApi* | [**deleteAccountSpaces**](client/AccountsApi.md#deleteaccountspaces) | **DELETE** /{baseSpaceId}/accounts/{id} | Delete a AccountResource by ID
*AccountsApi* | [**getAccountById**](client/AccountsApi.md#getaccountbyid) | **GET** /accounts/{id} | Get an Account by ID
*AccountsApi* | [**getAccountByIdSpaces**](client/AccountsApi.md#getaccountbyidspaces) | **GET** /{baseSpaceId}/accounts/{id} | Get an Account by ID
*AccountsApi* | [**getAccountPublicKeyDownload**](client/AccountsApi.md#getaccountpublickeydownload) | **GET** /accounts/{id}/pk | Downloads the public key portion of the account's associated certificate, if present.
*AccountsApi* | [**getAccountPublicKeyDownloadSpaces**](client/AccountsApi.md#getaccountpublickeydownloadspaces) | **GET** /{baseSpaceId}/accounts/{id}/pk | Downloads the public key portion of the account's associated certificate, if present.
*AccountsApi* | [**getAccountUsageList**](client/AccountsApi.md#getaccountusagelist) | **GET** /accounts/{id}/usages | Lists projects and deployments which are using an account.
*AccountsApi* | [**getAccountUsageListSpaces**](client/AccountsApi.md#getaccountusagelistspaces) | **GET** /{baseSpaceId}/accounts/{id}/usages | Lists projects and deployments which are using an account.
*AccountsApi* | [**getAzureEnvironmentsList**](client/AccountsApi.md#getazureenvironmentslist) | **GET** /accounts/azureenvironments | Lists the Azure Environments provided by the SDK
*AccountsApi* | [**getAzureResourceGroupsList**](client/AccountsApi.md#getazureresourcegroupslist) | **GET** /accounts/{id}/resourceGroups | Lists the Resource Groups associated with an Azure account.
*AccountsApi* | [**getAzureResourceGroupsListSpaces**](client/AccountsApi.md#getazureresourcegroupslistspaces) | **GET** /{baseSpaceId}/accounts/{id}/resourceGroups | Lists the Resource Groups associated with an Azure account.
*AccountsApi* | [**getAzureStorageAccountsList**](client/AccountsApi.md#getazurestorageaccountslist) | **GET** /accounts/{id}/storageAccounts | Lists the storage accounts associated with an Azure account.
*AccountsApi* | [**getAzureStorageAccountsListSpaces**](client/AccountsApi.md#getazurestorageaccountslistspaces) | **GET** /{baseSpaceId}/accounts/{id}/storageAccounts | Lists the storage accounts associated with an Azure account.
*AccountsApi* | [**getAzureWebSitesList**](client/AccountsApi.md#getazurewebsiteslist) | **GET** /accounts/{id}/websites | Lists the websites associated with an Azure account.
*AccountsApi* | [**getAzureWebSitesListSpaces**](client/AccountsApi.md#getazurewebsiteslistspaces) | **GET** /{baseSpaceId}/accounts/{id}/websites | Lists the websites associated with an Azure account.
*AccountsApi* | [**getAzureWebSitesSlotList**](client/AccountsApi.md#getazurewebsitesslotlist) | **GET** /accounts/{id}/{resourceGroupName}/websites/{webSiteName}/slots | Lists the slots associated with an Azure Web Site.
*AccountsApi* | [**getAzureWebSitesSlotListSpaces**](client/AccountsApi.md#getazurewebsitesslotlistspaces) | **GET** /{baseSpaceId}/accounts/{id}/{resourceGroupName}/websites/{webSiteName}/slots | Lists the slots associated with an Azure Web Site.
*AccountsApi* | [**indexAccounts**](client/AccountsApi.md#indexaccounts) | **GET** /accounts | Get a list of AccountResources
*AccountsApi* | [**indexAccountsSpaces**](client/AccountsApi.md#indexaccountsspaces) | **GET** /{baseSpaceId}/accounts | Get a list of AccountResources
*AccountsApi* | [**listAllAccounts**](client/AccountsApi.md#listallaccounts) | **GET** /accounts/all | Get a list of Accounts
*AccountsApi* | [**listAllAccountsSpaces**](client/AccountsApi.md#listallaccountsspaces) | **GET** /{baseSpaceId}/accounts/all | Get a list of Accounts
*AccountsApi* | [**updateAccount**](client/AccountsApi.md#updateaccount) | **PUT** /accounts/{id} | Modify a AccountResource by ID
*AccountsApi* | [**updateAccountSpaces**](client/AccountsApi.md#updateaccountspaces) | **PUT** /{baseSpaceId}/accounts/{id} | Modify a AccountResource by ID
*ActionTemplatesApi* | [**createActionTemplate**](client/ActionTemplatesApi.md#createactiontemplate) | **POST** /actiontemplates | Create a ActionTemplateResource
*ActionTemplatesApi* | [**createActionTemplateActions**](client/ActionTemplatesApi.md#createactiontemplateactions) | **POST** /actiontemplates/{id}/actionsUpdate | Updates deployment actions to specific version of action template
*ActionTemplatesApi* | [**createActionTemplateActionsSpaces**](client/ActionTemplatesApi.md#createactiontemplateactionsspaces) | **POST** /{baseSpaceId}/actiontemplates/{id}/actionsUpdate | Updates deployment actions to specific version of action template
*ActionTemplatesApi* | [**createActionTemplateLogo**](client/ActionTemplatesApi.md#createactiontemplatelogo) | **POST** /actiontemplates/{id}/logo | Updates the logo associated with the latest version of the action template.
*ActionTemplatesApi* | [**createActionTemplateLogoSpaces**](client/ActionTemplatesApi.md#createactiontemplatelogospaces) | **POST** /{baseSpaceId}/actiontemplates/{id}/logo | Updates the logo associated with the latest version of the action template.
*ActionTemplatesApi* | [**createActionTemplateSpaces**](client/ActionTemplatesApi.md#createactiontemplatespaces) | **POST** /{baseSpaceId}/actiontemplates | Create a ActionTemplateResource
*ActionTemplatesApi* | [**deleteActionTemplate**](client/ActionTemplatesApi.md#deleteactiontemplate) | **DELETE** /actiontemplates/{id} | Delete a ActionTemplateResource by ID
*ActionTemplatesApi* | [**deleteActionTemplateSpaces**](client/ActionTemplatesApi.md#deleteactiontemplatespaces) | **DELETE** /{baseSpaceId}/actiontemplates/{id} | Delete a ActionTemplateResource by ID
*ActionTemplatesApi* | [**getActionTemplateById**](client/ActionTemplatesApi.md#getactiontemplatebyid) | **GET** /actiontemplates/{id} | Get an Action Template by ID
*ActionTemplatesApi* | [**getActionTemplateByIdSpaces**](client/ActionTemplatesApi.md#getactiontemplatebyidspaces) | **GET** /{baseSpaceId}/actiontemplates/{id} | Get an Action Template by ID
*ActionTemplatesApi* | [**getActionTemplateCategories**](client/ActionTemplatesApi.md#getactiontemplatecategories) | **GET** /actiontemplates/categories | Lists action template categories.
*ActionTemplatesApi* | [**getActionTemplateCategoriesSpaces**](client/ActionTemplatesApi.md#getactiontemplatecategoriesspaces) | **GET** /{baseSpaceId}/actiontemplates/categories | Lists action template categories.
*ActionTemplatesApi* | [**getActionTemplateLogo**](client/ActionTemplatesApi.md#getactiontemplatelogo) | **GET** /actiontemplates/{id}/logo | Gets the logo associated with the latest version of action template.
*ActionTemplatesApi* | [**getActionTemplateLogoSpaces**](client/ActionTemplatesApi.md#getactiontemplatelogospaces) | **GET** /{baseSpaceId}/actiontemplates/{id}/logo | Gets the logo associated with the latest version of action template.
*ActionTemplatesApi* | [**getActionTemplateLogoVersion**](client/ActionTemplatesApi.md#getactiontemplatelogoversion) | **GET** /actiontemplates/{typeOrId}/versions/{version}/logo | Gets the logo associated with specific version of the action template.
*ActionTemplatesApi* | [**getActionTemplateLogoVersionSpaces**](client/ActionTemplatesApi.md#getactiontemplatelogoversionspaces) | **GET** /{baseSpaceId}/actiontemplates/{typeOrId}/versions/{version}/logo | Gets the logo associated with specific version of the action template.
*ActionTemplatesApi* | [**getActionTemplateUsage**](client/ActionTemplatesApi.md#getactiontemplateusage) | **GET** /actiontemplates/{id}/usage | Gets a list of all steps/deployment processes that use a given action template.
*ActionTemplatesApi* | [**getActionTemplateUsageSpaces**](client/ActionTemplatesApi.md#getactiontemplateusagespaces) | **GET** /{baseSpaceId}/actiontemplates/{id}/usage | Gets a list of all steps/deployment processes that use a given action template.
*ActionTemplatesApi* | [**getActionTemplateVersion**](client/ActionTemplatesApi.md#getactiontemplateversion) | **GET** /actiontemplates/{id}/versions | Gets specific version of action template.
*ActionTemplatesApi* | [**getActionTemplateVersion1**](client/ActionTemplatesApi.md#getactiontemplateversion1) | **GET** /actiontemplates/{id}/versions/{version} | Gets specific version of action template.
*ActionTemplatesApi* | [**getActionTemplateVersionSpaces**](client/ActionTemplatesApi.md#getactiontemplateversionspaces) | **GET** /{baseSpaceId}/actiontemplates/{id}/versions | Gets specific version of action template.
*ActionTemplatesApi* | [**getActionTemplateVersionSpaces1**](client/ActionTemplatesApi.md#getactiontemplateversionspaces1) | **GET** /{baseSpaceId}/actiontemplates/{id}/versions/{version} | Gets specific version of action template.
*ActionTemplatesApi* | [**getActionTemplatesSearch**](client/ActionTemplatesApi.md#getactiontemplatessearch) | **GET** /actiontemplates/search | Lists all available action templates including built-in, custom and community contributed step templates.
*ActionTemplatesApi* | [**getActionTemplatesSearchSpaces**](client/ActionTemplatesApi.md#getactiontemplatessearchspaces) | **GET** /{baseSpaceId}/actiontemplates/search | Lists all available action templates including built-in, custom and community contributed step templates.
*ActionTemplatesApi* | [**getAllActionTemplates**](client/ActionTemplatesApi.md#getallactiontemplates) | **GET** /actiontemplates/all | Get all Action Templates
*ActionTemplatesApi* | [**getAllActionTemplatesSpaces**](client/ActionTemplatesApi.md#getallactiontemplatesspaces) | **GET** /{baseSpaceId}/actiontemplates/all | Get all Action Templates
*ActionTemplatesApi* | [**indexActionTemplates**](client/ActionTemplatesApi.md#indexactiontemplates) | **GET** /actiontemplates | Get a list of ActionTemplateResources
*ActionTemplatesApi* | [**indexActionTemplatesSpaces**](client/ActionTemplatesApi.md#indexactiontemplatesspaces) | **GET** /{baseSpaceId}/actiontemplates | Get a list of ActionTemplateResources
*ActionTemplatesApi* | [**updateActionTemplate**](client/ActionTemplatesApi.md#updateactiontemplate) | **PUT** /actiontemplates/{id} | Modify a ActionTemplateResource by ID
*ActionTemplatesApi* | [**updateActionTemplateLogo**](client/ActionTemplatesApi.md#updateactiontemplatelogo) | **PUT** /actiontemplates/{id}/logo | Updates the logo associated with the latest version of the action template.
*ActionTemplatesApi* | [**updateActionTemplateLogoSpaces**](client/ActionTemplatesApi.md#updateactiontemplatelogospaces) | **PUT** /{baseSpaceId}/actiontemplates/{id}/logo | Updates the logo associated with the latest version of the action template.
*ActionTemplatesApi* | [**updateActionTemplateSpaces**](client/ActionTemplatesApi.md#updateactiontemplatespaces) | **PUT** /{baseSpaceId}/actiontemplates/{id} | Modify a ActionTemplateResource by ID
*ApiKeysApi* | [**createApiKey**](client/ApiKeysApi.md#createapikey) | **POST** /users/{userId}/apikeys | Generates a new API key for the specified user. The API key returned in the result must be saved by the caller, as it cannot be retrieved subsequently from the Octopus server.
*ApiKeysApi* | [**deleteApiKey**](client/ApiKeysApi.md#deleteapikey) | **DELETE** /users/{userId}/apikeys/{id} | Delete a ApiKeyResource by ID
*ApiKeysApi* | [**getApiKeyById**](client/ApiKeysApi.md#getapikeybyid) | **GET** /users/{userId}/apikeys/{id} | Get a ApiKeyResource by ID
*ApiKeysApi* | [**indexApiKeys**](client/ApiKeysApi.md#indexapikeys) | **GET** /users/{userId}/apikeys | Get a list of ApiKeyResources
*ArtifactsApi* | [**createArtifact**](client/ArtifactsApi.md#createartifact) | **POST** /artifacts | Create a ArtifactResource
*ArtifactsApi* | [**createArtifactSpaces**](client/ArtifactsApi.md#createartifactspaces) | **POST** /{baseSpaceId}/artifacts | Create a ArtifactResource
*ArtifactsApi* | [**deleteArtifact**](client/ArtifactsApi.md#deleteartifact) | **DELETE** /artifacts/{id} | Delete a ArtifactResource by ID
*ArtifactsApi* | [**deleteArtifactSpaces**](client/ArtifactsApi.md#deleteartifactspaces) | **DELETE** /{baseSpaceId}/artifacts/{id} | Delete a ArtifactResource by ID
*ArtifactsApi* | [**getArtifactById**](client/ArtifactsApi.md#getartifactbyid) | **GET** /artifacts/{id} | Get an Artifact by ID
*ArtifactsApi* | [**getArtifactByIdSpaces**](client/ArtifactsApi.md#getartifactbyidspaces) | **GET** /{baseSpaceId}/artifacts/{id} | Get an Artifact by ID
*ArtifactsApi* | [**getArtifactContent**](client/ArtifactsApi.md#getartifactcontent) | **GET** /artifacts/{id}/content | Gets the content associated with an artifact.
*ArtifactsApi* | [**getArtifactContentSpaces**](client/ArtifactsApi.md#getartifactcontentspaces) | **GET** /{baseSpaceId}/artifacts/{id}/content | Gets the content associated with an artifact.
*ArtifactsApi* | [**indexArtifacts**](client/ArtifactsApi.md#indexartifacts) | **GET** /artifacts | Get a list of ArtifactResources
*ArtifactsApi* | [**indexArtifactsSpaces**](client/ArtifactsApi.md#indexartifactsspaces) | **GET** /{baseSpaceId}/artifacts | Get a list of ArtifactResources
*ArtifactsApi* | [**updateArtifact**](client/ArtifactsApi.md#updateartifact) | **PUT** /artifacts/{id} | Modify a ArtifactResource by ID
*ArtifactsApi* | [**updateArtifactContent**](client/ArtifactsApi.md#updateartifactcontent) | **PUT** /artifacts/{id}/content | Sets the content associated with an artifact.
*ArtifactsApi* | [**updateArtifactContentSpaces**](client/ArtifactsApi.md#updateartifactcontentspaces) | **PUT** /{baseSpaceId}/artifacts/{id}/content | Sets the content associated with an artifact.
*ArtifactsApi* | [**updateArtifactSpaces**](client/ArtifactsApi.md#updateartifactspaces) | **PUT** /{baseSpaceId}/artifacts/{id} | Modify a ArtifactResource by ID
*AuthenticationApi* | [**createLoginInitiated**](client/AuthenticationApi.md#createlogininitiated) | **POST** /authentication/checklogininitiated | Given a URL query string, determines whether an external server (.e.g Okta) has initiated login and if so the provider's name
*AuthenticationApi* | [**getAuthentication**](client/AuthenticationApi.md#getauthentication) | **GET** /authentication | Provides the details of the enabled authentication providers.
*AzureDevOpsApi* | [**createAzureDevOpsConnectivityCheck**](client/AzureDevOpsApi.md#createazuredevopsconnectivitycheck) | **POST** /azuredevopsissuetracker/connectivitycheck | 
*BuildInformationApi* | [**createBuildInformation**](client/BuildInformationApi.md#createbuildinformation) | **POST** /build-information | Updates a specific build information record describing the vcs information for a given package
*BuildInformationApi* | [**createBuildInformationSpaces**](client/BuildInformationApi.md#createbuildinformationspaces) | **POST** /{baseSpaceId}/build-information | Updates a specific build information record describing the vcs information for a given package
*BuildInformationApi* | [**deleteBuildInformationDeleteById**](client/BuildInformationApi.md#deletebuildinformationdeletebyid) | **DELETE** /build-information/{id} | Deletes a specific build information record
*BuildInformationApi* | [**deleteBuildInformationDeleteByIdSpaces**](client/BuildInformationApi.md#deletebuildinformationdeletebyidspaces) | **DELETE** /{baseSpaceId}/build-information/{id} | Deletes a specific build information record
*BuildInformationApi* | [**deleteBuildInformationDeleteByIds**](client/BuildInformationApi.md#deletebuildinformationdeletebyids) | **DELETE** /build-information/bulk | Bulk deletes specific build information records
*BuildInformationApi* | [**deleteBuildInformationDeleteByIdsSpaces**](client/BuildInformationApi.md#deletebuildinformationdeletebyidsspaces) | **DELETE** /{baseSpaceId}/build-information/bulk | Bulk deletes specific build information records
*BuildInformationApi* | [**getBuildInformation**](client/BuildInformationApi.md#getbuildinformation) | **GET** /build-information/{id} | Retrieves a specific build information record describing the vcs information for a given package
*BuildInformationApi* | [**getBuildInformationList**](client/BuildInformationApi.md#getbuildinformationlist) | **GET** /build-information | Retrieves a list of build information records describing the vcs information for a given package
*BuildInformationApi* | [**getBuildInformationListSpaces**](client/BuildInformationApi.md#getbuildinformationlistspaces) | **GET** /{baseSpaceId}/build-information | Retrieves a list of build information records describing the vcs information for a given package
*BuildInformationApi* | [**getBuildInformationSpaces**](client/BuildInformationApi.md#getbuildinformationspaces) | **GET** /{baseSpaceId}/build-information/{id} | Retrieves a specific build information record describing the vcs information for a given package
*CertificateConfigurationApi* | [**getCertificateConfigurationById**](client/CertificateConfigurationApi.md#getcertificateconfigurationbyid) | **GET** /configuration/certificates/{id} | Get a Certificate Configuration by ID
*CertificateConfigurationApi* | [**getCertificateConfigurationByIdLegacy**](client/CertificateConfigurationApi.md#getcertificateconfigurationbyidlegacy) | **GET** /certificates/certificate-global | Returns the server thumbprint used to identify this Octopus Server to any Tentacles when executing a deployment. Deprecated.
*CertificateConfigurationApi* | [**getCertificatePublicCerDownload**](client/CertificateConfigurationApi.md#getcertificatepubliccerdownload) | **GET** /configuration/certificates/{id}/public-cer | Downloads the public portion of the certificate in .cer format
*CertificateConfigurationApi* | [**indexCertificateConfigurations**](client/CertificateConfigurationApi.md#indexcertificateconfigurations) | **GET** /configuration/certificates | Get a list of CertificateConfigurationResources
*CertificatesApi* | [**createCertificate**](client/CertificatesApi.md#createcertificate) | **POST** /certificates | Create a CertificateResource
*CertificatesApi* | [**createCertificateArchive**](client/CertificatesApi.md#createcertificatearchive) | **POST** /certificates/{id}/archive | Archives a certificate
*CertificatesApi* | [**createCertificateArchiveSpaces**](client/CertificatesApi.md#createcertificatearchivespaces) | **POST** /{baseSpaceId}/certificates/{id}/archive | Archives a certificate
*CertificatesApi* | [**createCertificateCreateSelfSigned**](client/CertificatesApi.md#createcertificatecreateselfsigned) | **POST** /certificates/generate | Creates a self signed certificate
*CertificatesApi* | [**createCertificateCreateSelfSignedSpaces**](client/CertificatesApi.md#createcertificatecreateselfsignedspaces) | **POST** /{baseSpaceId}/certificates/generate | Creates a self signed certificate
*CertificatesApi* | [**createCertificateReplace**](client/CertificatesApi.md#createcertificatereplace) | **POST** /certificates/{id}/replace | Replaces a certificate with another
*CertificatesApi* | [**createCertificateReplaceSpaces**](client/CertificatesApi.md#createcertificatereplacespaces) | **POST** /{baseSpaceId}/certificates/{id}/replace | Replaces a certificate with another
*CertificatesApi* | [**createCertificateSpaces**](client/CertificatesApi.md#createcertificatespaces) | **POST** /{baseSpaceId}/certificates | Create a CertificateResource
*CertificatesApi* | [**createCertificateUnArchive**](client/CertificatesApi.md#createcertificateunarchive) | **POST** /certificates/{id}/unarchive | Un-archives a certificate
*CertificatesApi* | [**createCertificateUnArchiveSpaces**](client/CertificatesApi.md#createcertificateunarchivespaces) | **POST** /{baseSpaceId}/certificates/{id}/unarchive | Un-archives a certificate
*CertificatesApi* | [**deleteCertificate**](client/CertificatesApi.md#deletecertificate) | **DELETE** /certificates/{id} | Delete a CertificateResource by ID
*CertificatesApi* | [**deleteCertificateSpaces**](client/CertificatesApi.md#deletecertificatespaces) | **DELETE** /{baseSpaceId}/certificates/{id} | Delete a CertificateResource by ID
*CertificatesApi* | [**getCertificateByIdOrThumbprint**](client/CertificatesApi.md#getcertificatebyidorthumbprint) | **GET** /certificates/{id} | Get a certificate by ID or thumbprint
*CertificatesApi* | [**getCertificateByIdOrThumbprintSpaces**](client/CertificatesApi.md#getcertificatebyidorthumbprintspaces) | **GET** /{baseSpaceId}/certificates/{id} | Get a certificate by ID or thumbprint
*CertificatesApi* | [**getCertificateExport**](client/CertificatesApi.md#getcertificateexport) | **GET** /certificates/{id}/export | Exports the certificate
*CertificatesApi* | [**getCertificateExportSpaces**](client/CertificatesApi.md#getcertificateexportspaces) | **GET** /{baseSpaceId}/certificates/{id}/export | Exports the certificate
*CertificatesApi* | [**getCertificateUsage**](client/CertificatesApi.md#getcertificateusage) | **GET** /certificates/{id}/usages | Get the usages of a certificate
*CertificatesApi* | [**getCertificateUsageSpaces**](client/CertificatesApi.md#getcertificateusagespaces) | **GET** /{baseSpaceId}/certificates/{id}/usages | Get the usages of a certificate
*CertificatesApi* | [**indexCertificates**](client/CertificatesApi.md#indexcertificates) | **GET** /certificates | Get a list of CertificateResources
*CertificatesApi* | [**indexCertificatesSpaces**](client/CertificatesApi.md#indexcertificatesspaces) | **GET** /{baseSpaceId}/certificates | Get a list of CertificateResources
*CertificatesApi* | [**listAllCertificates**](client/CertificatesApi.md#listallcertificates) | **GET** /certificates/all | Get a list of Certificates
*CertificatesApi* | [**listAllCertificatesSpaces**](client/CertificatesApi.md#listallcertificatesspaces) | **GET** /{baseSpaceId}/certificates/all | Get a list of Certificates
*CertificatesApi* | [**updateCertificate**](client/CertificatesApi.md#updatecertificate) | **PUT** /certificates/{id} | Modify a CertificateResource by ID
*CertificatesApi* | [**updateCertificateSpaces**](client/CertificatesApi.md#updatecertificatespaces) | **PUT** /{baseSpaceId}/certificates/{id} | Modify a CertificateResource by ID
*ChannelsApi* | [**createChannel**](client/ChannelsApi.md#createchannel) | **POST** /channels | Create a ChannelResource
*ChannelsApi* | [**createChannelSpaces**](client/ChannelsApi.md#createchannelspaces) | **POST** /{baseSpaceId}/channels | Create a ChannelResource
*ChannelsApi* | [**createVersionRuleTest**](client/ChannelsApi.md#createversionruletest) | **POST** /channels/rule-test | Perform channel version rule test against provided package version
*ChannelsApi* | [**createVersionRuleTestSpaces**](client/ChannelsApi.md#createversionruletestspaces) | **POST** /{baseSpaceId}/channels/rule-test | Perform channel version rule test against provided package version
*ChannelsApi* | [**deleteChannel**](client/ChannelsApi.md#deletechannel) | **DELETE** /channels/{id} | Delete a ChannelResource by ID
*ChannelsApi* | [**deleteChannelSpaces**](client/ChannelsApi.md#deletechannelspaces) | **DELETE** /{baseSpaceId}/channels/{id} | Delete a ChannelResource by ID
*ChannelsApi* | [**getChannelById**](client/ChannelsApi.md#getchannelbyid) | **GET** /channels/{id} | Get a Channel by ID
*ChannelsApi* | [**getChannelByIdSpaces**](client/ChannelsApi.md#getchannelbyidspaces) | **GET** /{baseSpaceId}/channels/{id} | Get a Channel by ID
*ChannelsApi* | [**getVersionRuleTest**](client/ChannelsApi.md#getversionruletest) | **GET** /channels/rule-test | Perform channel version rule test against provided package version
*ChannelsApi* | [**getVersionRuleTestSpaces**](client/ChannelsApi.md#getversionruletestspaces) | **GET** /{baseSpaceId}/channels/rule-test | Perform channel version rule test against provided package version
*ChannelsApi* | [**indexChannelReleases**](client/ChannelsApi.md#indexchannelreleases) | **GET** /channels/{id}/releases | Get a list of ReleaseResources for the given ChannelResource
*ChannelsApi* | [**indexChannelReleasesSpaces**](client/ChannelsApi.md#indexchannelreleasesspaces) | **GET** /{baseSpaceId}/channels/{id}/releases | Get a list of ReleaseResources for the given ChannelResource
*ChannelsApi* | [**indexChannels**](client/ChannelsApi.md#indexchannels) | **GET** /channels | Get a list of ChannelResources
*ChannelsApi* | [**indexChannelsSpaces**](client/ChannelsApi.md#indexchannelsspaces) | **GET** /{baseSpaceId}/channels | Get a list of ChannelResources
*ChannelsApi* | [**indexProjectChannels**](client/ChannelsApi.md#indexprojectchannels) | **GET** /projects/{id}/channels | Get a list of ChannelResources for the given ProjectResource
*ChannelsApi* | [**indexProjectChannelsSpaces**](client/ChannelsApi.md#indexprojectchannelsspaces) | **GET** /{baseSpaceId}/projects/{id}/channels | Get a list of ChannelResources for the given ProjectResource
*ChannelsApi* | [**listAllChannels**](client/ChannelsApi.md#listallchannels) | **GET** /channels/all | Get a list of Channels
*ChannelsApi* | [**listAllChannelsSpaces**](client/ChannelsApi.md#listallchannelsspaces) | **GET** /{baseSpaceId}/channels/all | Get a list of Channels
*ChannelsApi* | [**updateChannel**](client/ChannelsApi.md#updatechannel) | **PUT** /channels/{id} | Modify a ChannelResource by ID
*ChannelsApi* | [**updateChannelSpaces**](client/ChannelsApi.md#updatechannelspaces) | **PUT** /{baseSpaceId}/channels/{id} | Modify a ChannelResource by ID
*CloudTemplateApi* | [**createCloudTemplateMetadata**](client/CloudTemplateApi.md#createcloudtemplatemetadata) | **POST** /cloudtemplate/{id}/metadata | Provides parameter metadata for a cloud (AWS etc) resource template
*CommunityActionTemplatesApi* | [**createCommunityActionTemplateInstallation**](client/CommunityActionTemplatesApi.md#createcommunityactiontemplateinstallation) | **POST** /communityactiontemplates/{id}/installation | Installs community step template.
*CommunityActionTemplatesApi* | [**createCommunityActionTemplateInstallation1**](client/CommunityActionTemplatesApi.md#createcommunityactiontemplateinstallation1) | **POST** /communityactiontemplates/{id}/installation/{spaceId} | Installs community step template.
*CommunityActionTemplatesApi* | [**getActionTemplateBasedOnCommunityActionTemplate**](client/CommunityActionTemplatesApi.md#getactiontemplatebasedoncommunityactiontemplate) | **GET** /communityactiontemplates/{id}/actiontemplate | Gets installed version of the template.
*CommunityActionTemplatesApi* | [**getActionTemplateBasedOnCommunityActionTemplate1**](client/CommunityActionTemplatesApi.md#getactiontemplatebasedoncommunityactiontemplate1) | **GET** /communityactiontemplates/{id}/actiontemplate/{spaceId} | Gets installed version of the template.
*CommunityActionTemplatesApi* | [**getCommunityActionTemplateById**](client/CommunityActionTemplatesApi.md#getcommunityactiontemplatebyid) | **GET** /communityactiontemplates/{id} | Get a Community Action Template by ID
*CommunityActionTemplatesApi* | [**getCommunityActionTemplateLogo**](client/CommunityActionTemplatesApi.md#getcommunityactiontemplatelogo) | **GET** /communityactiontemplates/{id}/logo | Gets the logo associated with the community step template.
*CommunityActionTemplatesApi* | [**indexCommunityActionTemplates**](client/CommunityActionTemplatesApi.md#indexcommunityactiontemplates) | **GET** /communityactiontemplates | Get a list of Community Action Templates
*CommunityActionTemplatesApi* | [**updateCommunityActionTemplateInstallationPut**](client/CommunityActionTemplatesApi.md#updatecommunityactiontemplateinstallationput) | **PUT** /communityactiontemplates/{id}/installation | Updates installed community step template to the latest version.
*CommunityActionTemplatesApi* | [**updateCommunityActionTemplateInstallationPut1**](client/CommunityActionTemplatesApi.md#updatecommunityactiontemplateinstallationput1) | **PUT** /communityactiontemplates/{id}/installation/{spaceId} | Updates installed community step template to the latest version.
*ConfigurationApi* | [**getConfigurationItemMetadata**](client/ConfigurationApi.md#getconfigurationitemmetadata) | **GET** /configuration/{id}/metadata | Returns a structure that describes how to dynamically render the configuration section
*ConfigurationApi* | [**getConfigurationItemValues**](client/ConfigurationApi.md#getconfigurationitemvalues) | **GET** /configuration/{id}/values | Returns the current configuration for a specific configuration section
*ConfigurationApi* | [**getConfigurationSectionList**](client/ConfigurationApi.md#getconfigurationsectionlist) | **GET** /configuration | Returns a list of configuration section settings
*ConfigurationApi* | [**getConfigurationSectionMetadata**](client/ConfigurationApi.md#getconfigurationsectionmetadata) | **GET** /configuration/{id} | Returns a single configuration section for the given id
*ConfigurationApi* | [**updateConfigurationItem**](client/ConfigurationApi.md#updateconfigurationitem) | **PUT** /configuration/{id}/values | Updates the configuration values for a specific configuration section
*DashboardConfigurationsApi* | [**getDashboardConfiguration**](client/DashboardConfigurationsApi.md#getdashboardconfiguration) | **GET** /dashboardconfiguration | Returns the dashboard configuration for the current user
*DashboardConfigurationsApi* | [**getDashboardConfigurationSpaces**](client/DashboardConfigurationsApi.md#getdashboardconfigurationspaces) | **GET** /{baseSpaceId}/dashboardconfiguration | Returns the dashboard configuration for the current user
*DashboardConfigurationsApi* | [**updateDashboardConfiguration**](client/DashboardConfigurationsApi.md#updatedashboardconfiguration) | **PUT** /dashboardconfiguration | Updates the dashboard configuration for the current user
*DashboardConfigurationsApi* | [**updateDashboardConfigurationSpaces**](client/DashboardConfigurationsApi.md#updatedashboardconfigurationspaces) | **PUT** /{baseSpaceId}/dashboardconfiguration | Updates the dashboard configuration for the current user
*DashboardsApi* | [**getDashboardView**](client/DashboardsApi.md#getdashboardview) | **GET** /dashboard | Returns information required to render the Octopus dashboard
*DashboardsApi* | [**getDashboardViewSpaces**](client/DashboardsApi.md#getdashboardviewspaces) | **GET** /{baseSpaceId}/dashboard | Returns information required to render the Octopus dashboard
*DashboardsApi* | [**getDynamicDashboardView**](client/DashboardsApi.md#getdynamicdashboardview) | **GET** /dashboard/dynamic | Returns the information required to render the dynamic dashboard. Deprecated.
*DashboardsApi* | [**getDynamicDashboardViewSpaces**](client/DashboardsApi.md#getdynamicdashboardviewspaces) | **GET** /{baseSpaceId}/dashboard/dynamic | Returns the information required to render the dynamic dashboard. Deprecated.
*DeploymentProcessesApi* | [**getDeploymentProcessById**](client/DeploymentProcessesApi.md#getdeploymentprocessbyid) | **GET** /deploymentprocesses/{id} | Get a Deployment Process by ID.
*DeploymentProcessesApi* | [**getDeploymentProcessByIdSpaces**](client/DeploymentProcessesApi.md#getdeploymentprocessbyidspaces) | **GET** /{baseSpaceId}/deploymentprocesses/{id} | Get a Deployment Process by ID.
*DeploymentProcessesApi* | [**getReleaseTemplate**](client/DeploymentProcessesApi.md#getreleasetemplate) | **GET** /deploymentprocesses/{deploymentProcessId}/template | Gets all of the information necessary for creating or editing a release using this deployment process.
*DeploymentProcessesApi* | [**getReleaseTemplateSpaces**](client/DeploymentProcessesApi.md#getreleasetemplatespaces) | **GET** /{baseSpaceId}/deploymentprocesses/{deploymentProcessId}/template | Gets all of the information necessary for creating or editing a release using this deployment process.
*DeploymentProcessesApi* | [**listDeploymentProcesses**](client/DeploymentProcessesApi.md#listdeploymentprocesses) | **GET** /deploymentprocesses | Lists all the deployment processes
*DeploymentProcessesApi* | [**listDeploymentProcessesSpaces**](client/DeploymentProcessesApi.md#listdeploymentprocessesspaces) | **GET** /{baseSpaceId}/deploymentprocesses | Lists all the deployment processes
*DeploymentProcessesApi* | [**updateDeploymentProcessById**](client/DeploymentProcessesApi.md#updatedeploymentprocessbyid) | **PUT** /deploymentprocesses/{id} | Modifies a deployment process
*DeploymentProcessesApi* | [**updateDeploymentProcessByIdSpaces**](client/DeploymentProcessesApi.md#updatedeploymentprocessbyidspaces) | **PUT** /{baseSpaceId}/deploymentprocesses/{id} | Modifies a deployment process
*DeploymentSettingsApi* | [**getDeploymentSettingsById**](client/DeploymentSettingsApi.md#getdeploymentsettingsbyid) | **GET** /deploymentsettings/{id} | Gets deployment settings by ID.
*DeploymentSettingsApi* | [**getDeploymentSettingsByIdSpaces**](client/DeploymentSettingsApi.md#getdeploymentsettingsbyidspaces) | **GET** /{baseSpaceId}/deploymentsettings/{id} | Gets deployment settings by ID.
*DeploymentSettingsApi* | [**updateDeploymentSettingsById**](client/DeploymentSettingsApi.md#updatedeploymentsettingsbyid) | **PUT** /deploymentsettings/{id} | Modifies deployment settings
*DeploymentSettingsApi* | [**updateDeploymentSettingsByIdSpaces**](client/DeploymentSettingsApi.md#updatedeploymentsettingsbyidspaces) | **PUT** /{baseSpaceId}/deploymentsettings/{id} | Modifies deployment settings
*DeploymentsApi* | [**createDeploymentCreate**](client/DeploymentsApi.md#createdeploymentcreate) | **POST** /deployments | Creates a new deployment.
*DeploymentsApi* | [**createDeploymentCreateSpaces**](client/DeploymentsApi.md#createdeploymentcreatespaces) | **POST** /{baseSpaceId}/deployments | Creates a new deployment.
*DeploymentsApi* | [**deleteDeployment**](client/DeploymentsApi.md#deletedeployment) | **DELETE** /deployments/{id} | Delete a DeploymentResource by ID
*DeploymentsApi* | [**deleteDeploymentSpaces**](client/DeploymentsApi.md#deletedeploymentspaces) | **DELETE** /{baseSpaceId}/deployments/{id} | Delete a DeploymentResource by ID
*DeploymentsApi* | [**getDeploymentById**](client/DeploymentsApi.md#getdeploymentbyid) | **GET** /deployments/{id} | Get a Deployment by ID
*DeploymentsApi* | [**getDeploymentByIdSpaces**](client/DeploymentsApi.md#getdeploymentbyidspaces) | **GET** /{baseSpaceId}/deployments/{id} | Get a Deployment by ID
*DeploymentsApi* | [**indexDeployments**](client/DeploymentsApi.md#indexdeployments) | **GET** /deployments | Get a list of DeploymentResources
*DeploymentsApi* | [**indexDeploymentsSpaces**](client/DeploymentsApi.md#indexdeploymentsspaces) | **GET** /{baseSpaceId}/deployments | Get a list of DeploymentResources
*DynamicExtensionsApi* | [**getDynamicExtensionsFeaturesMetadata**](client/DynamicExtensionsApi.md#getdynamicextensionsfeaturesmetadata) | **GET** /dynamic-extensions/features/metadata | Retrieves the current dynamic extensions feature metadata.
*DynamicExtensionsApi* | [**getDynamicExtensionsFeaturesValues**](client/DynamicExtensionsApi.md#getdynamicextensionsfeaturesvalues) | **GET** /dynamic-extensions/features/values | Retrieves the current dynamic extensions feature values.
*DynamicExtensionsApi* | [**updateDynamicExtensionsFeaturesValues**](client/DynamicExtensionsApi.md#updatedynamicextensionsfeaturesvalues) | **PUT** /dynamic-extensions/features/values | Modifies the current dynamic extensions feature values.
*EnvironmentsApi* | [**createEnvironment**](client/EnvironmentsApi.md#createenvironment) | **POST** /environments | Create a EnvironmentResource
*EnvironmentsApi* | [**createEnvironmentSpaces**](client/EnvironmentsApi.md#createenvironmentspaces) | **POST** /{baseSpaceId}/environments | Create a EnvironmentResource
*EnvironmentsApi* | [**deleteEnvironment**](client/EnvironmentsApi.md#deleteenvironment) | **DELETE** /environments/{id} | Delete a EnvironmentResource by ID
*EnvironmentsApi* | [**deleteEnvironmentSpaces**](client/EnvironmentsApi.md#deleteenvironmentspaces) | **DELETE** /{baseSpaceId}/environments/{id} | Delete a EnvironmentResource by ID
*EnvironmentsApi* | [**getDeploymentEnvironmentSettingsMetadata**](client/EnvironmentsApi.md#getdeploymentenvironmentsettingsmetadata) | **GET** /environments/{id}/metadata | Gets the custom settings metadata from the extensions.
*EnvironmentsApi* | [**getDeploymentEnvironmentSettingsMetadataSpaces**](client/EnvironmentsApi.md#getdeploymentenvironmentsettingsmetadataspaces) | **GET** /{baseSpaceId}/environments/{id}/metadata | Gets the custom settings metadata from the extensions.
*EnvironmentsApi* | [**getEnvironmentById**](client/EnvironmentsApi.md#getenvironmentbyid) | **GET** /environments/{id} | Get an Environment by ID
*EnvironmentsApi* | [**getEnvironmentByIdSpaces**](client/EnvironmentsApi.md#getenvironmentbyidspaces) | **GET** /{baseSpaceId}/environments/{id} | Get an Environment by ID
*EnvironmentsApi* | [**getEnvironmentsSummary**](client/EnvironmentsApi.md#getenvironmentssummary) | **GET** /environments/summary | Lists all environments, including a summary of machine information
*EnvironmentsApi* | [**getEnvironmentsSummarySpaces**](client/EnvironmentsApi.md#getenvironmentssummaryspaces) | **GET** /{baseSpaceId}/environments/summary | Lists all environments, including a summary of machine information
*EnvironmentsApi* | [**getVariablesScopedToEnvironment**](client/EnvironmentsApi.md#getvariablesscopedtoenvironment) | **GET** /environments/{id}/singlyScopedVariableDetails | Lists all the variable set names (projects and library variable sets) that have variables that are scoped to only the given environment
*EnvironmentsApi* | [**getVariablesScopedToEnvironmentSpaces**](client/EnvironmentsApi.md#getvariablesscopedtoenvironmentspaces) | **GET** /{baseSpaceId}/environments/{id}/singlyScopedVariableDetails | Lists all the variable set names (projects and library variable sets) that have variables that are scoped to only the given environment
*EnvironmentsApi* | [**indexEnvironmentDeploymentTargets**](client/EnvironmentsApi.md#indexenvironmentdeploymenttargets) | **GET** /environments/{id}/machines | Get a list of DeploymentTargetResources for the given EnvironmentResource
*EnvironmentsApi* | [**indexEnvironmentDeploymentTargetsSpaces**](client/EnvironmentsApi.md#indexenvironmentdeploymenttargetsspaces) | **GET** /{baseSpaceId}/environments/{id}/machines | Get a list of DeploymentTargetResources for the given EnvironmentResource
*EnvironmentsApi* | [**indexEnvironments**](client/EnvironmentsApi.md#indexenvironments) | **GET** /environments | Get a list of EnvironmentResources
*EnvironmentsApi* | [**indexEnvironmentsSpaces**](client/EnvironmentsApi.md#indexenvironmentsspaces) | **GET** /{baseSpaceId}/environments | Get a list of EnvironmentResources
*EnvironmentsApi* | [**listAllEnvironments**](client/EnvironmentsApi.md#listallenvironments) | **GET** /environments/all | Get a list of EnvironmentResources
*EnvironmentsApi* | [**listAllEnvironmentsSpaces**](client/EnvironmentsApi.md#listallenvironmentsspaces) | **GET** /{baseSpaceId}/environments/all | Get a list of EnvironmentResources
*EnvironmentsApi* | [**updateEnvironment**](client/EnvironmentsApi.md#updateenvironment) | **PUT** /environments/{id} | Modify a EnvironmentResource by ID
*EnvironmentsApi* | [**updateEnvironmentSpaces**](client/EnvironmentsApi.md#updateenvironmentspaces) | **PUT** /{baseSpaceId}/environments/{id} | Modify a EnvironmentResource by ID
*EnvironmentsApi* | [**updateSortEnvironments**](client/EnvironmentsApi.md#updatesortenvironments) | **PUT** /environments/sortorder | Takes an array of environment IDs as the request body, uses the order of items in the array to sort the environments on the server. The ID of every environment must be specified.
*EnvironmentsApi* | [**updateSortEnvironmentsSpaces**](client/EnvironmentsApi.md#updatesortenvironmentsspaces) | **PUT** /{baseSpaceId}/environments/sortorder | Takes an array of environment IDs as the request body, uses the order of items in the array to sort the environments on the server. The ID of every environment must be specified.
*EventsApi* | [**getEvent**](client/EventsApi.md#getevent) | **GET** /events/{id} | Gets a single event by ID.
*EventsApi* | [**getEventSpaces**](client/EventsApi.md#geteventspaces) | **GET** /{baseSpaceId}/events/{id} | Gets a single event by ID.
*EventsApi* | [**getListEventAgents**](client/EventsApi.md#getlisteventagents) | **GET** /events/agents | Lists event agents.
*EventsApi* | [**getListEventAgentsSpaces**](client/EventsApi.md#getlisteventagentsspaces) | **GET** /{baseSpaceId}/events/agents | Lists event agents.
*EventsApi* | [**getListEventCategories**](client/EventsApi.md#getlisteventcategories) | **GET** /events/categories | Lists event categories.
*EventsApi* | [**getListEventCategoriesSpaces**](client/EventsApi.md#getlisteventcategoriesspaces) | **GET** /{baseSpaceId}/events/categories | Lists event categories.
*EventsApi* | [**getListEventDocumentTypes**](client/EventsApi.md#getlisteventdocumenttypes) | **GET** /events/documenttypes | Lists subscription event document types.
*EventsApi* | [**getListEventDocumentTypesSpaces**](client/EventsApi.md#getlisteventdocumenttypesspaces) | **GET** /{baseSpaceId}/events/documenttypes | Lists subscription event document types.
*EventsApi* | [**getListEventGroups**](client/EventsApi.md#getlisteventgroups) | **GET** /events/groups | Lists subscription event groups.
*EventsApi* | [**getListEventGroupsSpaces**](client/EventsApi.md#getlisteventgroupsspaces) | **GET** /{baseSpaceId}/events/groups | Lists subscription event groups.
*EventsApi* | [**getListEvents**](client/EventsApi.md#getlistevents) | **GET** /events | List all of the the audit events collected to date. Events can be filtered by various criteria. Events will be ordered by the date of the event, descending.
*EventsApi* | [**getListEventsSpaces**](client/EventsApi.md#getlisteventsspaces) | **GET** /{baseSpaceId}/events | List all of the the audit events collected to date. Events can be filtered by various criteria. Events will be ordered by the date of the event, descending.
*ExternalSecurityGroupsApi* | [**getListProvidersThatSupportExternalSecurityGroups**](client/ExternalSecurityGroupsApi.md#getlistprovidersthatsupportexternalsecuritygroups) | **GET** /externalsecuritygroupproviders | Lists the authentication providers that support external group lookups.
*FeaturesConfigurationApi* | [**getFeaturesConfiguration**](client/FeaturesConfigurationApi.md#getfeaturesconfiguration) | **GET** /featuresconfiguration | Gets information about the features configuration in use by the Octopus Server
*FeaturesConfigurationApi* | [**updateFeaturesConfiguration**](client/FeaturesConfigurationApi.md#updatefeaturesconfiguration) | **PUT** /featuresconfiguration | Updates the features configuration used by the Octopus Server
*FeedsApi* | [**createFeed**](client/FeedsApi.md#createfeed) | **POST** /feeds | Create a FeedResource
*FeedsApi* | [**createFeedSpaces**](client/FeedsApi.md#createfeedspaces) | **POST** /{baseSpaceId}/feeds | Create a FeedResource
*FeedsApi* | [**deleteFeed**](client/FeedsApi.md#deletefeed) | **DELETE** /feeds/{id} | Delete a FeedResource by ID
*FeedsApi* | [**deleteFeedSpaces**](client/FeedsApi.md#deletefeedspaces) | **DELETE** /{baseSpaceId}/feeds/{id} | Delete a FeedResource by ID
*FeedsApi* | [**getBuiltInFeedStats**](client/FeedsApi.md#getbuiltinfeedstats) | **GET** /feeds/stats | Provides statistics for the built-in package repository.
*FeedsApi* | [**getBuiltInFeedStatsSpaces**](client/FeedsApi.md#getbuiltinfeedstatsspaces) | **GET** /{baseSpaceId}/feeds/stats | Provides statistics for the built-in package repository.
*FeedsApi* | [**getFeedById**](client/FeedsApi.md#getfeedbyid) | **GET** /feeds/{id} | Get a FeedResource by ID
*FeedsApi* | [**getFeedByIdSpaces**](client/FeedsApi.md#getfeedbyidspaces) | **GET** /{baseSpaceId}/feeds/{id} | Get a FeedResource by ID
*FeedsApi* | [**getPackageSearch**](client/FeedsApi.md#getpackagesearch) | **GET** /feeds/{id}/packages/search | Searches the specified feed for packages based on the specified search term
*FeedsApi* | [**getPackageSearchSpaces**](client/FeedsApi.md#getpackagesearchspaces) | **GET** /{baseSpaceId}/feeds/{id}/packages/search | Searches the specified feed for packages based on the specified search term
*FeedsApi* | [**getPackageVersionSearch**](client/FeedsApi.md#getpackageversionsearch) | **GET** /feeds/{id}/packages/versions | Lists available versions of the package specified
*FeedsApi* | [**getPackageVersionSearchSpaces**](client/FeedsApi.md#getpackageversionsearchspaces) | **GET** /{baseSpaceId}/feeds/{id}/packages/versions | Lists available versions of the package specified
*FeedsApi* | [**indexFeeds**](client/FeedsApi.md#indexfeeds) | **GET** /feeds | Get a list of FeedResources
*FeedsApi* | [**indexFeedsSpaces**](client/FeedsApi.md#indexfeedsspaces) | **GET** /{baseSpaceId}/feeds | Get a list of FeedResources
*FeedsApi* | [**listAllFeeds**](client/FeedsApi.md#listallfeeds) | **GET** /feeds/all | Get a list of FeedResources
*FeedsApi* | [**listAllFeedsSpaces**](client/FeedsApi.md#listallfeedsspaces) | **GET** /{baseSpaceId}/feeds/all | Get a list of FeedResources
*FeedsApi* | [**updateFeed**](client/FeedsApi.md#updatefeed) | **PUT** /feeds/{id} | Modify a FeedResource by ID
*FeedsApi* | [**updateFeedSpaces**](client/FeedsApi.md#updatefeedspaces) | **PUT** /{baseSpaceId}/feeds/{id} | Modify a FeedResource by ID
*HomeApi* | [**getHome**](client/HomeApi.md#gethome) | **GET** / | Returns a document describing the current Octopus Server and links to other parts of the API.
*InterruptionsApi* | [**createSubmitInterruption**](client/InterruptionsApi.md#createsubmitinterruption) | **POST** /interruptions/{id}/submit | Submits a dictionary of form values for the interruption. Only the user with responsibility for this interruption can submit this form.
*InterruptionsApi* | [**createSubmitInterruptionSpaces**](client/InterruptionsApi.md#createsubmitinterruptionspaces) | **POST** /{baseSpaceId}/interruptions/{id}/submit | Submits a dictionary of form values for the interruption. Only the user with responsibility for this interruption can submit this form.
*InterruptionsApi* | [**getInterruptionById**](client/InterruptionsApi.md#getinterruptionbyid) | **GET** /interruptions/{id} | Get an Interruption by ID
*InterruptionsApi* | [**getInterruptionByIdSpaces**](client/InterruptionsApi.md#getinterruptionbyidspaces) | **GET** /{baseSpaceId}/interruptions/{id} | Get an Interruption by ID
*InterruptionsApi* | [**getInterruptionResponsibility**](client/InterruptionsApi.md#getinterruptionresponsibility) | **GET** /interruptions/{id}/responsible | Gets the user that is currently responsible for this interruption.
*InterruptionsApi* | [**getInterruptionResponsibilitySpaces**](client/InterruptionsApi.md#getinterruptionresponsibilityspaces) | **GET** /{baseSpaceId}/interruptions/{id}/responsible | Gets the user that is currently responsible for this interruption.
*InterruptionsApi* | [**indexInterruptions**](client/InterruptionsApi.md#indexinterruptions) | **GET** /interruptions | Get a list of InterruptionResources
*InterruptionsApi* | [**indexInterruptionsSpaces**](client/InterruptionsApi.md#indexinterruptionsspaces) | **GET** /{baseSpaceId}/interruptions | Get a list of InterruptionResources
*InterruptionsApi* | [**updateInterruptionResponsibility**](client/InterruptionsApi.md#updateinterruptionresponsibility) | **PUT** /interruptions/{id}/responsible | Allows the current user to take responsibility for this interruption. Only users in one of the responsible teams on this interruption can take responsibility for it.
*InterruptionsApi* | [**updateInterruptionResponsibilitySpaces**](client/InterruptionsApi.md#updateinterruptionresponsibilityspaces) | **PUT** /{baseSpaceId}/interruptions/{id}/responsible | Allows the current user to take responsibility for this interruption. Only users in one of the responsible teams on this interruption can take responsibility for it.
*InvitationsApi* | [**createInvitation**](client/InvitationsApi.md#createinvitation) | **POST** /users/invitations | Create a InvitationResource
*InvitationsApi* | [**createInvitationSpaces**](client/InvitationsApi.md#createinvitationspaces) | **POST** /{baseSpaceId}/users/invitations | Create a InvitationResource
*InvitationsApi* | [**getInvitationById**](client/InvitationsApi.md#getinvitationbyid) | **GET** /users/invitations/{id} | Get an Invitation by ID
*InvitationsApi* | [**getInvitationByIdSpaces**](client/InvitationsApi.md#getinvitationbyidspaces) | **GET** /{baseSpaceId}/users/invitations/{id} | Get an Invitation by ID
*JiraIntegrationApi* | [**createJiraConnectAppConnectivityCheck**](client/JiraIntegrationApi.md#createjiraconnectappconnectivitycheck) | **POST** /jiraintegration/connectivitycheck/connectapp | 
*JiraIntegrationApi* | [**createJiraCredentialsConnectivityCheck**](client/JiraIntegrationApi.md#createjiracredentialsconnectivitycheck) | **POST** /jiraintegration/connectivitycheck/jira | 
*LetsEncryptApi* | [**getLetsEncryptConfiguration**](client/LetsEncryptApi.md#getletsencryptconfiguration) | **GET** /letsencryptconfiguration | Returns the current Let's Encrypt configuration
*LetsEncryptApi* | [**getLetsEncryptHttpChallenge**](client/LetsEncryptApi.md#getletsencrypthttpchallenge) | **GET** /.well-known/acme-challenge//{token} | Returns the computed HTTP challenge for a given token
*LetsEncryptApi* | [**updateLetsEncryptConfiguration**](client/LetsEncryptApi.md#updateletsencryptconfiguration) | **PUT** /letsencryptconfiguration | Updates the Let's Encrypt configuration used by the Octopus Server.
*LibraryVariableSetsApi* | [**createLibraryVariableSet**](client/LibraryVariableSetsApi.md#createlibraryvariableset) | **POST** /libraryvariablesets | Create a LibraryVariableSetResource
*LibraryVariableSetsApi* | [**createLibraryVariableSetSpaces**](client/LibraryVariableSetsApi.md#createlibraryvariablesetspaces) | **POST** /{baseSpaceId}/libraryvariablesets | Create a LibraryVariableSetResource
*LibraryVariableSetsApi* | [**deleteLibraryVariableSet**](client/LibraryVariableSetsApi.md#deletelibraryvariableset) | **DELETE** /libraryvariablesets/{id} | Delete a LibraryVariableSetResource by ID
*LibraryVariableSetsApi* | [**deleteLibraryVariableSetSpaces**](client/LibraryVariableSetsApi.md#deletelibraryvariablesetspaces) | **DELETE** /{baseSpaceId}/libraryvariablesets/{id} | Delete a LibraryVariableSetResource by ID
*LibraryVariableSetsApi* | [**getLibraryVariableSetById**](client/LibraryVariableSetsApi.md#getlibraryvariablesetbyid) | **GET** /libraryvariablesets/{id} | Get a Library Variable Set by ID
*LibraryVariableSetsApi* | [**getLibraryVariableSetByIdSpaces**](client/LibraryVariableSetsApi.md#getlibraryvariablesetbyidspaces) | **GET** /{baseSpaceId}/libraryvariablesets/{id} | Get a Library Variable Set by ID
*LibraryVariableSetsApi* | [**getLibraryVariableSetUsageList**](client/LibraryVariableSetsApi.md#getlibraryvariablesetusagelist) | **GET** /libraryvariablesets/{id}/usages | Lists projects and deployments which are using an library variable set.
*LibraryVariableSetsApi* | [**getLibraryVariableSetUsageListSpaces**](client/LibraryVariableSetsApi.md#getlibraryvariablesetusagelistspaces) | **GET** /{baseSpaceId}/libraryvariablesets/{id}/usages | Lists projects and deployments which are using an library variable set.
*LibraryVariableSetsApi* | [**indexLibraryVariableSets**](client/LibraryVariableSetsApi.md#indexlibraryvariablesets) | **GET** /libraryvariablesets | Get a list of LibraryVariableSetResources
*LibraryVariableSetsApi* | [**indexLibraryVariableSetsSpaces**](client/LibraryVariableSetsApi.md#indexlibraryvariablesetsspaces) | **GET** /{baseSpaceId}/libraryvariablesets | Get a list of LibraryVariableSetResources
*LibraryVariableSetsApi* | [**listAllLibraryVariableSets**](client/LibraryVariableSetsApi.md#listalllibraryvariablesets) | **GET** /libraryvariablesets/all | Get a list of LibraryVariableSetResources
*LibraryVariableSetsApi* | [**listAllLibraryVariableSetsSpaces**](client/LibraryVariableSetsApi.md#listalllibraryvariablesetsspaces) | **GET** /{baseSpaceId}/libraryvariablesets/all | Get a list of LibraryVariableSetResources
*LibraryVariableSetsApi* | [**updateLibraryVariableSet**](client/LibraryVariableSetsApi.md#updatelibraryvariableset) | **PUT** /libraryvariablesets/{id} | Modify a LibraryVariableSetResource by ID
*LibraryVariableSetsApi* | [**updateLibraryVariableSetSpaces**](client/LibraryVariableSetsApi.md#updatelibraryvariablesetspaces) | **PUT** /{baseSpaceId}/libraryvariablesets/{id} | Modify a LibraryVariableSetResource by ID
*LicensesApi* | [**getLicenseGetCurrent**](client/LicensesApi.md#getlicensegetcurrent) | **GET** /licenses/licenses-current | Returns the details of the current license in use by the Octopus Cluster.
*LicensesApi* | [**getLicenseStatusGetCurrent**](client/LicensesApi.md#getlicensestatusgetcurrent) | **GET** /licenses/licenses-current-status | Calculates the status of the current Octopus license including compliance and maintenance expiry.
*LicensesApi* | [**updateLicensePutCurrent**](client/LicensesApi.md#updatelicenseputcurrent) | **PUT** /licenses/licenses-current | Updates the license for the Octopus cluster.
*LifecyclesApi* | [**createLifecycle**](client/LifecyclesApi.md#createlifecycle) | **POST** /lifecycles | Create a LifecycleResource
*LifecyclesApi* | [**createLifecycleSpaces**](client/LifecyclesApi.md#createlifecyclespaces) | **POST** /{baseSpaceId}/lifecycles | Create a LifecycleResource
*LifecyclesApi* | [**deleteLifecycle**](client/LifecyclesApi.md#deletelifecycle) | **DELETE** /lifecycles/{id} | Delete a LifecycleResource by ID
*LifecyclesApi* | [**deleteLifecycleSpaces**](client/LifecyclesApi.md#deletelifecyclespaces) | **DELETE** /{baseSpaceId}/lifecycles/{id} | Delete a LifecycleResource by ID
*LifecyclesApi* | [**getLifecycleById**](client/LifecyclesApi.md#getlifecyclebyid) | **GET** /lifecycles/{id} | Get a Lifecycle by ID
*LifecyclesApi* | [**getLifecycleByIdSpaces**](client/LifecyclesApi.md#getlifecyclebyidspaces) | **GET** /{baseSpaceId}/lifecycles/{id} | Get a Lifecycle by ID
*LifecyclesApi* | [**getLifecyclePreview**](client/LifecyclesApi.md#getlifecyclepreview) | **GET** /lifecycles/{id}/preview | Gets a single lifecycle by ID, as a preview.
*LifecyclesApi* | [**getLifecyclePreviewSpaces**](client/LifecyclesApi.md#getlifecyclepreviewspaces) | **GET** /{baseSpaceId}/lifecycles/{id}/preview | Gets a single lifecycle by ID, as a preview.
*LifecyclesApi* | [**getLifecycleProjects**](client/LifecyclesApi.md#getlifecycleprojects) | **GET** /lifecycles/{id}/projects | Gets a all projects that use this lifecycle.
*LifecyclesApi* | [**getLifecycleProjectsSpaces**](client/LifecyclesApi.md#getlifecycleprojectsspaces) | **GET** /{baseSpaceId}/lifecycles/{id}/projects | Gets a all projects that use this lifecycle.
*LifecyclesApi* | [**indexLifecycles**](client/LifecyclesApi.md#indexlifecycles) | **GET** /lifecycles | Get a list of LifecycleResources
*LifecyclesApi* | [**indexLifecyclesSpaces**](client/LifecyclesApi.md#indexlifecyclesspaces) | **GET** /{baseSpaceId}/lifecycles | Get a list of LifecycleResources
*LifecyclesApi* | [**listAllLifecycles**](client/LifecyclesApi.md#listalllifecycles) | **GET** /lifecycles/all | Get a list of Lifecycles
*LifecyclesApi* | [**listAllLifecyclesSpaces**](client/LifecyclesApi.md#listalllifecyclesspaces) | **GET** /{baseSpaceId}/lifecycles/all | Get a list of Lifecycles
*LifecyclesApi* | [**updateLifecycle**](client/LifecyclesApi.md#updatelifecycle) | **PUT** /lifecycles/{id} | Modify a LifecycleResource by ID
*LifecyclesApi* | [**updateLifecycleSpaces**](client/LifecyclesApi.md#updatelifecyclespaces) | **PUT** /{baseSpaceId}/lifecycles/{id} | Modify a LifecycleResource by ID
*MachinePoliciesApi* | [**createMachinePolicy**](client/MachinePoliciesApi.md#createmachinepolicy) | **POST** /machinepolicies | Create a MachinePolicyResource
*MachinePoliciesApi* | [**createMachinePolicySpaces**](client/MachinePoliciesApi.md#createmachinepolicyspaces) | **POST** /{baseSpaceId}/machinepolicies | Create a MachinePolicyResource
*MachinePoliciesApi* | [**deleteMachinePolicy**](client/MachinePoliciesApi.md#deletemachinepolicy) | **DELETE** /machinepolicies/{id} | Deletes an existing machine policy.
*MachinePoliciesApi* | [**deleteMachinePolicySpaces**](client/MachinePoliciesApi.md#deletemachinepolicyspaces) | **DELETE** /{baseSpaceId}/machinepolicies/{id} | Deletes an existing machine policy.
*MachinePoliciesApi* | [**getMachinePolicyById**](client/MachinePoliciesApi.md#getmachinepolicybyid) | **GET** /machinepolicies/{id} | Get a Machine Policy by ID
*MachinePoliciesApi* | [**getMachinePolicyByIdSpaces**](client/MachinePoliciesApi.md#getmachinepolicybyidspaces) | **GET** /{baseSpaceId}/machinepolicies/{id} | Get a Machine Policy by ID
*MachinePoliciesApi* | [**getMachinePolicyTemplate**](client/MachinePoliciesApi.md#getmachinepolicytemplate) | **GET** /machinepolicies/template | Gets a template for a new Machine Policy, which includes any defaults.
*MachinePoliciesApi* | [**getMachinePolicyTemplateSpaces**](client/MachinePoliciesApi.md#getmachinepolicytemplatespaces) | **GET** /{baseSpaceId}/machinepolicies/template | Gets a template for a new Machine Policy, which includes any defaults.
*MachinePoliciesApi* | [**indexMachinePolicies**](client/MachinePoliciesApi.md#indexmachinepolicies) | **GET** /machinepolicies | Get a list of MachinePolicyResources
*MachinePoliciesApi* | [**indexMachinePoliciesSpaces**](client/MachinePoliciesApi.md#indexmachinepoliciesspaces) | **GET** /{baseSpaceId}/machinepolicies | Get a list of MachinePolicyResources
*MachinePoliciesApi* | [**indexMachinePolicyDeploymentTargets**](client/MachinePoliciesApi.md#indexmachinepolicydeploymenttargets) | **GET** /machinepolicies/{id}/machines | Lists all of the machines that belong to the given Machine Policy
*MachinePoliciesApi* | [**indexMachinePolicyDeploymentTargetsSpaces**](client/MachinePoliciesApi.md#indexmachinepolicydeploymenttargetsspaces) | **GET** /{baseSpaceId}/machinepolicies/{id}/machines | Lists all of the machines that belong to the given Machine Policy
*MachinePoliciesApi* | [**indexMachinePolicyWorkers**](client/MachinePoliciesApi.md#indexmachinepolicyworkers) | **GET** /machinepolicies/{id}/workers | Lists all of the workers that belong to the given Machine Policy
*MachinePoliciesApi* | [**indexMachinePolicyWorkersSpaces**](client/MachinePoliciesApi.md#indexmachinepolicyworkersspaces) | **GET** /{baseSpaceId}/machinepolicies/{id}/workers | Lists all of the workers that belong to the given Machine Policy
*MachinePoliciesApi* | [**listAllMachinePolicies**](client/MachinePoliciesApi.md#listallmachinepolicies) | **GET** /machinepolicies/all | Get a list of Machine Policies
*MachinePoliciesApi* | [**listAllMachinePoliciesSpaces**](client/MachinePoliciesApi.md#listallmachinepoliciesspaces) | **GET** /{baseSpaceId}/machinepolicies/all | Get a list of Machine Policies
*MachinePoliciesApi* | [**updateMachinePolicy**](client/MachinePoliciesApi.md#updatemachinepolicy) | **PUT** /machinepolicies/{id} | Modify a MachinePolicyResource by ID
*MachinePoliciesApi* | [**updateMachinePolicySpaces**](client/MachinePoliciesApi.md#updatemachinepolicyspaces) | **PUT** /{baseSpaceId}/machinepolicies/{id} | Modify a MachinePolicyResource by ID
*MachineRolesApi* | [**getMachineRolesListAll**](client/MachineRolesApi.md#getmachineroleslistall) | **GET** /machineroles/all | Gets all machine roles that have been defined in this Octopus installation. The result will be a string array.
*MachineRolesApi* | [**getMachineRolesListAllSpaces**](client/MachineRolesApi.md#getmachineroleslistallspaces) | **GET** /{baseSpaceId}/machineroles/all | Gets all machine roles that have been defined in this Octopus installation. The result will be a string array.
*MachinesApi* | [**createDeploymentTarget**](client/MachinesApi.md#createdeploymenttarget) | **POST** /machines | Create a DeploymentTargetResource
*MachinesApi* | [**createDeploymentTargetSpaces**](client/MachinesApi.md#createdeploymenttargetspaces) | **POST** /{baseSpaceId}/machines | Create a DeploymentTargetResource
*MachinesApi* | [**deleteDeploymentTarget**](client/MachinesApi.md#deletedeploymenttarget) | **DELETE** /machines/{id} | Delete a DeploymentTargetResource by ID
*MachinesApi* | [**deleteDeploymentTargetSpaces**](client/MachinesApi.md#deletedeploymenttargetspaces) | **DELETE** /{baseSpaceId}/machines/{id} | Delete a DeploymentTargetResource by ID
*MachinesApi* | [**getDeploymentTargetConnectionStatus**](client/MachinesApi.md#getdeploymenttargetconnectionstatus) | **GET** /machines/{id}/connection | Get the status of the network connection between the Octopus server and a machine.
*MachinesApi* | [**getDeploymentTargetConnectionStatusSpaces**](client/MachinesApi.md#getdeploymenttargetconnectionstatusspaces) | **GET** /{baseSpaceId}/machines/{id}/connection | Get the status of the network connection between the Octopus server and a machine.
*MachinesApi* | [**getDeploymentTargetOperatingSystemNamesListAll**](client/MachinesApi.md#getdeploymenttargetoperatingsystemnameslistall) | **GET** /machines/operatingsystem/names/all | Gets all operating system names for deployment targets. The result will be a string array.
*MachinesApi* | [**getDeploymentTargetOperatingSystemNamesListAllSpaces**](client/MachinesApi.md#getdeploymenttargetoperatingsystemnameslistallspaces) | **GET** /{baseSpaceId}/machines/operatingsystem/names/all | Gets all operating system names for deployment targets. The result will be a string array.
*MachinesApi* | [**getDeploymentTargetOperatingSystemShellNameListAll**](client/MachinesApi.md#getdeploymenttargetoperatingsystemshellnamelistall) | **GET** /machines/operatingsystem/shells/all | Gets all operating system shell names for deployment targets. The result will be a string array.
*MachinesApi* | [**getDeploymentTargetOperatingSystemShellNameListAllSpaces**](client/MachinesApi.md#getdeploymenttargetoperatingsystemshellnamelistallspaces) | **GET** /{baseSpaceId}/machines/operatingsystem/shells/all | Gets all operating system shell names for deployment targets. The result will be a string array.
*MachinesApi* | [**getDiscoverDeploymentTarget**](client/MachinesApi.md#getdiscoverdeploymenttarget) | **GET** /machines/discover | Interrogate a machine for communication details so that it may be added to the installation.
*MachinesApi* | [**getDiscoverDeploymentTargetSpaces**](client/MachinesApi.md#getdiscoverdeploymenttargetspaces) | **GET** /{baseSpaceId}/machines/discover | Interrogate a machine for communication details so that it may be added to the installation.
*MachinesApi* | [**getMachineResourceById**](client/MachinesApi.md#getmachineresourcebyid) | **GET** /machines/{id} | Get a Machine by ID
*MachinesApi* | [**getMachineResourceByIdSpaces**](client/MachinesApi.md#getmachineresourcebyidspaces) | **GET** /{baseSpaceId}/machines/{id} | Get a Machine by ID
*MachinesApi* | [**indexDeploymentTargetTasks**](client/MachinesApi.md#indexdeploymenttargettasks) | **GET** /machines/{id}/tasks | Get a list of TaskResources for the given DeploymentTargetResource
*MachinesApi* | [**indexDeploymentTargetTasksSpaces**](client/MachinesApi.md#indexdeploymenttargettasksspaces) | **GET** /{baseSpaceId}/machines/{id}/tasks | Get a list of TaskResources for the given DeploymentTargetResource
*MachinesApi* | [**indexDeploymentTargets**](client/MachinesApi.md#indexdeploymenttargets) | **GET** /machines | Get a list of DeploymentTargetResources
*MachinesApi* | [**indexDeploymentTargetsSpaces**](client/MachinesApi.md#indexdeploymenttargetsspaces) | **GET** /{baseSpaceId}/machines | Get a list of DeploymentTargetResources
*MachinesApi* | [**listAllDeploymentTargets**](client/MachinesApi.md#listalldeploymenttargets) | **GET** /machines/all | Get a list of DeploymentTargetResources
*MachinesApi* | [**listAllDeploymentTargetsSpaces**](client/MachinesApi.md#listalldeploymenttargetsspaces) | **GET** /{baseSpaceId}/machines/all | Get a list of DeploymentTargetResources
*MachinesApi* | [**updateDeploymentTarget**](client/MachinesApi.md#updatedeploymenttarget) | **PUT** /machines/{id} | Modify a DeploymentTargetResource by ID
*MachinesApi* | [**updateDeploymentTargetSpaces**](client/MachinesApi.md#updatedeploymenttargetspaces) | **PUT** /{baseSpaceId}/machines/{id} | Modify a DeploymentTargetResource by ID
*MaintenanceConfigurationApi* | [**getMaintenanceConfiguration**](client/MaintenanceConfigurationApi.md#getmaintenanceconfiguration) | **GET** /maintenanceconfiguration | Gets information about the maintenance configuration in use by the Octopus Server.
*MaintenanceConfigurationApi* | [**updateMaintenanceConfiguration**](client/MaintenanceConfigurationApi.md#updatemaintenanceconfiguration) | **PUT** /maintenanceconfiguration | Updates the maintenance configuration used by the Octopus Server.
*MigrationApi* | [**createMigrationImport**](client/MigrationApi.md#createmigrationimport) | **POST** /migrations/import | Returns HTTP OK (200) when an import migration has been queued.
*MigrationApi* | [**createMigrationPartialExport**](client/MigrationApi.md#createmigrationpartialexport) | **POST** /migrations/partialexport | Returns HTTP OK (200) when a partial-export migration has been queued.
*NuGetApi* | [**pushNuGetPackage**](client/NuGetApi.md#pushnugetpackage) | **PUT** /nuget/packages | Octopus allows NuGet.exe and compatible tools to push packages to this endpoint.
*NuGetApi* | [**pushNuGetPackageSpaces**](client/NuGetApi.md#pushnugetpackagespaces) | **PUT** /{baseSpaceId}/nuget/packages | Octopus allows NuGet.exe and compatible tools to push packages to this endpoint.
*OctopusPackageMetadataApi* | [**createOctopusPackageMetadata**](client/OctopusPackageMetadataApi.md#createoctopuspackagemetadata) | **POST** /package-metadata | Creates package build information. Deprecated. Please use the 'build-information' api instead.
*OctopusPackageMetadataApi* | [**createOctopusPackageMetadataSpaces**](client/OctopusPackageMetadataApi.md#createoctopuspackagemetadataspaces) | **POST** /{baseSpaceId}/package-metadata | Creates package build information. Deprecated. Please use the 'build-information' api instead.
*OctopusPackageMetadataApi* | [**getOctopusPackageMetadata**](client/OctopusPackageMetadataApi.md#getoctopuspackagemetadata) | **GET** /package-metadata/{id} | Returns package build information for the specified id. Deprecated. Please use the 'build-information' api instead.
*OctopusPackageMetadataApi* | [**getOctopusPackageMetadataSpaces**](client/OctopusPackageMetadataApi.md#getoctopuspackagemetadataspaces) | **GET** /{baseSpaceId}/package-metadata/{id} | Returns package build information for the specified id. Deprecated. Please use the 'build-information' api instead.
*OctopusServerNodesApi* | [**deleteOctopusServerNode**](client/OctopusServerNodesApi.md#deleteoctopusservernode) | **DELETE** /octopusservernodes/{id} | Delete a OctopusServerNodeResource by ID
*OctopusServerNodesApi* | [**getAllOctopusServerNodes**](client/OctopusServerNodesApi.md#getalloctopusservernodes) | **GET** /octopusservernodes/all | Get all Octopus Server Nodes
*OctopusServerNodesApi* | [**getAllOctopusServerNodesSpaces**](client/OctopusServerNodesApi.md#getalloctopusservernodesspaces) | **GET** /{baseSpaceId}/octopusservernodes/all | Get all Octopus Server Nodes
*OctopusServerNodesApi* | [**getLoadBalancerPing**](client/OctopusServerNodesApi.md#getloadbalancerping) | **GET** /octopusservernodes/ping | Returns HTTP ImATeapot (418) when the Octopus Server node is draining or offline, otherwise HTTP OK (200). Always returns the node information in the body.
*OctopusServerNodesApi* | [**getOctopusServerClusterSummary**](client/OctopusServerNodesApi.md#getoctopusserverclustersummary) | **GET** /octopusservernodes/summary | Returns all nodes, with status information
*OctopusServerNodesApi* | [**getOctopusServerNodeById**](client/OctopusServerNodesApi.md#getoctopusservernodebyid) | **GET** /octopusservernodes/{id} | Get an Octopus Server Node by ID
*OctopusServerNodesApi* | [**getOctopusServerNodeDetails**](client/OctopusServerNodesApi.md#getoctopusservernodedetails) | **GET** /octopusservernodes/{id}/details | A count of the running tasks per node.
*OctopusServerNodesApi* | [**indexOctopusServerNodes**](client/OctopusServerNodesApi.md#indexoctopusservernodes) | **GET** /octopusservernodes | Get a list of OctopusServerNodeResources
*OctopusServerNodesApi* | [**updateOctopusServerNode**](client/OctopusServerNodesApi.md#updateoctopusservernode) | **PUT** /octopusservernodes/{id} | Modify a OctopusServerNodeResource by ID
*OpenIDConnectApi* | [**createOctopusIDUserAuthenticated**](client/OpenIDConnectApi.md#createoctopusiduserauthenticated) | **POST** /users/authenticatedToken/OctopusID | 
*OpenIDConnectApi* | [**createOctopusIDUserAuthentication**](client/OpenIDConnectApi.md#createoctopusiduserauthentication) | **POST** /users/authenticate/OctopusID | 
*PackagesApi* | [**createPackageRepositoryDeltaUpload**](client/PackagesApi.md#createpackagerepositorydeltaupload) | **POST** /packages/{packageId}/{baseVersion}/delta | Uploads a delta patch for the given file. Used to optimize file upload.
*PackagesApi* | [**createPackageRepositoryDeltaUploadSpaces**](client/PackagesApi.md#createpackagerepositorydeltauploadspaces) | **POST** /{baseSpaceId}/packages/{packageId}/{baseVersion}/delta | Uploads a delta patch for the given file. Used to optimize file upload.
*PackagesApi* | [**createPackageRepositoryUpload**](client/PackagesApi.md#createpackagerepositoryupload) | **POST** /packages/raw | Uploads a new package
*PackagesApi* | [**createPackageRepositoryUploadSpaces**](client/PackagesApi.md#createpackagerepositoryuploadspaces) | **POST** /{baseSpaceId}/packages/raw | Uploads a new package
*PackagesApi* | [**deletePackageRepositoryDeleteById**](client/PackagesApi.md#deletepackagerepositorydeletebyid) | **DELETE** /packages/{id} | Deletes the specified package
*PackagesApi* | [**deletePackageRepositoryDeleteByIdSpaces**](client/PackagesApi.md#deletepackagerepositorydeletebyidspaces) | **DELETE** /{baseSpaceId}/packages/{id} | Deletes the specified package
*PackagesApi* | [**deletePackageRepositoryDeleteByIds**](client/PackagesApi.md#deletepackagerepositorydeletebyids) | **DELETE** /packages/bulk | Bulk deletes packages
*PackagesApi* | [**deletePackageRepositoryDeleteByIdsSpaces**](client/PackagesApi.md#deletepackagerepositorydeletebyidsspaces) | **DELETE** /{baseSpaceId}/packages/bulk | Bulk deletes packages
*PackagesApi* | [**getPackageListNotes**](client/PackagesApi.md#getpackagelistnotes) | **GET** /packages/notes | Returns a list of release notes for the specified packages
*PackagesApi* | [**getPackageListNotesSpaces**](client/PackagesApi.md#getpackagelistnotesspaces) | **GET** /{baseSpaceId}/packages/notes | Returns a list of release notes for the specified packages
*PackagesApi* | [**getPackageNotes**](client/PackagesApi.md#getpackagenotes) | **GET** /feeds/{id}/packages/notes | Returns the release notes for the specified package
*PackagesApi* | [**getPackageNotesSpaces**](client/PackagesApi.md#getpackagenotesspaces) | **GET** /{baseSpaceId}/feeds/{id}/packages/notes | Returns the release notes for the specified package
*PackagesApi* | [**getPackageRepository**](client/PackagesApi.md#getpackagerepository) | **GET** /packages/{id} | Returns package information for the specified package id
*PackagesApi* | [**getPackageRepositoryDeltaSignature**](client/PackagesApi.md#getpackagerepositorydeltasignature) | **GET** /packages/{packageId}/{version}/delta-signature | Returns the delta-signature for a given package. Used to optimize file upload.
*PackagesApi* | [**getPackageRepositoryDeltaSignatureSpaces**](client/PackagesApi.md#getpackagerepositorydeltasignaturespaces) | **GET** /{baseSpaceId}/packages/{packageId}/{version}/delta-signature | Returns the delta-signature for a given package. Used to optimize file upload.
*PackagesApi* | [**getPackageRepositoryGetRaw**](client/PackagesApi.md#getpackagerepositorygetraw) | **GET** /packages/{id}/raw | Downloads the specified package
*PackagesApi* | [**getPackageRepositoryGetRawSpaces**](client/PackagesApi.md#getpackagerepositorygetrawspaces) | **GET** /{baseSpaceId}/packages/{id}/raw | Downloads the specified package
*PackagesApi* | [**getPackageRepositoryList**](client/PackagesApi.md#getpackagerepositorylist) | **GET** /packages | Returns a list of packages matching the specified criteria
*PackagesApi* | [**getPackageRepositoryListSpaces**](client/PackagesApi.md#getpackagerepositorylistspaces) | **GET** /{baseSpaceId}/packages | Returns a list of packages matching the specified criteria
*PackagesApi* | [**getPackageRepositorySpaces**](client/PackagesApi.md#getpackagerepositoryspaces) | **GET** /{baseSpaceId}/packages/{id} | Returns package information for the specified package id
*PackagesApi* | [**getPackageSearchActionOld**](client/PackagesApi.md#getpackagesearchactionold) | **GET** /feeds/{id}/packages | Searches the specified feed for packages. Legacy. Please use the /feeds{id}/packages/search endpoint instead.
*PackagesApi* | [**getPackageSearchActionOldSpaces**](client/PackagesApi.md#getpackagesearchactionoldspaces) | **GET** /{baseSpaceId}/feeds/{id}/packages | Searches the specified feed for packages. Legacy. Please use the /feeds{id}/packages/search endpoint instead.
*PerformanceConfigurationApi* | [**getPerformanceConfiguration**](client/PerformanceConfigurationApi.md#getperformanceconfiguration) | **GET** /performanceconfiguration | Get performance settings for the Octopus Server
*PerformanceConfigurationApi* | [**updatePerformanceConfiguration**](client/PerformanceConfigurationApi.md#updateperformanceconfiguration) | **PUT** /performanceconfiguration | Updates the performance settings for the Octopus Server
*PermissionsApi* | [**getPermissionDefinitions**](client/PermissionsApi.md#getpermissiondefinitions) | **GET** /permissions/all | Gets a dictionary of available permissions and their descriptions and restrictions
*ProgressionApi* | [**getProgressionView**](client/ProgressionApi.md#getprogressionview) | **GET** /progression/{id} | Returns the progress of a release in the environment lifecycle.
*ProgressionApi* | [**getProgressionViewSpaces**](client/ProgressionApi.md#getprogressionviewspaces) | **GET** /{baseSpaceId}/progression/{id} | Returns the progress of a release in the environment lifecycle.
*ProgressionApi* | [**getRunbookTaskRunDashboardItems**](client/ProgressionApi.md#getrunbooktaskrundashboarditems) | **GET** /progression/runbooks/taskRuns | Returns a list of runbook dashboard items, filtered by various criteria including projectIds, environmentIds, tenantIds, runbookIds, taskIds
*ProgressionApi* | [**getRunbookTaskRunDashboardItemsSpaces**](client/ProgressionApi.md#getrunbooktaskrundashboarditemsspaces) | **GET** /{baseSpaceId}/progression/runbooks/taskRuns | Returns a list of runbook dashboard items, filtered by various criteria including projectIds, environmentIds, tenantIds, runbookIds, taskIds
*ProgressionApi* | [**getRunbooksProgressionView**](client/ProgressionApi.md#getrunbooksprogressionview) | **GET** /progression/runbooks/{id} | Returns the progress of a runbook in the environment lifecycle
*ProgressionApi* | [**getRunbooksProgressionViewSpaces**](client/ProgressionApi.md#getrunbooksprogressionviewspaces) | **GET** /{baseSpaceId}/progression/runbooks/{id} | Returns the progress of a runbook in the environment lifecycle
*ProjectGroupsApi* | [**createProjectGroup**](client/ProjectGroupsApi.md#createprojectgroup) | **POST** /projectgroups | Create a ProjectGroupResource
*ProjectGroupsApi* | [**createProjectGroupSpaces**](client/ProjectGroupsApi.md#createprojectgroupspaces) | **POST** /{baseSpaceId}/projectgroups | Create a ProjectGroupResource
*ProjectGroupsApi* | [**deleteProjectGroup**](client/ProjectGroupsApi.md#deleteprojectgroup) | **DELETE** /projectgroups/{id} | Delete a ProjectGroupResource by ID
*ProjectGroupsApi* | [**deleteProjectGroupSpaces**](client/ProjectGroupsApi.md#deleteprojectgroupspaces) | **DELETE** /{baseSpaceId}/projectgroups/{id} | Delete a ProjectGroupResource by ID
*ProjectGroupsApi* | [**getProjectGroupById**](client/ProjectGroupsApi.md#getprojectgroupbyid) | **GET** /projectgroups/{id} | Get a Project Group by ID
*ProjectGroupsApi* | [**getProjectGroupByIdSpaces**](client/ProjectGroupsApi.md#getprojectgroupbyidspaces) | **GET** /{baseSpaceId}/projectgroups/{id} | Get a Project Group by ID
*ProjectGroupsApi* | [**indexProjectGroupProjects**](client/ProjectGroupsApi.md#indexprojectgroupprojects) | **GET** /projectgroups/{id}/projects | Lists all of the Projects that belong to the given Project Group
*ProjectGroupsApi* | [**indexProjectGroupProjectsSpaces**](client/ProjectGroupsApi.md#indexprojectgroupprojectsspaces) | **GET** /{baseSpaceId}/projectgroups/{id}/projects | Lists all of the Projects that belong to the given Project Group
*ProjectGroupsApi* | [**indexProjectGroups**](client/ProjectGroupsApi.md#indexprojectgroups) | **GET** /projectgroups | Get a list of ProjectGroupResources
*ProjectGroupsApi* | [**indexProjectGroupsSpaces**](client/ProjectGroupsApi.md#indexprojectgroupsspaces) | **GET** /{baseSpaceId}/projectgroups | Get a list of ProjectGroupResources
*ProjectGroupsApi* | [**listAllProjectGroups**](client/ProjectGroupsApi.md#listallprojectgroups) | **GET** /projectgroups/all | Get a list of Project Group
*ProjectGroupsApi* | [**listAllProjectGroupsSpaces**](client/ProjectGroupsApi.md#listallprojectgroupsspaces) | **GET** /{baseSpaceId}/projectgroups/all | Get a list of Project Group
*ProjectGroupsApi* | [**updateProjectGroup**](client/ProjectGroupsApi.md#updateprojectgroup) | **PUT** /projectgroups/{id} | Modify a ProjectGroupResource by ID
*ProjectGroupsApi* | [**updateProjectGroupSpaces**](client/ProjectGroupsApi.md#updateprojectgroupspaces) | **PUT** /{baseSpaceId}/projectgroups/{id} | Modify a ProjectGroupResource by ID
*ProjectTriggersApi* | [**createProjectTrigger**](client/ProjectTriggersApi.md#createprojecttrigger) | **POST** /projecttriggers | Create a ProjectTriggerResource
*ProjectTriggersApi* | [**createProjectTriggerSpaces**](client/ProjectTriggersApi.md#createprojecttriggerspaces) | **POST** /{baseSpaceId}/projecttriggers | Create a ProjectTriggerResource
*ProjectTriggersApi* | [**deleteProjectTrigger**](client/ProjectTriggersApi.md#deleteprojecttrigger) | **DELETE** /projecttriggers/{id} | Delete a ProjectTriggerResource by ID
*ProjectTriggersApi* | [**deleteProjectTriggerSpaces**](client/ProjectTriggersApi.md#deleteprojecttriggerspaces) | **DELETE** /{baseSpaceId}/projecttriggers/{id} | Delete a ProjectTriggerResource by ID
*ProjectTriggersApi* | [**getProjectTriggerById**](client/ProjectTriggersApi.md#getprojecttriggerbyid) | **GET** /projecttriggers/{id} | Get a Project Trigger by ID
*ProjectTriggersApi* | [**getProjectTriggerByIdSpaces**](client/ProjectTriggersApi.md#getprojecttriggerbyidspaces) | **GET** /{baseSpaceId}/projecttriggers/{id} | Get a Project Trigger by ID
*ProjectTriggersApi* | [**indexProjectProjectTriggers**](client/ProjectTriggersApi.md#indexprojectprojecttriggers) | **GET** /projects/{id}/triggers | Get a list of ProjectTriggerResources for the given ProjectResource
*ProjectTriggersApi* | [**indexProjectProjectTriggersSpaces**](client/ProjectTriggersApi.md#indexprojectprojecttriggersspaces) | **GET** /{baseSpaceId}/projects/{id}/triggers | Get a list of ProjectTriggerResources for the given ProjectResource
*ProjectTriggersApi* | [**indexProjectTriggers**](client/ProjectTriggersApi.md#indexprojecttriggers) | **GET** /projecttriggers | Get a list of ProjectTriggerResources
*ProjectTriggersApi* | [**indexProjectTriggersSpaces**](client/ProjectTriggersApi.md#indexprojecttriggersspaces) | **GET** /{baseSpaceId}/projecttriggers | Get a list of ProjectTriggerResources
*ProjectTriggersApi* | [**updateProjectTrigger**](client/ProjectTriggersApi.md#updateprojecttrigger) | **PUT** /projecttriggers/{id} | Modify a ProjectTriggerResource by ID
*ProjectTriggersApi* | [**updateProjectTriggerSpaces**](client/ProjectTriggersApi.md#updateprojecttriggerspaces) | **PUT** /{baseSpaceId}/projecttriggers/{id} | Modify a ProjectTriggerResource by ID
*ProjectsApi* | [**createConvertProjectToVersionControlled**](client/ProjectsApi.md#createconvertprojecttoversioncontrolled) | **POST** /projects/{projectId}/versioncontrol/convert | Converts an existing project to store its configuration in version control.
*ProjectsApi* | [**createConvertProjectToVersionControlledSpaces**](client/ProjectsApi.md#createconvertprojecttoversioncontrolledspaces) | **POST** /{baseSpaceId}/projects/{projectId}/versioncontrol/convert | Converts an existing project to store its configuration in version control.
*ProjectsApi* | [**createProject**](client/ProjectsApi.md#createproject) | **POST** /projects | Create a ProjectResource
*ProjectsApi* | [**createProjectLogo**](client/ProjectsApi.md#createprojectlogo) | **POST** /projects/{id}/logo | Updates the logo associated with the project.
*ProjectsApi* | [**createProjectLogoSpaces**](client/ProjectsApi.md#createprojectlogospaces) | **POST** /{baseSpaceId}/projects/{id}/logo | Updates the logo associated with the project.
*ProjectsApi* | [**createProjectSpaces**](client/ProjectsApi.md#createprojectspaces) | **POST** /{baseSpaceId}/projects | Create a ProjectResource
*ProjectsApi* | [**createVersionControlSettingsConnectivityCheck**](client/ProjectsApi.md#createversioncontrolsettingsconnectivitycheck) | **POST** /projects/{id}/versioncontrolsettings/test | Tests the VCS settings to make sure we can connect
*ProjectsApi* | [**createVersionControlSettingsConnectivityCheckSpaces**](client/ProjectsApi.md#createversioncontrolsettingsconnectivitycheckspaces) | **POST** /{baseSpaceId}/projects/{id}/versioncontrolsettings/test | Tests the VCS settings to make sure we can connect
*ProjectsApi* | [**deleteProject**](client/ProjectsApi.md#deleteproject) | **DELETE** /projects/{id} | Delete a ProjectResource by ID
*ProjectsApi* | [**deleteProjectSpaces**](client/ProjectsApi.md#deleteprojectspaces) | **DELETE** /{baseSpaceId}/projects/{id} | Delete a ProjectResource by ID
*ProjectsApi* | [**getProjectByIdOrSlug**](client/ProjectsApi.md#getprojectbyidorslug) | **GET** /projects/{id} | Gets a single project by ID or Slug.
*ProjectsApi* | [**getProjectByIdOrSlugSpaces**](client/ProjectsApi.md#getprojectbyidorslugspaces) | **GET** /{baseSpaceId}/projects/{id} | Gets a single project by ID or Slug.
*ProjectsApi* | [**getProjectLogo**](client/ProjectsApi.md#getprojectlogo) | **GET** /projects/{id}/logo | Gets the logo associated with the project.
*ProjectsApi* | [**getProjectLogoSpaces**](client/ProjectsApi.md#getprojectlogospaces) | **GET** /{baseSpaceId}/projects/{id}/logo | Gets the logo associated with the project.
*ProjectsApi* | [**getProjectSettingsMetadata**](client/ProjectsApi.md#getprojectsettingsmetadata) | **GET** /projects/{id}/metadata | Gets the custom settings metadata from the extensions.
*ProjectsApi* | [**getProjectSettingsMetadataSpaces**](client/ProjectsApi.md#getprojectsettingsmetadataspaces) | **GET** /{baseSpaceId}/projects/{id}/metadata | Gets the custom settings metadata from the extensions.
*ProjectsApi* | [**getProjectSummary**](client/ProjectsApi.md#getprojectsummary) | **GET** /projects/{id}/summary | Gets a summary of project-specific information.
*ProjectsApi* | [**getProjectSummarySpaces**](client/ProjectsApi.md#getprojectsummaryspaces) | **GET** /{baseSpaceId}/projects/{id}/summary | Gets a summary of project-specific information.
*ProjectsApi* | [**indexProjects**](client/ProjectsApi.md#indexprojects) | **GET** /projects | Lists all of the projects in the supplied Octopus Deploy Space, from all project groups. The results will be sorted alphabetically by name.
*ProjectsApi* | [**indexProjectsSpaces**](client/ProjectsApi.md#indexprojectsspaces) | **GET** /{baseSpaceId}/projects | Lists all of the projects in the supplied Octopus Deploy Space, from all project groups. The results will be sorted alphabetically by name.
*ProjectsApi* | [**listAllProjects**](client/ProjectsApi.md#listallprojects) | **GET** /projects/all | Lists the name and ID of all of the projects in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.
*ProjectsApi* | [**listAllProjectsSpaces**](client/ProjectsApi.md#listallprojectsspaces) | **GET** /{baseSpaceId}/projects/all | Lists the name and ID of all of the projects in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.
*ProjectsApi* | [**updateProject**](client/ProjectsApi.md#updateproject) | **PUT** /projects/{id} | Modify a ProjectResource by ID
*ProjectsApi* | [**updateProjectLogo**](client/ProjectsApi.md#updateprojectlogo) | **PUT** /projects/{id}/logo | Updates the logo associated with the project.
*ProjectsApi* | [**updateProjectLogoSpaces**](client/ProjectsApi.md#updateprojectlogospaces) | **PUT** /{baseSpaceId}/projects/{id}/logo | Updates the logo associated with the project.
*ProjectsApi* | [**updateProjectSpaces**](client/ProjectsApi.md#updateprojectspaces) | **PUT** /{baseSpaceId}/projects/{id} | Modify a ProjectResource by ID
*ProxiesApi* | [**createProxy**](client/ProxiesApi.md#createproxy) | **POST** /proxies | Create a ProxyResource
*ProxiesApi* | [**createProxySpaces**](client/ProxiesApi.md#createproxyspaces) | **POST** /{baseSpaceId}/proxies | Create a ProxyResource
*ProxiesApi* | [**deleteProxy**](client/ProxiesApi.md#deleteproxy) | **DELETE** /proxies/{id} | Delete a ProxyResource by ID
*ProxiesApi* | [**deleteProxySpaces**](client/ProxiesApi.md#deleteproxyspaces) | **DELETE** /{baseSpaceId}/proxies/{id} | Delete a ProxyResource by ID
*ProxiesApi* | [**getProxyById**](client/ProxiesApi.md#getproxybyid) | **GET** /proxies/{id} | Get a Proxy by ID
*ProxiesApi* | [**getProxyByIdSpaces**](client/ProxiesApi.md#getproxybyidspaces) | **GET** /{baseSpaceId}/proxies/{id} | Get a Proxy by ID
*ProxiesApi* | [**indexProxies**](client/ProxiesApi.md#indexproxies) | **GET** /proxies | Get a list of ProxyResources
*ProxiesApi* | [**indexProxiesSpaces**](client/ProxiesApi.md#indexproxiesspaces) | **GET** /{baseSpaceId}/proxies | Get a list of ProxyResources
*ProxiesApi* | [**listAllProxies**](client/ProxiesApi.md#listallproxies) | **GET** /proxies/all | Get a list of Proxies
*ProxiesApi* | [**listAllProxiesSpaces**](client/ProxiesApi.md#listallproxiesspaces) | **GET** /{baseSpaceId}/proxies/all | Get a list of Proxies
*ProxiesApi* | [**updateProxy**](client/ProxiesApi.md#updateproxy) | **PUT** /proxies/{id} | Modify a ProxyResource by ID
*ProxiesApi* | [**updateProxySpaces**](client/ProxiesApi.md#updateproxyspaces) | **PUT** /{baseSpaceId}/proxies/{id} | Modify a ProxyResource by ID
*ReleasesApi* | [**createDefectReported**](client/ReleasesApi.md#createdefectreported) | **POST** /releases/{id}/defects | Record defect in a release.
*ReleasesApi* | [**createDefectReportedSpaces**](client/ReleasesApi.md#createdefectreportedspaces) | **POST** /{baseSpaceId}/releases/{id}/defects | Record defect in a release.
*ReleasesApi* | [**createDefectResolved**](client/ReleasesApi.md#createdefectresolved) | **POST** /releases/{id}/defects/resolve | Update or resolve defect in a release.
*ReleasesApi* | [**createDefectResolvedSpaces**](client/ReleasesApi.md#createdefectresolvedspaces) | **POST** /{baseSpaceId}/releases/{id}/defects/resolve | Update or resolve defect in a release.
*ReleasesApi* | [**createDeploymentPreviewCollection**](client/ReleasesApi.md#createdeploymentpreviewcollection) | **POST** /releases/{id}/deployments/previews | Returns an array of documents that describes what steps will/won't be run during deployments to a given set of environments and tenants.
*ReleasesApi* | [**createDeploymentPreviewCollectionSpaces**](client/ReleasesApi.md#createdeploymentpreviewcollectionspaces) | **POST** /{baseSpaceId}/releases/{id}/deployments/previews | Returns an array of documents that describes what steps will/won't be run during deployments to a given set of environments and tenants.
*ReleasesApi* | [**createRelease**](client/ReleasesApi.md#createrelease) | **POST** /releases | Create a ReleaseResource
*ReleasesApi* | [**createReleaseSnapshotVariables**](client/ReleasesApi.md#createreleasesnapshotvariables) | **POST** /releases/{id}/snapshot-variables | Refresh the variable snapshots associated with the release. The project's deployment process must not have changed since the release was created.
*ReleasesApi* | [**createReleaseSnapshotVariablesSpaces**](client/ReleasesApi.md#createreleasesnapshotvariablesspaces) | **POST** /{baseSpaceId}/releases/{id}/snapshot-variables | Refresh the variable snapshots associated with the release. The project's deployment process must not have changed since the release was created.
*ReleasesApi* | [**createReleaseSpaces**](client/ReleasesApi.md#createreleasespaces) | **POST** /{baseSpaceId}/releases | Create a ReleaseResource
*ReleasesApi* | [**deleteRelease**](client/ReleasesApi.md#deleterelease) | **DELETE** /releases/{id} | Delete a ReleaseResource by ID
*ReleasesApi* | [**deleteReleaseSpaces**](client/ReleasesApi.md#deletereleasespaces) | **DELETE** /{baseSpaceId}/releases/{id} | Delete a ReleaseResource by ID
*ReleasesApi* | [**getDeploymentPreview**](client/ReleasesApi.md#getdeploymentpreview) | **GET** /releases/{id}/deployments/preview/{environment} | Gets a document that describes what steps will/won't be run during a deployment to a given environment (and tenant if supplied).
*ReleasesApi* | [**getDeploymentPreview1**](client/ReleasesApi.md#getdeploymentpreview1) | **GET** /releases/{id}/deployments/preview/{environment}/{tenant} | Gets a document that describes what steps will/won't be run during a deployment to a given environment (and tenant if supplied).
*ReleasesApi* | [**getDeploymentPreviewSpaces**](client/ReleasesApi.md#getdeploymentpreviewspaces) | **GET** /{baseSpaceId}/releases/{id}/deployments/preview/{environment} | Gets a document that describes what steps will/won't be run during a deployment to a given environment (and tenant if supplied).
*ReleasesApi* | [**getDeploymentPreviewSpaces1**](client/ReleasesApi.md#getdeploymentpreviewspaces1) | **GET** /{baseSpaceId}/releases/{id}/deployments/preview/{environment}/{tenant} | Gets a document that describes what steps will/won't be run during a deployment to a given environment (and tenant if supplied).
*ReleasesApi* | [**getDeploymentTemplate**](client/ReleasesApi.md#getdeploymenttemplate) | **GET** /releases/{id}/deployments/template | Gets all of the information necessary for creating or editing a deployment for this release.
*ReleasesApi* | [**getDeploymentTemplateSpaces**](client/ReleasesApi.md#getdeploymenttemplatespaces) | **GET** /{baseSpaceId}/releases/{id}/deployments/template | Gets all of the information necessary for creating or editing a deployment for this release.
*ReleasesApi* | [**getListDefects**](client/ReleasesApi.md#getlistdefects) | **GET** /releases/{id}/defects | Gets all defects for a release.
*ReleasesApi* | [**getListDefectsSpaces**](client/ReleasesApi.md#getlistdefectsspaces) | **GET** /{baseSpaceId}/releases/{id}/defects | Gets all defects for a release.
*ReleasesApi* | [**getReleaseById**](client/ReleasesApi.md#getreleasebyid) | **GET** /releases/{id} | Get a Release by ID
*ReleasesApi* | [**getReleaseByIdSpaces**](client/ReleasesApi.md#getreleasebyidspaces) | **GET** /{baseSpaceId}/releases/{id} | Get a Release by ID
*ReleasesApi* | [**getReleaseByProjectAndVersion**](client/ReleasesApi.md#getreleasebyprojectandversion) | **GET** /projects/{id}/releases/{version} | Gets a single release by project ID and version number.
*ReleasesApi* | [**getReleaseByProjectAndVersionSpaces**](client/ReleasesApi.md#getreleasebyprojectandversionspaces) | **GET** /{baseSpaceId}/projects/{id}/releases/{version} | Gets a single release by project ID and version number.
*ReleasesApi* | [**getReleaseLifecycleProgression**](client/ReleasesApi.md#getreleaselifecycleprogression) | **GET** /releases/{id}/progression | Gets all of the information necessary for creating or editing a deployment for this release.
*ReleasesApi* | [**getReleaseLifecycleProgressionSpaces**](client/ReleasesApi.md#getreleaselifecycleprogressionspaces) | **GET** /{baseSpaceId}/releases/{id}/progression | Gets all of the information necessary for creating or editing a deployment for this release.
*ReleasesApi* | [**indexProjectReleases**](client/ReleasesApi.md#indexprojectreleases) | **GET** /projects/{id}/releases | Get a list of ReleaseResources for the given ProjectResource
*ReleasesApi* | [**indexProjectReleasesSpaces**](client/ReleasesApi.md#indexprojectreleasesspaces) | **GET** /{baseSpaceId}/projects/{id}/releases | Get a list of ReleaseResources for the given ProjectResource
*ReleasesApi* | [**indexReleaseDeployments**](client/ReleasesApi.md#indexreleasedeployments) | **GET** /releases/{id}/deployments | Lists all of the Deployments that belong to the given Release
*ReleasesApi* | [**indexReleaseDeploymentsSpaces**](client/ReleasesApi.md#indexreleasedeploymentsspaces) | **GET** /{baseSpaceId}/releases/{id}/deployments | Lists all of the Deployments that belong to the given Release
*ReleasesApi* | [**indexReleases**](client/ReleasesApi.md#indexreleases) | **GET** /releases | Get a list of Releases
*ReleasesApi* | [**indexReleasesSpaces**](client/ReleasesApi.md#indexreleasesspaces) | **GET** /{baseSpaceId}/releases | Get a list of Releases
*ReleasesApi* | [**updateRelease**](client/ReleasesApi.md#updaterelease) | **PUT** /releases/{id} | Modify a ReleaseResource by ID
*ReleasesApi* | [**updateReleaseSpaces**](client/ReleasesApi.md#updatereleasespaces) | **PUT** /{baseSpaceId}/releases/{id} | Modify a ReleaseResource by ID
*ReportingApi* | [**getDeploymentsByProjectReport**](client/ReportingApi.md#getdeploymentsbyprojectreport) | **GET** /reporting/deployments-counted-by-week | Provides a report summarizing the weekly deployments per project over the last 6 months
*ReportingApi* | [**getDeploymentsByProjectReportSpaces**](client/ReportingApi.md#getdeploymentsbyprojectreportspaces) | **GET** /{baseSpaceId}/reporting/deployments-counted-by-week | Provides a report summarizing the weekly deployments per project over the last 6 months
*ReportingApi* | [**getDeploymentsXml**](client/ReportingApi.md#getdeploymentsxml) | **GET** /reporting/deployments/xml | Provides an XML report that contains all of the information about deployments
*ReportingApi* | [**getDeploymentsXmlSpaces**](client/ReportingApi.md#getdeploymentsxmlspaces) | **GET** /{baseSpaceId}/reporting/deployments/xml | Provides an XML report that contains all of the information about deployments
*RunbookProcessesApi* | [**getRunbookProcessById**](client/RunbookProcessesApi.md#getrunbookprocessbyid) | **GET** /runbookProcesses/{id} | Get a Runbook Process by ID
*RunbookProcessesApi* | [**getRunbookProcessByIdSpaces**](client/RunbookProcessesApi.md#getrunbookprocessbyidspaces) | **GET** /{baseSpaceId}/runbookProcesses/{id} | Get a Runbook Process by ID
*RunbookProcessesApi* | [**getRunbookSnapshotTemplateForRunbookStep**](client/RunbookProcessesApi.md#getrunbooksnapshottemplateforrunbookstep) | **GET** /runbookProcesses/{id}/runbookSnapshotTemplate | Gets all of the information necessary for creating or editing a Runbook Snapshot using this Runbook Process.
*RunbookProcessesApi* | [**getRunbookSnapshotTemplateForRunbookStepSpaces**](client/RunbookProcessesApi.md#getrunbooksnapshottemplateforrunbookstepspaces) | **GET** /{baseSpaceId}/runbookProcesses/{id}/runbookSnapshotTemplate | Gets all of the information necessary for creating or editing a Runbook Snapshot using this Runbook Process.
*RunbookProcessesApi* | [**indexRunbookProcesses**](client/RunbookProcessesApi.md#indexrunbookprocesses) | **GET** /runbookProcesses | Get a list of Runbook Processes
*RunbookProcessesApi* | [**indexRunbookProcessesSpaces**](client/RunbookProcessesApi.md#indexrunbookprocessesspaces) | **GET** /{baseSpaceId}/runbookProcesses | Get a list of Runbook Processes
*RunbookProcessesApi* | [**indexRunbookSnapshotRunbookRuns**](client/RunbookProcessesApi.md#indexrunbooksnapshotrunbookruns) | **GET** /runbookSnapshots/{id}/runbookRuns | Lists all of the Runbook Runs that belong to the given Runbook Snapshot
*RunbookProcessesApi* | [**indexRunbookSnapshotRunbookRunsSpaces**](client/RunbookProcessesApi.md#indexrunbooksnapshotrunbookrunsspaces) | **GET** /{baseSpaceId}/runbookSnapshots/{id}/runbookRuns | Lists all of the Runbook Runs that belong to the given Runbook Snapshot
*RunbookProcessesApi* | [**updateRunbookProcess**](client/RunbookProcessesApi.md#updaterunbookprocess) | **PUT** /runbookProcesses/{id} | Modifies a Runbook Process. Only allowed for Runbook Processes owned by a project.
*RunbookProcessesApi* | [**updateRunbookProcessSpaces**](client/RunbookProcessesApi.md#updaterunbookprocessspaces) | **PUT** /{baseSpaceId}/runbookProcesses/{id} | Modifies a Runbook Process. Only allowed for Runbook Processes owned by a project.
*RunbookRunsApi* | [**createRunbookRunCreate**](client/RunbookRunsApi.md#createrunbookruncreate) | **POST** /runbookRuns | Creates a new runbookRun.
*RunbookRunsApi* | [**createRunbookRunCreateSpaces**](client/RunbookRunsApi.md#createrunbookruncreatespaces) | **POST** /{baseSpaceId}/runbookRuns | Creates a new runbookRun.
*RunbookRunsApi* | [**deleteRunbookRun**](client/RunbookRunsApi.md#deleterunbookrun) | **DELETE** /runbookRuns/{id} | Delete a RunbookRunResource by ID
*RunbookRunsApi* | [**deleteRunbookRunSpaces**](client/RunbookRunsApi.md#deleterunbookrunspaces) | **DELETE** /{baseSpaceId}/runbookRuns/{id} | Delete a RunbookRunResource by ID
*RunbookRunsApi* | [**getRunbookRunById**](client/RunbookRunsApi.md#getrunbookrunbyid) | **GET** /runbookRuns/{id} | Get a Runbook Run by ID
*RunbookRunsApi* | [**getRunbookRunByIdSpaces**](client/RunbookRunsApi.md#getrunbookrunbyidspaces) | **GET** /{baseSpaceId}/runbookRuns/{id} | Get a Runbook Run by ID
*RunbookRunsApi* | [**indexRunbookRuns**](client/RunbookRunsApi.md#indexrunbookruns) | **GET** /runbookRuns | Get a list of RunbookRunResources
*RunbookRunsApi* | [**indexRunbookRunsSpaces**](client/RunbookRunsApi.md#indexrunbookrunsspaces) | **GET** /{baseSpaceId}/runbookRuns | Get a list of RunbookRunResources
*RunbookSnapshotsApi* | [**createRunbookSnapshot**](client/RunbookSnapshotsApi.md#createrunbooksnapshot) | **POST** /runbookSnapshots | Create a RunbookSnapshotResource
*RunbookSnapshotsApi* | [**createRunbookSnapshotSnapshotVariables**](client/RunbookSnapshotsApi.md#createrunbooksnapshotsnapshotvariables) | **POST** /runbookSnapshots/{id}/snapshot-variables | Refresh the variable snapshots associated with the runbook snapshot. The runbook's process must not have changed since the snapshot was created.
*RunbookSnapshotsApi* | [**createRunbookSnapshotSnapshotVariablesSpaces**](client/RunbookSnapshotsApi.md#createrunbooksnapshotsnapshotvariablesspaces) | **POST** /{baseSpaceId}/runbookSnapshots/{id}/snapshot-variables | Refresh the variable snapshots associated with the runbook snapshot. The runbook's process must not have changed since the snapshot was created.
*RunbookSnapshotsApi* | [**createRunbookSnapshotSpaces**](client/RunbookSnapshotsApi.md#createrunbooksnapshotspaces) | **POST** /{baseSpaceId}/runbookSnapshots | Create a RunbookSnapshotResource
*RunbookSnapshotsApi* | [**deleteRunbookSnapshot**](client/RunbookSnapshotsApi.md#deleterunbooksnapshot) | **DELETE** /runbookSnapshots/{id} | Delete a RunbookSnapshotResource by ID
*RunbookSnapshotsApi* | [**deleteRunbookSnapshotSpaces**](client/RunbookSnapshotsApi.md#deleterunbooksnapshotspaces) | **DELETE** /{baseSpaceId}/runbookSnapshots/{id} | Delete a RunbookSnapshotResource by ID
*RunbookSnapshotsApi* | [**getRunbookRunPreviewForRunbookSnapshot**](client/RunbookSnapshotsApi.md#getrunbookrunpreviewforrunbooksnapshot) | **GET** /runbookSnapshots/{id}/runbookRuns/preview/{environment} | Gets a document that describes what steps will/won't be run during a run to a given environment (and tenant if supplied).
*RunbookSnapshotsApi* | [**getRunbookRunPreviewForRunbookSnapshot1**](client/RunbookSnapshotsApi.md#getrunbookrunpreviewforrunbooksnapshot1) | **GET** /runbookSnapshots/{id}/runbookRuns/preview/{environment}/{tenant} | Gets a document that describes what steps will/won't be run during a run to a given environment (and tenant if supplied).
*RunbookSnapshotsApi* | [**getRunbookRunPreviewForRunbookSnapshotSpaces**](client/RunbookSnapshotsApi.md#getrunbookrunpreviewforrunbooksnapshotspaces) | **GET** /{baseSpaceId}/runbookSnapshots/{id}/runbookRuns/preview/{environment} | Gets a document that describes what steps will/won't be run during a run to a given environment (and tenant if supplied).
*RunbookSnapshotsApi* | [**getRunbookRunPreviewForRunbookSnapshotSpaces1**](client/RunbookSnapshotsApi.md#getrunbookrunpreviewforrunbooksnapshotspaces1) | **GET** /{baseSpaceId}/runbookSnapshots/{id}/runbookRuns/preview/{environment}/{tenant} | Gets a document that describes what steps will/won't be run during a run to a given environment (and tenant if supplied).
*RunbookSnapshotsApi* | [**getRunbookRunTemplateForRunbookSnapshot**](client/RunbookSnapshotsApi.md#getrunbookruntemplateforrunbooksnapshot) | **GET** /runbookSnapshots/{id}/runbookRuns/template | Gets all of the information necessary for creating or editing a run for this snapshot.
*RunbookSnapshotsApi* | [**getRunbookRunTemplateForRunbookSnapshotSpaces**](client/RunbookSnapshotsApi.md#getrunbookruntemplateforrunbooksnapshotspaces) | **GET** /{baseSpaceId}/runbookSnapshots/{id}/runbookRuns/template | Gets all of the information necessary for creating or editing a run for this snapshot.
*RunbookSnapshotsApi* | [**getRunbookSnapshotById**](client/RunbookSnapshotsApi.md#getrunbooksnapshotbyid) | **GET** /runbookSnapshots/{id} | Get a Runbook Snapshot by ID
*RunbookSnapshotsApi* | [**getRunbookSnapshotByIdSpaces**](client/RunbookSnapshotsApi.md#getrunbooksnapshotbyidspaces) | **GET** /{baseSpaceId}/runbookSnapshots/{id} | Get a Runbook Snapshot by ID
*RunbookSnapshotsApi* | [**getRunbookSnapshotByProjectAndName**](client/RunbookSnapshotsApi.md#getrunbooksnapshotbyprojectandname) | **GET** /projects/{id}/runbookSnapshots/{name} | Gets a single runbookSnapshot by project ID and name.
*RunbookSnapshotsApi* | [**getRunbookSnapshotByProjectAndNameSpaces**](client/RunbookSnapshotsApi.md#getrunbooksnapshotbyprojectandnamespaces) | **GET** /{baseSpaceId}/projects/{id}/runbookSnapshots/{name} | Gets a single runbookSnapshot by project ID and name.
*RunbookSnapshotsApi* | [**indexProjectRunbookSnapshots**](client/RunbookSnapshotsApi.md#indexprojectrunbooksnapshots) | **GET** /projects/{id}/runbookSnapshots | Get a list of RunbookSnapshotResources for the given ProjectResource
*RunbookSnapshotsApi* | [**indexProjectRunbookSnapshotsSpaces**](client/RunbookSnapshotsApi.md#indexprojectrunbooksnapshotsspaces) | **GET** /{baseSpaceId}/projects/{id}/runbookSnapshots | Get a list of RunbookSnapshotResources for the given ProjectResource
*RunbookSnapshotsApi* | [**indexRunbookRunbookSnapshots**](client/RunbookSnapshotsApi.md#indexrunbookrunbooksnapshots) | **GET** /runbooks/{id}/runbookSnapshots | Get a list of RunbookSnapshotResources for the given RunbookResource
*RunbookSnapshotsApi* | [**indexRunbookRunbookSnapshotsSpaces**](client/RunbookSnapshotsApi.md#indexrunbookrunbooksnapshotsspaces) | **GET** /{baseSpaceId}/runbooks/{id}/runbookSnapshots | Get a list of RunbookSnapshotResources for the given RunbookResource
*RunbookSnapshotsApi* | [**indexRunbookSnapshots**](client/RunbookSnapshotsApi.md#indexrunbooksnapshots) | **GET** /runbookSnapshots | Get a list of Runbook Snapshots
*RunbookSnapshotsApi* | [**indexRunbookSnapshotsSpaces**](client/RunbookSnapshotsApi.md#indexrunbooksnapshotsspaces) | **GET** /{baseSpaceId}/runbookSnapshots | Get a list of Runbook Snapshots
*RunbookSnapshotsApi* | [**updateRunbookSnapshot**](client/RunbookSnapshotsApi.md#updaterunbooksnapshot) | **PUT** /runbookSnapshots/{id} | Modify a RunbookSnapshotResource by ID
*RunbookSnapshotsApi* | [**updateRunbookSnapshotSpaces**](client/RunbookSnapshotsApi.md#updaterunbooksnapshotspaces) | **PUT** /{baseSpaceId}/runbookSnapshots/{id} | Modify a RunbookSnapshotResource by ID
*RunbooksApi* | [**createRunbook**](client/RunbooksApi.md#createrunbook) | **POST** /runbooks | Create a RunbookResource
*RunbooksApi* | [**createRunbookRunForPublishedRunbookCreate**](client/RunbooksApi.md#createrunbookrunforpublishedrunbookcreate) | **POST** /runbooks/{id}/run | Runs the published version of this Runbook.
*RunbooksApi* | [**createRunbookRunForPublishedRunbookCreateSpaces**](client/RunbooksApi.md#createrunbookrunforpublishedrunbookcreatespaces) | **POST** /{baseSpaceId}/runbooks/{id}/run | Runs the published version of this Runbook.
*RunbooksApi* | [**createRunbookSpaces**](client/RunbooksApi.md#createrunbookspaces) | **POST** /{baseSpaceId}/runbooks | Create a RunbookResource
*RunbooksApi* | [**deleteRunbook**](client/RunbooksApi.md#deleterunbook) | **DELETE** /runbooks/{id} | Delete a RunbookResource by ID
*RunbooksApi* | [**deleteRunbookSpaces**](client/RunbooksApi.md#deleterunbookspaces) | **DELETE** /{baseSpaceId}/runbooks/{id} | Delete a RunbookResource by ID
*RunbooksApi* | [**getRunbookById**](client/RunbooksApi.md#getrunbookbyid) | **GET** /runbooks/{id} | Get a Runbook by ID
*RunbooksApi* | [**getRunbookByIdSpaces**](client/RunbooksApi.md#getrunbookbyidspaces) | **GET** /{baseSpaceId}/runbooks/{id} | Get a Runbook by ID
*RunbooksApi* | [**getRunbookEnvironments**](client/RunbooksApi.md#getrunbookenvironments) | **GET** /runbooks/{id}/environments | Lists all environments a Runbook can be run within based on its EnvironmentScope.
*RunbooksApi* | [**getRunbookEnvironmentsSpaces**](client/RunbooksApi.md#getrunbookenvironmentsspaces) | **GET** /{baseSpaceId}/runbooks/{id}/environments | Lists all environments a Runbook can be run within based on its EnvironmentScope.
*RunbooksApi* | [**getRunbookRunPreviewForRunbook**](client/RunbooksApi.md#getrunbookrunpreviewforrunbook) | **GET** /runbooks/{id}/runbookRuns/preview/{environment} | Gets a document that describes what steps will/won't be run during a Runbook Run on a given environment (and tenant if supplied) for a Runbook.
*RunbooksApi* | [**getRunbookRunPreviewForRunbook1**](client/RunbooksApi.md#getrunbookrunpreviewforrunbook1) | **GET** /runbooks/{id}/runbookRuns/preview/{environment}/{tenant} | Gets a document that describes what steps will/won't be run during a Runbook Run on a given environment (and tenant if supplied) for a Runbook.
*RunbooksApi* | [**getRunbookRunPreviewForRunbookSpaces**](client/RunbooksApi.md#getrunbookrunpreviewforrunbookspaces) | **GET** /{baseSpaceId}/runbooks/{id}/runbookRuns/preview/{environment} | Gets a document that describes what steps will/won't be run during a Runbook Run on a given environment (and tenant if supplied) for a Runbook.
*RunbooksApi* | [**getRunbookRunPreviewForRunbookSpaces1**](client/RunbooksApi.md#getrunbookrunpreviewforrunbookspaces1) | **GET** /{baseSpaceId}/runbooks/{id}/runbookRuns/preview/{environment}/{tenant} | Gets a document that describes what steps will/won't be run during a Runbook Run on a given environment (and tenant if supplied) for a Runbook.
*RunbooksApi* | [**getRunbookRunTemplateForRunbook**](client/RunbooksApi.md#getrunbookruntemplateforrunbook) | **GET** /runbooks/{id}/runbookRunTemplate | Gets all of the information necessary for creating or editing a Runbook Run for this Runbook (when you do not have a snapshot).
*RunbooksApi* | [**getRunbookRunTemplateForRunbookSpaces**](client/RunbooksApi.md#getrunbookruntemplateforrunbookspaces) | **GET** /{baseSpaceId}/runbooks/{id}/runbookRunTemplate | Gets all of the information necessary for creating or editing a Runbook Run for this Runbook (when you do not have a snapshot).
*RunbooksApi* | [**getRunbookSnapshotTemplateForRunbook**](client/RunbooksApi.md#getrunbooksnapshottemplateforrunbook) | **GET** /runbooks/{id}/runbookSnapshotTemplate | Gets all of the information necessary for creating or editing a release using this Runbook.
*RunbooksApi* | [**getRunbookSnapshotTemplateForRunbookSpaces**](client/RunbooksApi.md#getrunbooksnapshottemplateforrunbookspaces) | **GET** /{baseSpaceId}/runbooks/{id}/runbookSnapshotTemplate | Gets all of the information necessary for creating or editing a release using this Runbook.
*RunbooksApi* | [**indexProjectRunbooks**](client/RunbooksApi.md#indexprojectrunbooks) | **GET** /projects/{id}/runbooks | Get a list of RunbookResources for the given ProjectResource
*RunbooksApi* | [**indexProjectRunbooksSpaces**](client/RunbooksApi.md#indexprojectrunbooksspaces) | **GET** /{baseSpaceId}/projects/{id}/runbooks | Get a list of RunbookResources for the given ProjectResource
*RunbooksApi* | [**indexRunbooks**](client/RunbooksApi.md#indexrunbooks) | **GET** /runbooks | Get a list of RunbookResources
*RunbooksApi* | [**indexRunbooksSpaces**](client/RunbooksApi.md#indexrunbooksspaces) | **GET** /{baseSpaceId}/runbooks | Get a list of RunbookResources
*RunbooksApi* | [**listAllRunbooks**](client/RunbooksApi.md#listallrunbooks) | **GET** /runbooks/all | Get a list of RunbookResources
*RunbooksApi* | [**listAllRunbooksSpaces**](client/RunbooksApi.md#listallrunbooksspaces) | **GET** /{baseSpaceId}/runbooks/all | Get a list of RunbookResources
*RunbooksApi* | [**updateRunbook**](client/RunbooksApi.md#updaterunbook) | **PUT** /runbooks/{id} | Modify a RunbookResource by ID
*RunbooksApi* | [**updateRunbookSpaces**](client/RunbooksApi.md#updaterunbookspaces) | **PUT** /{baseSpaceId}/runbooks/{id} | Modify a RunbookResource by ID
*SchedulerApi* | [**getScheduledTaskDetails**](client/SchedulerApi.md#getscheduledtaskdetails) | **GET** /scheduler/{name}/logs | Get the details of a scheduled task.
*SchedulerApi* | [**getScheduledTaskRawDetails**](client/SchedulerApi.md#getscheduledtaskrawdetails) | **GET** /scheduler/{name}/logs/raw | Get the details of a scheduled task as raw text.
*SchedulerApi* | [**getScheduler**](client/SchedulerApi.md#getscheduler) | **GET** /scheduler | Returns status of Octopus scheduled tasks.
*SchedulerApi* | [**getSchedulerStart**](client/SchedulerApi.md#getschedulerstart) | **GET** /scheduler/start | Returns HTTP OK (200) when the Octopus Server scheduler has been started.
*SchedulerApi* | [**getSchedulerStop**](client/SchedulerApi.md#getschedulerstop) | **GET** /scheduler/stop | Returns HTTP OK (200) when the Octopus Server scheduler has been stopped.
*SchedulerApi* | [**getSchedulerTrigger**](client/SchedulerApi.md#getschedulertrigger) | **GET** /scheduler/trigger | Returns HTTP OK (200) when the Octopus Server scheduler has been triggered.
*ScopedUserRoleApi* | [**createScopedUserRole**](client/ScopedUserRoleApi.md#createscopeduserrole) | **POST** /scopeduserroles | Create a ScopedUserRoleResource
*ScopedUserRoleApi* | [**createScopedUserRoleSpaces**](client/ScopedUserRoleApi.md#createscopeduserrolespaces) | **POST** /{baseSpaceId}/scopeduserroles | Create a ScopedUserRoleResource
*ScopedUserRoleApi* | [**deleteScopedUserRole**](client/ScopedUserRoleApi.md#deletescopeduserrole) | **DELETE** /scopeduserroles/{id} | Delete a ScopedUserRoleResource by ID
*ScopedUserRoleApi* | [**deleteScopedUserRoleSpaces**](client/ScopedUserRoleApi.md#deletescopeduserrolespaces) | **DELETE** /{baseSpaceId}/scopeduserroles/{id} | Delete a ScopedUserRoleResource by ID
*ScopedUserRoleApi* | [**getListScopedUserRole**](client/ScopedUserRoleApi.md#getlistscopeduserrole) | **GET** /scopeduserroles | Lists the name and ID of all of the scoped user roles in the supplied Octopus Deploy Space. The results will be sorted by name.
*ScopedUserRoleApi* | [**getListScopedUserRoleSpaces**](client/ScopedUserRoleApi.md#getlistscopeduserrolespaces) | **GET** /{baseSpaceId}/scopeduserroles | Lists the name and ID of all of the scoped user roles in the supplied Octopus Deploy Space. The results will be sorted by name.
*ScopedUserRoleApi* | [**updateScopedUserRole**](client/ScopedUserRoleApi.md#updatescopeduserrole) | **PUT** /scopeduserroles/{id} | Modify a ScopedUserRoleResource by ID
*ScopedUserRoleApi* | [**updateScopedUserRoleSpaces**](client/ScopedUserRoleApi.md#updatescopeduserrolespaces) | **PUT** /{baseSpaceId}/scopeduserroles/{id} | Modify a ScopedUserRoleResource by ID
*ScopedUserRolesApi* | [**getScopedUserRoleById**](client/ScopedUserRolesApi.md#getscopeduserrolebyid) | **GET** /scopeduserroles/{id} | Get a Scoped User Role by ID
*ScopedUserRolesApi* | [**getScopedUserRoleByIdSpaces**](client/ScopedUserRolesApi.md#getscopeduserrolebyidspaces) | **GET** /{baseSpaceId}/scopeduserroles/{id} | Get a Scoped User Role by ID
*ServerConfigurationApi* | [**getServerConfiguration**](client/ServerConfigurationApi.md#getserverconfiguration) | **GET** /serverconfiguration | Gets information about the editable server configuration in use by the Octopus Server
*ServerConfigurationApi* | [**getServerConfigurationSettingsList**](client/ServerConfigurationApi.md#getserverconfigurationsettingslist) | **GET** /serverconfiguration/settings | Gets information about the server configuration in use by the Octopus Server
*ServerConfigurationApi* | [**updateServerConfiguration**](client/ServerConfigurationApi.md#updateserverconfiguration) | **PUT** /serverconfiguration | Updates the server configuration used by the Octopus Server
*ServerStatusApi* | [**createSystemGarbageCollect**](client/ServerStatusApi.md#createsystemgarbagecollect) | **POST** /serverstatus/gc-collect | Forces a GC collect.
*ServerStatusApi* | [**getExtensionStats**](client/ServerStatusApi.md#getextensionstats) | **GET** /serverstatus/extensions | Provides statistics for the loaded server extensions.
*ServerStatusApi* | [**getListServerTimezones**](client/ServerStatusApi.md#getlistservertimezones) | **GET** /serverstatus/timezones | Lists timezones supported by the server.
*ServerStatusApi* | [**getRecentLogs**](client/ServerStatusApi.md#getrecentlogs) | **GET** /serverstatus/logs | Retrieves the most recent high-priority log messages from this execution of the Octopus Server process.
*ServerStatusApi* | [**getServerStatus**](client/ServerStatusApi.md#getserverstatus) | **GET** /serverstatus | Shows information about the status of the Octopus Server.
*ServerStatusApi* | [**getServerStatusHealth**](client/ServerStatusApi.md#getserverstatushealth) | **GET** /serverstatus/health | Provides a super simple interface perfect for checking the general health of your entire Octopus Server cluster.
*ServerStatusApi* | [**getSystemInfo**](client/ServerStatusApi.md#getsysteminfo) | **GET** /serverstatus/system-info | Provides information about the Octopus Server process and the machine on which it is running.
*ServerStatusApi* | [**getSystemReport**](client/ServerStatusApi.md#getsystemreport) | **GET** /serverstatus/system-report | Creates a .zip archive containing an aggregate of the other system information APIs.
*SmtpConfigurationApi* | [**getSmtpConfiguration**](client/SmtpConfigurationApi.md#getsmtpconfiguration) | **GET** /smtpconfiguration | Gets information about the SMTP (email) settings in use by the Octopus Server.
*SmtpConfigurationApi* | [**getSmtpIsConfigured**](client/SmtpConfigurationApi.md#getsmtpisconfigured) | **GET** /smtpconfiguration/isconfigured | A low privilege check to determine if SMTP is configured
*SmtpConfigurationApi* | [**updateSmtpConfiguration**](client/SmtpConfigurationApi.md#updatesmtpconfiguration) | **PUT** /smtpconfiguration | Updates the SMTP settings used by the Octopus Server.
*SpaceHomeApi* | [**getSpaceHome**](client/SpaceHomeApi.md#getspacehome) | **GET** /{spaceId} | Returns a document describing the specified Space and links to other parts of the API that apply to the Space.
*SpacesApi* | [**createSpace**](client/SpacesApi.md#createspace) | **POST** /spaces | Creates a new Space.
*SpacesApi* | [**createSpaceLogo**](client/SpacesApi.md#createspacelogo) | **POST** /spaces/{id}/logo | Updates the logo associated with the space.
*SpacesApi* | [**deleteSpace**](client/SpacesApi.md#deletespace) | **DELETE** /spaces/{id} | Deletes an existing space.
*SpacesApi* | [**getSpaceById**](client/SpacesApi.md#getspacebyid) | **GET** /spaces/{id} | Get a Space by ID
*SpacesApi* | [**getSpaceLogo**](client/SpacesApi.md#getspacelogo) | **GET** /spaces/{id}/logo | Gets the logo associated with the space.
*SpacesApi* | [**indexSpaces**](client/SpacesApi.md#indexspaces) | **GET** /spaces | Get a list of SpaceResources
*SpacesApi* | [**listAllSpaces**](client/SpacesApi.md#listallspaces) | **GET** /spaces/all | Get a list of SpaceResources
*SpacesApi* | [**searchSpace**](client/SpacesApi.md#searchspace) | **GET** /spaces/{id}/search | Searches in the supplied Octopus Deploy Space using the given keyword.
*SpacesApi* | [**searchSpaceSpaces**](client/SpacesApi.md#searchspacespaces) | **GET** /{baseSpaceId}/spaces/{id}/search | Searches in the supplied Octopus Deploy Space using the given keyword.
*SpacesApi* | [**updateModifySpace**](client/SpacesApi.md#updatemodifyspace) | **PUT** /spaces/{id} | Modifies an existing space.
*SpacesApi* | [**updateSpaceLogo**](client/SpacesApi.md#updatespacelogo) | **PUT** /spaces/{id}/logo | Updates the logo associated with the space.
*SubscriptionApi* | [**createSubscription**](client/SubscriptionApi.md#createsubscription) | **POST** /subscriptions | Create a SubscriptionResource
*SubscriptionApi* | [**createSubscriptionSpaces**](client/SubscriptionApi.md#createsubscriptionspaces) | **POST** /{baseSpaceId}/subscriptions | Create a SubscriptionResource
*SubscriptionApi* | [**deleteSubscription**](client/SubscriptionApi.md#deletesubscription) | **DELETE** /subscriptions/{id} | Delete a SubscriptionResource by ID
*SubscriptionApi* | [**deleteSubscriptionSpaces**](client/SubscriptionApi.md#deletesubscriptionspaces) | **DELETE** /{baseSpaceId}/subscriptions/{id} | Delete a SubscriptionResource by ID
*SubscriptionApi* | [**indexSubscriptions**](client/SubscriptionApi.md#indexsubscriptions) | **GET** /subscriptions | Get a list of SubscriptionResources
*SubscriptionApi* | [**indexSubscriptionsSpaces**](client/SubscriptionApi.md#indexsubscriptionsspaces) | **GET** /{baseSpaceId}/subscriptions | Get a list of SubscriptionResources
*SubscriptionApi* | [**updateSubscription**](client/SubscriptionApi.md#updatesubscription) | **PUT** /subscriptions/{id} | Modify a SubscriptionResource by ID
*SubscriptionApi* | [**updateSubscriptionSpaces**](client/SubscriptionApi.md#updatesubscriptionspaces) | **PUT** /{baseSpaceId}/subscriptions/{id} | Modify a SubscriptionResource by ID
*SubscriptionsApi* | [**getAllSubscriptions**](client/SubscriptionsApi.md#getallsubscriptions) | **GET** /subscriptions/all | Get all Subscriptions
*SubscriptionsApi* | [**getAllSubscriptionsSpaces**](client/SubscriptionsApi.md#getallsubscriptionsspaces) | **GET** /{baseSpaceId}/subscriptions/all | Get all Subscriptions
*SubscriptionsApi* | [**getSubscriptionById**](client/SubscriptionsApi.md#getsubscriptionbyid) | **GET** /subscriptions/{id} | Get a Subscription by ID
*SubscriptionsApi* | [**getSubscriptionByIdSpaces**](client/SubscriptionsApi.md#getsubscriptionbyidspaces) | **GET** /{baseSpaceId}/subscriptions/{id} | Get a Subscription by ID
*TagSetsApi* | [**createTagSet**](client/TagSetsApi.md#createtagset) | **POST** /tagsets | Create a TagSetResource
*TagSetsApi* | [**createTagSetSpaces**](client/TagSetsApi.md#createtagsetspaces) | **POST** /{baseSpaceId}/tagsets | Create a TagSetResource
*TagSetsApi* | [**deleteTagSet**](client/TagSetsApi.md#deletetagset) | **DELETE** /tagsets/{id} | Delete a TagSetResource by ID
*TagSetsApi* | [**deleteTagSetSpaces**](client/TagSetsApi.md#deletetagsetspaces) | **DELETE** /{baseSpaceId}/tagsets/{id} | Delete a TagSetResource by ID
*TagSetsApi* | [**getTagSetById**](client/TagSetsApi.md#gettagsetbyid) | **GET** /tagsets/{id} | Get a Tag Set by ID
*TagSetsApi* | [**getTagSetByIdSpaces**](client/TagSetsApi.md#gettagsetbyidspaces) | **GET** /{baseSpaceId}/tagsets/{id} | Get a Tag Set by ID
*TagSetsApi* | [**indexTagSets**](client/TagSetsApi.md#indextagsets) | **GET** /tagsets | Get a list of TagSetResources
*TagSetsApi* | [**indexTagSetsSpaces**](client/TagSetsApi.md#indextagsetsspaces) | **GET** /{baseSpaceId}/tagsets | Get a list of TagSetResources
*TagSetsApi* | [**listAllTagSets**](client/TagSetsApi.md#listalltagsets) | **GET** /tagsets/all | Get a list of Tag Sets
*TagSetsApi* | [**listAllTagSetsSpaces**](client/TagSetsApi.md#listalltagsetsspaces) | **GET** /{baseSpaceId}/tagsets/all | Get a list of Tag Sets
*TagSetsApi* | [**updateSortTagSets**](client/TagSetsApi.md#updatesorttagsets) | **PUT** /tagsets/sortorder | Takes an array of tag set IDs as the request body, uses the order of items in the array to sort the tag sets on the server. The ID of every tag set must be specified.
*TagSetsApi* | [**updateSortTagSetsSpaces**](client/TagSetsApi.md#updatesorttagsetsspaces) | **PUT** /{baseSpaceId}/tagsets/sortorder | Takes an array of tag set IDs as the request body, uses the order of items in the array to sort the tag sets on the server. The ID of every tag set must be specified.
*TagSetsApi* | [**updateTagSet**](client/TagSetsApi.md#updatetagset) | **PUT** /tagsets/{id} | Modify a TagSetResource by ID
*TagSetsApi* | [**updateTagSetSpaces**](client/TagSetsApi.md#updatetagsetspaces) | **PUT** /{baseSpaceId}/tagsets/{id} | Modify a TagSetResource by ID
*TasksApi* | [**createTask**](client/TasksApi.md#createtask) | **POST** /tasks | Create a TaskResource
*TasksApi* | [**createTaskCancel**](client/TasksApi.md#createtaskcancel) | **POST** /tasks/{id}/cancel | Marks the given task as canceled.
*TasksApi* | [**createTaskCancelSpaces**](client/TasksApi.md#createtaskcancelspaces) | **POST** /{baseSpaceId}/tasks/{id}/cancel | Marks the given task as canceled.
*TasksApi* | [**createTaskRerun**](client/TasksApi.md#createtaskrerun) | **POST** /tasks/rerun/{id} | Creates a new task and executes it, using a given task as the input. Note that deployment tasks cannot be re-run.
*TasksApi* | [**createTaskRerunSpaces**](client/TasksApi.md#createtaskrerunspaces) | **POST** /{baseSpaceId}/tasks/rerun/{id} | Creates a new task and executes it, using a given task as the input. Note that deployment tasks cannot be re-run.
*TasksApi* | [**createTaskSpaces**](client/TasksApi.md#createtaskspaces) | **POST** /{baseSpaceId}/tasks | Create a TaskResource
*TasksApi* | [**createTaskState**](client/TasksApi.md#createtaskstate) | **POST** /tasks/{id}/state | Change the state of a task
*TasksApi* | [**createTaskStateSpaces**](client/TasksApi.md#createtaskstatespaces) | **POST** /{baseSpaceId}/tasks/{id}/state | Change the state of a task
*TasksApi* | [**getListTaskTypes**](client/TasksApi.md#getlisttasktypes) | **GET** /tasks/tasktypes | Lists supported task types.
*TasksApi* | [**getListTaskTypesSpaces**](client/TasksApi.md#getlisttasktypesspaces) | **GET** /{baseSpaceId}/tasks/tasktypes | Lists supported task types.
*TasksApi* | [**getListTasks**](client/TasksApi.md#getlisttasks) | **GET** /tasks | Lists all of the tasks in the supplied Octopus Deploy Space. The results will be sorted from newest to oldest.
*TasksApi* | [**getListTasksSpaces**](client/TasksApi.md#getlisttasksspaces) | **GET** /{baseSpaceId}/tasks | Lists all of the tasks in the supplied Octopus Deploy Space. The results will be sorted from newest to oldest.
*TasksApi* | [**getTaskById**](client/TasksApi.md#gettaskbyid) | **GET** /tasks/{id} | Get a TaskResource by ID
*TasksApi* | [**getTaskByIdSpaces**](client/TasksApi.md#gettaskbyidspaces) | **GET** /{baseSpaceId}/tasks/{id} | Get a TaskResource by ID
*TasksApi* | [**getTaskDetails**](client/TasksApi.md#gettaskdetails) | **GET** /tasks/{id}/details | Gets a single task by ID, including the full task log as a tree of activity elements.
*TasksApi* | [**getTaskDetailsSpaces**](client/TasksApi.md#gettaskdetailsspaces) | **GET** /{baseSpaceId}/tasks/{id}/details | Gets a single task by ID, including the full task log as a tree of activity elements.
*TasksApi* | [**getTaskRaw**](client/TasksApi.md#gettaskraw) | **GET** /tasks/{id}/raw | Gets the full task log of a given resource as plain text. Useful when the log needs to be rendered to a console or sent as an email attachment.
*TasksApi* | [**getTaskRawSpaces**](client/TasksApi.md#gettaskrawspaces) | **GET** /{baseSpaceId}/tasks/{id}/raw | Gets the full task log of a given resource as plain text. Useful when the log needs to be rendered to a console or sent as an email attachment.
*TasksApi* | [**indexTaskQueuedBehind**](client/TasksApi.md#indextaskqueuedbehind) | **GET** /tasks/{id}/queued-behind | Get a list of TaskResources for the given TaskResource
*TasksApi* | [**indexTaskQueuedBehindSpaces**](client/TasksApi.md#indextaskqueuedbehindspaces) | **GET** /{baseSpaceId}/tasks/{id}/queued-behind | Get a list of TaskResources for the given TaskResource
*TeamMembershipApi* | [**createTeamMembershipPreview**](client/TeamMembershipApi.md#createteammembershippreview) | **POST** /teammembership/previewteam | Preview Users that would belong to the specified Team
*TeamMembershipApi* | [**createTeamMembershipPreviewSpaces**](client/TeamMembershipApi.md#createteammembershippreviewspaces) | **POST** /{baseSpaceId}/teammembership/previewteam | Preview Users that would belong to the specified Team
*TeamMembershipApi* | [**getTeamMembership**](client/TeamMembershipApi.md#getteammembership) | **GET** /teammembership | Gets a list of team memberships for a user
*TeamMembershipApi* | [**getTeamMembershipSpaces**](client/TeamMembershipApi.md#getteammembershipspaces) | **GET** /{baseSpaceId}/teammembership | Gets a list of team memberships for a user
*TeamsApi* | [**createTeam**](client/TeamsApi.md#createteam) | **POST** /teams | Creates a new Team
*TeamsApi* | [**createTeamSpaces**](client/TeamsApi.md#createteamspaces) | **POST** /{baseSpaceId}/teams | Creates a new Team
*TeamsApi* | [**deleteTeam**](client/TeamsApi.md#deleteteam) | **DELETE** /teams/{id} | Deletes an existing Team
*TeamsApi* | [**deleteTeamSpaces**](client/TeamsApi.md#deleteteamspaces) | **DELETE** /{baseSpaceId}/teams/{id} | Deletes an existing Team
*TeamsApi* | [**getListScopedUserRoleForTeam**](client/TeamsApi.md#getlistscopeduserroleforteam) | **GET** /teams/{id}/scopeduserroles | Get a list of a Team's Scoped User Roles
*TeamsApi* | [**getListScopedUserRoleForTeamSpaces**](client/TeamsApi.md#getlistscopeduserroleforteamspaces) | **GET** /{baseSpaceId}/teams/{id}/scopeduserroles | Get a list of a Team's Scoped User Roles
*TeamsApi* | [**getTeamById**](client/TeamsApi.md#getteambyid) | **GET** /teams/{id} | Get a Team by ID
*TeamsApi* | [**getTeamByIdSpaces**](client/TeamsApi.md#getteambyidspaces) | **GET** /{baseSpaceId}/teams/{id} | Get a Team by ID
*TeamsApi* | [**listAllTeams**](client/TeamsApi.md#listallteams) | **GET** /teams/all | Get a list of Teams
*TeamsApi* | [**listAllTeamsSpaces**](client/TeamsApi.md#listallteamsspaces) | **GET** /{baseSpaceId}/teams/all | Get a list of Teams
*TeamsApi* | [**listTeams**](client/TeamsApi.md#listteams) | **GET** /teams | Gets a list of teams
*TeamsApi* | [**listTeamsSpaces**](client/TeamsApi.md#listteamsspaces) | **GET** /{baseSpaceId}/teams | Gets a list of teams
*TeamsApi* | [**updateTeam**](client/TeamsApi.md#updateteam) | **PUT** /teams/{id} | Modifies an existing Team
*TeamsApi* | [**updateTeamSpaces**](client/TeamsApi.md#updateteamspaces) | **PUT** /{baseSpaceId}/teams/{id} | Modifies an existing Team
*TenantVariablesApi* | [**getTenantVariablesAll**](client/TenantVariablesApi.md#gettenantvariablesall) | **GET** /tenantvariables/all | Lists all of the tenant variables in the supplied Octopus Deploy Space. The results will be sorted alphabetically by id.
*TenantVariablesApi* | [**getTenantVariablesAllSpaces**](client/TenantVariablesApi.md#gettenantvariablesallspaces) | **GET** /{baseSpaceId}/tenantvariables/all | Lists all of the tenant variables in the supplied Octopus Deploy Space. The results will be sorted alphabetically by id.
*TenantsApi* | [**createTenant**](client/TenantsApi.md#createtenant) | **POST** /tenants | Creates a new Tenant
*TenantsApi* | [**createTenantLogo**](client/TenantsApi.md#createtenantlogo) | **POST** /tenants/{id}/logo | Sets the logo associated with the tenant.
*TenantsApi* | [**createTenantLogoSpaces**](client/TenantsApi.md#createtenantlogospaces) | **POST** /{baseSpaceId}/tenants/{id}/logo | Sets the logo associated with the tenant.
*TenantsApi* | [**createTenantSpaces**](client/TenantsApi.md#createtenantspaces) | **POST** /{baseSpaceId}/tenants | Creates a new Tenant
*TenantsApi* | [**createTenantVariables**](client/TenantsApi.md#createtenantvariables) | **POST** /tenants/{id}/variables | Creates the variables associated with the tenant.
*TenantsApi* | [**createTenantVariablesSpaces**](client/TenantsApi.md#createtenantvariablesspaces) | **POST** /{baseSpaceId}/tenants/{id}/variables | Creates the variables associated with the tenant.
*TenantsApi* | [**deleteTenant**](client/TenantsApi.md#deletetenant) | **DELETE** /tenants/{id} | Deletes an existing tenant.
*TenantsApi* | [**deleteTenantSpaces**](client/TenantsApi.md#deletetenantspaces) | **DELETE** /{baseSpaceId}/tenants/{id} | Deletes an existing tenant.
*TenantsApi* | [**getTenantById**](client/TenantsApi.md#gettenantbyid) | **GET** /tenants/{id} | Get a Tenant by ID
*TenantsApi* | [**getTenantByIdSpaces**](client/TenantsApi.md#gettenantbyidspaces) | **GET** /{baseSpaceId}/tenants/{id} | Get a Tenant by ID
*TenantsApi* | [**getTenantLogo**](client/TenantsApi.md#gettenantlogo) | **GET** /tenants/{id}/logo | Gets the logo associated with the Tenant
*TenantsApi* | [**getTenantLogoSpaces**](client/TenantsApi.md#gettenantlogospaces) | **GET** /{baseSpaceId}/tenants/{id}/logo | Gets the logo associated with the Tenant
*TenantsApi* | [**getTenantVariablesMissing**](client/TenantsApi.md#gettenantvariablesmissing) | **GET** /tenants/variables-missing | Returns a list of tenants who are missing required variables
*TenantsApi* | [**getTenantVariablesMissingSpaces**](client/TenantsApi.md#gettenantvariablesmissingspaces) | **GET** /{baseSpaceId}/tenants/variables-missing | Returns a list of tenants who are missing required variables
*TenantsApi* | [**getTenantsConfiguration**](client/TenantsApi.md#gettenantsconfiguration) | **GET** /tenants/status | Reports back the status of multi-tenancy
*TenantsApi* | [**getTenantsConfigurationSpaces**](client/TenantsApi.md#gettenantsconfigurationspaces) | **GET** /{baseSpaceId}/tenants/status | Reports back the status of multi-tenancy
*TenantsApi* | [**getVariablesByTenantId**](client/TenantsApi.md#getvariablesbytenantid) | **GET** /tenants/{id}/variables | Gets variables associated with the provided tenant ID.
*TenantsApi* | [**getVariablesByTenantIdSpaces**](client/TenantsApi.md#getvariablesbytenantidspaces) | **GET** /{baseSpaceId}/tenants/{id}/variables | Gets variables associated with the provided tenant ID.
*TenantsApi* | [**listAllTenants**](client/TenantsApi.md#listalltenants) | **GET** /tenants/all | Lists all tenants
*TenantsApi* | [**listAllTenantsSpaces**](client/TenantsApi.md#listalltenantsspaces) | **GET** /{baseSpaceId}/tenants/all | Lists all tenants
*TenantsApi* | [**listTenants**](client/TenantsApi.md#listtenants) | **GET** /tenants | Gets a list of tenants
*TenantsApi* | [**listTenantsSpaces**](client/TenantsApi.md#listtenantsspaces) | **GET** /{baseSpaceId}/tenants | Gets a list of tenants
*TenantsApi* | [**testTenantTag**](client/TenantsApi.md#testtenanttag) | **GET** /tenants/tag-test | Checks tenants for matching tags
*TenantsApi* | [**testTenantTagSpaces**](client/TenantsApi.md#testtenanttagspaces) | **GET** /{baseSpaceId}/tenants/tag-test | Checks tenants for matching tags
*TenantsApi* | [**updateTenant**](client/TenantsApi.md#updatetenant) | **PUT** /tenants/{id} | Modifies an existing Tenant
*TenantsApi* | [**updateTenantLogo**](client/TenantsApi.md#updatetenantlogo) | **PUT** /tenants/{id}/logo | Updates the logo associated with the tenant.
*TenantsApi* | [**updateTenantLogoSpaces**](client/TenantsApi.md#updatetenantlogospaces) | **PUT** /{baseSpaceId}/tenants/{id}/logo | Updates the logo associated with the tenant.
*TenantsApi* | [**updateTenantSpaces**](client/TenantsApi.md#updatetenantspaces) | **PUT** /{baseSpaceId}/tenants/{id} | Modifies an existing Tenant
*TenantsApi* | [**updateTenantVariables**](client/TenantsApi.md#updatetenantvariables) | **PUT** /tenants/{id}/variables | Updates the variables associated with the tenant.
*TenantsApi* | [**updateTenantVariablesSpaces**](client/TenantsApi.md#updatetenantvariablesspaces) | **PUT** /{baseSpaceId}/tenants/{id}/variables | Updates the variables associated with the tenant.
*UpgradeConfigurationApi* | [**getUpgradeConfiguration**](client/UpgradeConfigurationApi.md#getupgradeconfiguration) | **GET** /upgradeconfiguration | Gets information about the upgrade configuration in use by the Octopus Server.
*UpgradeConfigurationApi* | [**updateUpgradeConfiguration**](client/UpgradeConfigurationApi.md#updateupgradeconfiguration) | **PUT** /upgradeconfiguration | Updates the upgrade configuration used by the Octopus Server.
*UserOnboardingApi* | [**getOnboarding**](client/UserOnboardingApi.md#getonboarding) | **GET** /useronboarding | Gets information about how far the Octopus Server is towards having its first release deployed.
*UserOnboardingApi* | [**getOnboardingSpaces**](client/UserOnboardingApi.md#getonboardingspaces) | **GET** /{baseSpaceId}/useronboarding | Gets information about how far the Octopus Server is towards having its first release deployed.
*UserPermissionsApi* | [**getUserGetPermissions**](client/UserPermissionsApi.md#getusergetpermissions) | **GET** /users/{id}/permissions | Gets summarized permission information. Available for the current authenticated user only.
*UserPermissionsApi* | [**getUserGetPermissionsConfiguration**](client/UserPermissionsApi.md#getusergetpermissionsconfiguration) | **GET** /users/{id}/permissions/configuration | Gets a summary of the configuration of the user's permissions information. Available for the current authenticated user only.
*UserPermissionsApi* | [**getUserGetPermissionsConfigurationSpaces**](client/UserPermissionsApi.md#getusergetpermissionsconfigurationspaces) | **GET** /{baseSpaceId}/users/{id}/permissions/configuration | Gets a summary of the configuration of the user's permissions information. Available for the current authenticated user only.
*UserPermissionsApi* | [**getUserGetPermissionsSpaces**](client/UserPermissionsApi.md#getusergetpermissionsspaces) | **GET** /{baseSpaceId}/users/{id}/permissions | Gets summarized permission information. Available for the current authenticated user only.
*UserPermissionsApi* | [**getUserPermissionsExport**](client/UserPermissionsApi.md#getuserpermissionsexport) | **GET** /users/{id}/permissions/export | Gets list of permissions as a csv file. Available for the current authenticated user only.
*UserPermissionsApi* | [**getUserPermissionsExportSpaces**](client/UserPermissionsApi.md#getuserpermissionsexportspaces) | **GET** /{baseSpaceId}/users/{id}/permissions/export | Gets list of permissions as a csv file. Available for the current authenticated user only.
*UserRolesApi* | [**createUserRole**](client/UserRolesApi.md#createuserrole) | **POST** /userroles | Create a UserRoleResource
*UserRolesApi* | [**deleteUserRole**](client/UserRolesApi.md#deleteuserrole) | **DELETE** /userroles/{id} | Delete a UserRoleResource by ID
*UserRolesApi* | [**getUserRoleById**](client/UserRolesApi.md#getuserrolebyid) | **GET** /userroles/{id} | Get a User Role by ID
*UserRolesApi* | [**indexUserRoles**](client/UserRolesApi.md#indexuserroles) | **GET** /userroles | Get a list of UserRoleResources
*UserRolesApi* | [**listAllUserRoles**](client/UserRolesApi.md#listalluserroles) | **GET** /userroles/all | Get a list of User Roles
*UserRolesApi* | [**updateUserRole**](client/UserRolesApi.md#updateuserrole) | **PUT** /userroles/{id} | Modify a UserRoleResource by ID
*UserTeamsApi* | [**getUserGetTeams**](client/UserTeamsApi.md#getusergetteams) | **GET** /users/{id}/teams | Gets a list of teams (id and name only) for the specified user, including any from external auth-provider security groups.
*UserTeamsApi* | [**getUserGetTeamsSpaces**](client/UserTeamsApi.md#getusergetteamsspaces) | **GET** /{baseSpaceId}/users/{id}/teams | Gets a list of teams (id and name only) for the specified user, including any from external auth-provider security groups.
*UsersApi* | [**createUserCreate**](client/UsersApi.md#createusercreate) | **POST** /users | Creates a new user.
*UsersApi* | [**createUserLogin**](client/UsersApi.md#createuserlogin) | **POST** /users/login | Authenticates a user and returns a response with a cookie for the current user. This cookie can be submitted with future requests to avoid re-authentication.
*UsersApi* | [**createUserLogout**](client/UsersApi.md#createuserlogout) | **POST** /users/logout | Revokes the authentication cookie from the current session.
*UsersApi* | [**createUserRegister**](client/UsersApi.md#createuserregister) | **POST** /users/register | Registers a new user and responds with an authentication cookie. Unless the first administrator user is being registered, an invitation code must be provided.
*UsersApi* | [**deleteUser**](client/UsersApi.md#deleteuser) | **DELETE** /users/{id} | Delete a UserResource by ID
*UsersApi* | [**getUserAuthentication**](client/UsersApi.md#getuserauthentication) | **GET** /users/authentication | Provides the details of the enabled authentication providers and whether the current user can edit logins for the given user.
*UsersApi* | [**getUserAuthentication1**](client/UsersApi.md#getuserauthentication1) | **GET** /users/authentication/{userId} | Provides the details of the enabled authentication providers and whether the current user can edit logins for the given user.
*UsersApi* | [**getUserById**](client/UsersApi.md#getuserbyid) | **GET** /users/{id} | Get a User by ID
*UsersApi* | [**getUserExternalSearch**](client/UsersApi.md#getuserexternalsearch) | **GET** /users/external-search | Searches for users, using the authentication providers.
*UsersApi* | [**getUserGetCurrent**](client/UsersApi.md#getusergetcurrent) | **GET** /users/me | Gets information about the current user.
*UsersApi* | [**getUserGetSpaces**](client/UsersApi.md#getusergetspaces) | **GET** /users/{id}/spaces | Gets a list of spaces available to the current authenticated user only.
*UsersApi* | [**getUserIdentityMetadata**](client/UsersApi.md#getuseridentitymetadata) | **GET** /users/identity-metadata | Gets the metadata to describe the claims/fields used by authentication providers that support identities.
*UsersApi* | [**indexUsers**](client/UsersApi.md#indexusers) | **GET** /users | Get a list of UserResources
*UsersApi* | [**listAllUsers**](client/UsersApi.md#listallusers) | **GET** /users/all | Get a list of Users
*UsersApi* | [**updateUser**](client/UsersApi.md#updateuser) | **PUT** /users/{id} | Modifies an existing user.
*VariablesApi* | [**getVariableNamesList**](client/VariablesApi.md#getvariablenameslist) | **GET** /variables/names | List the names of variables that can be used in deployment actions. If a project is specified, this will include variables in that project.  If a project environments filter is specified, project variables only scoped to the environment will be excluded. 
*VariablesApi* | [**getVariableNamesListSpaces**](client/VariablesApi.md#getvariablenameslistspaces) | **GET** /{baseSpaceId}/variables/names | List the names of variables that can be used in deployment actions. If a project is specified, this will include variables in that project.  If a project environments filter is specified, project variables only scoped to the environment will be excluded. 
*VariablesApi* | [**getVariablePreviewList**](client/VariablesApi.md#getvariablepreviewlist) | **GET** /variables/preview | List the evaluated variables for a deployment. 
*VariablesApi* | [**getVariablePreviewListSpaces**](client/VariablesApi.md#getvariablepreviewlistspaces) | **GET** /{baseSpaceId}/variables/preview | List the evaluated variables for a deployment. 
*VariablesApi* | [**getVariableSetById**](client/VariablesApi.md#getvariablesetbyid) | **GET** /variables/{id} | Get a VariableSetResource by ID
*VariablesApi* | [**getVariableSetByIdSpaces**](client/VariablesApi.md#getvariablesetbyidspaces) | **GET** /{baseSpaceId}/variables/{id} | Get a VariableSetResource by ID
*VariablesApi* | [**listAllVariableSets**](client/VariablesApi.md#listallvariablesets) | **GET** /variables/all | Get a list of VariableSetResources
*VariablesApi* | [**listAllVariableSetsSpaces**](client/VariablesApi.md#listallvariablesetsspaces) | **GET** /{baseSpaceId}/variables/all | Get a list of VariableSetResources
*VariablesApi* | [**updateVariableSet**](client/VariablesApi.md#updatevariableset) | **PUT** /variables/{id} | Updates a variable set.
*VariablesApi* | [**updateVariableSetSpaces**](client/VariablesApi.md#updatevariablesetspaces) | **PUT** /{baseSpaceId}/variables/{id} | Updates a variable set.
*WorkerPoolsApi* | [**createWorkerPool**](client/WorkerPoolsApi.md#createworkerpool) | **POST** /workerpools | Create a WorkerPoolResource
*WorkerPoolsApi* | [**createWorkerPoolSpaces**](client/WorkerPoolsApi.md#createworkerpoolspaces) | **POST** /{baseSpaceId}/workerpools | Create a WorkerPoolResource
*WorkerPoolsApi* | [**deleteWorkerPool**](client/WorkerPoolsApi.md#deleteworkerpool) | **DELETE** /workerpools/{id} | Delete a WorkerPoolResource by ID
*WorkerPoolsApi* | [**deleteWorkerPoolSpaces**](client/WorkerPoolsApi.md#deleteworkerpoolspaces) | **DELETE** /{baseSpaceId}/workerpools/{id} | Delete a WorkerPoolResource by ID
*WorkerPoolsApi* | [**getWorkerPoolById**](client/WorkerPoolsApi.md#getworkerpoolbyid) | **GET** /workerpools/{id} | Get a Worker Pool by ID
*WorkerPoolsApi* | [**getWorkerPoolByIdSpaces**](client/WorkerPoolsApi.md#getworkerpoolbyidspaces) | **GET** /{baseSpaceId}/workerpools/{id} | Get a Worker Pool by ID
*WorkerPoolsApi* | [**getWorkerPoolDynamicWorkerTypes**](client/WorkerPoolsApi.md#getworkerpooldynamicworkertypes) | **GET** /workerpools/dynamicworkertypes | Lists the available Worker Types for the Dynamic Worker Pool
*WorkerPoolsApi* | [**getWorkerPoolDynamicWorkerTypesSpaces**](client/WorkerPoolsApi.md#getworkerpooldynamicworkertypesspaces) | **GET** /{baseSpaceId}/workerpools/dynamicworkertypes | Lists the available Worker Types for the Dynamic Worker Pool
*WorkerPoolsApi* | [**getWorkerPoolSupportedTypes**](client/WorkerPoolsApi.md#getworkerpoolsupportedtypes) | **GET** /workerpools/supportedtypes | Lists the available Worker Pool types.
*WorkerPoolsApi* | [**getWorkerPoolSupportedTypesSpaces**](client/WorkerPoolsApi.md#getworkerpoolsupportedtypesspaces) | **GET** /{baseSpaceId}/workerpools/supportedtypes | Lists the available Worker Pool types.
*WorkerPoolsApi* | [**getWorkerPoolsSummary**](client/WorkerPoolsApi.md#getworkerpoolssummary) | **GET** /workerpools/summary | Lists all worker pools, including a summary of machine information
*WorkerPoolsApi* | [**getWorkerPoolsSummarySpaces**](client/WorkerPoolsApi.md#getworkerpoolssummaryspaces) | **GET** /{baseSpaceId}/workerpools/summary | Lists all worker pools, including a summary of machine information
*WorkerPoolsApi* | [**indexWorkerPoolWorkers**](client/WorkerPoolsApi.md#indexworkerpoolworkers) | **GET** /workerpools/{id}/workers | Get a list of WorkerResources for the given WorkerPoolResource
*WorkerPoolsApi* | [**indexWorkerPoolWorkersSpaces**](client/WorkerPoolsApi.md#indexworkerpoolworkersspaces) | **GET** /{baseSpaceId}/workerpools/{id}/workers | Get a list of WorkerResources for the given WorkerPoolResource
*WorkerPoolsApi* | [**indexWorkerPools**](client/WorkerPoolsApi.md#indexworkerpools) | **GET** /workerpools | Get a list of WorkerPoolResources
*WorkerPoolsApi* | [**indexWorkerPoolsSpaces**](client/WorkerPoolsApi.md#indexworkerpoolsspaces) | **GET** /{baseSpaceId}/workerpools | Get a list of WorkerPoolResources
*WorkerPoolsApi* | [**listAllWorkerPools**](client/WorkerPoolsApi.md#listallworkerpools) | **GET** /workerpools/all | Get a list of Worker Pools
*WorkerPoolsApi* | [**listAllWorkerPoolsSpaces**](client/WorkerPoolsApi.md#listallworkerpoolsspaces) | **GET** /{baseSpaceId}/workerpools/all | Get a list of Worker Pools
*WorkerPoolsApi* | [**updateSortWorkerPools**](client/WorkerPoolsApi.md#updatesortworkerpools) | **PUT** /workerpools/sortorder | Takes an array of work pool IDs as the request body, uses the order of items in the array to sort the worker pools on the server. The ID of every worker pool must be specified.
*WorkerPoolsApi* | [**updateSortWorkerPoolsSpaces**](client/WorkerPoolsApi.md#updatesortworkerpoolsspaces) | **PUT** /{baseSpaceId}/workerpools/sortorder | Takes an array of work pool IDs as the request body, uses the order of items in the array to sort the worker pools on the server. The ID of every worker pool must be specified.
*WorkerPoolsApi* | [**updateWorkerPool**](client/WorkerPoolsApi.md#updateworkerpool) | **PUT** /workerpools/{id} | Modify a WorkerPoolResource by ID
*WorkerPoolsApi* | [**updateWorkerPoolSpaces**](client/WorkerPoolsApi.md#updateworkerpoolspaces) | **PUT** /{baseSpaceId}/workerpools/{id} | Modify a WorkerPoolResource by ID
*WorkersApi* | [**createWorker**](client/WorkersApi.md#createworker) | **POST** /workers | Create a WorkerResource
*WorkersApi* | [**createWorkerSpaces**](client/WorkersApi.md#createworkerspaces) | **POST** /{baseSpaceId}/workers | Create a WorkerResource
*WorkersApi* | [**deleteWorker**](client/WorkersApi.md#deleteworker) | **DELETE** /workers/{id} | Delete a WorkerResource by ID
*WorkersApi* | [**deleteWorkerSpaces**](client/WorkersApi.md#deleteworkerspaces) | **DELETE** /{baseSpaceId}/workers/{id} | Delete a WorkerResource by ID
*WorkersApi* | [**getDiscoverWorker**](client/WorkersApi.md#getdiscoverworker) | **GET** /workers/discover | Interrogate a machine for communication details so that it may be added to the installation.
*WorkersApi* | [**getDiscoverWorkerSpaces**](client/WorkersApi.md#getdiscoverworkerspaces) | **GET** /{baseSpaceId}/workers/discover | Interrogate a machine for communication details so that it may be added to the installation.
*WorkersApi* | [**getWorkerById**](client/WorkersApi.md#getworkerbyid) | **GET** /workers/{id} | Get a Worker by ID
*WorkersApi* | [**getWorkerByIdSpaces**](client/WorkersApi.md#getworkerbyidspaces) | **GET** /{baseSpaceId}/workers/{id} | Get a Worker by ID
*WorkersApi* | [**getWorkerConnectionStatus**](client/WorkersApi.md#getworkerconnectionstatus) | **GET** /workers/{id}/connection | Get the status of the network connection between the Octopus server and a worker.
*WorkersApi* | [**getWorkerConnectionStatusSpaces**](client/WorkersApi.md#getworkerconnectionstatusspaces) | **GET** /{baseSpaceId}/workers/{id}/connection | Get the status of the network connection between the Octopus server and a worker.
*WorkersApi* | [**getWorkerOperatingSystemNamesListAll**](client/WorkersApi.md#getworkeroperatingsystemnameslistall) | **GET** /workers/operatingsystem/names/all | Gets all operating system names for workers. The result will be a string array.
*WorkersApi* | [**getWorkerOperatingSystemNamesListAllSpaces**](client/WorkersApi.md#getworkeroperatingsystemnameslistallspaces) | **GET** /{baseSpaceId}/workers/operatingsystem/names/all | Gets all operating system names for workers. The result will be a string array.
*WorkersApi* | [**getWorkerOperatingSystemShellNameListAll**](client/WorkersApi.md#getworkeroperatingsystemshellnamelistall) | **GET** /workers/operatingsystem/shells/all | Gets all operating system shell names for workers. The result will be a string array.
*WorkersApi* | [**getWorkerOperatingSystemShellNameListAllSpaces**](client/WorkersApi.md#getworkeroperatingsystemshellnamelistallspaces) | **GET** /{baseSpaceId}/workers/operatingsystem/shells/all | Gets all operating system shell names for workers. The result will be a string array.
*WorkersApi* | [**indexWorkers**](client/WorkersApi.md#indexworkers) | **GET** /workers | Get a list of WorkerResources
*WorkersApi* | [**indexWorkersSpaces**](client/WorkersApi.md#indexworkersspaces) | **GET** /{baseSpaceId}/workers | Get a list of WorkerResources
*WorkersApi* | [**listAllWorkers**](client/WorkersApi.md#listallworkers) | **GET** /workers/all | Get a list of WorkerResources
*WorkersApi* | [**listAllWorkersSpaces**](client/WorkersApi.md#listallworkersspaces) | **GET** /{baseSpaceId}/workers/all | Get a list of WorkerResources
*WorkersApi* | [**updateWorker**](client/WorkersApi.md#updateworker) | **PUT** /workers/{id} | Modify a WorkerResource by ID
*WorkersApi* | [**updateWorkerSpaces**](client/WorkersApi.md#updateworkerspaces) | **PUT** /{baseSpaceId}/workers/{id} | Modify a WorkerResource by ID


<a name="documentation-for-models"></a>
## Documentation for Models

 - [AccountResource](./model/AccountResource.md)
 - [AccountResourceCollection](./model/AccountResourceCollection.md)
 - [AccountUsageResource](./model/AccountUsageResource.md)
 - [ActionTemplateCategoryResource](./model/ActionTemplateCategoryResource.md)
 - [ActionTemplateParameterResource](./model/ActionTemplateParameterResource.md)
 - [ActionTemplateResource](./model/ActionTemplateResource.md)
 - [ActionTemplateResourceCollection](./model/ActionTemplateResourceCollection.md)
 - [ActionTemplateSearchResource](./model/ActionTemplateSearchResource.md)
 - [ActionTemplateUsageResource](./model/ActionTemplateUsageResource.md)
 - [ActionUpdateOutcome](./model/ActionUpdateOutcome.md)
 - [ActionUpdatePackageUsedBy](./model/ActionUpdatePackageUsedBy.md)
 - [ActionUpdateRemovedPackageUsage](./model/ActionUpdateRemovedPackageUsage.md)
 - [ActionUpdateResultResource](./model/ActionUpdateResultResource.md)
 - [ActivityLogElement](./model/ActivityLogElement.md)
 - [ActivityLogEntry](./model/ActivityLogEntry.md)
 - [ActivityLogEntryCategory](./model/ActivityLogEntryCategory.md)
 - [ActivityLogTreeNode](./model/ActivityLogTreeNode.md)
 - [ActivityStatus](./model/ActivityStatus.md)
 - [ApiKeyCreatedResource](./model/ApiKeyCreatedResource.md)
 - [ApiKeyResource](./model/ApiKeyResource.md)
 - [ApiKeyResourceCollection](./model/ApiKeyResourceCollection.md)
 - [ArtifactResource](./model/ArtifactResource.md)
 - [ArtifactResourceCollection](./model/ArtifactResourceCollection.md)
 - [AuthenticationProviderElement](./model/AuthenticationProviderElement.md)
 - [AuthenticationProviderThatSupportsGroups](./model/AuthenticationProviderThatSupportsGroups.md)
 - [AuthenticationResource](./model/AuthenticationResource.md)
 - [AutoDeployReleaseOverrideResource](./model/AutoDeployReleaseOverrideResource.md)
 - [AzureEnvironmentResource](./model/AzureEnvironmentResource.md)
 - [AzureResourceGroupResource](./model/AzureResourceGroupResource.md)
 - [AzureStorageAccountResource](./model/AzureStorageAccountResource.md)
 - [AzureWebSiteResource](./model/AzureWebSiteResource.md)
 - [AzureWebSiteSlotResource](./model/AzureWebSiteSlotResource.md)
 - [BuiltInFeedStatsResource](./model/BuiltInFeedStatsResource.md)
 - [CalamariUpdateBehavior](./model/CalamariUpdateBehavior.md)
 - [CalendarSystem](./model/CalendarSystem.md)
 - [CertificateConfigurationResource](./model/CertificateConfigurationResource.md)
 - [CertificateConfigurationResourceCollection](./model/CertificateConfigurationResourceCollection.md)
 - [CertificateFormat](./model/CertificateFormat.md)
 - [CertificateResource](./model/CertificateResource.md)
 - [CertificateResourceCollection](./model/CertificateResourceCollection.md)
 - [CertificateUsageResource](./model/CertificateUsageResource.md)
 - [ChangeDetails](./model/ChangeDetails.md)
 - [ChannelResource](./model/ChannelResource.md)
 - [ChannelResourceCollection](./model/ChannelResourceCollection.md)
 - [ChannelVersionRuleResource](./model/ChannelVersionRuleResource.md)
 - [CloudTemplateMetadata](./model/CloudTemplateMetadata.md)
 - [CommitDetails](./model/CommitDetails.md)
 - [CommunicationStyle](./model/CommunicationStyle.md)
 - [CommunityActionTemplateResource](./model/CommunityActionTemplateResource.md)
 - [CommunityActionTemplateResourceCollection](./model/CommunityActionTemplateResourceCollection.md)
 - [ConfigurationSectionMetadata](./model/ConfigurationSectionMetadata.md)
 - [ConfigurationSectionMetadataCollection](./model/ConfigurationSectionMetadataCollection.md)
 - [ConnectivityCheck](./model/ConnectivityCheck.md)
 - [ConnectivityCheckMessage](./model/ConnectivityCheckMessage.md)
 - [ConnectivityCheckMessageCategory](./model/ConnectivityCheckMessageCategory.md)
 - [ConnectivityCheckResponse](./model/ConnectivityCheckResponse.md)
 - [ConvertProjectToVersionControlledResponse](./model/ConvertProjectToVersionControlledResponse.md)
 - [DashboardConfigurationResource](./model/DashboardConfigurationResource.md)
 - [DashboardEnvironmentResource](./model/DashboardEnvironmentResource.md)
 - [DashboardItemResource](./model/DashboardItemResource.md)
 - [DashboardProjectGroupResource](./model/DashboardProjectGroupResource.md)
 - [DashboardProjectResource](./model/DashboardProjectResource.md)
 - [DashboardRenderMode](./model/DashboardRenderMode.md)
 - [DashboardResource](./model/DashboardResource.md)
 - [DashboardTenantResource](./model/DashboardTenantResource.md)
 - [DefectResource](./model/DefectResource.md)
 - [DefectResourceCollection](./model/DefectResourceCollection.md)
 - [DefectStatus](./model/DefectStatus.md)
 - [DeleteMachinesBehavior](./model/DeleteMachinesBehavior.md)
 - [DeploymentActionCondition](./model/DeploymentActionCondition.md)
 - [DeploymentActionContainerResource](./model/DeploymentActionContainerResource.md)
 - [DeploymentActionPackageResource](./model/DeploymentActionPackageResource.md)
 - [DeploymentActionResource](./model/DeploymentActionResource.md)
 - [DeploymentConnectivityPolicy](./model/DeploymentConnectivityPolicy.md)
 - [DeploymentEnvironmentSettingsMetadata](./model/DeploymentEnvironmentSettingsMetadata.md)
 - [DeploymentPreviewResource](./model/DeploymentPreviewResource.md)
 - [DeploymentProcessResource](./model/DeploymentProcessResource.md)
 - [DeploymentProcessResourceCollection](./model/DeploymentProcessResourceCollection.md)
 - [DeploymentPromomotionTenant](./model/DeploymentPromomotionTenant.md)
 - [DeploymentPromotionTarget](./model/DeploymentPromotionTarget.md)
 - [DeploymentResource](./model/DeploymentResource.md)
 - [DeploymentResourceCollection](./model/DeploymentResourceCollection.md)
 - [DeploymentSettingsResource](./model/DeploymentSettingsResource.md)
 - [DeploymentStepCondition](./model/DeploymentStepCondition.md)
 - [DeploymentStepPackageRequirement](./model/DeploymentStepPackageRequirement.md)
 - [DeploymentStepResource](./model/DeploymentStepResource.md)
 - [DeploymentStepStartTrigger](./model/DeploymentStepStartTrigger.md)
 - [DeploymentTargetResource](./model/DeploymentTargetResource.md)
 - [DeploymentTargetResourceCollection](./model/DeploymentTargetResourceCollection.md)
 - [DeploymentTemplateResource](./model/DeploymentTemplateResource.md)
 - [DeploymentTemplateStep](./model/DeploymentTemplateStep.md)
 - [DisplayInfo](./model/DisplayInfo.md)
 - [DocumentTypeDocument](./model/DocumentTypeDocument.md)
 - [DynamicExtensionsFeature](./model/DynamicExtensionsFeature.md)
 - [DynamicExtensionsFeaturesMetadataResource](./model/DynamicExtensionsFeaturesMetadataResource.md)
 - [DynamicExtensionsFeaturesValuesResource](./model/DynamicExtensionsFeaturesValuesResource.md)
 - [DynamicWorkerType](./model/DynamicWorkerType.md)
 - [EmailPriority](./model/EmailPriority.md)
 - [EndpointResource](./model/EndpointResource.md)
 - [EnvironmentResource](./model/EnvironmentResource.md)
 - [EnvironmentResourceCollection](./model/EnvironmentResourceCollection.md)
 - [EnvironmentSummaryResource](./model/EnvironmentSummaryResource.md)
 - [EnvironmentsSummaryResource](./model/EnvironmentsSummaryResource.md)
 - [Era](./model/Era.md)
 - [Error](./model/Error.md)
 - [EventAgentResource](./model/EventAgentResource.md)
 - [EventCategoryResource](./model/EventCategoryResource.md)
 - [EventGroupResource](./model/EventGroupResource.md)
 - [EventNotificationSubscription](./model/EventNotificationSubscription.md)
 - [EventNotificationSubscriptionFilter](./model/EventNotificationSubscriptionFilter.md)
 - [EventReference](./model/EventReference.md)
 - [EventResource](./model/EventResource.md)
 - [ExtensionSettingsValues](./model/ExtensionSettingsValues.md)
 - [ExtensionsInfoResource](./model/ExtensionsInfoResource.md)
 - [FeaturesConfigurationResource](./model/FeaturesConfigurationResource.md)
 - [FeedResource](./model/FeedResource.md)
 - [FeedResourceCollection](./model/FeedResourceCollection.md)
 - [FeedType](./model/FeedType.md)
 - [Form](./model/Form.md)
 - [FormElement](./model/FormElement.md)
 - [GuidedFailureMode](./model/GuidedFailureMode.md)
 - [HealthCheckType](./model/HealthCheckType.md)
 - [IdentityClaimResource](./model/IdentityClaimResource.md)
 - [IdentityResource](./model/IdentityResource.md)
 - [IdentityType](./model/IdentityType.md)
 - [InlineResponse200](./model/InlineResponse200.md)
 - [InterruptionResource](./model/InterruptionResource.md)
 - [InterruptionResourceCollection](./model/InterruptionResourceCollection.md)
 - [InvitationResource](./model/InvitationResource.md)
 - [IsoDayOfWeek](./model/IsoDayOfWeek.md)
 - [Library](./model/Library.md)
 - [LibraryVariableSetProjectUsage](./model/LibraryVariableSetProjectUsage.md)
 - [LibraryVariableSetReleaseUsageEntry](./model/LibraryVariableSetReleaseUsageEntry.md)
 - [LibraryVariableSetResource](./model/LibraryVariableSetResource.md)
 - [LibraryVariableSetResourceCollection](./model/LibraryVariableSetResourceCollection.md)
 - [LibraryVariableSetRunbookSnapshotUsageEntry](./model/LibraryVariableSetRunbookSnapshotUsageEntry.md)
 - [LibraryVariableSetUsageEntry](./model/LibraryVariableSetUsageEntry.md)
 - [LibraryVariableSetUsageResource](./model/LibraryVariableSetUsageResource.md)
 - [LicenseLimitStatusResource](./model/LicenseLimitStatusResource.md)
 - [LicenseMessageDisposition](./model/LicenseMessageDisposition.md)
 - [LicenseMessageResource](./model/LicenseMessageResource.md)
 - [LicenseResource](./model/LicenseResource.md)
 - [LicenseStatusResource](./model/LicenseStatusResource.md)
 - [LifecycleProgressionResource](./model/LifecycleProgressionResource.md)
 - [LifecycleResource](./model/LifecycleResource.md)
 - [LifecycleResourceCollection](./model/LifecycleResourceCollection.md)
 - [ListApiMetadata](./model/ListApiMetadata.md)
 - [LocalDate](./model/LocalDate.md)
 - [LoginInitiatedResource](./model/LoginInitiatedResource.md)
 - [MachineCleanupPolicy](./model/MachineCleanupPolicy.md)
 - [MachineConnectionStatus](./model/MachineConnectionStatus.md)
 - [MachineConnectivityBehavior](./model/MachineConnectivityBehavior.md)
 - [MachineConnectivityPolicy](./model/MachineConnectivityPolicy.md)
 - [MachineDeploymentPreview](./model/MachineDeploymentPreview.md)
 - [MachineHealthCheckPolicy](./model/MachineHealthCheckPolicy.md)
 - [MachineModelHealthStatus](./model/MachineModelHealthStatus.md)
 - [MachineModelStatus](./model/MachineModelStatus.md)
 - [MachinePolicyResource](./model/MachinePolicyResource.md)
 - [MachinePolicyResourceCollection](./model/MachinePolicyResourceCollection.md)
 - [MachineResource](./model/MachineResource.md)
 - [MachineScriptPolicy](./model/MachineScriptPolicy.md)
 - [MachineScriptPolicyRunType](./model/MachineScriptPolicyRunType.md)
 - [MachineStatus](./model/MachineStatus.md)
 - [MachineUpdatePolicy](./model/MachineUpdatePolicy.md)
 - [MaintenanceConfigurationResource](./model/MaintenanceConfigurationResource.md)
 - [Metadata](./model/Metadata.md)
 - [MigrationImportResource](./model/MigrationImportResource.md)
 - [MigrationPartialExportResource](./model/MigrationPartialExportResource.md)
 - [MissingVariableResource](./model/MissingVariableResource.md)
 - [MultiTenancyStatusResource](./model/MultiTenancyStatusResource.md)
 - [NamedReferenceItem](./model/NamedReferenceItem.md)
 - [NumericReportData](./model/NumericReportData.md)
 - [NumericReportSeries](./model/NumericReportSeries.md)
 - [OctopusPackageMetadataMappedResource](./model/OctopusPackageMetadataMappedResource.md)
 - [OctopusPackageVersionBuildInformationMappedResource](./model/OctopusPackageVersionBuildInformationMappedResource.md)
 - [OctopusPackageVersionBuildInformationMappedResourceCollection](./model/OctopusPackageVersionBuildInformationMappedResourceCollection.md)
 - [OctopusServerNodeDetailsResource](./model/OctopusServerNodeDetailsResource.md)
 - [OctopusServerNodeResource](./model/OctopusServerNodeResource.md)
 - [OctopusServerNodeResourceCollection](./model/OctopusServerNodeResourceCollection.md)
 - [OnboardingResource](./model/OnboardingResource.md)
 - [OnboardingTaskResource](./model/OnboardingTaskResource.md)
 - [OptionsMetadata](./model/OptionsMetadata.md)
 - [PackageAcquisitionLocation](./model/PackageAcquisitionLocation.md)
 - [PackageDescriptionResource](./model/PackageDescriptionResource.md)
 - [PackageDescriptionResourceCollection](./model/PackageDescriptionResourceCollection.md)
 - [PackageFromBuiltInFeedResource](./model/PackageFromBuiltInFeedResource.md)
 - [PackageNote](./model/PackageNote.md)
 - [PackageNoteListResource](./model/PackageNoteListResource.md)
 - [PackageNotesResult](./model/PackageNotesResult.md)
 - [PackageReference](./model/PackageReference.md)
 - [PackageResource](./model/PackageResource.md)
 - [PackageResourceCollection](./model/PackageResourceCollection.md)
 - [PackageSignatureResource](./model/PackageSignatureResource.md)
 - [PackageVersionResource](./model/PackageVersionResource.md)
 - [PackageVersionResourceCollection](./model/PackageVersionResourceCollection.md)
 - [PerformanceConfigurationResource](./model/PerformanceConfigurationResource.md)
 - [Permission](./model/Permission.md)
 - [PermissionDescription](./model/PermissionDescription.md)
 - [PermissionsMode](./model/PermissionsMode.md)
 - [PersistenceSettingsResource](./model/PersistenceSettingsResource.md)
 - [PersistenceSettingsType](./model/PersistenceSettingsType.md)
 - [PhaseDeploymentResource](./model/PhaseDeploymentResource.md)
 - [PhaseProgress](./model/PhaseProgress.md)
 - [PhaseProgressionResource](./model/PhaseProgressionResource.md)
 - [PhaseResource](./model/PhaseResource.md)
 - [ProcessReferenceDataItem](./model/ProcessReferenceDataItem.md)
 - [ProcessType](./model/ProcessType.md)
 - [ProgressionResource](./model/ProgressionResource.md)
 - [Project](./model/Project.md)
 - [ProjectGroupResource](./model/ProjectGroupResource.md)
 - [ProjectGroupResourceCollection](./model/ProjectGroupResourceCollection.md)
 - [ProjectResource](./model/ProjectResource.md)
 - [ProjectResourceCollection](./model/ProjectResourceCollection.md)
 - [ProjectSettingsMetadata](./model/ProjectSettingsMetadata.md)
 - [ProjectSummary](./model/ProjectSummary.md)
 - [ProjectTriggerResource](./model/ProjectTriggerResource.md)
 - [ProjectTriggerResourceCollection](./model/ProjectTriggerResourceCollection.md)
 - [ProjectVariableSetUsage](./model/ProjectVariableSetUsage.md)
 - [ProjectedTeamReferenceDataItem](./model/ProjectedTeamReferenceDataItem.md)
 - [PropertyApplicability](./model/PropertyApplicability.md)
 - [PropertyApplicabilityMode](./model/PropertyApplicabilityMode.md)
 - [PropertyMetadata](./model/PropertyMetadata.md)
 - [PropertyValueResource](./model/PropertyValueResource.md)
 - [ProxyResource](./model/ProxyResource.md)
 - [ProxyResourceCollection](./model/ProxyResourceCollection.md)
 - [ReferenceDataItem](./model/ReferenceDataItem.md)
 - [ReleaseChanges](./model/ReleaseChanges.md)
 - [ReleaseCreationStrategyResource](./model/ReleaseCreationStrategyResource.md)
 - [ReleasePackageVersionBuildInformation](./model/ReleasePackageVersionBuildInformation.md)
 - [ReleasePackageVersionBuildInformationResource](./model/ReleasePackageVersionBuildInformationResource.md)
 - [ReleaseProgressionResource](./model/ReleaseProgressionResource.md)
 - [ReleaseResource](./model/ReleaseResource.md)
 - [ReleaseResourceCollection](./model/ReleaseResourceCollection.md)
 - [ReleaseTemplatePackage](./model/ReleaseTemplatePackage.md)
 - [ReleaseTemplateResource](./model/ReleaseTemplateResource.md)
 - [ReleaseUsage](./model/ReleaseUsage.md)
 - [ReleaseUsageEntry](./model/ReleaseUsageEntry.md)
 - [ReportDeploymentCountOverTimeResource](./model/ReportDeploymentCountOverTimeResource.md)
 - [RetentionPeriod](./model/RetentionPeriod.md)
 - [RetentionUnit](./model/RetentionUnit.md)
 - [RootResource](./model/RootResource.md)
 - [RunbookEnvironmentScope](./model/RunbookEnvironmentScope.md)
 - [RunbookProcessResource](./model/RunbookProcessResource.md)
 - [RunbookProcessResourceCollection](./model/RunbookProcessResourceCollection.md)
 - [RunbookResource](./model/RunbookResource.md)
 - [RunbookResourceCollection](./model/RunbookResourceCollection.md)
 - [RunbookRetentionPeriod](./model/RunbookRetentionPeriod.md)
 - [RunbookRunPreviewResource](./model/RunbookRunPreviewResource.md)
 - [RunbookRunResource](./model/RunbookRunResource.md)
 - [RunbookRunResourceCollection](./model/RunbookRunResourceCollection.md)
 - [RunbookRunTemplateResource](./model/RunbookRunTemplateResource.md)
 - [RunbookSnapshotResource](./model/RunbookSnapshotResource.md)
 - [RunbookSnapshotResourceCollection](./model/RunbookSnapshotResourceCollection.md)
 - [RunbookSnapshotTemplateResource](./model/RunbookSnapshotTemplateResource.md)
 - [RunbookSnapshotUsage](./model/RunbookSnapshotUsage.md)
 - [RunbookSnapshotUsageEntry](./model/RunbookSnapshotUsageEntry.md)
 - [RunbookStepUsage](./model/RunbookStepUsage.md)
 - [RunbooksDashboardItemResource](./model/RunbooksDashboardItemResource.md)
 - [RunbooksDashboardItemResourceCollection](./model/RunbooksDashboardItemResourceCollection.md)
 - [RunbooksProgressionResource](./model/RunbooksProgressionResource.md)
 - [ScheduledTaskDetailsResource](./model/ScheduledTaskDetailsResource.md)
 - [ScheduledTaskStatusResource](./model/ScheduledTaskStatusResource.md)
 - [SchedulerStatusResource](./model/SchedulerStatusResource.md)
 - [ScopedUserRoleResource](./model/ScopedUserRoleResource.md)
 - [ScopedUserRoleResourceCollection](./model/ScopedUserRoleResourceCollection.md)
 - [SelectedPackage](./model/SelectedPackage.md)
 - [SensitiveValue](./model/SensitiveValue.md)
 - [ServerConfigurationResource](./model/ServerConfigurationResource.md)
 - [ServerConfigurationSettingsResource](./model/ServerConfigurationSettingsResource.md)
 - [ServerConfigurationValueResource](./model/ServerConfigurationValueResource.md)
 - [ServerStatusHealthResource](./model/ServerStatusHealthResource.md)
 - [ServerTimezoneResource](./model/ServerTimezoneResource.md)
 - [SkipMachineBehavior](./model/SkipMachineBehavior.md)
 - [SmtpIsConfiguredResource](./model/SmtpIsConfiguredResource.md)
 - [SpaceResource](./model/SpaceResource.md)
 - [SpaceResourceCollection](./model/SpaceResourceCollection.md)
 - [SpaceRootResource](./model/SpaceRootResource.md)
 - [SpaceSearchResult](./model/SpaceSearchResult.md)
 - [StepUsage](./model/StepUsage.md)
 - [StepUsageEntry](./model/StepUsageEntry.md)
 - [SubscriptionResource](./model/SubscriptionResource.md)
 - [SubscriptionResourceCollection](./model/SubscriptionResourceCollection.md)
 - [SubscriptionType](./model/SubscriptionType.md)
 - [TagResource](./model/TagResource.md)
 - [TagSetResource](./model/TagSetResource.md)
 - [TagSetResourceCollection](./model/TagSetResourceCollection.md)
 - [TagTestResult](./model/TagTestResult.md)
 - [TargetUsageEntry](./model/TargetUsageEntry.md)
 - [TaskDetailsResource](./model/TaskDetailsResource.md)
 - [TaskProgress](./model/TaskProgress.md)
 - [TaskResource](./model/TaskResource.md)
 - [TaskResourceCollection](./model/TaskResourceCollection.md)
 - [TaskState](./model/TaskState.md)
 - [TaskTypeResource](./model/TaskTypeResource.md)
 - [TeamMembership](./model/TeamMembership.md)
 - [TeamResource](./model/TeamResource.md)
 - [TeamResourceCollection](./model/TeamResourceCollection.md)
 - [TenantResource](./model/TenantResource.md)
 - [TenantResourceCollection](./model/TenantResourceCollection.md)
 - [TenantVariableResource](./model/TenantVariableResource.md)
 - [TenantedDeploymentMode](./model/TenantedDeploymentMode.md)
 - [TenantsMissingVariablesResource](./model/TenantsMissingVariablesResource.md)
 - [TentacleUpdateBehavior](./model/TentacleUpdateBehavior.md)
 - [TriggerActionResource](./model/TriggerActionResource.md)
 - [TriggerActionType](./model/TriggerActionType.md)
 - [TriggerFilterResource](./model/TriggerFilterResource.md)
 - [TriggerFilterType](./model/TriggerFilterType.md)
 - [TypeMetadata](./model/TypeMetadata.md)
 - [UserAuthenticationResource](./model/UserAuthenticationResource.md)
 - [UserPermissionRestriction](./model/UserPermissionRestriction.md)
 - [UserPermissionSetResource](./model/UserPermissionSetResource.md)
 - [UserPermissionSetResourceSpacePermissions](./model/UserPermissionSetResourceSpacePermissions.md)
 - [UserResource](./model/UserResource.md)
 - [UserResourceCollection](./model/UserResourceCollection.md)
 - [UserRoleResource](./model/UserRoleResource.md)
 - [UserRoleResourceCollection](./model/UserRoleResourceCollection.md)
 - [VariablePromptOptions](./model/VariablePromptOptions.md)
 - [VariableResource](./model/VariableResource.md)
 - [VariableResourceScope](./model/VariableResourceScope.md)
 - [VariableScopeValues](./model/VariableScopeValues.md)
 - [VariableSetContentType](./model/VariableSetContentType.md)
 - [VariableSetResource](./model/VariableSetResource.md)
 - [VariableType](./model/VariableType.md)
 - [VariablesScopedToEnvironmentResponse](./model/VariablesScopedToEnvironmentResponse.md)
 - [VersionControlReferenceResource](./model/VersionControlReferenceResource.md)
 - [VersioningStrategyResource](./model/VersioningStrategyResource.md)
 - [WorkItemLink](./model/WorkItemLink.md)
 - [WorkerPoolDynamicWorkerTypesResource](./model/WorkerPoolDynamicWorkerTypesResource.md)
 - [WorkerPoolResource](./model/WorkerPoolResource.md)
 - [WorkerPoolResourceCollection](./model/WorkerPoolResourceCollection.md)
 - [WorkerPoolSummaryResource](./model/WorkerPoolSummaryResource.md)
 - [WorkerPoolSupportedTypesResource](./model/WorkerPoolSupportedTypesResource.md)
 - [WorkerPoolType](./model/WorkerPoolType.md)
 - [WorkerPoolsSummaryResource](./model/WorkerPoolsSummaryResource.md)
 - [WorkerResource](./model/WorkerResource.md)
 - [WorkerResourceCollection](./model/WorkerResourceCollection.md)
 - [X509Certificate](./model/X509Certificate.md)


<a name="documentation-for-authorization"></a>
## Documentation for Authorization

<a name="APIKeyHeader"></a>
### APIKeyHeader

- **Type**: API key
- **API key parameter name**: X-Octopus-ApiKey
- **Location**: HTTP header

<a name="APIKeyQuery"></a>
### APIKeyQuery

- **Type**: API key
- **API key parameter name**: ApiKey
- **Location**: URL query string

<a name="NugetApiKeyHeader"></a>
### NugetApiKeyHeader

- **Type**: API key
- **API key parameter name**: X-NuGet-ApiKey
- **Location**: HTTP header

