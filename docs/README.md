# Documentation for Octopus Server API

<a name="documentation-for-api-endpoints"></a>
## Documentation for API Endpoints

All URIs are relative to *http://localhost/api*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*AccountsApi* | [**createAccount**](Apis/AccountsApi.md#createaccount) | **POST** /accounts | Create a AccountResource
*AccountsApi* | [**createAccountSpaces**](Apis/AccountsApi.md#createaccountspaces) | **POST** /{baseSpaceId}/accounts | Create a AccountResource
*AccountsApi* | [**deleteAccount**](Apis/AccountsApi.md#deleteaccount) | **DELETE** /accounts/{id} | Delete a AccountResource by ID
*AccountsApi* | [**deleteAccountSpaces**](Apis/AccountsApi.md#deleteaccountspaces) | **DELETE** /{baseSpaceId}/accounts/{id} | Delete a AccountResource by ID
*AccountsApi* | [**getAccountById**](Apis/AccountsApi.md#getaccountbyid) | **GET** /accounts/{id} | Get an Account by ID
*AccountsApi* | [**getAccountByIdSpaces**](Apis/AccountsApi.md#getaccountbyidspaces) | **GET** /{baseSpaceId}/accounts/{id} | Get an Account by ID
*AccountsApi* | [**getAccountPublicKeyDownload**](Apis/AccountsApi.md#getaccountpublickeydownload) | **GET** /accounts/{id}/pk | Downloads the public key portion of the account's associated certificate, if present.
*AccountsApi* | [**getAccountPublicKeyDownloadSpaces**](Apis/AccountsApi.md#getaccountpublickeydownloadspaces) | **GET** /{baseSpaceId}/accounts/{id}/pk | Downloads the public key portion of the account's associated certificate, if present.
*AccountsApi* | [**getAccountUsageList**](Apis/AccountsApi.md#getaccountusagelist) | **GET** /accounts/{id}/usages | Lists projects and deployments which are using an account.
*AccountsApi* | [**getAccountUsageListSpaces**](Apis/AccountsApi.md#getaccountusagelistspaces) | **GET** /{baseSpaceId}/accounts/{id}/usages | Lists projects and deployments which are using an account.
*AccountsApi* | [**getAzureEnvironmentsList**](Apis/AccountsApi.md#getazureenvironmentslist) | **GET** /accounts/azureenvironments | Lists the Azure Environments provided by the SDK
*AccountsApi* | [**getAzureResourceGroupsList**](Apis/AccountsApi.md#getazureresourcegroupslist) | **GET** /accounts/{id}/resourceGroups | Lists the Resource Groups associated with an Azure account.
*AccountsApi* | [**getAzureResourceGroupsListSpaces**](Apis/AccountsApi.md#getazureresourcegroupslistspaces) | **GET** /{baseSpaceId}/accounts/{id}/resourceGroups | Lists the Resource Groups associated with an Azure account.
*AccountsApi* | [**getAzureStorageAccountsList**](Apis/AccountsApi.md#getazurestorageaccountslist) | **GET** /accounts/{id}/storageAccounts | Lists the storage accounts associated with an Azure account.
*AccountsApi* | [**getAzureStorageAccountsListSpaces**](Apis/AccountsApi.md#getazurestorageaccountslistspaces) | **GET** /{baseSpaceId}/accounts/{id}/storageAccounts | Lists the storage accounts associated with an Azure account.
*AccountsApi* | [**getAzureWebSitesList**](Apis/AccountsApi.md#getazurewebsiteslist) | **GET** /accounts/{id}/websites | Lists the websites associated with an Azure account.
*AccountsApi* | [**getAzureWebSitesListSpaces**](Apis/AccountsApi.md#getazurewebsiteslistspaces) | **GET** /{baseSpaceId}/accounts/{id}/websites | Lists the websites associated with an Azure account.
*AccountsApi* | [**getAzureWebSitesSlotList**](Apis/AccountsApi.md#getazurewebsitesslotlist) | **GET** /accounts/{id}/{resourceGroupName}/websites/{webSiteName}/slots | Lists the slots associated with an Azure Web Site.
*AccountsApi* | [**getAzureWebSitesSlotListSpaces**](Apis/AccountsApi.md#getazurewebsitesslotlistspaces) | **GET** /{baseSpaceId}/accounts/{id}/{resourceGroupName}/websites/{webSiteName}/slots | Lists the slots associated with an Azure Web Site.
*AccountsApi* | [**indexAccounts**](Apis/AccountsApi.md#indexaccounts) | **GET** /accounts | Get a list of AccountResources
*AccountsApi* | [**indexAccountsSpaces**](Apis/AccountsApi.md#indexaccountsspaces) | **GET** /{baseSpaceId}/accounts | Get a list of AccountResources
*AccountsApi* | [**listAllAccounts**](Apis/AccountsApi.md#listallaccounts) | **GET** /accounts/all | Get a list of AccountResources
*AccountsApi* | [**listAllAccountsSpaces**](Apis/AccountsApi.md#listallaccountsspaces) | **GET** /{baseSpaceId}/accounts/all | Get a list of AccountResources
*AccountsApi* | [**updateAccount**](Apis/AccountsApi.md#updateaccount) | **PUT** /accounts/{id} | Modify a AccountResource by ID
*AccountsApi* | [**updateAccountSpaces**](Apis/AccountsApi.md#updateaccountspaces) | **PUT** /{baseSpaceId}/accounts/{id} | Modify a AccountResource by ID
*ActionTemplatesApi* | [**createActionTemplate**](Apis/ActionTemplatesApi.md#createactiontemplate) | **POST** /actiontemplates | Create a ActionTemplateResource
*ActionTemplatesApi* | [**createActionTemplateActions**](Apis/ActionTemplatesApi.md#createactiontemplateactions) | **POST** /actiontemplates/{id}/actionsUpdate | Updates deployment actions to specific version of action template
*ActionTemplatesApi* | [**createActionTemplateActionsSpaces**](Apis/ActionTemplatesApi.md#createactiontemplateactionsspaces) | **POST** /{baseSpaceId}/actiontemplates/{id}/actionsUpdate | Updates deployment actions to specific version of action template
*ActionTemplatesApi* | [**createActionTemplateLogo**](Apis/ActionTemplatesApi.md#createactiontemplatelogo) | **POST** /actiontemplates/{id}/logo | Updates the logo associated with the latest version of the action template.
*ActionTemplatesApi* | [**createActionTemplateLogoSpaces**](Apis/ActionTemplatesApi.md#createactiontemplatelogospaces) | **POST** /{baseSpaceId}/actiontemplates/{id}/logo | Updates the logo associated with the latest version of the action template.
*ActionTemplatesApi* | [**createActionTemplateSpaces**](Apis/ActionTemplatesApi.md#createactiontemplatespaces) | **POST** /{baseSpaceId}/actiontemplates | Create a ActionTemplateResource
*ActionTemplatesApi* | [**deleteActionTemplate**](Apis/ActionTemplatesApi.md#deleteactiontemplate) | **DELETE** /actiontemplates/{id} | Delete a ActionTemplateResource by ID
*ActionTemplatesApi* | [**deleteActionTemplateSpaces**](Apis/ActionTemplatesApi.md#deleteactiontemplatespaces) | **DELETE** /{baseSpaceId}/actiontemplates/{id} | Delete a ActionTemplateResource by ID
*ActionTemplatesApi* | [**getActionTemplateById**](Apis/ActionTemplatesApi.md#getactiontemplatebyid) | **GET** /actiontemplates/{id} | Get an Action Template by ID
*ActionTemplatesApi* | [**getActionTemplateByIdSpaces**](Apis/ActionTemplatesApi.md#getactiontemplatebyidspaces) | **GET** /{baseSpaceId}/actiontemplates/{id} | Get an Action Template by ID
*ActionTemplatesApi* | [**getActionTemplateCategories**](Apis/ActionTemplatesApi.md#getactiontemplatecategories) | **GET** /actiontemplates/categories | Lists action template categories.
*ActionTemplatesApi* | [**getActionTemplateCategoriesSpaces**](Apis/ActionTemplatesApi.md#getactiontemplatecategoriesspaces) | **GET** /{baseSpaceId}/actiontemplates/categories | Lists action template categories.
*ActionTemplatesApi* | [**getActionTemplateLogo**](Apis/ActionTemplatesApi.md#getactiontemplatelogo) | **GET** /actiontemplates/{id}/logo | Gets the logo associated with the latest version of action template.
*ActionTemplatesApi* | [**getActionTemplateLogoSpaces**](Apis/ActionTemplatesApi.md#getactiontemplatelogospaces) | **GET** /{baseSpaceId}/actiontemplates/{id}/logo | Gets the logo associated with the latest version of action template.
*ActionTemplatesApi* | [**getActionTemplateLogoVersion**](Apis/ActionTemplatesApi.md#getactiontemplatelogoversion) | **GET** /actiontemplates/{typeOrId}/versions/{version}/logo | Gets the logo associated with specific version of the action template.
*ActionTemplatesApi* | [**getActionTemplateLogoVersionSpaces**](Apis/ActionTemplatesApi.md#getactiontemplatelogoversionspaces) | **GET** /{baseSpaceId}/actiontemplates/{typeOrId}/versions/{version}/logo | Gets the logo associated with specific version of the action template.
*ActionTemplatesApi* | [**getActionTemplateUsage**](Apis/ActionTemplatesApi.md#getactiontemplateusage) | **GET** /actiontemplates/{id}/usage | Gets a list of all steps/deployment processes that use a given action template.
*ActionTemplatesApi* | [**getActionTemplateUsageSpaces**](Apis/ActionTemplatesApi.md#getactiontemplateusagespaces) | **GET** /{baseSpaceId}/actiontemplates/{id}/usage | Gets a list of all steps/deployment processes that use a given action template.
*ActionTemplatesApi* | [**getActionTemplateVersion**](Apis/ActionTemplatesApi.md#getactiontemplateversion) | **GET** /actiontemplates/{id}/versions | Gets specific version of action template.
*ActionTemplatesApi* | [**getActionTemplateVersion1**](Apis/ActionTemplatesApi.md#getactiontemplateversion1) | **GET** /actiontemplates/{id}/versions/{version} | Gets specific version of action template.
*ActionTemplatesApi* | [**getActionTemplateVersionSpaces**](Apis/ActionTemplatesApi.md#getactiontemplateversionspaces) | **GET** /{baseSpaceId}/actiontemplates/{id}/versions | Gets specific version of action template.
*ActionTemplatesApi* | [**getActionTemplateVersionSpaces1**](Apis/ActionTemplatesApi.md#getactiontemplateversionspaces1) | **GET** /{baseSpaceId}/actiontemplates/{id}/versions/{version} | Gets specific version of action template.
*ActionTemplatesApi* | [**getActionTemplatesSearch**](Apis/ActionTemplatesApi.md#getactiontemplatessearch) | **GET** /actiontemplates/search | Lists all available action templates including built-in, custom and community contributed step templates.
*ActionTemplatesApi* | [**getActionTemplatesSearchSpaces**](Apis/ActionTemplatesApi.md#getactiontemplatessearchspaces) | **GET** /{baseSpaceId}/actiontemplates/search | Lists all available action templates including built-in, custom and community contributed step templates.
*ActionTemplatesApi* | [**getAllActionTemplates**](Apis/ActionTemplatesApi.md#getallactiontemplates) | **GET** /actiontemplates/all | Get all Action Templates
*ActionTemplatesApi* | [**getAllActionTemplatesSpaces**](Apis/ActionTemplatesApi.md#getallactiontemplatesspaces) | **GET** /{baseSpaceId}/actiontemplates/all | Get all Action Templates
*ActionTemplatesApi* | [**indexActionTemplates**](Apis/ActionTemplatesApi.md#indexactiontemplates) | **GET** /actiontemplates | Get a list of ActionTemplateResources
*ActionTemplatesApi* | [**indexActionTemplatesSpaces**](Apis/ActionTemplatesApi.md#indexactiontemplatesspaces) | **GET** /{baseSpaceId}/actiontemplates | Get a list of ActionTemplateResources
*ActionTemplatesApi* | [**updateActionTemplate**](Apis/ActionTemplatesApi.md#updateactiontemplate) | **PUT** /actiontemplates/{id} | Modify a ActionTemplateResource by ID
*ActionTemplatesApi* | [**updateActionTemplateLogo**](Apis/ActionTemplatesApi.md#updateactiontemplatelogo) | **PUT** /actiontemplates/{id}/logo | Updates the logo associated with the latest version of the action template.
*ActionTemplatesApi* | [**updateActionTemplateLogoSpaces**](Apis/ActionTemplatesApi.md#updateactiontemplatelogospaces) | **PUT** /{baseSpaceId}/actiontemplates/{id}/logo | Updates the logo associated with the latest version of the action template.
*ActionTemplatesApi* | [**updateActionTemplateSpaces**](Apis/ActionTemplatesApi.md#updateactiontemplatespaces) | **PUT** /{baseSpaceId}/actiontemplates/{id} | Modify a ActionTemplateResource by ID
*ApiKeysApi* | [**createApiKey**](Apis/ApiKeysApi.md#createapikey) | **POST** /users/{userId}/apikeys | Generates a new API key for the specified user. The API key returned in the result must be saved by the caller, as it cannot be retrieved subsequently from the Octopus server.
*ApiKeysApi* | [**deleteApiKey**](Apis/ApiKeysApi.md#deleteapikey) | **DELETE** /users/{userId}/apikeys/{id} | Delete a ApiKeyResource by ID
*ApiKeysApi* | [**getApiKeyById**](Apis/ApiKeysApi.md#getapikeybyid) | **GET** /users/{userId}/apikeys/{id} | Get a ApiKeyResource by ID
*ApiKeysApi* | [**indexApiKeys**](Apis/ApiKeysApi.md#indexapikeys) | **GET** /users/{userId}/apikeys | Get a list of ApiKeyResources
*ArtifactsApi* | [**createArtifact**](Apis/ArtifactsApi.md#createartifact) | **POST** /artifacts | Create a ArtifactResource
*ArtifactsApi* | [**createArtifactSpaces**](Apis/ArtifactsApi.md#createartifactspaces) | **POST** /{baseSpaceId}/artifacts | Create a ArtifactResource
*ArtifactsApi* | [**deleteArtifact**](Apis/ArtifactsApi.md#deleteartifact) | **DELETE** /artifacts/{id} | Delete a ArtifactResource by ID
*ArtifactsApi* | [**deleteArtifactSpaces**](Apis/ArtifactsApi.md#deleteartifactspaces) | **DELETE** /{baseSpaceId}/artifacts/{id} | Delete a ArtifactResource by ID
*ArtifactsApi* | [**getArtifactById**](Apis/ArtifactsApi.md#getartifactbyid) | **GET** /artifacts/{id} | Get an Artifact by ID
*ArtifactsApi* | [**getArtifactByIdSpaces**](Apis/ArtifactsApi.md#getartifactbyidspaces) | **GET** /{baseSpaceId}/artifacts/{id} | Get an Artifact by ID
*ArtifactsApi* | [**getArtifactContent**](Apis/ArtifactsApi.md#getartifactcontent) | **GET** /artifacts/{id}/content | Gets the content associated with an artifact.
*ArtifactsApi* | [**getArtifactContentSpaces**](Apis/ArtifactsApi.md#getartifactcontentspaces) | **GET** /{baseSpaceId}/artifacts/{id}/content | Gets the content associated with an artifact.
*ArtifactsApi* | [**indexArtifacts**](Apis/ArtifactsApi.md#indexartifacts) | **GET** /artifacts | Get a list of ArtifactResources
*ArtifactsApi* | [**indexArtifactsSpaces**](Apis/ArtifactsApi.md#indexartifactsspaces) | **GET** /{baseSpaceId}/artifacts | Get a list of ArtifactResources
*ArtifactsApi* | [**updateArtifact**](Apis/ArtifactsApi.md#updateartifact) | **PUT** /artifacts/{id} | Modify a ArtifactResource by ID
*ArtifactsApi* | [**updateArtifactContent**](Apis/ArtifactsApi.md#updateartifactcontent) | **PUT** /artifacts/{id}/content | Sets the content associated with an artifact.
*ArtifactsApi* | [**updateArtifactContentSpaces**](Apis/ArtifactsApi.md#updateartifactcontentspaces) | **PUT** /{baseSpaceId}/artifacts/{id}/content | Sets the content associated with an artifact.
*ArtifactsApi* | [**updateArtifactSpaces**](Apis/ArtifactsApi.md#updateartifactspaces) | **PUT** /{baseSpaceId}/artifacts/{id} | Modify a ArtifactResource by ID
*AuthenticationApi* | [**createLoginInitiated**](Apis/AuthenticationApi.md#createlogininitiated) | **POST** /authentication/checklogininitiated | Given a URL query string, determines whether an external server (.e.g Okta) has initiated login and if so the provider's name
*AuthenticationApi* | [**getAuthentication**](Apis/AuthenticationApi.md#getauthentication) | **GET** /authentication | Provides the details of the enabled authentication providers.
*AzureDevOpsApi* | [**createAzureDevOpsConnectivityCheck**](Apis/AzureDevOpsApi.md#createazuredevopsconnectivitycheck) | **POST** /azuredevopsissuetracker/connectivitycheck | 
*BuildInformationApi* | [**createBuildInformation**](Apis/BuildInformationApi.md#createbuildinformation) | **POST** /build-information | Updates a specific build information record describing the vcs information for a given package
*BuildInformationApi* | [**createBuildInformationSpaces**](Apis/BuildInformationApi.md#createbuildinformationspaces) | **POST** /{baseSpaceId}/build-information | Updates a specific build information record describing the vcs information for a given package
*BuildInformationApi* | [**deleteBuildInformationDeleteById**](Apis/BuildInformationApi.md#deletebuildinformationdeletebyid) | **DELETE** /build-information/{id} | Deletes a specific build information record
*BuildInformationApi* | [**deleteBuildInformationDeleteByIdSpaces**](Apis/BuildInformationApi.md#deletebuildinformationdeletebyidspaces) | **DELETE** /{baseSpaceId}/build-information/{id} | Deletes a specific build information record
*BuildInformationApi* | [**deleteBuildInformationDeleteByIds**](Apis/BuildInformationApi.md#deletebuildinformationdeletebyids) | **DELETE** /build-information/bulk | Bulk deletes specific build information records
*BuildInformationApi* | [**deleteBuildInformationDeleteByIdsSpaces**](Apis/BuildInformationApi.md#deletebuildinformationdeletebyidsspaces) | **DELETE** /{baseSpaceId}/build-information/bulk | Bulk deletes specific build information records
*BuildInformationApi* | [**getBuildInformation**](Apis/BuildInformationApi.md#getbuildinformation) | **GET** /build-information/{id} | Retrieves a specific build information record describing the vcs information for a given package
*BuildInformationApi* | [**getBuildInformationList**](Apis/BuildInformationApi.md#getbuildinformationlist) | **GET** /build-information | Retrieves a list of build information records describing the vcs information for a given package
*BuildInformationApi* | [**getBuildInformationListSpaces**](Apis/BuildInformationApi.md#getbuildinformationlistspaces) | **GET** /{baseSpaceId}/build-information | Retrieves a list of build information records describing the vcs information for a given package
*BuildInformationApi* | [**getBuildInformationSpaces**](Apis/BuildInformationApi.md#getbuildinformationspaces) | **GET** /{baseSpaceId}/build-information/{id} | Retrieves a specific build information record describing the vcs information for a given package
*CertificateConfigurationApi* | [**getCertificateConfigurationById**](Apis/CertificateConfigurationApi.md#getcertificateconfigurationbyid) | **GET** /configuration/certificates/{id} | Get a Certificate Configuration by ID
*CertificateConfigurationApi* | [**getCertificateConfigurationByIdLegacy**](Apis/CertificateConfigurationApi.md#getcertificateconfigurationbyidlegacy) | **GET** /certificates/certificate-global | Returns the server thumbprint used to identify this Octopus Server to any Tentacles when executing a deployment. Deprecated.
*CertificateConfigurationApi* | [**getCertificatePublicCerDownload**](Apis/CertificateConfigurationApi.md#getcertificatepubliccerdownload) | **GET** /configuration/certificates/{id}/public-cer | Downloads the public portion of the certificate in .cer format
*CertificateConfigurationApi* | [**indexCertificateConfigurations**](Apis/CertificateConfigurationApi.md#indexcertificateconfigurations) | **GET** /configuration/certificates | Get a list of CertificateConfigurationResources
*CertificatesApi* | [**createCertificate**](Apis/CertificatesApi.md#createcertificate) | **POST** /certificates | Create a CertificateResource
*CertificatesApi* | [**createCertificateArchive**](Apis/CertificatesApi.md#createcertificatearchive) | **POST** /certificates/{id}/archive | Archives a certificate
*CertificatesApi* | [**createCertificateArchiveSpaces**](Apis/CertificatesApi.md#createcertificatearchivespaces) | **POST** /{baseSpaceId}/certificates/{id}/archive | Archives a certificate
*CertificatesApi* | [**createCertificateCreateSelfSigned**](Apis/CertificatesApi.md#createcertificatecreateselfsigned) | **POST** /certificates/generate | Creates a self signed certificate
*CertificatesApi* | [**createCertificateCreateSelfSignedSpaces**](Apis/CertificatesApi.md#createcertificatecreateselfsignedspaces) | **POST** /{baseSpaceId}/certificates/generate | Creates a self signed certificate
*CertificatesApi* | [**createCertificateReplace**](Apis/CertificatesApi.md#createcertificatereplace) | **POST** /certificates/{id}/replace | Replaces a certificate with another
*CertificatesApi* | [**createCertificateReplaceSpaces**](Apis/CertificatesApi.md#createcertificatereplacespaces) | **POST** /{baseSpaceId}/certificates/{id}/replace | Replaces a certificate with another
*CertificatesApi* | [**createCertificateSpaces**](Apis/CertificatesApi.md#createcertificatespaces) | **POST** /{baseSpaceId}/certificates | Create a CertificateResource
*CertificatesApi* | [**createCertificateUnArchive**](Apis/CertificatesApi.md#createcertificateunarchive) | **POST** /certificates/{id}/unarchive | Un-archives a certificate
*CertificatesApi* | [**createCertificateUnArchiveSpaces**](Apis/CertificatesApi.md#createcertificateunarchivespaces) | **POST** /{baseSpaceId}/certificates/{id}/unarchive | Un-archives a certificate
*CertificatesApi* | [**deleteCertificate**](Apis/CertificatesApi.md#deletecertificate) | **DELETE** /certificates/{id} | Delete a CertificateResource by ID
*CertificatesApi* | [**deleteCertificateSpaces**](Apis/CertificatesApi.md#deletecertificatespaces) | **DELETE** /{baseSpaceId}/certificates/{id} | Delete a CertificateResource by ID
*CertificatesApi* | [**getCertificateByIdOrThumbprint**](Apis/CertificatesApi.md#getcertificatebyidorthumbprint) | **GET** /certificates/{id} | Get a certificate by ID or thumbprint
*CertificatesApi* | [**getCertificateByIdOrThumbprintSpaces**](Apis/CertificatesApi.md#getcertificatebyidorthumbprintspaces) | **GET** /{baseSpaceId}/certificates/{id} | Get a certificate by ID or thumbprint
*CertificatesApi* | [**getCertificateExport**](Apis/CertificatesApi.md#getcertificateexport) | **GET** /certificates/{id}/export | Exports the certificate
*CertificatesApi* | [**getCertificateExportSpaces**](Apis/CertificatesApi.md#getcertificateexportspaces) | **GET** /{baseSpaceId}/certificates/{id}/export | Exports the certificate
*CertificatesApi* | [**getCertificateUsage**](Apis/CertificatesApi.md#getcertificateusage) | **GET** /certificates/{id}/usages | Get the usages of a certificate
*CertificatesApi* | [**getCertificateUsageSpaces**](Apis/CertificatesApi.md#getcertificateusagespaces) | **GET** /{baseSpaceId}/certificates/{id}/usages | Get the usages of a certificate
*CertificatesApi* | [**indexCertificates**](Apis/CertificatesApi.md#indexcertificates) | **GET** /certificates | Get a list of CertificateResources
*CertificatesApi* | [**indexCertificatesSpaces**](Apis/CertificatesApi.md#indexcertificatesspaces) | **GET** /{baseSpaceId}/certificates | Get a list of CertificateResources
*CertificatesApi* | [**listAllCertificates**](Apis/CertificatesApi.md#listallcertificates) | **GET** /certificates/all | Get a list of CertificateResources
*CertificatesApi* | [**listAllCertificatesSpaces**](Apis/CertificatesApi.md#listallcertificatesspaces) | **GET** /{baseSpaceId}/certificates/all | Get a list of CertificateResources
*CertificatesApi* | [**updateCertificate**](Apis/CertificatesApi.md#updatecertificate) | **PUT** /certificates/{id} | Modify a CertificateResource by ID
*CertificatesApi* | [**updateCertificateSpaces**](Apis/CertificatesApi.md#updatecertificatespaces) | **PUT** /{baseSpaceId}/certificates/{id} | Modify a CertificateResource by ID
*ChannelsApi* | [**createChannel**](Apis/ChannelsApi.md#createchannel) | **POST** /channels | Create a ChannelResource
*ChannelsApi* | [**createChannelSpaces**](Apis/ChannelsApi.md#createchannelspaces) | **POST** /{baseSpaceId}/channels | Create a ChannelResource
*ChannelsApi* | [**createVersionRuleTest**](Apis/ChannelsApi.md#createversionruletest) | **POST** /channels/rule-test | Perform channel version rule test against provided package version
*ChannelsApi* | [**createVersionRuleTestSpaces**](Apis/ChannelsApi.md#createversionruletestspaces) | **POST** /{baseSpaceId}/channels/rule-test | Perform channel version rule test against provided package version
*ChannelsApi* | [**deleteChannel**](Apis/ChannelsApi.md#deletechannel) | **DELETE** /channels/{id} | Delete a ChannelResource by ID
*ChannelsApi* | [**deleteChannelSpaces**](Apis/ChannelsApi.md#deletechannelspaces) | **DELETE** /{baseSpaceId}/channels/{id} | Delete a ChannelResource by ID
*ChannelsApi* | [**getChannelById**](Apis/ChannelsApi.md#getchannelbyid) | **GET** /channels/{id} | Get a Channel by ID
*ChannelsApi* | [**getChannelByIdSpaces**](Apis/ChannelsApi.md#getchannelbyidspaces) | **GET** /{baseSpaceId}/channels/{id} | Get a Channel by ID
*ChannelsApi* | [**getVersionRuleTest**](Apis/ChannelsApi.md#getversionruletest) | **GET** /channels/rule-test | Perform channel version rule test against provided package version
*ChannelsApi* | [**getVersionRuleTestSpaces**](Apis/ChannelsApi.md#getversionruletestspaces) | **GET** /{baseSpaceId}/channels/rule-test | Perform channel version rule test against provided package version
*ChannelsApi* | [**indexChannelReleases**](Apis/ChannelsApi.md#indexchannelreleases) | **GET** /channels/{id}/releases | Get a list of ReleaseResources for the given ChannelResource
*ChannelsApi* | [**indexChannelReleasesSpaces**](Apis/ChannelsApi.md#indexchannelreleasesspaces) | **GET** /{baseSpaceId}/channels/{id}/releases | Get a list of ReleaseResources for the given ChannelResource
*ChannelsApi* | [**indexChannels**](Apis/ChannelsApi.md#indexchannels) | **GET** /channels | Get a list of ChannelResources
*ChannelsApi* | [**indexChannelsSpaces**](Apis/ChannelsApi.md#indexchannelsspaces) | **GET** /{baseSpaceId}/channels | Get a list of ChannelResources
*ChannelsApi* | [**indexProjectChannels**](Apis/ChannelsApi.md#indexprojectchannels) | **GET** /projects/{id}/channels | Get a list of ChannelResources for the given ProjectResource
*ChannelsApi* | [**indexProjectChannelsSpaces**](Apis/ChannelsApi.md#indexprojectchannelsspaces) | **GET** /{baseSpaceId}/projects/{id}/channels | Get a list of ChannelResources for the given ProjectResource
*ChannelsApi* | [**listAllChannels**](Apis/ChannelsApi.md#listallchannels) | **GET** /channels/all | Get a list of ChannelResources
*ChannelsApi* | [**listAllChannelsSpaces**](Apis/ChannelsApi.md#listallchannelsspaces) | **GET** /{baseSpaceId}/channels/all | Get a list of ChannelResources
*ChannelsApi* | [**updateChannel**](Apis/ChannelsApi.md#updatechannel) | **PUT** /channels/{id} | Modify a ChannelResource by ID
*ChannelsApi* | [**updateChannelSpaces**](Apis/ChannelsApi.md#updatechannelspaces) | **PUT** /{baseSpaceId}/channels/{id} | Modify a ChannelResource by ID
*CloudTemplateApi* | [**createCloudTemplateMetadata**](Apis/CloudTemplateApi.md#createcloudtemplatemetadata) | **POST** /cloudtemplate/{id}/metadata | Provides parameter metadata for a cloud (AWS etc) resource template
*CommunityActionTemplatesApi* | [**createCommunityActionTemplateInstallation**](Apis/CommunityActionTemplatesApi.md#createcommunityactiontemplateinstallation) | **POST** /communityactiontemplates/{id}/installation | Installs community step template.
*CommunityActionTemplatesApi* | [**createCommunityActionTemplateInstallation1**](Apis/CommunityActionTemplatesApi.md#createcommunityactiontemplateinstallation1) | **POST** /communityactiontemplates/{id}/installation/{spaceId} | Installs community step template.
*CommunityActionTemplatesApi* | [**getActionTemplateBasedOnCommunityActionTemplate**](Apis/CommunityActionTemplatesApi.md#getactiontemplatebasedoncommunityactiontemplate) | **GET** /communityactiontemplates/{id}/actiontemplate | Gets installed version of the template.
*CommunityActionTemplatesApi* | [**getActionTemplateBasedOnCommunityActionTemplate1**](Apis/CommunityActionTemplatesApi.md#getactiontemplatebasedoncommunityactiontemplate1) | **GET** /communityactiontemplates/{id}/actiontemplate/{spaceId} | Gets installed version of the template.
*CommunityActionTemplatesApi* | [**getCommunityActionTemplateById**](Apis/CommunityActionTemplatesApi.md#getcommunityactiontemplatebyid) | **GET** /communityactiontemplates/{id} | Get a Community Action Template by ID
*CommunityActionTemplatesApi* | [**getCommunityActionTemplateLogo**](Apis/CommunityActionTemplatesApi.md#getcommunityactiontemplatelogo) | **GET** /communityactiontemplates/{id}/logo | Gets the logo associated with the community step template.
*CommunityActionTemplatesApi* | [**indexCommunityActionTemplates**](Apis/CommunityActionTemplatesApi.md#indexcommunityactiontemplates) | **GET** /communityactiontemplates | Get a list of Community Action Templates
*CommunityActionTemplatesApi* | [**updateCommunityActionTemplateInstallationPut**](Apis/CommunityActionTemplatesApi.md#updatecommunityactiontemplateinstallationput) | **PUT** /communityactiontemplates/{id}/installation | Updates installed community step template to the latest version.
*CommunityActionTemplatesApi* | [**updateCommunityActionTemplateInstallationPut1**](Apis/CommunityActionTemplatesApi.md#updatecommunityactiontemplateinstallationput1) | **PUT** /communityactiontemplates/{id}/installation/{spaceId} | Updates installed community step template to the latest version.
*ConfigurationApi* | [**getConfigurationItemMetadata**](Apis/ConfigurationApi.md#getconfigurationitemmetadata) | **GET** /configuration/{id}/metadata | Returns a structure that describes how to dynamically render the configuration section
*ConfigurationApi* | [**getConfigurationItemValues**](Apis/ConfigurationApi.md#getconfigurationitemvalues) | **GET** /configuration/{id}/values | Returns the current configuration for a specific configuration section
*ConfigurationApi* | [**getConfigurationSectionList**](Apis/ConfigurationApi.md#getconfigurationsectionlist) | **GET** /configuration | Returns a list of configuration section settings
*ConfigurationApi* | [**getConfigurationSectionMetadata**](Apis/ConfigurationApi.md#getconfigurationsectionmetadata) | **GET** /configuration/{id} | Returns a single configuration section for the given id
*ConfigurationApi* | [**updateConfigurationItem**](Apis/ConfigurationApi.md#updateconfigurationitem) | **PUT** /configuration/{id}/values | Updates the configuration values for a specific configuration section
*DashboardConfigurationsApi* | [**getDashboardConfiguration**](Apis/DashboardConfigurationsApi.md#getdashboardconfiguration) | **GET** /dashboardconfiguration | Returns the dashboard configuration for the current user
*DashboardConfigurationsApi* | [**getDashboardConfigurationSpaces**](Apis/DashboardConfigurationsApi.md#getdashboardconfigurationspaces) | **GET** /{baseSpaceId}/dashboardconfiguration | Returns the dashboard configuration for the current user
*DashboardConfigurationsApi* | [**updateDashboardConfiguration**](Apis/DashboardConfigurationsApi.md#updatedashboardconfiguration) | **PUT** /dashboardconfiguration | Updates the dashboard configuration for the current user
*DashboardConfigurationsApi* | [**updateDashboardConfigurationSpaces**](Apis/DashboardConfigurationsApi.md#updatedashboardconfigurationspaces) | **PUT** /{baseSpaceId}/dashboardconfiguration | Updates the dashboard configuration for the current user
*DashboardsApi* | [**getDashboardView**](Apis/DashboardsApi.md#getdashboardview) | **GET** /dashboard | Returns information required to render the Octopus dashboard
*DashboardsApi* | [**getDashboardViewSpaces**](Apis/DashboardsApi.md#getdashboardviewspaces) | **GET** /{baseSpaceId}/dashboard | Returns information required to render the Octopus dashboard
*DashboardsApi* | [**getDynamicDashboardView**](Apis/DashboardsApi.md#getdynamicdashboardview) | **GET** /dashboard/dynamic | Returns the information required to render the dynamic dashboard. Deprecated.
*DashboardsApi* | [**getDynamicDashboardViewSpaces**](Apis/DashboardsApi.md#getdynamicdashboardviewspaces) | **GET** /{baseSpaceId}/dashboard/dynamic | Returns the information required to render the dynamic dashboard. Deprecated.
*DeploymentProcessesApi* | [**getDeploymentProcessById**](Apis/DeploymentProcessesApi.md#getdeploymentprocessbyid) | **GET** /deploymentprocesses/{id} | Get a Deployment Process by ID.
*DeploymentProcessesApi* | [**getDeploymentProcessByIdSpaces**](Apis/DeploymentProcessesApi.md#getdeploymentprocessbyidspaces) | **GET** /{baseSpaceId}/deploymentprocesses/{id} | Get a Deployment Process by ID.
*DeploymentProcessesApi* | [**getReleaseTemplate**](Apis/DeploymentProcessesApi.md#getreleasetemplate) | **GET** /deploymentprocesses/{deploymentProcessId}/template | Gets all of the information necessary for creating or editing a release using this deployment process.
*DeploymentProcessesApi* | [**getReleaseTemplateSpaces**](Apis/DeploymentProcessesApi.md#getreleasetemplatespaces) | **GET** /{baseSpaceId}/deploymentprocesses/{deploymentProcessId}/template | Gets all of the information necessary for creating or editing a release using this deployment process.
*DeploymentProcessesApi* | [**listDeploymentProcesses**](Apis/DeploymentProcessesApi.md#listdeploymentprocesses) | **GET** /deploymentprocesses | Lists all the deployment processes
*DeploymentProcessesApi* | [**listDeploymentProcessesSpaces**](Apis/DeploymentProcessesApi.md#listdeploymentprocessesspaces) | **GET** /{baseSpaceId}/deploymentprocesses | Lists all the deployment processes
*DeploymentProcessesApi* | [**updateDeploymentProcessById**](Apis/DeploymentProcessesApi.md#updatedeploymentprocessbyid) | **PUT** /deploymentprocesses/{id} | Modifies a deployment process
*DeploymentProcessesApi* | [**updateDeploymentProcessByIdSpaces**](Apis/DeploymentProcessesApi.md#updatedeploymentprocessbyidspaces) | **PUT** /{baseSpaceId}/deploymentprocesses/{id} | Modifies a deployment process
*DeploymentSettingsApi* | [**getDeploymentSettingsById**](Apis/DeploymentSettingsApi.md#getdeploymentsettingsbyid) | **GET** /deploymentsettings/{id} | Gets deployment settings by ID.
*DeploymentSettingsApi* | [**getDeploymentSettingsByIdSpaces**](Apis/DeploymentSettingsApi.md#getdeploymentsettingsbyidspaces) | **GET** /{baseSpaceId}/deploymentsettings/{id} | Gets deployment settings by ID.
*DeploymentSettingsApi* | [**updateDeploymentSettingsById**](Apis/DeploymentSettingsApi.md#updatedeploymentsettingsbyid) | **PUT** /deploymentsettings/{id} | Modifies deployment settings
*DeploymentSettingsApi* | [**updateDeploymentSettingsByIdSpaces**](Apis/DeploymentSettingsApi.md#updatedeploymentsettingsbyidspaces) | **PUT** /{baseSpaceId}/deploymentsettings/{id} | Modifies deployment settings
*DeploymentsApi* | [**createDeploymentCreate**](Apis/DeploymentsApi.md#createdeploymentcreate) | **POST** /deployments | Creates a new deployment.
*DeploymentsApi* | [**createDeploymentCreateSpaces**](Apis/DeploymentsApi.md#createdeploymentcreatespaces) | **POST** /{baseSpaceId}/deployments | Creates a new deployment.
*DeploymentsApi* | [**deleteDeployment**](Apis/DeploymentsApi.md#deletedeployment) | **DELETE** /deployments/{id} | Delete a DeploymentResource by ID
*DeploymentsApi* | [**deleteDeploymentSpaces**](Apis/DeploymentsApi.md#deletedeploymentspaces) | **DELETE** /{baseSpaceId}/deployments/{id} | Delete a DeploymentResource by ID
*DeploymentsApi* | [**getDeploymentById**](Apis/DeploymentsApi.md#getdeploymentbyid) | **GET** /deployments/{id} | Get a Deployment by ID
*DeploymentsApi* | [**getDeploymentByIdSpaces**](Apis/DeploymentsApi.md#getdeploymentbyidspaces) | **GET** /{baseSpaceId}/deployments/{id} | Get a Deployment by ID
*DeploymentsApi* | [**indexDeployments**](Apis/DeploymentsApi.md#indexdeployments) | **GET** /deployments | Get a list of DeploymentResources
*DeploymentsApi* | [**indexDeploymentsSpaces**](Apis/DeploymentsApi.md#indexdeploymentsspaces) | **GET** /{baseSpaceId}/deployments | Get a list of DeploymentResources
*DynamicExtensionsApi* | [**getDynamicExtensionsFeaturesMetadata**](Apis/DynamicExtensionsApi.md#getdynamicextensionsfeaturesmetadata) | **GET** /dynamic-extensions/features/metadata | Retrieves the current dynamic extensions feature metadata.
*DynamicExtensionsApi* | [**getDynamicExtensionsFeaturesValues**](Apis/DynamicExtensionsApi.md#getdynamicextensionsfeaturesvalues) | **GET** /dynamic-extensions/features/values | Retrieves the current dynamic extensions feature values.
*DynamicExtensionsApi* | [**updateDynamicExtensionsFeaturesValues**](Apis/DynamicExtensionsApi.md#updatedynamicextensionsfeaturesvalues) | **PUT** /dynamic-extensions/features/values | Modifies the current dynamic extensions feature values.
*EnvironmentsApi* | [**createEnvironment**](Apis/EnvironmentsApi.md#createenvironment) | **POST** /environments | Create a EnvironmentResource
*EnvironmentsApi* | [**createEnvironmentSpaces**](Apis/EnvironmentsApi.md#createenvironmentspaces) | **POST** /{baseSpaceId}/environments | Create a EnvironmentResource
*EnvironmentsApi* | [**deleteEnvironment**](Apis/EnvironmentsApi.md#deleteenvironment) | **DELETE** /environments/{id} | Delete a EnvironmentResource by ID
*EnvironmentsApi* | [**deleteEnvironmentSpaces**](Apis/EnvironmentsApi.md#deleteenvironmentspaces) | **DELETE** /{baseSpaceId}/environments/{id} | Delete a EnvironmentResource by ID
*EnvironmentsApi* | [**getDeploymentEnvironmentSettingsMetadata**](Apis/EnvironmentsApi.md#getdeploymentenvironmentsettingsmetadata) | **GET** /environments/{id}/metadata | Gets the custom settings metadata from the extensions.
*EnvironmentsApi* | [**getDeploymentEnvironmentSettingsMetadataSpaces**](Apis/EnvironmentsApi.md#getdeploymentenvironmentsettingsmetadataspaces) | **GET** /{baseSpaceId}/environments/{id}/metadata | Gets the custom settings metadata from the extensions.
*EnvironmentsApi* | [**getEnvironmentById**](Apis/EnvironmentsApi.md#getenvironmentbyid) | **GET** /environments/{id} | Get an Environment by ID
*EnvironmentsApi* | [**getEnvironmentByIdSpaces**](Apis/EnvironmentsApi.md#getenvironmentbyidspaces) | **GET** /{baseSpaceId}/environments/{id} | Get an Environment by ID
*EnvironmentsApi* | [**getEnvironmentsSummary**](Apis/EnvironmentsApi.md#getenvironmentssummary) | **GET** /environments/summary | Lists all environments, including a summary of machine information
*EnvironmentsApi* | [**getEnvironmentsSummarySpaces**](Apis/EnvironmentsApi.md#getenvironmentssummaryspaces) | **GET** /{baseSpaceId}/environments/summary | Lists all environments, including a summary of machine information
*EnvironmentsApi* | [**getVariablesScopedToEnvironment**](Apis/EnvironmentsApi.md#getvariablesscopedtoenvironment) | **GET** /environments/{id}/singlyScopedVariableDetails | Lists all the variable set names (projects and library variable sets) that have variables that are scoped to only the given environment
*EnvironmentsApi* | [**getVariablesScopedToEnvironmentSpaces**](Apis/EnvironmentsApi.md#getvariablesscopedtoenvironmentspaces) | **GET** /{baseSpaceId}/environments/{id}/singlyScopedVariableDetails | Lists all the variable set names (projects and library variable sets) that have variables that are scoped to only the given environment
*EnvironmentsApi* | [**indexEnvironmentDeploymentTargets**](Apis/EnvironmentsApi.md#indexenvironmentdeploymenttargets) | **GET** /environments/{id}/machines | Get a list of DeploymentTargetResources for the given EnvironmentResource
*EnvironmentsApi* | [**indexEnvironmentDeploymentTargetsSpaces**](Apis/EnvironmentsApi.md#indexenvironmentdeploymenttargetsspaces) | **GET** /{baseSpaceId}/environments/{id}/machines | Get a list of DeploymentTargetResources for the given EnvironmentResource
*EnvironmentsApi* | [**indexEnvironments**](Apis/EnvironmentsApi.md#indexenvironments) | **GET** /environments | Get a list of EnvironmentResources
*EnvironmentsApi* | [**indexEnvironmentsSpaces**](Apis/EnvironmentsApi.md#indexenvironmentsspaces) | **GET** /{baseSpaceId}/environments | Get a list of EnvironmentResources
*EnvironmentsApi* | [**listAllEnvironments**](Apis/EnvironmentsApi.md#listallenvironments) | **GET** /environments/all | Get a list of EnvironmentResources
*EnvironmentsApi* | [**listAllEnvironmentsSpaces**](Apis/EnvironmentsApi.md#listallenvironmentsspaces) | **GET** /{baseSpaceId}/environments/all | Get a list of EnvironmentResources
*EnvironmentsApi* | [**updateEnvironment**](Apis/EnvironmentsApi.md#updateenvironment) | **PUT** /environments/{id} | Modify a EnvironmentResource by ID
*EnvironmentsApi* | [**updateEnvironmentSpaces**](Apis/EnvironmentsApi.md#updateenvironmentspaces) | **PUT** /{baseSpaceId}/environments/{id} | Modify a EnvironmentResource by ID
*EnvironmentsApi* | [**updateSortEnvironments**](Apis/EnvironmentsApi.md#updatesortenvironments) | **PUT** /environments/sortorder | Takes an array of environment IDs as the request body, uses the order of items in the array to sort the environments on the server. The ID of every environment must be specified.
*EnvironmentsApi* | [**updateSortEnvironmentsSpaces**](Apis/EnvironmentsApi.md#updatesortenvironmentsspaces) | **PUT** /{baseSpaceId}/environments/sortorder | Takes an array of environment IDs as the request body, uses the order of items in the array to sort the environments on the server. The ID of every environment must be specified.
*EventsApi* | [**getEvent**](Apis/EventsApi.md#getevent) | **GET** /events/{id} | Gets a single event by ID.
*EventsApi* | [**getEventSpaces**](Apis/EventsApi.md#geteventspaces) | **GET** /{baseSpaceId}/events/{id} | Gets a single event by ID.
*EventsApi* | [**getListEventAgents**](Apis/EventsApi.md#getlisteventagents) | **GET** /events/agents | Lists event agents.
*EventsApi* | [**getListEventAgentsSpaces**](Apis/EventsApi.md#getlisteventagentsspaces) | **GET** /{baseSpaceId}/events/agents | Lists event agents.
*EventsApi* | [**getListEventCategories**](Apis/EventsApi.md#getlisteventcategories) | **GET** /events/categories | Lists event categories.
*EventsApi* | [**getListEventCategoriesSpaces**](Apis/EventsApi.md#getlisteventcategoriesspaces) | **GET** /{baseSpaceId}/events/categories | Lists event categories.
*EventsApi* | [**getListEventDocumentTypes**](Apis/EventsApi.md#getlisteventdocumenttypes) | **GET** /events/documenttypes | Lists subscription event document types.
*EventsApi* | [**getListEventDocumentTypesSpaces**](Apis/EventsApi.md#getlisteventdocumenttypesspaces) | **GET** /{baseSpaceId}/events/documenttypes | Lists subscription event document types.
*EventsApi* | [**getListEventGroups**](Apis/EventsApi.md#getlisteventgroups) | **GET** /events/groups | Lists subscription event groups.
*EventsApi* | [**getListEventGroupsSpaces**](Apis/EventsApi.md#getlisteventgroupsspaces) | **GET** /{baseSpaceId}/events/groups | Lists subscription event groups.
*EventsApi* | [**getListEvents**](Apis/EventsApi.md#getlistevents) | **GET** /events | List all of the the audit events collected to date. Events can be filtered by various criteria. Events will be ordered by the date of the event, descending.
*EventsApi* | [**getListEventsSpaces**](Apis/EventsApi.md#getlisteventsspaces) | **GET** /{baseSpaceId}/events | List all of the the audit events collected to date. Events can be filtered by various criteria. Events will be ordered by the date of the event, descending.
*ExternalSecurityGroupsApi* | [**getListProvidersThatSupportExternalSecurityGroups**](Apis/ExternalSecurityGroupsApi.md#getlistprovidersthatsupportexternalsecuritygroups) | **GET** /externalsecuritygroupproviders | Lists the authentication providers that support external group lookups.
*FeaturesConfigurationApi* | [**getFeaturesConfiguration**](Apis/FeaturesConfigurationApi.md#getfeaturesconfiguration) | **GET** /featuresconfiguration | Gets information about the features configuration in use by the Octopus Server
*FeaturesConfigurationApi* | [**updateFeaturesConfiguration**](Apis/FeaturesConfigurationApi.md#updatefeaturesconfiguration) | **PUT** /featuresconfiguration | Updates the features configuration used by the Octopus Server
*FeedsApi* | [**createFeed**](Apis/FeedsApi.md#createfeed) | **POST** /feeds | Create a FeedResource
*FeedsApi* | [**createFeedSpaces**](Apis/FeedsApi.md#createfeedspaces) | **POST** /{baseSpaceId}/feeds | Create a FeedResource
*FeedsApi* | [**deleteFeed**](Apis/FeedsApi.md#deletefeed) | **DELETE** /feeds/{id} | Delete a FeedResource by ID
*FeedsApi* | [**deleteFeedSpaces**](Apis/FeedsApi.md#deletefeedspaces) | **DELETE** /{baseSpaceId}/feeds/{id} | Delete a FeedResource by ID
*FeedsApi* | [**getBuiltInFeedStats**](Apis/FeedsApi.md#getbuiltinfeedstats) | **GET** /feeds/stats | Provides statistics for the built-in package repository.
*FeedsApi* | [**getBuiltInFeedStatsSpaces**](Apis/FeedsApi.md#getbuiltinfeedstatsspaces) | **GET** /{baseSpaceId}/feeds/stats | Provides statistics for the built-in package repository.
*FeedsApi* | [**getFeedById**](Apis/FeedsApi.md#getfeedbyid) | **GET** /feeds/{id} | Get a FeedResource by ID
*FeedsApi* | [**getFeedByIdSpaces**](Apis/FeedsApi.md#getfeedbyidspaces) | **GET** /{baseSpaceId}/feeds/{id} | Get a FeedResource by ID
*FeedsApi* | [**getPackageSearch**](Apis/FeedsApi.md#getpackagesearch) | **GET** /feeds/{id}/packages/search | Searches the specified feed for packages based on the specified search term
*FeedsApi* | [**getPackageSearchSpaces**](Apis/FeedsApi.md#getpackagesearchspaces) | **GET** /{baseSpaceId}/feeds/{id}/packages/search | Searches the specified feed for packages based on the specified search term
*FeedsApi* | [**getPackageVersionSearch**](Apis/FeedsApi.md#getpackageversionsearch) | **GET** /feeds/{id}/packages/versions | Lists available versions of the package specified
*FeedsApi* | [**getPackageVersionSearchSpaces**](Apis/FeedsApi.md#getpackageversionsearchspaces) | **GET** /{baseSpaceId}/feeds/{id}/packages/versions | Lists available versions of the package specified
*FeedsApi* | [**indexFeeds**](Apis/FeedsApi.md#indexfeeds) | **GET** /feeds | Get a list of FeedResources
*FeedsApi* | [**indexFeedsSpaces**](Apis/FeedsApi.md#indexfeedsspaces) | **GET** /{baseSpaceId}/feeds | Get a list of FeedResources
*FeedsApi* | [**listAllFeeds**](Apis/FeedsApi.md#listallfeeds) | **GET** /feeds/all | Get a list of FeedResources
*FeedsApi* | [**listAllFeedsSpaces**](Apis/FeedsApi.md#listallfeedsspaces) | **GET** /{baseSpaceId}/feeds/all | Get a list of FeedResources
*FeedsApi* | [**updateFeed**](Apis/FeedsApi.md#updatefeed) | **PUT** /feeds/{id} | Modify a FeedResource by ID
*FeedsApi* | [**updateFeedSpaces**](Apis/FeedsApi.md#updatefeedspaces) | **PUT** /{baseSpaceId}/feeds/{id} | Modify a FeedResource by ID
*HomeApi* | [**getHome**](Apis/HomeApi.md#gethome) | **GET** / | Returns a document describing the current Octopus Server and links to other parts of the API.
*InterruptionsApi* | [**createSubmitInterruption**](Apis/InterruptionsApi.md#createsubmitinterruption) | **POST** /interruptions/{id}/submit | Submits a dictionary of form values for the interruption. Only the user with responsibility for this interruption can submit this form.
*InterruptionsApi* | [**createSubmitInterruptionSpaces**](Apis/InterruptionsApi.md#createsubmitinterruptionspaces) | **POST** /{baseSpaceId}/interruptions/{id}/submit | Submits a dictionary of form values for the interruption. Only the user with responsibility for this interruption can submit this form.
*InterruptionsApi* | [**getInterruptionById**](Apis/InterruptionsApi.md#getinterruptionbyid) | **GET** /interruptions/{id} | Get an Interruption by ID
*InterruptionsApi* | [**getInterruptionByIdSpaces**](Apis/InterruptionsApi.md#getinterruptionbyidspaces) | **GET** /{baseSpaceId}/interruptions/{id} | Get an Interruption by ID
*InterruptionsApi* | [**getInterruptionResponsibility**](Apis/InterruptionsApi.md#getinterruptionresponsibility) | **GET** /interruptions/{id}/responsible | Gets the user that is currently responsible for this interruption.
*InterruptionsApi* | [**getInterruptionResponsibilitySpaces**](Apis/InterruptionsApi.md#getinterruptionresponsibilityspaces) | **GET** /{baseSpaceId}/interruptions/{id}/responsible | Gets the user that is currently responsible for this interruption.
*InterruptionsApi* | [**indexInterruptions**](Apis/InterruptionsApi.md#indexinterruptions) | **GET** /interruptions | Get a list of InterruptionResources
*InterruptionsApi* | [**indexInterruptionsSpaces**](Apis/InterruptionsApi.md#indexinterruptionsspaces) | **GET** /{baseSpaceId}/interruptions | Get a list of InterruptionResources
*InterruptionsApi* | [**updateInterruptionResponsibility**](Apis/InterruptionsApi.md#updateinterruptionresponsibility) | **PUT** /interruptions/{id}/responsible | Allows the current user to take responsibility for this interruption. Only users in one of the responsible teams on this interruption can take responsibility for it.
*InterruptionsApi* | [**updateInterruptionResponsibilitySpaces**](Apis/InterruptionsApi.md#updateinterruptionresponsibilityspaces) | **PUT** /{baseSpaceId}/interruptions/{id}/responsible | Allows the current user to take responsibility for this interruption. Only users in one of the responsible teams on this interruption can take responsibility for it.
*InvitationsApi* | [**createInvitation**](Apis/InvitationsApi.md#createinvitation) | **POST** /users/invitations | Create a InvitationResource
*InvitationsApi* | [**createInvitationSpaces**](Apis/InvitationsApi.md#createinvitationspaces) | **POST** /{baseSpaceId}/users/invitations | Create a InvitationResource
*InvitationsApi* | [**getInvitationById**](Apis/InvitationsApi.md#getinvitationbyid) | **GET** /users/invitations/{id} | Get an Invitation by ID
*InvitationsApi* | [**getInvitationByIdSpaces**](Apis/InvitationsApi.md#getinvitationbyidspaces) | **GET** /{baseSpaceId}/users/invitations/{id} | Get an Invitation by ID
*JiraIntegrationApi* | [**createJiraConnectAppConnectivityCheck**](Apis/JiraIntegrationApi.md#createjiraconnectappconnectivitycheck) | **POST** /jiraintegration/connectivitycheck/connectapp | 
*JiraIntegrationApi* | [**createJiraCredentialsConnectivityCheck**](Apis/JiraIntegrationApi.md#createjiracredentialsconnectivitycheck) | **POST** /jiraintegration/connectivitycheck/jira | 
*LetsEncryptApi* | [**getLetsEncryptConfiguration**](Apis/LetsEncryptApi.md#getletsencryptconfiguration) | **GET** /letsencryptconfiguration | Returns the current Let's Encrypt configuration
*LetsEncryptApi* | [**getLetsEncryptHttpChallenge**](Apis/LetsEncryptApi.md#getletsencrypthttpchallenge) | **GET** /.well-known/acme-challenge//{token} | Returns the computed HTTP challenge for a given token
*LetsEncryptApi* | [**updateLetsEncryptConfiguration**](Apis/LetsEncryptApi.md#updateletsencryptconfiguration) | **PUT** /letsencryptconfiguration | Updates the Let's Encrypt configuration used by the Octopus Server.
*LibraryVariableSetsApi* | [**createLibraryVariableSet**](Apis/LibraryVariableSetsApi.md#createlibraryvariableset) | **POST** /libraryvariablesets | Create a LibraryVariableSetResource
*LibraryVariableSetsApi* | [**createLibraryVariableSetSpaces**](Apis/LibraryVariableSetsApi.md#createlibraryvariablesetspaces) | **POST** /{baseSpaceId}/libraryvariablesets | Create a LibraryVariableSetResource
*LibraryVariableSetsApi* | [**deleteLibraryVariableSet**](Apis/LibraryVariableSetsApi.md#deletelibraryvariableset) | **DELETE** /libraryvariablesets/{id} | Delete a LibraryVariableSetResource by ID
*LibraryVariableSetsApi* | [**deleteLibraryVariableSetSpaces**](Apis/LibraryVariableSetsApi.md#deletelibraryvariablesetspaces) | **DELETE** /{baseSpaceId}/libraryvariablesets/{id} | Delete a LibraryVariableSetResource by ID
*LibraryVariableSetsApi* | [**getLibraryVariableSetById**](Apis/LibraryVariableSetsApi.md#getlibraryvariablesetbyid) | **GET** /libraryvariablesets/{id} | Get a Library Variable Set by ID
*LibraryVariableSetsApi* | [**getLibraryVariableSetByIdSpaces**](Apis/LibraryVariableSetsApi.md#getlibraryvariablesetbyidspaces) | **GET** /{baseSpaceId}/libraryvariablesets/{id} | Get a Library Variable Set by ID
*LibraryVariableSetsApi* | [**getLibraryVariableSetUsageList**](Apis/LibraryVariableSetsApi.md#getlibraryvariablesetusagelist) | **GET** /libraryvariablesets/{id}/usages | Lists projects and deployments which are using an library variable set.
*LibraryVariableSetsApi* | [**getLibraryVariableSetUsageListSpaces**](Apis/LibraryVariableSetsApi.md#getlibraryvariablesetusagelistspaces) | **GET** /{baseSpaceId}/libraryvariablesets/{id}/usages | Lists projects and deployments which are using an library variable set.
*LibraryVariableSetsApi* | [**indexLibraryVariableSets**](Apis/LibraryVariableSetsApi.md#indexlibraryvariablesets) | **GET** /libraryvariablesets | Get a list of LibraryVariableSetResources
*LibraryVariableSetsApi* | [**indexLibraryVariableSetsSpaces**](Apis/LibraryVariableSetsApi.md#indexlibraryvariablesetsspaces) | **GET** /{baseSpaceId}/libraryvariablesets | Get a list of LibraryVariableSetResources
*LibraryVariableSetsApi* | [**listAllLibraryVariableSets**](Apis/LibraryVariableSetsApi.md#listalllibraryvariablesets) | **GET** /libraryvariablesets/all | Get a list of LibraryVariableSetResources
*LibraryVariableSetsApi* | [**listAllLibraryVariableSetsSpaces**](Apis/LibraryVariableSetsApi.md#listalllibraryvariablesetsspaces) | **GET** /{baseSpaceId}/libraryvariablesets/all | Get a list of LibraryVariableSetResources
*LibraryVariableSetsApi* | [**updateLibraryVariableSet**](Apis/LibraryVariableSetsApi.md#updatelibraryvariableset) | **PUT** /libraryvariablesets/{id} | Modify a LibraryVariableSetResource by ID
*LibraryVariableSetsApi* | [**updateLibraryVariableSetSpaces**](Apis/LibraryVariableSetsApi.md#updatelibraryvariablesetspaces) | **PUT** /{baseSpaceId}/libraryvariablesets/{id} | Modify a LibraryVariableSetResource by ID
*LicensesApi* | [**getLicenseGetCurrent**](Apis/LicensesApi.md#getlicensegetcurrent) | **GET** /licenses/licenses-current | Returns the details of the current license in use by the Octopus Cluster.
*LicensesApi* | [**getLicenseStatusGetCurrent**](Apis/LicensesApi.md#getlicensestatusgetcurrent) | **GET** /licenses/licenses-current-status | Calculates the status of the current Octopus license including compliance and maintenance expiry.
*LicensesApi* | [**updateLicensePutCurrent**](Apis/LicensesApi.md#updatelicenseputcurrent) | **PUT** /licenses/licenses-current | Updates the license for the Octopus cluster.
*LifecyclesApi* | [**createLifecycle**](Apis/LifecyclesApi.md#createlifecycle) | **POST** /lifecycles | Create a LifecycleResource
*LifecyclesApi* | [**createLifecycleSpaces**](Apis/LifecyclesApi.md#createlifecyclespaces) | **POST** /{baseSpaceId}/lifecycles | Create a LifecycleResource
*LifecyclesApi* | [**deleteLifecycle**](Apis/LifecyclesApi.md#deletelifecycle) | **DELETE** /lifecycles/{id} | Delete a LifecycleResource by ID
*LifecyclesApi* | [**deleteLifecycleSpaces**](Apis/LifecyclesApi.md#deletelifecyclespaces) | **DELETE** /{baseSpaceId}/lifecycles/{id} | Delete a LifecycleResource by ID
*LifecyclesApi* | [**getLifecycleById**](Apis/LifecyclesApi.md#getlifecyclebyid) | **GET** /lifecycles/{id} | Get a Lifecycle by ID
*LifecyclesApi* | [**getLifecycleByIdSpaces**](Apis/LifecyclesApi.md#getlifecyclebyidspaces) | **GET** /{baseSpaceId}/lifecycles/{id} | Get a Lifecycle by ID
*LifecyclesApi* | [**getLifecyclePreview**](Apis/LifecyclesApi.md#getlifecyclepreview) | **GET** /lifecycles/{id}/preview | Gets a single lifecycle by ID, as a preview.
*LifecyclesApi* | [**getLifecyclePreviewSpaces**](Apis/LifecyclesApi.md#getlifecyclepreviewspaces) | **GET** /{baseSpaceId}/lifecycles/{id}/preview | Gets a single lifecycle by ID, as a preview.
*LifecyclesApi* | [**getLifecycleProjects**](Apis/LifecyclesApi.md#getlifecycleprojects) | **GET** /lifecycles/{id}/projects | Gets a all projects that use this lifecycle.
*LifecyclesApi* | [**getLifecycleProjectsSpaces**](Apis/LifecyclesApi.md#getlifecycleprojectsspaces) | **GET** /{baseSpaceId}/lifecycles/{id}/projects | Gets a all projects that use this lifecycle.
*LifecyclesApi* | [**indexLifecycles**](Apis/LifecyclesApi.md#indexlifecycles) | **GET** /lifecycles | Get a list of LifecycleResources
*LifecyclesApi* | [**indexLifecyclesSpaces**](Apis/LifecyclesApi.md#indexlifecyclesspaces) | **GET** /{baseSpaceId}/lifecycles | Get a list of LifecycleResources
*LifecyclesApi* | [**listAllLifecycles**](Apis/LifecyclesApi.md#listalllifecycles) | **GET** /lifecycles/all | Get a list of LifecycleResources
*LifecyclesApi* | [**listAllLifecyclesSpaces**](Apis/LifecyclesApi.md#listalllifecyclesspaces) | **GET** /{baseSpaceId}/lifecycles/all | Get a list of LifecycleResources
*LifecyclesApi* | [**updateLifecycle**](Apis/LifecyclesApi.md#updatelifecycle) | **PUT** /lifecycles/{id} | Modify a LifecycleResource by ID
*LifecyclesApi* | [**updateLifecycleSpaces**](Apis/LifecyclesApi.md#updatelifecyclespaces) | **PUT** /{baseSpaceId}/lifecycles/{id} | Modify a LifecycleResource by ID
*MachinePoliciesApi* | [**createMachinePolicy**](Apis/MachinePoliciesApi.md#createmachinepolicy) | **POST** /machinepolicies | Create a MachinePolicyResource
*MachinePoliciesApi* | [**createMachinePolicySpaces**](Apis/MachinePoliciesApi.md#createmachinepolicyspaces) | **POST** /{baseSpaceId}/machinepolicies | Create a MachinePolicyResource
*MachinePoliciesApi* | [**deleteMachinePolicy**](Apis/MachinePoliciesApi.md#deletemachinepolicy) | **DELETE** /machinepolicies/{id} | Deletes an existing machine policy.
*MachinePoliciesApi* | [**deleteMachinePolicySpaces**](Apis/MachinePoliciesApi.md#deletemachinepolicyspaces) | **DELETE** /{baseSpaceId}/machinepolicies/{id} | Deletes an existing machine policy.
*MachinePoliciesApi* | [**getMachinePolicyById**](Apis/MachinePoliciesApi.md#getmachinepolicybyid) | **GET** /machinepolicies/{id} | Get a Machine Policy by ID
*MachinePoliciesApi* | [**getMachinePolicyByIdSpaces**](Apis/MachinePoliciesApi.md#getmachinepolicybyidspaces) | **GET** /{baseSpaceId}/machinepolicies/{id} | Get a Machine Policy by ID
*MachinePoliciesApi* | [**getMachinePolicyTemplate**](Apis/MachinePoliciesApi.md#getmachinepolicytemplate) | **GET** /machinepolicies/template | Gets a template for a new Machine Policy, which includes any defaults.
*MachinePoliciesApi* | [**getMachinePolicyTemplateSpaces**](Apis/MachinePoliciesApi.md#getmachinepolicytemplatespaces) | **GET** /{baseSpaceId}/machinepolicies/template | Gets a template for a new Machine Policy, which includes any defaults.
*MachinePoliciesApi* | [**indexMachinePolicies**](Apis/MachinePoliciesApi.md#indexmachinepolicies) | **GET** /machinepolicies | Get a list of MachinePolicyResources
*MachinePoliciesApi* | [**indexMachinePoliciesSpaces**](Apis/MachinePoliciesApi.md#indexmachinepoliciesspaces) | **GET** /{baseSpaceId}/machinepolicies | Get a list of MachinePolicyResources
*MachinePoliciesApi* | [**indexMachinePolicyDeploymentTargets**](Apis/MachinePoliciesApi.md#indexmachinepolicydeploymenttargets) | **GET** /machinepolicies/{id}/machines | Lists all of the machines that belong to the given Machine Policy
*MachinePoliciesApi* | [**indexMachinePolicyDeploymentTargetsSpaces**](Apis/MachinePoliciesApi.md#indexmachinepolicydeploymenttargetsspaces) | **GET** /{baseSpaceId}/machinepolicies/{id}/machines | Lists all of the machines that belong to the given Machine Policy
*MachinePoliciesApi* | [**indexMachinePolicyWorkers**](Apis/MachinePoliciesApi.md#indexmachinepolicyworkers) | **GET** /machinepolicies/{id}/workers | Lists all of the workers that belong to the given Machine Policy
*MachinePoliciesApi* | [**indexMachinePolicyWorkersSpaces**](Apis/MachinePoliciesApi.md#indexmachinepolicyworkersspaces) | **GET** /{baseSpaceId}/machinepolicies/{id}/workers | Lists all of the workers that belong to the given Machine Policy
*MachinePoliciesApi* | [**listAllMachinePolicies**](Apis/MachinePoliciesApi.md#listallmachinepolicies) | **GET** /machinepolicies/all | Get a list of MachinePolicyResources
*MachinePoliciesApi* | [**listAllMachinePoliciesSpaces**](Apis/MachinePoliciesApi.md#listallmachinepoliciesspaces) | **GET** /{baseSpaceId}/machinepolicies/all | Get a list of MachinePolicyResources
*MachinePoliciesApi* | [**updateMachinePolicy**](Apis/MachinePoliciesApi.md#updatemachinepolicy) | **PUT** /machinepolicies/{id} | Modify a MachinePolicyResource by ID
*MachinePoliciesApi* | [**updateMachinePolicySpaces**](Apis/MachinePoliciesApi.md#updatemachinepolicyspaces) | **PUT** /{baseSpaceId}/machinepolicies/{id} | Modify a MachinePolicyResource by ID
*MachineRolesApi* | [**getMachineRolesListAll**](Apis/MachineRolesApi.md#getmachineroleslistall) | **GET** /machineroles/all | Gets all machine roles that have been defined in this Octopus installation. The result will be a string array.
*MachineRolesApi* | [**getMachineRolesListAllSpaces**](Apis/MachineRolesApi.md#getmachineroleslistallspaces) | **GET** /{baseSpaceId}/machineroles/all | Gets all machine roles that have been defined in this Octopus installation. The result will be a string array.
*MachinesApi* | [**createDeploymentTarget**](Apis/MachinesApi.md#createdeploymenttarget) | **POST** /machines | Create a DeploymentTargetResource
*MachinesApi* | [**createDeploymentTargetSpaces**](Apis/MachinesApi.md#createdeploymenttargetspaces) | **POST** /{baseSpaceId}/machines | Create a DeploymentTargetResource
*MachinesApi* | [**deleteDeploymentTarget**](Apis/MachinesApi.md#deletedeploymenttarget) | **DELETE** /machines/{id} | Delete a DeploymentTargetResource by ID
*MachinesApi* | [**deleteDeploymentTargetSpaces**](Apis/MachinesApi.md#deletedeploymenttargetspaces) | **DELETE** /{baseSpaceId}/machines/{id} | Delete a DeploymentTargetResource by ID
*MachinesApi* | [**getDeploymentTargetConnectionStatus**](Apis/MachinesApi.md#getdeploymenttargetconnectionstatus) | **GET** /machines/{id}/connection | Get the status of the network connection between the Octopus server and a machine.
*MachinesApi* | [**getDeploymentTargetConnectionStatusSpaces**](Apis/MachinesApi.md#getdeploymenttargetconnectionstatusspaces) | **GET** /{baseSpaceId}/machines/{id}/connection | Get the status of the network connection between the Octopus server and a machine.
*MachinesApi* | [**getDeploymentTargetOperatingSystemNamesListAll**](Apis/MachinesApi.md#getdeploymenttargetoperatingsystemnameslistall) | **GET** /machines/operatingsystem/names/all | Gets all operating system names for deployment targets. The result will be a string array.
*MachinesApi* | [**getDeploymentTargetOperatingSystemNamesListAllSpaces**](Apis/MachinesApi.md#getdeploymenttargetoperatingsystemnameslistallspaces) | **GET** /{baseSpaceId}/machines/operatingsystem/names/all | Gets all operating system names for deployment targets. The result will be a string array.
*MachinesApi* | [**getDeploymentTargetOperatingSystemShellNameListAll**](Apis/MachinesApi.md#getdeploymenttargetoperatingsystemshellnamelistall) | **GET** /machines/operatingsystem/shells/all | Gets all operating system shell names for deployment targets. The result will be a string array.
*MachinesApi* | [**getDeploymentTargetOperatingSystemShellNameListAllSpaces**](Apis/MachinesApi.md#getdeploymenttargetoperatingsystemshellnamelistallspaces) | **GET** /{baseSpaceId}/machines/operatingsystem/shells/all | Gets all operating system shell names for deployment targets. The result will be a string array.
*MachinesApi* | [**getDiscoverDeploymentTarget**](Apis/MachinesApi.md#getdiscoverdeploymenttarget) | **GET** /machines/discover | Interrogate a machine for communication details so that it may be added to the installation.
*MachinesApi* | [**getDiscoverDeploymentTargetSpaces**](Apis/MachinesApi.md#getdiscoverdeploymenttargetspaces) | **GET** /{baseSpaceId}/machines/discover | Interrogate a machine for communication details so that it may be added to the installation.
*MachinesApi* | [**getMachineResourceById**](Apis/MachinesApi.md#getmachineresourcebyid) | **GET** /machines/{id} | Get a Machine by ID
*MachinesApi* | [**getMachineResourceByIdSpaces**](Apis/MachinesApi.md#getmachineresourcebyidspaces) | **GET** /{baseSpaceId}/machines/{id} | Get a Machine by ID
*MachinesApi* | [**indexDeploymentTargetTasks**](Apis/MachinesApi.md#indexdeploymenttargettasks) | **GET** /machines/{id}/tasks | Get a list of TaskResources for the given DeploymentTargetResource
*MachinesApi* | [**indexDeploymentTargetTasksSpaces**](Apis/MachinesApi.md#indexdeploymenttargettasksspaces) | **GET** /{baseSpaceId}/machines/{id}/tasks | Get a list of TaskResources for the given DeploymentTargetResource
*MachinesApi* | [**indexDeploymentTargets**](Apis/MachinesApi.md#indexdeploymenttargets) | **GET** /machines | Get a list of DeploymentTargetResources
*MachinesApi* | [**indexDeploymentTargetsSpaces**](Apis/MachinesApi.md#indexdeploymenttargetsspaces) | **GET** /{baseSpaceId}/machines | Get a list of DeploymentTargetResources
*MachinesApi* | [**listAllDeploymentTargets**](Apis/MachinesApi.md#listalldeploymenttargets) | **GET** /machines/all | Get a list of DeploymentTargetResources
*MachinesApi* | [**listAllDeploymentTargetsSpaces**](Apis/MachinesApi.md#listalldeploymenttargetsspaces) | **GET** /{baseSpaceId}/machines/all | Get a list of DeploymentTargetResources
*MachinesApi* | [**updateDeploymentTarget**](Apis/MachinesApi.md#updatedeploymenttarget) | **PUT** /machines/{id} | Modify a DeploymentTargetResource by ID
*MachinesApi* | [**updateDeploymentTargetSpaces**](Apis/MachinesApi.md#updatedeploymenttargetspaces) | **PUT** /{baseSpaceId}/machines/{id} | Modify a DeploymentTargetResource by ID
*MaintenanceConfigurationApi* | [**getMaintenanceConfiguration**](Apis/MaintenanceConfigurationApi.md#getmaintenanceconfiguration) | **GET** /maintenanceconfiguration | Gets information about the maintenance configuration in use by the Octopus Server.
*MaintenanceConfigurationApi* | [**updateMaintenanceConfiguration**](Apis/MaintenanceConfigurationApi.md#updatemaintenanceconfiguration) | **PUT** /maintenanceconfiguration | Updates the maintenance configuration used by the Octopus Server.
*MigrationApi* | [**createMigrationImport**](Apis/MigrationApi.md#createmigrationimport) | **POST** /migrations/import | Returns HTTP OK (200) when an import migration has been queued.
*MigrationApi* | [**createMigrationPartialExport**](Apis/MigrationApi.md#createmigrationpartialexport) | **POST** /migrations/partialexport | Returns HTTP OK (200) when a partial-export migration has been queued.
*NuGetApi* | [**pushNuGetPackage**](Apis/NuGetApi.md#pushnugetpackage) | **PUT** /nuget/packages | Octopus allows NuGet.exe and compatible tools to push packages to this endpoint.
*NuGetApi* | [**pushNuGetPackageSpaces**](Apis/NuGetApi.md#pushnugetpackagespaces) | **PUT** /{baseSpaceId}/nuget/packages | Octopus allows NuGet.exe and compatible tools to push packages to this endpoint.
*OctopusPackageMetadataApi* | [**createOctopusPackageMetadata**](Apis/OctopusPackageMetadataApi.md#createoctopuspackagemetadata) | **POST** /package-metadata | Creates package build information. Deprecated. Please use the 'build-information' api instead.
*OctopusPackageMetadataApi* | [**createOctopusPackageMetadataSpaces**](Apis/OctopusPackageMetadataApi.md#createoctopuspackagemetadataspaces) | **POST** /{baseSpaceId}/package-metadata | Creates package build information. Deprecated. Please use the 'build-information' api instead.
*OctopusPackageMetadataApi* | [**getOctopusPackageMetadata**](Apis/OctopusPackageMetadataApi.md#getoctopuspackagemetadata) | **GET** /package-metadata/{id} | Returns package build information for the specified id. Deprecated. Please use the 'build-information' api instead.
*OctopusPackageMetadataApi* | [**getOctopusPackageMetadataSpaces**](Apis/OctopusPackageMetadataApi.md#getoctopuspackagemetadataspaces) | **GET** /{baseSpaceId}/package-metadata/{id} | Returns package build information for the specified id. Deprecated. Please use the 'build-information' api instead.
*OctopusServerNodesApi* | [**deleteOctopusServerNode**](Apis/OctopusServerNodesApi.md#deleteoctopusservernode) | **DELETE** /octopusservernodes/{id} | Delete a OctopusServerNodeResource by ID
*OctopusServerNodesApi* | [**getAllOctopusServerNodes**](Apis/OctopusServerNodesApi.md#getalloctopusservernodes) | **GET** /octopusservernodes/all | Get all Octopus Server Nodes
*OctopusServerNodesApi* | [**getAllOctopusServerNodesSpaces**](Apis/OctopusServerNodesApi.md#getalloctopusservernodesspaces) | **GET** /{baseSpaceId}/octopusservernodes/all | Get all Octopus Server Nodes
*OctopusServerNodesApi* | [**getLoadBalancerPing**](Apis/OctopusServerNodesApi.md#getloadbalancerping) | **GET** /octopusservernodes/ping | Returns HTTP ImATeapot (418) when the Octopus Server node is draining or offline, otherwise HTTP OK (200). Always returns the node information in the body.
*OctopusServerNodesApi* | [**getOctopusServerClusterSummary**](Apis/OctopusServerNodesApi.md#getoctopusserverclustersummary) | **GET** /octopusservernodes/summary | Returns all nodes, with status information
*OctopusServerNodesApi* | [**getOctopusServerNodeById**](Apis/OctopusServerNodesApi.md#getoctopusservernodebyid) | **GET** /octopusservernodes/{id} | Get an Octopus Server Node by ID
*OctopusServerNodesApi* | [**getOctopusServerNodeDetails**](Apis/OctopusServerNodesApi.md#getoctopusservernodedetails) | **GET** /octopusservernodes/{id}/details | A count of the running tasks per node.
*OctopusServerNodesApi* | [**indexOctopusServerNodes**](Apis/OctopusServerNodesApi.md#indexoctopusservernodes) | **GET** /octopusservernodes | Get a list of OctopusServerNodeResources
*OctopusServerNodesApi* | [**updateOctopusServerNode**](Apis/OctopusServerNodesApi.md#updateoctopusservernode) | **PUT** /octopusservernodes/{id} | Modify a OctopusServerNodeResource by ID
*OpenIDConnectApi* | [**createOctopusIDUserAuthenticated**](Apis/OpenIDConnectApi.md#createoctopusiduserauthenticated) | **POST** /users/authenticatedToken/OctopusID | 
*OpenIDConnectApi* | [**createOctopusIDUserAuthentication**](Apis/OpenIDConnectApi.md#createoctopusiduserauthentication) | **POST** /users/authenticate/OctopusID | 
*PackagesApi* | [**createPackageRepositoryDeltaUpload**](Apis/PackagesApi.md#createpackagerepositorydeltaupload) | **POST** /packages/{packageId}/{baseVersion}/delta | Uploads a delta patch for the given file. Used to optimize file upload.
*PackagesApi* | [**createPackageRepositoryDeltaUploadSpaces**](Apis/PackagesApi.md#createpackagerepositorydeltauploadspaces) | **POST** /{baseSpaceId}/packages/{packageId}/{baseVersion}/delta | Uploads a delta patch for the given file. Used to optimize file upload.
*PackagesApi* | [**createPackageRepositoryUpload**](Apis/PackagesApi.md#createpackagerepositoryupload) | **POST** /packages/raw | Uploads a new package
*PackagesApi* | [**createPackageRepositoryUploadSpaces**](Apis/PackagesApi.md#createpackagerepositoryuploadspaces) | **POST** /{baseSpaceId}/packages/raw | Uploads a new package
*PackagesApi* | [**deletePackageRepositoryDeleteById**](Apis/PackagesApi.md#deletepackagerepositorydeletebyid) | **DELETE** /packages/{id} | Deletes the specified package
*PackagesApi* | [**deletePackageRepositoryDeleteByIdSpaces**](Apis/PackagesApi.md#deletepackagerepositorydeletebyidspaces) | **DELETE** /{baseSpaceId}/packages/{id} | Deletes the specified package
*PackagesApi* | [**deletePackageRepositoryDeleteByIds**](Apis/PackagesApi.md#deletepackagerepositorydeletebyids) | **DELETE** /packages/bulk | Bulk deletes packages
*PackagesApi* | [**deletePackageRepositoryDeleteByIdsSpaces**](Apis/PackagesApi.md#deletepackagerepositorydeletebyidsspaces) | **DELETE** /{baseSpaceId}/packages/bulk | Bulk deletes packages
*PackagesApi* | [**getPackageListNotes**](Apis/PackagesApi.md#getpackagelistnotes) | **GET** /packages/notes | Returns a list of release notes for the specified packages
*PackagesApi* | [**getPackageListNotesSpaces**](Apis/PackagesApi.md#getpackagelistnotesspaces) | **GET** /{baseSpaceId}/packages/notes | Returns a list of release notes for the specified packages
*PackagesApi* | [**getPackageNotes**](Apis/PackagesApi.md#getpackagenotes) | **GET** /feeds/{id}/packages/notes | Returns the release notes for the specified package
*PackagesApi* | [**getPackageNotesSpaces**](Apis/PackagesApi.md#getpackagenotesspaces) | **GET** /{baseSpaceId}/feeds/{id}/packages/notes | Returns the release notes for the specified package
*PackagesApi* | [**getPackageRepository**](Apis/PackagesApi.md#getpackagerepository) | **GET** /packages/{id} | Returns package information for the specified package id
*PackagesApi* | [**getPackageRepositoryDeltaSignature**](Apis/PackagesApi.md#getpackagerepositorydeltasignature) | **GET** /packages/{packageId}/{version}/delta-signature | Returns the delta-signature for a given package. Used to optimize file upload.
*PackagesApi* | [**getPackageRepositoryDeltaSignatureSpaces**](Apis/PackagesApi.md#getpackagerepositorydeltasignaturespaces) | **GET** /{baseSpaceId}/packages/{packageId}/{version}/delta-signature | Returns the delta-signature for a given package. Used to optimize file upload.
*PackagesApi* | [**getPackageRepositoryGetRaw**](Apis/PackagesApi.md#getpackagerepositorygetraw) | **GET** /packages/{id}/raw | Downloads the specified package
*PackagesApi* | [**getPackageRepositoryGetRawSpaces**](Apis/PackagesApi.md#getpackagerepositorygetrawspaces) | **GET** /{baseSpaceId}/packages/{id}/raw | Downloads the specified package
*PackagesApi* | [**getPackageRepositoryList**](Apis/PackagesApi.md#getpackagerepositorylist) | **GET** /packages | Returns a list of packages matching the specified criteria
*PackagesApi* | [**getPackageRepositoryListSpaces**](Apis/PackagesApi.md#getpackagerepositorylistspaces) | **GET** /{baseSpaceId}/packages | Returns a list of packages matching the specified criteria
*PackagesApi* | [**getPackageRepositorySpaces**](Apis/PackagesApi.md#getpackagerepositoryspaces) | **GET** /{baseSpaceId}/packages/{id} | Returns package information for the specified package id
*PackagesApi* | [**getPackageSearchActionOld**](Apis/PackagesApi.md#getpackagesearchactionold) | **GET** /feeds/{id}/packages | Searches the specified feed for packages. Legacy. Please use the /feeds{id}/packages/search endpoint instead.
*PackagesApi* | [**getPackageSearchActionOldSpaces**](Apis/PackagesApi.md#getpackagesearchactionoldspaces) | **GET** /{baseSpaceId}/feeds/{id}/packages | Searches the specified feed for packages. Legacy. Please use the /feeds{id}/packages/search endpoint instead.
*PerformanceConfigurationApi* | [**getPerformanceConfiguration**](Apis/PerformanceConfigurationApi.md#getperformanceconfiguration) | **GET** /performanceconfiguration | Get performance settings for the Octopus Server
*PerformanceConfigurationApi* | [**updatePerformanceConfiguration**](Apis/PerformanceConfigurationApi.md#updateperformanceconfiguration) | **PUT** /performanceconfiguration | Updates the performance settings for the Octopus Server
*PermissionsApi* | [**getPermissionDefinitions**](Apis/PermissionsApi.md#getpermissiondefinitions) | **GET** /permissions/all | Gets a dictionary of available permissions and their descriptions and restrictions
*ProgressionApi* | [**getProgressionView**](Apis/ProgressionApi.md#getprogressionview) | **GET** /progression/{id} | Returns the progress of a release in the environment lifecycle.
*ProgressionApi* | [**getProgressionViewSpaces**](Apis/ProgressionApi.md#getprogressionviewspaces) | **GET** /{baseSpaceId}/progression/{id} | Returns the progress of a release in the environment lifecycle.
*ProgressionApi* | [**getRunbookTaskRunDashboardItems**](Apis/ProgressionApi.md#getrunbooktaskrundashboarditems) | **GET** /progression/runbooks/taskRuns | Returns a list of runbook dashboard items, filtered by various criteria including projectIds, environmentIds, tenantIds, runbookIds, taskIds
*ProgressionApi* | [**getRunbookTaskRunDashboardItemsSpaces**](Apis/ProgressionApi.md#getrunbooktaskrundashboarditemsspaces) | **GET** /{baseSpaceId}/progression/runbooks/taskRuns | Returns a list of runbook dashboard items, filtered by various criteria including projectIds, environmentIds, tenantIds, runbookIds, taskIds
*ProgressionApi* | [**getRunbooksProgressionView**](Apis/ProgressionApi.md#getrunbooksprogressionview) | **GET** /progression/runbooks/{id} | Returns the progress of a runbook in the environment lifecycle
*ProgressionApi* | [**getRunbooksProgressionViewSpaces**](Apis/ProgressionApi.md#getrunbooksprogressionviewspaces) | **GET** /{baseSpaceId}/progression/runbooks/{id} | Returns the progress of a runbook in the environment lifecycle
*ProjectGroupsApi* | [**createProjectGroup**](Apis/ProjectGroupsApi.md#createprojectgroup) | **POST** /projectgroups | Create a ProjectGroupResource
*ProjectGroupsApi* | [**createProjectGroupSpaces**](Apis/ProjectGroupsApi.md#createprojectgroupspaces) | **POST** /{baseSpaceId}/projectgroups | Create a ProjectGroupResource
*ProjectGroupsApi* | [**deleteProjectGroup**](Apis/ProjectGroupsApi.md#deleteprojectgroup) | **DELETE** /projectgroups/{id} | Delete a ProjectGroupResource by ID
*ProjectGroupsApi* | [**deleteProjectGroupSpaces**](Apis/ProjectGroupsApi.md#deleteprojectgroupspaces) | **DELETE** /{baseSpaceId}/projectgroups/{id} | Delete a ProjectGroupResource by ID
*ProjectGroupsApi* | [**getProjectGroupById**](Apis/ProjectGroupsApi.md#getprojectgroupbyid) | **GET** /projectgroups/{id} | Get a Project Group by ID
*ProjectGroupsApi* | [**getProjectGroupByIdSpaces**](Apis/ProjectGroupsApi.md#getprojectgroupbyidspaces) | **GET** /{baseSpaceId}/projectgroups/{id} | Get a Project Group by ID
*ProjectGroupsApi* | [**indexProjectGroupProjects**](Apis/ProjectGroupsApi.md#indexprojectgroupprojects) | **GET** /projectgroups/{id}/projects | Lists all of the Projects that belong to the given Project Group
*ProjectGroupsApi* | [**indexProjectGroupProjectsSpaces**](Apis/ProjectGroupsApi.md#indexprojectgroupprojectsspaces) | **GET** /{baseSpaceId}/projectgroups/{id}/projects | Lists all of the Projects that belong to the given Project Group
*ProjectGroupsApi* | [**indexProjectGroups**](Apis/ProjectGroupsApi.md#indexprojectgroups) | **GET** /projectgroups | Get a list of ProjectGroupResources
*ProjectGroupsApi* | [**indexProjectGroupsSpaces**](Apis/ProjectGroupsApi.md#indexprojectgroupsspaces) | **GET** /{baseSpaceId}/projectgroups | Get a list of ProjectGroupResources
*ProjectGroupsApi* | [**listAllProjectGroups**](Apis/ProjectGroupsApi.md#listallprojectgroups) | **GET** /projectgroups/all | Get a list of ProjectGroupResources
*ProjectGroupsApi* | [**listAllProjectGroupsSpaces**](Apis/ProjectGroupsApi.md#listallprojectgroupsspaces) | **GET** /{baseSpaceId}/projectgroups/all | Get a list of ProjectGroupResources
*ProjectGroupsApi* | [**updateProjectGroup**](Apis/ProjectGroupsApi.md#updateprojectgroup) | **PUT** /projectgroups/{id} | Modify a ProjectGroupResource by ID
*ProjectGroupsApi* | [**updateProjectGroupSpaces**](Apis/ProjectGroupsApi.md#updateprojectgroupspaces) | **PUT** /{baseSpaceId}/projectgroups/{id} | Modify a ProjectGroupResource by ID
*ProjectTriggersApi* | [**createProjectTrigger**](Apis/ProjectTriggersApi.md#createprojecttrigger) | **POST** /projecttriggers | Create a ProjectTriggerResource
*ProjectTriggersApi* | [**createProjectTriggerSpaces**](Apis/ProjectTriggersApi.md#createprojecttriggerspaces) | **POST** /{baseSpaceId}/projecttriggers | Create a ProjectTriggerResource
*ProjectTriggersApi* | [**deleteProjectTrigger**](Apis/ProjectTriggersApi.md#deleteprojecttrigger) | **DELETE** /projecttriggers/{id} | Delete a ProjectTriggerResource by ID
*ProjectTriggersApi* | [**deleteProjectTriggerSpaces**](Apis/ProjectTriggersApi.md#deleteprojecttriggerspaces) | **DELETE** /{baseSpaceId}/projecttriggers/{id} | Delete a ProjectTriggerResource by ID
*ProjectTriggersApi* | [**getProjectTriggerById**](Apis/ProjectTriggersApi.md#getprojecttriggerbyid) | **GET** /projecttriggers/{id} | Get a Project Trigger by ID
*ProjectTriggersApi* | [**getProjectTriggerByIdSpaces**](Apis/ProjectTriggersApi.md#getprojecttriggerbyidspaces) | **GET** /{baseSpaceId}/projecttriggers/{id} | Get a Project Trigger by ID
*ProjectTriggersApi* | [**indexProjectProjectTriggers**](Apis/ProjectTriggersApi.md#indexprojectprojecttriggers) | **GET** /projects/{id}/triggers | Get a list of ProjectTriggerResources for the given ProjectResource
*ProjectTriggersApi* | [**indexProjectProjectTriggersSpaces**](Apis/ProjectTriggersApi.md#indexprojectprojecttriggersspaces) | **GET** /{baseSpaceId}/projects/{id}/triggers | Get a list of ProjectTriggerResources for the given ProjectResource
*ProjectTriggersApi* | [**indexProjectTriggers**](Apis/ProjectTriggersApi.md#indexprojecttriggers) | **GET** /projecttriggers | Get a list of ProjectTriggerResources
*ProjectTriggersApi* | [**indexProjectTriggersSpaces**](Apis/ProjectTriggersApi.md#indexprojecttriggersspaces) | **GET** /{baseSpaceId}/projecttriggers | Get a list of ProjectTriggerResources
*ProjectTriggersApi* | [**updateProjectTrigger**](Apis/ProjectTriggersApi.md#updateprojecttrigger) | **PUT** /projecttriggers/{id} | Modify a ProjectTriggerResource by ID
*ProjectTriggersApi* | [**updateProjectTriggerSpaces**](Apis/ProjectTriggersApi.md#updateprojecttriggerspaces) | **PUT** /{baseSpaceId}/projecttriggers/{id} | Modify a ProjectTriggerResource by ID
*ProjectsApi* | [**createConvertProjectToVersionControlled**](Apis/ProjectsApi.md#createconvertprojecttoversioncontrolled) | **POST** /projects/{projectId}/versioncontrol/convert | Converts an existing project to store its configuration in version control.
*ProjectsApi* | [**createConvertProjectToVersionControlledSpaces**](Apis/ProjectsApi.md#createconvertprojecttoversioncontrolledspaces) | **POST** /{baseSpaceId}/projects/{projectId}/versioncontrol/convert | Converts an existing project to store its configuration in version control.
*ProjectsApi* | [**createProject**](Apis/ProjectsApi.md#createproject) | **POST** /projects | Create a ProjectResource
*ProjectsApi* | [**createProjectLogo**](Apis/ProjectsApi.md#createprojectlogo) | **POST** /projects/{id}/logo | Updates the logo associated with the project.
*ProjectsApi* | [**createProjectLogoSpaces**](Apis/ProjectsApi.md#createprojectlogospaces) | **POST** /{baseSpaceId}/projects/{id}/logo | Updates the logo associated with the project.
*ProjectsApi* | [**createProjectSpaces**](Apis/ProjectsApi.md#createprojectspaces) | **POST** /{baseSpaceId}/projects | Create a ProjectResource
*ProjectsApi* | [**createVersionControlSettingsConnectivityCheck**](Apis/ProjectsApi.md#createversioncontrolsettingsconnectivitycheck) | **POST** /projects/{id}/versioncontrolsettings/test | Tests the VCS settings to make sure we can connect
*ProjectsApi* | [**createVersionControlSettingsConnectivityCheckSpaces**](Apis/ProjectsApi.md#createversioncontrolsettingsconnectivitycheckspaces) | **POST** /{baseSpaceId}/projects/{id}/versioncontrolsettings/test | Tests the VCS settings to make sure we can connect
*ProjectsApi* | [**deleteProject**](Apis/ProjectsApi.md#deleteproject) | **DELETE** /projects/{id} | Delete a ProjectResource by ID
*ProjectsApi* | [**deleteProjectSpaces**](Apis/ProjectsApi.md#deleteprojectspaces) | **DELETE** /{baseSpaceId}/projects/{id} | Delete a ProjectResource by ID
*ProjectsApi* | [**getProjectByIdOrSlug**](Apis/ProjectsApi.md#getprojectbyidorslug) | **GET** /projects/{id} | Gets a single project by ID or Slug.
*ProjectsApi* | [**getProjectByIdOrSlugSpaces**](Apis/ProjectsApi.md#getprojectbyidorslugspaces) | **GET** /{baseSpaceId}/projects/{id} | Gets a single project by ID or Slug.
*ProjectsApi* | [**getProjectLogo**](Apis/ProjectsApi.md#getprojectlogo) | **GET** /projects/{id}/logo | Gets the logo associated with the project.
*ProjectsApi* | [**getProjectLogoSpaces**](Apis/ProjectsApi.md#getprojectlogospaces) | **GET** /{baseSpaceId}/projects/{id}/logo | Gets the logo associated with the project.
*ProjectsApi* | [**getProjectSettingsMetadata**](Apis/ProjectsApi.md#getprojectsettingsmetadata) | **GET** /projects/{id}/metadata | Gets the custom settings metadata from the extensions.
*ProjectsApi* | [**getProjectSettingsMetadataSpaces**](Apis/ProjectsApi.md#getprojectsettingsmetadataspaces) | **GET** /{baseSpaceId}/projects/{id}/metadata | Gets the custom settings metadata from the extensions.
*ProjectsApi* | [**getProjectSummary**](Apis/ProjectsApi.md#getprojectsummary) | **GET** /projects/{id}/summary | Gets a summary of project-specific information.
*ProjectsApi* | [**getProjectSummarySpaces**](Apis/ProjectsApi.md#getprojectsummaryspaces) | **GET** /{baseSpaceId}/projects/{id}/summary | Gets a summary of project-specific information.
*ProjectsApi* | [**indexProjects**](Apis/ProjectsApi.md#indexprojects) | **GET** /projects | Lists all of the projects in the supplied Octopus Deploy Space, from all project groups. The results will be sorted alphabetically by name.
*ProjectsApi* | [**indexProjectsSpaces**](Apis/ProjectsApi.md#indexprojectsspaces) | **GET** /{baseSpaceId}/projects | Lists all of the projects in the supplied Octopus Deploy Space, from all project groups. The results will be sorted alphabetically by name.
*ProjectsApi* | [**listAllProjects**](Apis/ProjectsApi.md#listallprojects) | **GET** /projects/all | Lists the name and ID of all of the projects in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.
*ProjectsApi* | [**listAllProjectsSpaces**](Apis/ProjectsApi.md#listallprojectsspaces) | **GET** /{baseSpaceId}/projects/all | Lists the name and ID of all of the projects in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.
*ProjectsApi* | [**updateProject**](Apis/ProjectsApi.md#updateproject) | **PUT** /projects/{id} | Modify a ProjectResource by ID
*ProjectsApi* | [**updateProjectLogo**](Apis/ProjectsApi.md#updateprojectlogo) | **PUT** /projects/{id}/logo | Updates the logo associated with the project.
*ProjectsApi* | [**updateProjectLogoSpaces**](Apis/ProjectsApi.md#updateprojectlogospaces) | **PUT** /{baseSpaceId}/projects/{id}/logo | Updates the logo associated with the project.
*ProjectsApi* | [**updateProjectSpaces**](Apis/ProjectsApi.md#updateprojectspaces) | **PUT** /{baseSpaceId}/projects/{id} | Modify a ProjectResource by ID
*ProxiesApi* | [**createProxy**](Apis/ProxiesApi.md#createproxy) | **POST** /proxies | Create a ProxyResource
*ProxiesApi* | [**createProxySpaces**](Apis/ProxiesApi.md#createproxyspaces) | **POST** /{baseSpaceId}/proxies | Create a ProxyResource
*ProxiesApi* | [**deleteProxy**](Apis/ProxiesApi.md#deleteproxy) | **DELETE** /proxies/{id} | Delete a ProxyResource by ID
*ProxiesApi* | [**deleteProxySpaces**](Apis/ProxiesApi.md#deleteproxyspaces) | **DELETE** /{baseSpaceId}/proxies/{id} | Delete a ProxyResource by ID
*ProxiesApi* | [**getProxyById**](Apis/ProxiesApi.md#getproxybyid) | **GET** /proxies/{id} | Get a Proxy by ID
*ProxiesApi* | [**getProxyByIdSpaces**](Apis/ProxiesApi.md#getproxybyidspaces) | **GET** /{baseSpaceId}/proxies/{id} | Get a Proxy by ID
*ProxiesApi* | [**indexProxies**](Apis/ProxiesApi.md#indexproxies) | **GET** /proxies | Get a list of ProxyResources
*ProxiesApi* | [**indexProxiesSpaces**](Apis/ProxiesApi.md#indexproxiesspaces) | **GET** /{baseSpaceId}/proxies | Get a list of ProxyResources
*ProxiesApi* | [**listAllProxies**](Apis/ProxiesApi.md#listallproxies) | **GET** /proxies/all | Get a list of ProxyResources
*ProxiesApi* | [**listAllProxiesSpaces**](Apis/ProxiesApi.md#listallproxiesspaces) | **GET** /{baseSpaceId}/proxies/all | Get a list of ProxyResources
*ProxiesApi* | [**updateProxy**](Apis/ProxiesApi.md#updateproxy) | **PUT** /proxies/{id} | Modify a ProxyResource by ID
*ProxiesApi* | [**updateProxySpaces**](Apis/ProxiesApi.md#updateproxyspaces) | **PUT** /{baseSpaceId}/proxies/{id} | Modify a ProxyResource by ID
*ReleasesApi* | [**createDefectReported**](Apis/ReleasesApi.md#createdefectreported) | **POST** /releases/{id}/defects | Record defect in a release.
*ReleasesApi* | [**createDefectReportedSpaces**](Apis/ReleasesApi.md#createdefectreportedspaces) | **POST** /{baseSpaceId}/releases/{id}/defects | Record defect in a release.
*ReleasesApi* | [**createDefectResolved**](Apis/ReleasesApi.md#createdefectresolved) | **POST** /releases/{id}/defects/resolve | Update or resolve defect in a release.
*ReleasesApi* | [**createDefectResolvedSpaces**](Apis/ReleasesApi.md#createdefectresolvedspaces) | **POST** /{baseSpaceId}/releases/{id}/defects/resolve | Update or resolve defect in a release.
*ReleasesApi* | [**createDeploymentPreviewCollection**](Apis/ReleasesApi.md#createdeploymentpreviewcollection) | **POST** /releases/{id}/deployments/previews | Returns an array of documents that describes what steps will/won't be run during deployments to a given set of environments and tenants.
*ReleasesApi* | [**createDeploymentPreviewCollectionSpaces**](Apis/ReleasesApi.md#createdeploymentpreviewcollectionspaces) | **POST** /{baseSpaceId}/releases/{id}/deployments/previews | Returns an array of documents that describes what steps will/won't be run during deployments to a given set of environments and tenants.
*ReleasesApi* | [**createRelease**](Apis/ReleasesApi.md#createrelease) | **POST** /releases | Create a ReleaseResource
*ReleasesApi* | [**createReleaseSnapshotVariables**](Apis/ReleasesApi.md#createreleasesnapshotvariables) | **POST** /releases/{id}/snapshot-variables | Refresh the variable snapshots associated with the release. The project's deployment process must not have changed since the release was created.
*ReleasesApi* | [**createReleaseSnapshotVariablesSpaces**](Apis/ReleasesApi.md#createreleasesnapshotvariablesspaces) | **POST** /{baseSpaceId}/releases/{id}/snapshot-variables | Refresh the variable snapshots associated with the release. The project's deployment process must not have changed since the release was created.
*ReleasesApi* | [**createReleaseSpaces**](Apis/ReleasesApi.md#createreleasespaces) | **POST** /{baseSpaceId}/releases | Create a ReleaseResource
*ReleasesApi* | [**deleteRelease**](Apis/ReleasesApi.md#deleterelease) | **DELETE** /releases/{id} | Delete a ReleaseResource by ID
*ReleasesApi* | [**deleteReleaseSpaces**](Apis/ReleasesApi.md#deletereleasespaces) | **DELETE** /{baseSpaceId}/releases/{id} | Delete a ReleaseResource by ID
*ReleasesApi* | [**getDeploymentPreview**](Apis/ReleasesApi.md#getdeploymentpreview) | **GET** /releases/{id}/deployments/preview/{environment} | Gets a document that describes what steps will/won't be run during a deployment to a given environment (and tenant if supplied).
*ReleasesApi* | [**getDeploymentPreview1**](Apis/ReleasesApi.md#getdeploymentpreview1) | **GET** /releases/{id}/deployments/preview/{environment}/{tenant} | Gets a document that describes what steps will/won't be run during a deployment to a given environment (and tenant if supplied).
*ReleasesApi* | [**getDeploymentPreviewSpaces**](Apis/ReleasesApi.md#getdeploymentpreviewspaces) | **GET** /{baseSpaceId}/releases/{id}/deployments/preview/{environment} | Gets a document that describes what steps will/won't be run during a deployment to a given environment (and tenant if supplied).
*ReleasesApi* | [**getDeploymentPreviewSpaces1**](Apis/ReleasesApi.md#getdeploymentpreviewspaces1) | **GET** /{baseSpaceId}/releases/{id}/deployments/preview/{environment}/{tenant} | Gets a document that describes what steps will/won't be run during a deployment to a given environment (and tenant if supplied).
*ReleasesApi* | [**getDeploymentTemplate**](Apis/ReleasesApi.md#getdeploymenttemplate) | **GET** /releases/{id}/deployments/template | Gets all of the information necessary for creating or editing a deployment for this release.
*ReleasesApi* | [**getDeploymentTemplateSpaces**](Apis/ReleasesApi.md#getdeploymenttemplatespaces) | **GET** /{baseSpaceId}/releases/{id}/deployments/template | Gets all of the information necessary for creating or editing a deployment for this release.
*ReleasesApi* | [**getListDefects**](Apis/ReleasesApi.md#getlistdefects) | **GET** /releases/{id}/defects | Gets all defects for a release.
*ReleasesApi* | [**getListDefectsSpaces**](Apis/ReleasesApi.md#getlistdefectsspaces) | **GET** /{baseSpaceId}/releases/{id}/defects | Gets all defects for a release.
*ReleasesApi* | [**getReleaseById**](Apis/ReleasesApi.md#getreleasebyid) | **GET** /releases/{id} | Get a Release by ID
*ReleasesApi* | [**getReleaseByIdSpaces**](Apis/ReleasesApi.md#getreleasebyidspaces) | **GET** /{baseSpaceId}/releases/{id} | Get a Release by ID
*ReleasesApi* | [**getReleaseByProjectAndVersion**](Apis/ReleasesApi.md#getreleasebyprojectandversion) | **GET** /projects/{id}/releases/{version} | Gets a single release by project ID and version number.
*ReleasesApi* | [**getReleaseByProjectAndVersionSpaces**](Apis/ReleasesApi.md#getreleasebyprojectandversionspaces) | **GET** /{baseSpaceId}/projects/{id}/releases/{version} | Gets a single release by project ID and version number.
*ReleasesApi* | [**getReleaseLifecycleProgression**](Apis/ReleasesApi.md#getreleaselifecycleprogression) | **GET** /releases/{id}/progression | Gets all of the information necessary for creating or editing a deployment for this release.
*ReleasesApi* | [**getReleaseLifecycleProgressionSpaces**](Apis/ReleasesApi.md#getreleaselifecycleprogressionspaces) | **GET** /{baseSpaceId}/releases/{id}/progression | Gets all of the information necessary for creating or editing a deployment for this release.
*ReleasesApi* | [**indexProjectReleases**](Apis/ReleasesApi.md#indexprojectreleases) | **GET** /projects/{id}/releases | Get a list of ReleaseResources for the given ProjectResource
*ReleasesApi* | [**indexProjectReleasesSpaces**](Apis/ReleasesApi.md#indexprojectreleasesspaces) | **GET** /{baseSpaceId}/projects/{id}/releases | Get a list of ReleaseResources for the given ProjectResource
*ReleasesApi* | [**indexReleaseDeployments**](Apis/ReleasesApi.md#indexreleasedeployments) | **GET** /releases/{id}/deployments | Lists all of the Deployments that belong to the given Release
*ReleasesApi* | [**indexReleaseDeploymentsSpaces**](Apis/ReleasesApi.md#indexreleasedeploymentsspaces) | **GET** /{baseSpaceId}/releases/{id}/deployments | Lists all of the Deployments that belong to the given Release
*ReleasesApi* | [**indexReleases**](Apis/ReleasesApi.md#indexreleases) | **GET** /releases | Get a list of Releases
*ReleasesApi* | [**indexReleasesSpaces**](Apis/ReleasesApi.md#indexreleasesspaces) | **GET** /{baseSpaceId}/releases | Get a list of Releases
*ReleasesApi* | [**updateRelease**](Apis/ReleasesApi.md#updaterelease) | **PUT** /releases/{id} | Modify a ReleaseResource by ID
*ReleasesApi* | [**updateReleaseSpaces**](Apis/ReleasesApi.md#updatereleasespaces) | **PUT** /{baseSpaceId}/releases/{id} | Modify a ReleaseResource by ID
*ReportingApi* | [**getDeploymentsByProjectReport**](Apis/ReportingApi.md#getdeploymentsbyprojectreport) | **GET** /reporting/deployments-counted-by-week | Provides a report summarizing the weekly deployments per project over the last 6 months
*ReportingApi* | [**getDeploymentsByProjectReportSpaces**](Apis/ReportingApi.md#getdeploymentsbyprojectreportspaces) | **GET** /{baseSpaceId}/reporting/deployments-counted-by-week | Provides a report summarizing the weekly deployments per project over the last 6 months
*ReportingApi* | [**getDeploymentsXml**](Apis/ReportingApi.md#getdeploymentsxml) | **GET** /reporting/deployments/xml | Provides an XML report that contains all of the information about deployments
*ReportingApi* | [**getDeploymentsXmlSpaces**](Apis/ReportingApi.md#getdeploymentsxmlspaces) | **GET** /{baseSpaceId}/reporting/deployments/xml | Provides an XML report that contains all of the information about deployments
*RunbookProcessesApi* | [**getRunbookProcessById**](Apis/RunbookProcessesApi.md#getrunbookprocessbyid) | **GET** /runbookProcesses/{id} | Get a Runbook Process by ID
*RunbookProcessesApi* | [**getRunbookProcessByIdSpaces**](Apis/RunbookProcessesApi.md#getrunbookprocessbyidspaces) | **GET** /{baseSpaceId}/runbookProcesses/{id} | Get a Runbook Process by ID
*RunbookProcessesApi* | [**getRunbookSnapshotTemplateForRunbookStep**](Apis/RunbookProcessesApi.md#getrunbooksnapshottemplateforrunbookstep) | **GET** /runbookProcesses/{id}/runbookSnapshotTemplate | Gets all of the information necessary for creating or editing a Runbook Snapshot using this Runbook Process.
*RunbookProcessesApi* | [**getRunbookSnapshotTemplateForRunbookStepSpaces**](Apis/RunbookProcessesApi.md#getrunbooksnapshottemplateforrunbookstepspaces) | **GET** /{baseSpaceId}/runbookProcesses/{id}/runbookSnapshotTemplate | Gets all of the information necessary for creating or editing a Runbook Snapshot using this Runbook Process.
*RunbookProcessesApi* | [**indexRunbookProcesses**](Apis/RunbookProcessesApi.md#indexrunbookprocesses) | **GET** /runbookProcesses | Get a list of Runbook Processes
*RunbookProcessesApi* | [**indexRunbookProcessesSpaces**](Apis/RunbookProcessesApi.md#indexrunbookprocessesspaces) | **GET** /{baseSpaceId}/runbookProcesses | Get a list of Runbook Processes
*RunbookProcessesApi* | [**indexRunbookSnapshotRunbookRuns**](Apis/RunbookProcessesApi.md#indexrunbooksnapshotrunbookruns) | **GET** /runbookSnapshots/{id}/runbookRuns | Lists all of the Runbook Runs that belong to the given Runbook Snapshot
*RunbookProcessesApi* | [**indexRunbookSnapshotRunbookRunsSpaces**](Apis/RunbookProcessesApi.md#indexrunbooksnapshotrunbookrunsspaces) | **GET** /{baseSpaceId}/runbookSnapshots/{id}/runbookRuns | Lists all of the Runbook Runs that belong to the given Runbook Snapshot
*RunbookProcessesApi* | [**updateRunbookProcess**](Apis/RunbookProcessesApi.md#updaterunbookprocess) | **PUT** /runbookProcesses/{id} | Modifies a Runbook Process. Only allowed for Runbook Processes owned by a project.
*RunbookProcessesApi* | [**updateRunbookProcessSpaces**](Apis/RunbookProcessesApi.md#updaterunbookprocessspaces) | **PUT** /{baseSpaceId}/runbookProcesses/{id} | Modifies a Runbook Process. Only allowed for Runbook Processes owned by a project.
*RunbookRunsApi* | [**createRunbookRunCreate**](Apis/RunbookRunsApi.md#createrunbookruncreate) | **POST** /runbookRuns | Creates a new runbookRun.
*RunbookRunsApi* | [**createRunbookRunCreateSpaces**](Apis/RunbookRunsApi.md#createrunbookruncreatespaces) | **POST** /{baseSpaceId}/runbookRuns | Creates a new runbookRun.
*RunbookRunsApi* | [**deleteRunbookRun**](Apis/RunbookRunsApi.md#deleterunbookrun) | **DELETE** /runbookRuns/{id} | Delete a RunbookRunResource by ID
*RunbookRunsApi* | [**deleteRunbookRunSpaces**](Apis/RunbookRunsApi.md#deleterunbookrunspaces) | **DELETE** /{baseSpaceId}/runbookRuns/{id} | Delete a RunbookRunResource by ID
*RunbookRunsApi* | [**getRunbookRunById**](Apis/RunbookRunsApi.md#getrunbookrunbyid) | **GET** /runbookRuns/{id} | Get a Runbook Run by ID
*RunbookRunsApi* | [**getRunbookRunByIdSpaces**](Apis/RunbookRunsApi.md#getrunbookrunbyidspaces) | **GET** /{baseSpaceId}/runbookRuns/{id} | Get a Runbook Run by ID
*RunbookRunsApi* | [**indexRunbookRuns**](Apis/RunbookRunsApi.md#indexrunbookruns) | **GET** /runbookRuns | Get a list of RunbookRunResources
*RunbookRunsApi* | [**indexRunbookRunsSpaces**](Apis/RunbookRunsApi.md#indexrunbookrunsspaces) | **GET** /{baseSpaceId}/runbookRuns | Get a list of RunbookRunResources
*RunbookSnapshotsApi* | [**createRunbookSnapshot**](Apis/RunbookSnapshotsApi.md#createrunbooksnapshot) | **POST** /runbookSnapshots | Create a RunbookSnapshotResource
*RunbookSnapshotsApi* | [**createRunbookSnapshotSnapshotVariables**](Apis/RunbookSnapshotsApi.md#createrunbooksnapshotsnapshotvariables) | **POST** /runbookSnapshots/{id}/snapshot-variables | Refresh the variable snapshots associated with the runbook snapshot. The runbook's process must not have changed since the snapshot was created.
*RunbookSnapshotsApi* | [**createRunbookSnapshotSnapshotVariablesSpaces**](Apis/RunbookSnapshotsApi.md#createrunbooksnapshotsnapshotvariablesspaces) | **POST** /{baseSpaceId}/runbookSnapshots/{id}/snapshot-variables | Refresh the variable snapshots associated with the runbook snapshot. The runbook's process must not have changed since the snapshot was created.
*RunbookSnapshotsApi* | [**createRunbookSnapshotSpaces**](Apis/RunbookSnapshotsApi.md#createrunbooksnapshotspaces) | **POST** /{baseSpaceId}/runbookSnapshots | Create a RunbookSnapshotResource
*RunbookSnapshotsApi* | [**deleteRunbookSnapshot**](Apis/RunbookSnapshotsApi.md#deleterunbooksnapshot) | **DELETE** /runbookSnapshots/{id} | Delete a RunbookSnapshotResource by ID
*RunbookSnapshotsApi* | [**deleteRunbookSnapshotSpaces**](Apis/RunbookSnapshotsApi.md#deleterunbooksnapshotspaces) | **DELETE** /{baseSpaceId}/runbookSnapshots/{id} | Delete a RunbookSnapshotResource by ID
*RunbookSnapshotsApi* | [**getRunbookRunPreviewForRunbookSnapshot**](Apis/RunbookSnapshotsApi.md#getrunbookrunpreviewforrunbooksnapshot) | **GET** /runbookSnapshots/{id}/runbookRuns/preview/{environment} | Gets a document that describes what steps will/won't be run during a run to a given environment (and tenant if supplied).
*RunbookSnapshotsApi* | [**getRunbookRunPreviewForRunbookSnapshot1**](Apis/RunbookSnapshotsApi.md#getrunbookrunpreviewforrunbooksnapshot1) | **GET** /runbookSnapshots/{id}/runbookRuns/preview/{environment}/{tenant} | Gets a document that describes what steps will/won't be run during a run to a given environment (and tenant if supplied).
*RunbookSnapshotsApi* | [**getRunbookRunPreviewForRunbookSnapshotSpaces**](Apis/RunbookSnapshotsApi.md#getrunbookrunpreviewforrunbooksnapshotspaces) | **GET** /{baseSpaceId}/runbookSnapshots/{id}/runbookRuns/preview/{environment} | Gets a document that describes what steps will/won't be run during a run to a given environment (and tenant if supplied).
*RunbookSnapshotsApi* | [**getRunbookRunPreviewForRunbookSnapshotSpaces1**](Apis/RunbookSnapshotsApi.md#getrunbookrunpreviewforrunbooksnapshotspaces1) | **GET** /{baseSpaceId}/runbookSnapshots/{id}/runbookRuns/preview/{environment}/{tenant} | Gets a document that describes what steps will/won't be run during a run to a given environment (and tenant if supplied).
*RunbookSnapshotsApi* | [**getRunbookRunTemplateForRunbookSnapshot**](Apis/RunbookSnapshotsApi.md#getrunbookruntemplateforrunbooksnapshot) | **GET** /runbookSnapshots/{id}/runbookRuns/template | Gets all of the information necessary for creating or editing a run for this snapshot.
*RunbookSnapshotsApi* | [**getRunbookRunTemplateForRunbookSnapshotSpaces**](Apis/RunbookSnapshotsApi.md#getrunbookruntemplateforrunbooksnapshotspaces) | **GET** /{baseSpaceId}/runbookSnapshots/{id}/runbookRuns/template | Gets all of the information necessary for creating or editing a run for this snapshot.
*RunbookSnapshotsApi* | [**getRunbookSnapshotById**](Apis/RunbookSnapshotsApi.md#getrunbooksnapshotbyid) | **GET** /runbookSnapshots/{id} | Get a Runbook Snapshot by ID
*RunbookSnapshotsApi* | [**getRunbookSnapshotByIdSpaces**](Apis/RunbookSnapshotsApi.md#getrunbooksnapshotbyidspaces) | **GET** /{baseSpaceId}/runbookSnapshots/{id} | Get a Runbook Snapshot by ID
*RunbookSnapshotsApi* | [**getRunbookSnapshotByProjectAndName**](Apis/RunbookSnapshotsApi.md#getrunbooksnapshotbyprojectandname) | **GET** /projects/{id}/runbookSnapshots/{name} | Gets a single runbookSnapshot by project ID and name.
*RunbookSnapshotsApi* | [**getRunbookSnapshotByProjectAndNameSpaces**](Apis/RunbookSnapshotsApi.md#getrunbooksnapshotbyprojectandnamespaces) | **GET** /{baseSpaceId}/projects/{id}/runbookSnapshots/{name} | Gets a single runbookSnapshot by project ID and name.
*RunbookSnapshotsApi* | [**indexProjectRunbookSnapshots**](Apis/RunbookSnapshotsApi.md#indexprojectrunbooksnapshots) | **GET** /projects/{id}/runbookSnapshots | Get a list of RunbookSnapshotResources for the given ProjectResource
*RunbookSnapshotsApi* | [**indexProjectRunbookSnapshotsSpaces**](Apis/RunbookSnapshotsApi.md#indexprojectrunbooksnapshotsspaces) | **GET** /{baseSpaceId}/projects/{id}/runbookSnapshots | Get a list of RunbookSnapshotResources for the given ProjectResource
*RunbookSnapshotsApi* | [**indexRunbookRunbookSnapshots**](Apis/RunbookSnapshotsApi.md#indexrunbookrunbooksnapshots) | **GET** /runbooks/{id}/runbookSnapshots | Get a list of RunbookSnapshotResources for the given RunbookResource
*RunbookSnapshotsApi* | [**indexRunbookRunbookSnapshotsSpaces**](Apis/RunbookSnapshotsApi.md#indexrunbookrunbooksnapshotsspaces) | **GET** /{baseSpaceId}/runbooks/{id}/runbookSnapshots | Get a list of RunbookSnapshotResources for the given RunbookResource
*RunbookSnapshotsApi* | [**indexRunbookSnapshots**](Apis/RunbookSnapshotsApi.md#indexrunbooksnapshots) | **GET** /runbookSnapshots | Get a list of Runbook Snapshots
*RunbookSnapshotsApi* | [**indexRunbookSnapshotsSpaces**](Apis/RunbookSnapshotsApi.md#indexrunbooksnapshotsspaces) | **GET** /{baseSpaceId}/runbookSnapshots | Get a list of Runbook Snapshots
*RunbookSnapshotsApi* | [**updateRunbookSnapshot**](Apis/RunbookSnapshotsApi.md#updaterunbooksnapshot) | **PUT** /runbookSnapshots/{id} | Modify a RunbookSnapshotResource by ID
*RunbookSnapshotsApi* | [**updateRunbookSnapshotSpaces**](Apis/RunbookSnapshotsApi.md#updaterunbooksnapshotspaces) | **PUT** /{baseSpaceId}/runbookSnapshots/{id} | Modify a RunbookSnapshotResource by ID
*RunbooksApi* | [**createRunbook**](Apis/RunbooksApi.md#createrunbook) | **POST** /runbooks | Create a RunbookResource
*RunbooksApi* | [**createRunbookRunForPublishedRunbookCreate**](Apis/RunbooksApi.md#createrunbookrunforpublishedrunbookcreate) | **POST** /runbooks/{id}/run | Runs the published version of this Runbook.
*RunbooksApi* | [**createRunbookRunForPublishedRunbookCreateSpaces**](Apis/RunbooksApi.md#createrunbookrunforpublishedrunbookcreatespaces) | **POST** /{baseSpaceId}/runbooks/{id}/run | Runs the published version of this Runbook.
*RunbooksApi* | [**createRunbookSpaces**](Apis/RunbooksApi.md#createrunbookspaces) | **POST** /{baseSpaceId}/runbooks | Create a RunbookResource
*RunbooksApi* | [**deleteRunbook**](Apis/RunbooksApi.md#deleterunbook) | **DELETE** /runbooks/{id} | Delete a RunbookResource by ID
*RunbooksApi* | [**deleteRunbookSpaces**](Apis/RunbooksApi.md#deleterunbookspaces) | **DELETE** /{baseSpaceId}/runbooks/{id} | Delete a RunbookResource by ID
*RunbooksApi* | [**getRunbookById**](Apis/RunbooksApi.md#getrunbookbyid) | **GET** /runbooks/{id} | Get a Runbook by ID
*RunbooksApi* | [**getRunbookByIdSpaces**](Apis/RunbooksApi.md#getrunbookbyidspaces) | **GET** /{baseSpaceId}/runbooks/{id} | Get a Runbook by ID
*RunbooksApi* | [**getRunbookEnvironments**](Apis/RunbooksApi.md#getrunbookenvironments) | **GET** /runbooks/{id}/environments | Lists all environments a Runbook can be run within based on its EnvironmentScope.
*RunbooksApi* | [**getRunbookEnvironmentsSpaces**](Apis/RunbooksApi.md#getrunbookenvironmentsspaces) | **GET** /{baseSpaceId}/runbooks/{id}/environments | Lists all environments a Runbook can be run within based on its EnvironmentScope.
*RunbooksApi* | [**getRunbookRunPreviewForRunbook**](Apis/RunbooksApi.md#getrunbookrunpreviewforrunbook) | **GET** /runbooks/{id}/runbookRuns/preview/{environment} | Gets a document that describes what steps will/won't be run during a Runbook Run on a given environment (and tenant if supplied) for a Runbook.
*RunbooksApi* | [**getRunbookRunPreviewForRunbook1**](Apis/RunbooksApi.md#getrunbookrunpreviewforrunbook1) | **GET** /runbooks/{id}/runbookRuns/preview/{environment}/{tenant} | Gets a document that describes what steps will/won't be run during a Runbook Run on a given environment (and tenant if supplied) for a Runbook.
*RunbooksApi* | [**getRunbookRunPreviewForRunbookSpaces**](Apis/RunbooksApi.md#getrunbookrunpreviewforrunbookspaces) | **GET** /{baseSpaceId}/runbooks/{id}/runbookRuns/preview/{environment} | Gets a document that describes what steps will/won't be run during a Runbook Run on a given environment (and tenant if supplied) for a Runbook.
*RunbooksApi* | [**getRunbookRunPreviewForRunbookSpaces1**](Apis/RunbooksApi.md#getrunbookrunpreviewforrunbookspaces1) | **GET** /{baseSpaceId}/runbooks/{id}/runbookRuns/preview/{environment}/{tenant} | Gets a document that describes what steps will/won't be run during a Runbook Run on a given environment (and tenant if supplied) for a Runbook.
*RunbooksApi* | [**getRunbookRunTemplateForRunbook**](Apis/RunbooksApi.md#getrunbookruntemplateforrunbook) | **GET** /runbooks/{id}/runbookRunTemplate | Gets all of the information necessary for creating or editing a Runbook Run for this Runbook (when you do not have a snapshot).
*RunbooksApi* | [**getRunbookRunTemplateForRunbookSpaces**](Apis/RunbooksApi.md#getrunbookruntemplateforrunbookspaces) | **GET** /{baseSpaceId}/runbooks/{id}/runbookRunTemplate | Gets all of the information necessary for creating or editing a Runbook Run for this Runbook (when you do not have a snapshot).
*RunbooksApi* | [**getRunbookSnapshotTemplateForRunbook**](Apis/RunbooksApi.md#getrunbooksnapshottemplateforrunbook) | **GET** /runbooks/{id}/runbookSnapshotTemplate | Gets all of the information necessary for creating or editing a release using this Runbook.
*RunbooksApi* | [**getRunbookSnapshotTemplateForRunbookSpaces**](Apis/RunbooksApi.md#getrunbooksnapshottemplateforrunbookspaces) | **GET** /{baseSpaceId}/runbooks/{id}/runbookSnapshotTemplate | Gets all of the information necessary for creating or editing a release using this Runbook.
*RunbooksApi* | [**indexProjectRunbooks**](Apis/RunbooksApi.md#indexprojectrunbooks) | **GET** /projects/{id}/runbooks | Get a list of RunbookResources for the given ProjectResource
*RunbooksApi* | [**indexProjectRunbooksSpaces**](Apis/RunbooksApi.md#indexprojectrunbooksspaces) | **GET** /{baseSpaceId}/projects/{id}/runbooks | Get a list of RunbookResources for the given ProjectResource
*RunbooksApi* | [**indexRunbooks**](Apis/RunbooksApi.md#indexrunbooks) | **GET** /runbooks | Get a list of RunbookResources
*RunbooksApi* | [**indexRunbooksSpaces**](Apis/RunbooksApi.md#indexrunbooksspaces) | **GET** /{baseSpaceId}/runbooks | Get a list of RunbookResources
*RunbooksApi* | [**listAllRunbooks**](Apis/RunbooksApi.md#listallrunbooks) | **GET** /runbooks/all | Get a list of RunbookResources
*RunbooksApi* | [**listAllRunbooksSpaces**](Apis/RunbooksApi.md#listallrunbooksspaces) | **GET** /{baseSpaceId}/runbooks/all | Get a list of RunbookResources
*RunbooksApi* | [**updateRunbook**](Apis/RunbooksApi.md#updaterunbook) | **PUT** /runbooks/{id} | Modify a RunbookResource by ID
*RunbooksApi* | [**updateRunbookSpaces**](Apis/RunbooksApi.md#updaterunbookspaces) | **PUT** /{baseSpaceId}/runbooks/{id} | Modify a RunbookResource by ID
*SchedulerApi* | [**getScheduledTaskDetails**](Apis/SchedulerApi.md#getscheduledtaskdetails) | **GET** /scheduler/{name}/logs | Get the details of a scheduled task.
*SchedulerApi* | [**getScheduledTaskRawDetails**](Apis/SchedulerApi.md#getscheduledtaskrawdetails) | **GET** /scheduler/{name}/logs/raw | Get the details of a scheduled task as raw text.
*SchedulerApi* | [**getScheduler**](Apis/SchedulerApi.md#getscheduler) | **GET** /scheduler | Returns status of Octopus scheduled tasks.
*SchedulerApi* | [**getSchedulerStart**](Apis/SchedulerApi.md#getschedulerstart) | **GET** /scheduler/start | Returns HTTP OK (200) when the Octopus Server scheduler has been started.
*SchedulerApi* | [**getSchedulerStop**](Apis/SchedulerApi.md#getschedulerstop) | **GET** /scheduler/stop | Returns HTTP OK (200) when the Octopus Server scheduler has been stopped.
*SchedulerApi* | [**getSchedulerTrigger**](Apis/SchedulerApi.md#getschedulertrigger) | **GET** /scheduler/trigger | Returns HTTP OK (200) when the Octopus Server scheduler has been triggered.
*ScopedUserRoleApi* | [**createScopedUserRole**](Apis/ScopedUserRoleApi.md#createscopeduserrole) | **POST** /scopeduserroles | Create a ScopedUserRoleResource
*ScopedUserRoleApi* | [**createScopedUserRoleSpaces**](Apis/ScopedUserRoleApi.md#createscopeduserrolespaces) | **POST** /{baseSpaceId}/scopeduserroles | Create a ScopedUserRoleResource
*ScopedUserRoleApi* | [**deleteScopedUserRole**](Apis/ScopedUserRoleApi.md#deletescopeduserrole) | **DELETE** /scopeduserroles/{id} | Delete a ScopedUserRoleResource by ID
*ScopedUserRoleApi* | [**deleteScopedUserRoleSpaces**](Apis/ScopedUserRoleApi.md#deletescopeduserrolespaces) | **DELETE** /{baseSpaceId}/scopeduserroles/{id} | Delete a ScopedUserRoleResource by ID
*ScopedUserRoleApi* | [**getListScopedUserRole**](Apis/ScopedUserRoleApi.md#getlistscopeduserrole) | **GET** /scopeduserroles | Lists the name and ID of all of the scoped user roles in the supplied Octopus Deploy Space. The results will be sorted by name.
*ScopedUserRoleApi* | [**getListScopedUserRoleSpaces**](Apis/ScopedUserRoleApi.md#getlistscopeduserrolespaces) | **GET** /{baseSpaceId}/scopeduserroles | Lists the name and ID of all of the scoped user roles in the supplied Octopus Deploy Space. The results will be sorted by name.
*ScopedUserRoleApi* | [**updateScopedUserRole**](Apis/ScopedUserRoleApi.md#updatescopeduserrole) | **PUT** /scopeduserroles/{id} | Modify a ScopedUserRoleResource by ID
*ScopedUserRoleApi* | [**updateScopedUserRoleSpaces**](Apis/ScopedUserRoleApi.md#updatescopeduserrolespaces) | **PUT** /{baseSpaceId}/scopeduserroles/{id} | Modify a ScopedUserRoleResource by ID
*ScopedUserRolesApi* | [**getScopedUserRoleById**](Apis/ScopedUserRolesApi.md#getscopeduserrolebyid) | **GET** /scopeduserroles/{id} | Get a Scoped User Role by ID
*ScopedUserRolesApi* | [**getScopedUserRoleByIdSpaces**](Apis/ScopedUserRolesApi.md#getscopeduserrolebyidspaces) | **GET** /{baseSpaceId}/scopeduserroles/{id} | Get a Scoped User Role by ID
*ServerConfigurationApi* | [**getServerConfiguration**](Apis/ServerConfigurationApi.md#getserverconfiguration) | **GET** /serverconfiguration | Gets information about the editable server configuration in use by the Octopus Server
*ServerConfigurationApi* | [**getServerConfigurationSettingsList**](Apis/ServerConfigurationApi.md#getserverconfigurationsettingslist) | **GET** /serverconfiguration/settings | Gets information about the server configuration in use by the Octopus Server
*ServerConfigurationApi* | [**updateServerConfiguration**](Apis/ServerConfigurationApi.md#updateserverconfiguration) | **PUT** /serverconfiguration | Updates the server configuration used by the Octopus Server
*ServerStatusApi* | [**createSystemGarbageCollect**](Apis/ServerStatusApi.md#createsystemgarbagecollect) | **POST** /serverstatus/gc-collect | Forces a GC collect.
*ServerStatusApi* | [**getExtensionStats**](Apis/ServerStatusApi.md#getextensionstats) | **GET** /serverstatus/extensions | Provides statistics for the loaded server extensions.
*ServerStatusApi* | [**getListServerTimezones**](Apis/ServerStatusApi.md#getlistservertimezones) | **GET** /serverstatus/timezones | Lists timezones supported by the server.
*ServerStatusApi* | [**getRecentLogs**](Apis/ServerStatusApi.md#getrecentlogs) | **GET** /serverstatus/logs | Retrieves the most recent high-priority log messages from this execution of the Octopus Server process.
*ServerStatusApi* | [**getServerStatus**](Apis/ServerStatusApi.md#getserverstatus) | **GET** /serverstatus | Shows information about the status of the Octopus Server.
*ServerStatusApi* | [**getServerStatusHealth**](Apis/ServerStatusApi.md#getserverstatushealth) | **GET** /serverstatus/health | Provides a super simple interface perfect for checking the general health of your entire Octopus Server cluster.
*ServerStatusApi* | [**getSystemInfo**](Apis/ServerStatusApi.md#getsysteminfo) | **GET** /serverstatus/system-info | Provides information about the Octopus Server process and the machine on which it is running.
*ServerStatusApi* | [**getSystemReport**](Apis/ServerStatusApi.md#getsystemreport) | **GET** /serverstatus/system-report | Creates a .zip archive containing an aggregate of the other system information APIs.
*SmtpConfigurationApi* | [**getSmtpConfiguration**](Apis/SmtpConfigurationApi.md#getsmtpconfiguration) | **GET** /smtpconfiguration | Gets information about the SMTP (email) settings in use by the Octopus Server.
*SmtpConfigurationApi* | [**getSmtpIsConfigured**](Apis/SmtpConfigurationApi.md#getsmtpisconfigured) | **GET** /smtpconfiguration/isconfigured | A low privilege check to determine if SMTP is configured
*SmtpConfigurationApi* | [**updateSmtpConfiguration**](Apis/SmtpConfigurationApi.md#updatesmtpconfiguration) | **PUT** /smtpconfiguration | Updates the SMTP settings used by the Octopus Server.
*SpaceHomeApi* | [**getSpaceHome**](Apis/SpaceHomeApi.md#getspacehome) | **GET** /{spaceId} | Returns a document describing the specified Space and links to other parts of the API that apply to the Space.
*SpacesApi* | [**createSpace**](Apis/SpacesApi.md#createspace) | **POST** /spaces | Creates a new Space.
*SpacesApi* | [**createSpaceLogo**](Apis/SpacesApi.md#createspacelogo) | **POST** /spaces/{id}/logo | Updates the logo associated with the space.
*SpacesApi* | [**deleteSpace**](Apis/SpacesApi.md#deletespace) | **DELETE** /spaces/{id} | Deletes an existing space.
*SpacesApi* | [**getSpaceById**](Apis/SpacesApi.md#getspacebyid) | **GET** /spaces/{id} | Get a Space by ID
*SpacesApi* | [**getSpaceLogo**](Apis/SpacesApi.md#getspacelogo) | **GET** /spaces/{id}/logo | Gets the logo associated with the space.
*SpacesApi* | [**indexSpaces**](Apis/SpacesApi.md#indexspaces) | **GET** /spaces | Get a list of SpaceResources
*SpacesApi* | [**listAllSpaces**](Apis/SpacesApi.md#listallspaces) | **GET** /spaces/all | Get a list of SpaceResources
*SpacesApi* | [**searchSpace**](Apis/SpacesApi.md#searchspace) | **GET** /spaces/{id}/search | Searches in the supplied Octopus Deploy Space using the given keyword.
*SpacesApi* | [**searchSpaceSpaces**](Apis/SpacesApi.md#searchspacespaces) | **GET** /{baseSpaceId}/spaces/{id}/search | Searches in the supplied Octopus Deploy Space using the given keyword.
*SpacesApi* | [**updateModifySpace**](Apis/SpacesApi.md#updatemodifyspace) | **PUT** /spaces/{id} | Modifies an existing space.
*SpacesApi* | [**updateSpaceLogo**](Apis/SpacesApi.md#updatespacelogo) | **PUT** /spaces/{id}/logo | Updates the logo associated with the space.
*SubscriptionApi* | [**createSubscription**](Apis/SubscriptionApi.md#createsubscription) | **POST** /subscriptions | Create a SubscriptionResource
*SubscriptionApi* | [**createSubscriptionSpaces**](Apis/SubscriptionApi.md#createsubscriptionspaces) | **POST** /{baseSpaceId}/subscriptions | Create a SubscriptionResource
*SubscriptionApi* | [**deleteSubscription**](Apis/SubscriptionApi.md#deletesubscription) | **DELETE** /subscriptions/{id} | Delete a SubscriptionResource by ID
*SubscriptionApi* | [**deleteSubscriptionSpaces**](Apis/SubscriptionApi.md#deletesubscriptionspaces) | **DELETE** /{baseSpaceId}/subscriptions/{id} | Delete a SubscriptionResource by ID
*SubscriptionApi* | [**indexSubscriptions**](Apis/SubscriptionApi.md#indexsubscriptions) | **GET** /subscriptions | Get a list of SubscriptionResources
*SubscriptionApi* | [**indexSubscriptionsSpaces**](Apis/SubscriptionApi.md#indexsubscriptionsspaces) | **GET** /{baseSpaceId}/subscriptions | Get a list of SubscriptionResources
*SubscriptionApi* | [**updateSubscription**](Apis/SubscriptionApi.md#updatesubscription) | **PUT** /subscriptions/{id} | Modify a SubscriptionResource by ID
*SubscriptionApi* | [**updateSubscriptionSpaces**](Apis/SubscriptionApi.md#updatesubscriptionspaces) | **PUT** /{baseSpaceId}/subscriptions/{id} | Modify a SubscriptionResource by ID
*SubscriptionsApi* | [**getAllSubscriptions**](Apis/SubscriptionsApi.md#getallsubscriptions) | **GET** /subscriptions/all | Get all Subscriptions
*SubscriptionsApi* | [**getAllSubscriptionsSpaces**](Apis/SubscriptionsApi.md#getallsubscriptionsspaces) | **GET** /{baseSpaceId}/subscriptions/all | Get all Subscriptions
*SubscriptionsApi* | [**getSubscriptionById**](Apis/SubscriptionsApi.md#getsubscriptionbyid) | **GET** /subscriptions/{id} | Get a Subscription by ID
*SubscriptionsApi* | [**getSubscriptionByIdSpaces**](Apis/SubscriptionsApi.md#getsubscriptionbyidspaces) | **GET** /{baseSpaceId}/subscriptions/{id} | Get a Subscription by ID
*TagSetsApi* | [**createTagSet**](Apis/TagSetsApi.md#createtagset) | **POST** /tagsets | Create a TagSetResource
*TagSetsApi* | [**createTagSetSpaces**](Apis/TagSetsApi.md#createtagsetspaces) | **POST** /{baseSpaceId}/tagsets | Create a TagSetResource
*TagSetsApi* | [**deleteTagSet**](Apis/TagSetsApi.md#deletetagset) | **DELETE** /tagsets/{id} | Delete a TagSetResource by ID
*TagSetsApi* | [**deleteTagSetSpaces**](Apis/TagSetsApi.md#deletetagsetspaces) | **DELETE** /{baseSpaceId}/tagsets/{id} | Delete a TagSetResource by ID
*TagSetsApi* | [**getTagSetById**](Apis/TagSetsApi.md#gettagsetbyid) | **GET** /tagsets/{id} | Get a Tag Set by ID
*TagSetsApi* | [**getTagSetByIdSpaces**](Apis/TagSetsApi.md#gettagsetbyidspaces) | **GET** /{baseSpaceId}/tagsets/{id} | Get a Tag Set by ID
*TagSetsApi* | [**indexTagSets**](Apis/TagSetsApi.md#indextagsets) | **GET** /tagsets | Get a list of TagSetResources
*TagSetsApi* | [**indexTagSetsSpaces**](Apis/TagSetsApi.md#indextagsetsspaces) | **GET** /{baseSpaceId}/tagsets | Get a list of TagSetResources
*TagSetsApi* | [**listAllTagSets**](Apis/TagSetsApi.md#listalltagsets) | **GET** /tagsets/all | Get a list of TagSetResources
*TagSetsApi* | [**listAllTagSetsSpaces**](Apis/TagSetsApi.md#listalltagsetsspaces) | **GET** /{baseSpaceId}/tagsets/all | Get a list of TagSetResources
*TagSetsApi* | [**updateSortTagSets**](Apis/TagSetsApi.md#updatesorttagsets) | **PUT** /tagsets/sortorder | Takes an array of tag set IDs as the request body, uses the order of items in the array to sort the tag sets on the server. The ID of every tag set must be specified.
*TagSetsApi* | [**updateSortTagSetsSpaces**](Apis/TagSetsApi.md#updatesorttagsetsspaces) | **PUT** /{baseSpaceId}/tagsets/sortorder | Takes an array of tag set IDs as the request body, uses the order of items in the array to sort the tag sets on the server. The ID of every tag set must be specified.
*TagSetsApi* | [**updateTagSet**](Apis/TagSetsApi.md#updatetagset) | **PUT** /tagsets/{id} | Modify a TagSetResource by ID
*TagSetsApi* | [**updateTagSetSpaces**](Apis/TagSetsApi.md#updatetagsetspaces) | **PUT** /{baseSpaceId}/tagsets/{id} | Modify a TagSetResource by ID
*TasksApi* | [**createTask**](Apis/TasksApi.md#createtask) | **POST** /tasks | Create a TaskResource
*TasksApi* | [**createTaskCancel**](Apis/TasksApi.md#createtaskcancel) | **POST** /tasks/{id}/cancel | Marks the given task as canceled.
*TasksApi* | [**createTaskCancelSpaces**](Apis/TasksApi.md#createtaskcancelspaces) | **POST** /{baseSpaceId}/tasks/{id}/cancel | Marks the given task as canceled.
*TasksApi* | [**createTaskRerun**](Apis/TasksApi.md#createtaskrerun) | **POST** /tasks/rerun/{id} | Creates a new task and executes it, using a given task as the input. Note that deployment tasks cannot be re-run.
*TasksApi* | [**createTaskRerunSpaces**](Apis/TasksApi.md#createtaskrerunspaces) | **POST** /{baseSpaceId}/tasks/rerun/{id} | Creates a new task and executes it, using a given task as the input. Note that deployment tasks cannot be re-run.
*TasksApi* | [**createTaskSpaces**](Apis/TasksApi.md#createtaskspaces) | **POST** /{baseSpaceId}/tasks | Create a TaskResource
*TasksApi* | [**createTaskState**](Apis/TasksApi.md#createtaskstate) | **POST** /tasks/{id}/state | Change the state of a task
*TasksApi* | [**createTaskStateSpaces**](Apis/TasksApi.md#createtaskstatespaces) | **POST** /{baseSpaceId}/tasks/{id}/state | Change the state of a task
*TasksApi* | [**getListTaskTypes**](Apis/TasksApi.md#getlisttasktypes) | **GET** /tasks/tasktypes | Lists supported task types.
*TasksApi* | [**getListTaskTypesSpaces**](Apis/TasksApi.md#getlisttasktypesspaces) | **GET** /{baseSpaceId}/tasks/tasktypes | Lists supported task types.
*TasksApi* | [**getListTasks**](Apis/TasksApi.md#getlisttasks) | **GET** /tasks | Lists all of the tasks in the supplied Octopus Deploy Space. The results will be sorted from newest to oldest.
*TasksApi* | [**getListTasksSpaces**](Apis/TasksApi.md#getlisttasksspaces) | **GET** /{baseSpaceId}/tasks | Lists all of the tasks in the supplied Octopus Deploy Space. The results will be sorted from newest to oldest.
*TasksApi* | [**getTaskById**](Apis/TasksApi.md#gettaskbyid) | **GET** /tasks/{id} | Get a TaskResource by ID
*TasksApi* | [**getTaskByIdSpaces**](Apis/TasksApi.md#gettaskbyidspaces) | **GET** /{baseSpaceId}/tasks/{id} | Get a TaskResource by ID
*TasksApi* | [**getTaskDetails**](Apis/TasksApi.md#gettaskdetails) | **GET** /tasks/{id}/details | Gets a single task by ID, including the full task log as a tree of activity elements.
*TasksApi* | [**getTaskDetailsSpaces**](Apis/TasksApi.md#gettaskdetailsspaces) | **GET** /{baseSpaceId}/tasks/{id}/details | Gets a single task by ID, including the full task log as a tree of activity elements.
*TasksApi* | [**getTaskRaw**](Apis/TasksApi.md#gettaskraw) | **GET** /tasks/{id}/raw | Gets the full task log of a given resource as plain text. Useful when the log needs to be rendered to a console or sent as an email attachment.
*TasksApi* | [**getTaskRawSpaces**](Apis/TasksApi.md#gettaskrawspaces) | **GET** /{baseSpaceId}/tasks/{id}/raw | Gets the full task log of a given resource as plain text. Useful when the log needs to be rendered to a console or sent as an email attachment.
*TasksApi* | [**indexTaskQueuedBehind**](Apis/TasksApi.md#indextaskqueuedbehind) | **GET** /tasks/{id}/queued-behind | Get a list of TaskResources for the given TaskResource
*TasksApi* | [**indexTaskQueuedBehindSpaces**](Apis/TasksApi.md#indextaskqueuedbehindspaces) | **GET** /{baseSpaceId}/tasks/{id}/queued-behind | Get a list of TaskResources for the given TaskResource
*TeamMembershipApi* | [**createTeamMembershipPreview**](Apis/TeamMembershipApi.md#createteammembershippreview) | **POST** /teammembership/previewteam | Preview Users that would belong to the specified Team
*TeamMembershipApi* | [**createTeamMembershipPreviewSpaces**](Apis/TeamMembershipApi.md#createteammembershippreviewspaces) | **POST** /{baseSpaceId}/teammembership/previewteam | Preview Users that would belong to the specified Team
*TeamMembershipApi* | [**getTeamMembership**](Apis/TeamMembershipApi.md#getteammembership) | **GET** /teammembership | Gets a list of team memberships for a user
*TeamMembershipApi* | [**getTeamMembershipSpaces**](Apis/TeamMembershipApi.md#getteammembershipspaces) | **GET** /{baseSpaceId}/teammembership | Gets a list of team memberships for a user
*TeamsApi* | [**createTeam**](Apis/TeamsApi.md#createteam) | **POST** /teams | Creates a new Team
*TeamsApi* | [**createTeamSpaces**](Apis/TeamsApi.md#createteamspaces) | **POST** /{baseSpaceId}/teams | Creates a new Team
*TeamsApi* | [**deleteTeam**](Apis/TeamsApi.md#deleteteam) | **DELETE** /teams/{id} | Deletes an existing Team
*TeamsApi* | [**deleteTeamSpaces**](Apis/TeamsApi.md#deleteteamspaces) | **DELETE** /{baseSpaceId}/teams/{id} | Deletes an existing Team
*TeamsApi* | [**getListScopedUserRoleForTeam**](Apis/TeamsApi.md#getlistscopeduserroleforteam) | **GET** /teams/{id}/scopeduserroles | Get a list of a Team's Scoped User Roles
*TeamsApi* | [**getListScopedUserRoleForTeamSpaces**](Apis/TeamsApi.md#getlistscopeduserroleforteamspaces) | **GET** /{baseSpaceId}/teams/{id}/scopeduserroles | Get a list of a Team's Scoped User Roles
*TeamsApi* | [**getTeamById**](Apis/TeamsApi.md#getteambyid) | **GET** /teams/{id} | Get a Team by ID
*TeamsApi* | [**getTeamByIdSpaces**](Apis/TeamsApi.md#getteambyidspaces) | **GET** /{baseSpaceId}/teams/{id} | Get a Team by ID
*TeamsApi* | [**listAllTeams**](Apis/TeamsApi.md#listallteams) | **GET** /teams/all | Get a list of Teams
*TeamsApi* | [**listAllTeamsSpaces**](Apis/TeamsApi.md#listallteamsspaces) | **GET** /{baseSpaceId}/teams/all | Get a list of Teams
*TeamsApi* | [**listTeams**](Apis/TeamsApi.md#listteams) | **GET** /teams | Gets a list of teams
*TeamsApi* | [**listTeamsSpaces**](Apis/TeamsApi.md#listteamsspaces) | **GET** /{baseSpaceId}/teams | Gets a list of teams
*TeamsApi* | [**updateTeam**](Apis/TeamsApi.md#updateteam) | **PUT** /teams/{id} | Modifies an existing Team
*TeamsApi* | [**updateTeamSpaces**](Apis/TeamsApi.md#updateteamspaces) | **PUT** /{baseSpaceId}/teams/{id} | Modifies an existing Team
*TenantVariablesApi* | [**getTenantVariablesAll**](Apis/TenantVariablesApi.md#gettenantvariablesall) | **GET** /tenantvariables/all | Lists all of the tenant variables in the supplied Octopus Deploy Space. The results will be sorted alphabetically by id.
*TenantVariablesApi* | [**getTenantVariablesAllSpaces**](Apis/TenantVariablesApi.md#gettenantvariablesallspaces) | **GET** /{baseSpaceId}/tenantvariables/all | Lists all of the tenant variables in the supplied Octopus Deploy Space. The results will be sorted alphabetically by id.
*TenantsApi* | [**createTenant**](Apis/TenantsApi.md#createtenant) | **POST** /tenants | Creates a new Tenant
*TenantsApi* | [**createTenantLogo**](Apis/TenantsApi.md#createtenantlogo) | **POST** /tenants/{id}/logo | Sets the logo associated with the tenant.
*TenantsApi* | [**createTenantLogoSpaces**](Apis/TenantsApi.md#createtenantlogospaces) | **POST** /{baseSpaceId}/tenants/{id}/logo | Sets the logo associated with the tenant.
*TenantsApi* | [**createTenantSpaces**](Apis/TenantsApi.md#createtenantspaces) | **POST** /{baseSpaceId}/tenants | Creates a new Tenant
*TenantsApi* | [**createTenantVariables**](Apis/TenantsApi.md#createtenantvariables) | **POST** /tenants/{id}/variables | Creates the variables associated with the tenant.
*TenantsApi* | [**createTenantVariablesSpaces**](Apis/TenantsApi.md#createtenantvariablesspaces) | **POST** /{baseSpaceId}/tenants/{id}/variables | Creates the variables associated with the tenant.
*TenantsApi* | [**deleteTenant**](Apis/TenantsApi.md#deletetenant) | **DELETE** /tenants/{id} | Deletes an existing tenant.
*TenantsApi* | [**deleteTenantSpaces**](Apis/TenantsApi.md#deletetenantspaces) | **DELETE** /{baseSpaceId}/tenants/{id} | Deletes an existing tenant.
*TenantsApi* | [**getTenantById**](Apis/TenantsApi.md#gettenantbyid) | **GET** /tenants/{id} | Get a Tenant by ID
*TenantsApi* | [**getTenantByIdSpaces**](Apis/TenantsApi.md#gettenantbyidspaces) | **GET** /{baseSpaceId}/tenants/{id} | Get a Tenant by ID
*TenantsApi* | [**getTenantLogo**](Apis/TenantsApi.md#gettenantlogo) | **GET** /tenants/{id}/logo | Gets the logo associated with the Tenant
*TenantsApi* | [**getTenantLogoSpaces**](Apis/TenantsApi.md#gettenantlogospaces) | **GET** /{baseSpaceId}/tenants/{id}/logo | Gets the logo associated with the Tenant
*TenantsApi* | [**getTenantVariablesMissing**](Apis/TenantsApi.md#gettenantvariablesmissing) | **GET** /tenants/variables-missing | Returns a list of tenants who are missing required variables
*TenantsApi* | [**getTenantVariablesMissingSpaces**](Apis/TenantsApi.md#gettenantvariablesmissingspaces) | **GET** /{baseSpaceId}/tenants/variables-missing | Returns a list of tenants who are missing required variables
*TenantsApi* | [**getTenantsConfiguration**](Apis/TenantsApi.md#gettenantsconfiguration) | **GET** /tenants/status | Reports back the status of multi-tenancy
*TenantsApi* | [**getTenantsConfigurationSpaces**](Apis/TenantsApi.md#gettenantsconfigurationspaces) | **GET** /{baseSpaceId}/tenants/status | Reports back the status of multi-tenancy
*TenantsApi* | [**getVariablesByTenantId**](Apis/TenantsApi.md#getvariablesbytenantid) | **GET** /tenants/{id}/variables | Gets variables associated with the provided tenant ID.
*TenantsApi* | [**getVariablesByTenantIdSpaces**](Apis/TenantsApi.md#getvariablesbytenantidspaces) | **GET** /{baseSpaceId}/tenants/{id}/variables | Gets variables associated with the provided tenant ID.
*TenantsApi* | [**listAllTenants**](Apis/TenantsApi.md#listalltenants) | **GET** /tenants/all | Lists all tenants
*TenantsApi* | [**listAllTenantsSpaces**](Apis/TenantsApi.md#listalltenantsspaces) | **GET** /{baseSpaceId}/tenants/all | Lists all tenants
*TenantsApi* | [**listTenants**](Apis/TenantsApi.md#listtenants) | **GET** /tenants | Gets a list of tenants
*TenantsApi* | [**listTenantsSpaces**](Apis/TenantsApi.md#listtenantsspaces) | **GET** /{baseSpaceId}/tenants | Gets a list of tenants
*TenantsApi* | [**testTenantTag**](Apis/TenantsApi.md#testtenanttag) | **GET** /tenants/tag-test | Checks tenants for matching tags
*TenantsApi* | [**testTenantTagSpaces**](Apis/TenantsApi.md#testtenanttagspaces) | **GET** /{baseSpaceId}/tenants/tag-test | Checks tenants for matching tags
*TenantsApi* | [**updateTenant**](Apis/TenantsApi.md#updatetenant) | **PUT** /tenants/{id} | Modifies an existing Tenant
*TenantsApi* | [**updateTenantLogo**](Apis/TenantsApi.md#updatetenantlogo) | **PUT** /tenants/{id}/logo | Updates the logo associated with the tenant.
*TenantsApi* | [**updateTenantLogoSpaces**](Apis/TenantsApi.md#updatetenantlogospaces) | **PUT** /{baseSpaceId}/tenants/{id}/logo | Updates the logo associated with the tenant.
*TenantsApi* | [**updateTenantSpaces**](Apis/TenantsApi.md#updatetenantspaces) | **PUT** /{baseSpaceId}/tenants/{id} | Modifies an existing Tenant
*TenantsApi* | [**updateTenantVariables**](Apis/TenantsApi.md#updatetenantvariables) | **PUT** /tenants/{id}/variables | Updates the variables associated with the tenant.
*TenantsApi* | [**updateTenantVariablesSpaces**](Apis/TenantsApi.md#updatetenantvariablesspaces) | **PUT** /{baseSpaceId}/tenants/{id}/variables | Updates the variables associated with the tenant.
*UpgradeConfigurationApi* | [**getUpgradeConfiguration**](Apis/UpgradeConfigurationApi.md#getupgradeconfiguration) | **GET** /upgradeconfiguration | Gets information about the upgrade configuration in use by the Octopus Server.
*UpgradeConfigurationApi* | [**updateUpgradeConfiguration**](Apis/UpgradeConfigurationApi.md#updateupgradeconfiguration) | **PUT** /upgradeconfiguration | Updates the upgrade configuration used by the Octopus Server.
*UserOnboardingApi* | [**getOnboarding**](Apis/UserOnboardingApi.md#getonboarding) | **GET** /useronboarding | Gets information about how far the Octopus Server is towards having its first release deployed.
*UserOnboardingApi* | [**getOnboardingSpaces**](Apis/UserOnboardingApi.md#getonboardingspaces) | **GET** /{baseSpaceId}/useronboarding | Gets information about how far the Octopus Server is towards having its first release deployed.
*UserPermissionsApi* | [**getUserGetPermissions**](Apis/UserPermissionsApi.md#getusergetpermissions) | **GET** /users/{id}/permissions | Gets summarized permission information. Available for the current authenticated user only.
*UserPermissionsApi* | [**getUserGetPermissionsConfiguration**](Apis/UserPermissionsApi.md#getusergetpermissionsconfiguration) | **GET** /users/{id}/permissions/configuration | Gets a summary of the configuration of the user's permissions information. Available for the current authenticated user only.
*UserPermissionsApi* | [**getUserGetPermissionsConfigurationSpaces**](Apis/UserPermissionsApi.md#getusergetpermissionsconfigurationspaces) | **GET** /{baseSpaceId}/users/{id}/permissions/configuration | Gets a summary of the configuration of the user's permissions information. Available for the current authenticated user only.
*UserPermissionsApi* | [**getUserGetPermissionsSpaces**](Apis/UserPermissionsApi.md#getusergetpermissionsspaces) | **GET** /{baseSpaceId}/users/{id}/permissions | Gets summarized permission information. Available for the current authenticated user only.
*UserPermissionsApi* | [**getUserPermissionsExport**](Apis/UserPermissionsApi.md#getuserpermissionsexport) | **GET** /users/{id}/permissions/export | Gets list of permissions as a csv file. Available for the current authenticated user only.
*UserPermissionsApi* | [**getUserPermissionsExportSpaces**](Apis/UserPermissionsApi.md#getuserpermissionsexportspaces) | **GET** /{baseSpaceId}/users/{id}/permissions/export | Gets list of permissions as a csv file. Available for the current authenticated user only.
*UserRolesApi* | [**createUserRole**](Apis/UserRolesApi.md#createuserrole) | **POST** /userroles | Create a UserRoleResource
*UserRolesApi* | [**deleteUserRole**](Apis/UserRolesApi.md#deleteuserrole) | **DELETE** /userroles/{id} | Delete a UserRoleResource by ID
*UserRolesApi* | [**getUserRoleById**](Apis/UserRolesApi.md#getuserrolebyid) | **GET** /userroles/{id} | Get a User Role by ID
*UserRolesApi* | [**indexUserRoles**](Apis/UserRolesApi.md#indexuserroles) | **GET** /userroles | Get a list of UserRoleResources
*UserRolesApi* | [**listAllUserRoles**](Apis/UserRolesApi.md#listalluserroles) | **GET** /userroles/all | Get a list of UserRoleResources
*UserRolesApi* | [**updateUserRole**](Apis/UserRolesApi.md#updateuserrole) | **PUT** /userroles/{id} | Modify a UserRoleResource by ID
*UserTeamsApi* | [**getUserGetTeams**](Apis/UserTeamsApi.md#getusergetteams) | **GET** /users/{id}/teams | Gets a list of teams (id and name only) for the specified user, including any from external auth-provider security groups.
*UserTeamsApi* | [**getUserGetTeamsSpaces**](Apis/UserTeamsApi.md#getusergetteamsspaces) | **GET** /{baseSpaceId}/users/{id}/teams | Gets a list of teams (id and name only) for the specified user, including any from external auth-provider security groups.
*UsersApi* | [**createUserCreate**](Apis/UsersApi.md#createusercreate) | **POST** /users | Creates a new user.
*UsersApi* | [**createUserLogin**](Apis/UsersApi.md#createuserlogin) | **POST** /users/login | Authenticates a user and returns a response with a cookie for the current user. This cookie can be submitted with future requests to avoid re-authentication.
*UsersApi* | [**createUserLogout**](Apis/UsersApi.md#createuserlogout) | **POST** /users/logout | Revokes the authentication cookie from the current session.
*UsersApi* | [**createUserRegister**](Apis/UsersApi.md#createuserregister) | **POST** /users/register | Registers a new user and responds with an authentication cookie. Unless the first administrator user is being registered, an invitation code must be provided.
*UsersApi* | [**deleteUser**](Apis/UsersApi.md#deleteuser) | **DELETE** /users/{id} | Delete a UserResource by ID
*UsersApi* | [**getUserAuthentication**](Apis/UsersApi.md#getuserauthentication) | **GET** /users/authentication | Provides the details of the enabled authentication providers and whether the current user can edit logins for the given user.
*UsersApi* | [**getUserAuthentication1**](Apis/UsersApi.md#getuserauthentication1) | **GET** /users/authentication/{userId} | Provides the details of the enabled authentication providers and whether the current user can edit logins for the given user.
*UsersApi* | [**getUserById**](Apis/UsersApi.md#getuserbyid) | **GET** /users/{id} | Get a User by ID
*UsersApi* | [**getUserExternalSearch**](Apis/UsersApi.md#getuserexternalsearch) | **GET** /users/external-search | Searches for users, using the authentication providers.
*UsersApi* | [**getUserGetCurrent**](Apis/UsersApi.md#getusergetcurrent) | **GET** /users/me | Gets information about the current user.
*UsersApi* | [**getUserGetSpaces**](Apis/UsersApi.md#getusergetspaces) | **GET** /users/{id}/spaces | Gets a list of spaces available to the current authenticated user only.
*UsersApi* | [**getUserIdentityMetadata**](Apis/UsersApi.md#getuseridentitymetadata) | **GET** /users/identity-metadata | Gets the metadata to describe the claims/fields used by authentication providers that support identities.
*UsersApi* | [**indexUsers**](Apis/UsersApi.md#indexusers) | **GET** /users | Get a list of UserResources
*UsersApi* | [**listAllUsers**](Apis/UsersApi.md#listallusers) | **GET** /users/all | Get a list of Users
*UsersApi* | [**updateUser**](Apis/UsersApi.md#updateuser) | **PUT** /users/{id} | Modifies an existing user.
*VariablesApi* | [**getVariableNamesList**](Apis/VariablesApi.md#getvariablenameslist) | **GET** /variables/names | List the names of variables that can be used in deployment actions. If a project is specified, this will include variables in that project.  If a project environments filter is specified, project variables only scoped to the environment will be excluded. 
*VariablesApi* | [**getVariableNamesListSpaces**](Apis/VariablesApi.md#getvariablenameslistspaces) | **GET** /{baseSpaceId}/variables/names | List the names of variables that can be used in deployment actions. If a project is specified, this will include variables in that project.  If a project environments filter is specified, project variables only scoped to the environment will be excluded. 
*VariablesApi* | [**getVariablePreviewList**](Apis/VariablesApi.md#getvariablepreviewlist) | **GET** /variables/preview | List the evaluated variables for a deployment. 
*VariablesApi* | [**getVariablePreviewListSpaces**](Apis/VariablesApi.md#getvariablepreviewlistspaces) | **GET** /{baseSpaceId}/variables/preview | List the evaluated variables for a deployment. 
*VariablesApi* | [**getVariableSetById**](Apis/VariablesApi.md#getvariablesetbyid) | **GET** /variables/{id} | Get a VariableSetResource by ID
*VariablesApi* | [**getVariableSetByIdSpaces**](Apis/VariablesApi.md#getvariablesetbyidspaces) | **GET** /{baseSpaceId}/variables/{id} | Get a VariableSetResource by ID
*VariablesApi* | [**listAllVariableSets**](Apis/VariablesApi.md#listallvariablesets) | **GET** /variables/all | Get a list of VariableSetResources
*VariablesApi* | [**listAllVariableSetsSpaces**](Apis/VariablesApi.md#listallvariablesetsspaces) | **GET** /{baseSpaceId}/variables/all | Get a list of VariableSetResources
*VariablesApi* | [**updateVariableSet**](Apis/VariablesApi.md#updatevariableset) | **PUT** /variables/{id} | Updates a variable set.
*VariablesApi* | [**updateVariableSetSpaces**](Apis/VariablesApi.md#updatevariablesetspaces) | **PUT** /{baseSpaceId}/variables/{id} | Updates a variable set.
*WorkerPoolsApi* | [**createWorkerPool**](Apis/WorkerPoolsApi.md#createworkerpool) | **POST** /workerpools | Create a WorkerPoolResource
*WorkerPoolsApi* | [**createWorkerPoolSpaces**](Apis/WorkerPoolsApi.md#createworkerpoolspaces) | **POST** /{baseSpaceId}/workerpools | Create a WorkerPoolResource
*WorkerPoolsApi* | [**deleteWorkerPool**](Apis/WorkerPoolsApi.md#deleteworkerpool) | **DELETE** /workerpools/{id} | Delete a WorkerPoolResource by ID
*WorkerPoolsApi* | [**deleteWorkerPoolSpaces**](Apis/WorkerPoolsApi.md#deleteworkerpoolspaces) | **DELETE** /{baseSpaceId}/workerpools/{id} | Delete a WorkerPoolResource by ID
*WorkerPoolsApi* | [**getWorkerPoolById**](Apis/WorkerPoolsApi.md#getworkerpoolbyid) | **GET** /workerpools/{id} | Get a Worker Pool by ID
*WorkerPoolsApi* | [**getWorkerPoolByIdSpaces**](Apis/WorkerPoolsApi.md#getworkerpoolbyidspaces) | **GET** /{baseSpaceId}/workerpools/{id} | Get a Worker Pool by ID
*WorkerPoolsApi* | [**getWorkerPoolDynamicWorkerTypes**](Apis/WorkerPoolsApi.md#getworkerpooldynamicworkertypes) | **GET** /workerpools/dynamicworkertypes | Lists the available Worker Types for the Dynamic Worker Pool
*WorkerPoolsApi* | [**getWorkerPoolDynamicWorkerTypesSpaces**](Apis/WorkerPoolsApi.md#getworkerpooldynamicworkertypesspaces) | **GET** /{baseSpaceId}/workerpools/dynamicworkertypes | Lists the available Worker Types for the Dynamic Worker Pool
*WorkerPoolsApi* | [**getWorkerPoolSupportedTypes**](Apis/WorkerPoolsApi.md#getworkerpoolsupportedtypes) | **GET** /workerpools/supportedtypes | Lists the available Worker Pool types.
*WorkerPoolsApi* | [**getWorkerPoolSupportedTypesSpaces**](Apis/WorkerPoolsApi.md#getworkerpoolsupportedtypesspaces) | **GET** /{baseSpaceId}/workerpools/supportedtypes | Lists the available Worker Pool types.
*WorkerPoolsApi* | [**getWorkerPoolsSummary**](Apis/WorkerPoolsApi.md#getworkerpoolssummary) | **GET** /workerpools/summary | Lists all worker pools, including a summary of machine information
*WorkerPoolsApi* | [**getWorkerPoolsSummarySpaces**](Apis/WorkerPoolsApi.md#getworkerpoolssummaryspaces) | **GET** /{baseSpaceId}/workerpools/summary | Lists all worker pools, including a summary of machine information
*WorkerPoolsApi* | [**indexWorkerPoolWorkers**](Apis/WorkerPoolsApi.md#indexworkerpoolworkers) | **GET** /workerpools/{id}/workers | Get a list of WorkerResources for the given WorkerPoolResource
*WorkerPoolsApi* | [**indexWorkerPoolWorkersSpaces**](Apis/WorkerPoolsApi.md#indexworkerpoolworkersspaces) | **GET** /{baseSpaceId}/workerpools/{id}/workers | Get a list of WorkerResources for the given WorkerPoolResource
*WorkerPoolsApi* | [**indexWorkerPools**](Apis/WorkerPoolsApi.md#indexworkerpools) | **GET** /workerpools | Get a list of WorkerPoolResources
*WorkerPoolsApi* | [**indexWorkerPoolsSpaces**](Apis/WorkerPoolsApi.md#indexworkerpoolsspaces) | **GET** /{baseSpaceId}/workerpools | Get a list of WorkerPoolResources
*WorkerPoolsApi* | [**listAllWorkerPools**](Apis/WorkerPoolsApi.md#listallworkerpools) | **GET** /workerpools/all | Get a list of WorkerPoolResources
*WorkerPoolsApi* | [**listAllWorkerPoolsSpaces**](Apis/WorkerPoolsApi.md#listallworkerpoolsspaces) | **GET** /{baseSpaceId}/workerpools/all | Get a list of WorkerPoolResources
*WorkerPoolsApi* | [**updateSortWorkerPools**](Apis/WorkerPoolsApi.md#updatesortworkerpools) | **PUT** /workerpools/sortorder | Takes an array of work pool IDs as the request body, uses the order of items in the array to sort the worker pools on the server. The ID of every worker pool must be specified.
*WorkerPoolsApi* | [**updateSortWorkerPoolsSpaces**](Apis/WorkerPoolsApi.md#updatesortworkerpoolsspaces) | **PUT** /{baseSpaceId}/workerpools/sortorder | Takes an array of work pool IDs as the request body, uses the order of items in the array to sort the worker pools on the server. The ID of every worker pool must be specified.
*WorkerPoolsApi* | [**updateWorkerPool**](Apis/WorkerPoolsApi.md#updateworkerpool) | **PUT** /workerpools/{id} | Modify a WorkerPoolResource by ID
*WorkerPoolsApi* | [**updateWorkerPoolSpaces**](Apis/WorkerPoolsApi.md#updateworkerpoolspaces) | **PUT** /{baseSpaceId}/workerpools/{id} | Modify a WorkerPoolResource by ID
*WorkersApi* | [**createWorker**](Apis/WorkersApi.md#createworker) | **POST** /workers | Create a WorkerResource
*WorkersApi* | [**createWorkerSpaces**](Apis/WorkersApi.md#createworkerspaces) | **POST** /{baseSpaceId}/workers | Create a WorkerResource
*WorkersApi* | [**deleteWorker**](Apis/WorkersApi.md#deleteworker) | **DELETE** /workers/{id} | Delete a WorkerResource by ID
*WorkersApi* | [**deleteWorkerSpaces**](Apis/WorkersApi.md#deleteworkerspaces) | **DELETE** /{baseSpaceId}/workers/{id} | Delete a WorkerResource by ID
*WorkersApi* | [**getDiscoverWorker**](Apis/WorkersApi.md#getdiscoverworker) | **GET** /workers/discover | Interrogate a machine for communication details so that it may be added to the installation.
*WorkersApi* | [**getDiscoverWorkerSpaces**](Apis/WorkersApi.md#getdiscoverworkerspaces) | **GET** /{baseSpaceId}/workers/discover | Interrogate a machine for communication details so that it may be added to the installation.
*WorkersApi* | [**getWorkerById**](Apis/WorkersApi.md#getworkerbyid) | **GET** /workers/{id} | Get a Worker by ID
*WorkersApi* | [**getWorkerByIdSpaces**](Apis/WorkersApi.md#getworkerbyidspaces) | **GET** /{baseSpaceId}/workers/{id} | Get a Worker by ID
*WorkersApi* | [**getWorkerConnectionStatus**](Apis/WorkersApi.md#getworkerconnectionstatus) | **GET** /workers/{id}/connection | Get the status of the network connection between the Octopus server and a worker.
*WorkersApi* | [**getWorkerConnectionStatusSpaces**](Apis/WorkersApi.md#getworkerconnectionstatusspaces) | **GET** /{baseSpaceId}/workers/{id}/connection | Get the status of the network connection between the Octopus server and a worker.
*WorkersApi* | [**getWorkerOperatingSystemNamesListAll**](Apis/WorkersApi.md#getworkeroperatingsystemnameslistall) | **GET** /workers/operatingsystem/names/all | Gets all operating system names for workers. The result will be a string array.
*WorkersApi* | [**getWorkerOperatingSystemNamesListAllSpaces**](Apis/WorkersApi.md#getworkeroperatingsystemnameslistallspaces) | **GET** /{baseSpaceId}/workers/operatingsystem/names/all | Gets all operating system names for workers. The result will be a string array.
*WorkersApi* | [**getWorkerOperatingSystemShellNameListAll**](Apis/WorkersApi.md#getworkeroperatingsystemshellnamelistall) | **GET** /workers/operatingsystem/shells/all | Gets all operating system shell names for workers. The result will be a string array.
*WorkersApi* | [**getWorkerOperatingSystemShellNameListAllSpaces**](Apis/WorkersApi.md#getworkeroperatingsystemshellnamelistallspaces) | **GET** /{baseSpaceId}/workers/operatingsystem/shells/all | Gets all operating system shell names for workers. The result will be a string array.
*WorkersApi* | [**indexWorkers**](Apis/WorkersApi.md#indexworkers) | **GET** /workers | Get a list of WorkerResources
*WorkersApi* | [**indexWorkersSpaces**](Apis/WorkersApi.md#indexworkersspaces) | **GET** /{baseSpaceId}/workers | Get a list of WorkerResources
*WorkersApi* | [**listAllWorkers**](Apis/WorkersApi.md#listallworkers) | **GET** /workers/all | Get a list of WorkerResources
*WorkersApi* | [**listAllWorkersSpaces**](Apis/WorkersApi.md#listallworkersspaces) | **GET** /{baseSpaceId}/workers/all | Get a list of WorkerResources
*WorkersApi* | [**updateWorker**](Apis/WorkersApi.md#updateworker) | **PUT** /workers/{id} | Modify a WorkerResource by ID
*WorkersApi* | [**updateWorkerSpaces**](Apis/WorkersApi.md#updateworkerspaces) | **PUT** /{baseSpaceId}/workers/{id} | Modify a WorkerResource by ID


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

