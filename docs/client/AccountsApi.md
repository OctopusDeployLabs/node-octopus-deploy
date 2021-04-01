# AccountsApi

All URIs are relative to *http://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createAccount**](AccountsApi.md#createAccount) | **POST** /accounts | Create a AccountResource
[**createAccountSpaces**](AccountsApi.md#createAccountSpaces) | **POST** /{baseSpaceId}/accounts | Create a AccountResource
[**deleteAccount**](AccountsApi.md#deleteAccount) | **DELETE** /accounts/{id} | Delete a AccountResource by ID
[**deleteAccountSpaces**](AccountsApi.md#deleteAccountSpaces) | **DELETE** /{baseSpaceId}/accounts/{id} | Delete a AccountResource by ID
[**getAccountById**](AccountsApi.md#getAccountById) | **GET** /accounts/{id} | Get an Account by ID
[**getAccountByIdSpaces**](AccountsApi.md#getAccountByIdSpaces) | **GET** /{baseSpaceId}/accounts/{id} | Get an Account by ID
[**getAccountPublicKeyDownload**](AccountsApi.md#getAccountPublicKeyDownload) | **GET** /accounts/{id}/pk | 
[**getAccountPublicKeyDownloadSpaces**](AccountsApi.md#getAccountPublicKeyDownloadSpaces) | **GET** /{baseSpaceId}/accounts/{id}/pk | 
[**getAccountUsageList**](AccountsApi.md#getAccountUsageList) | **GET** /accounts/{id}/usages | 
[**getAccountUsageListSpaces**](AccountsApi.md#getAccountUsageListSpaces) | **GET** /{baseSpaceId}/accounts/{id}/usages | 
[**getAzureEnvironmentsList**](AccountsApi.md#getAzureEnvironmentsList) | **GET** /accounts/azureenvironments | 
[**getAzureResourceGroupsList**](AccountsApi.md#getAzureResourceGroupsList) | **GET** /accounts/{id}/resourceGroups | 
[**getAzureResourceGroupsListSpaces**](AccountsApi.md#getAzureResourceGroupsListSpaces) | **GET** /{baseSpaceId}/accounts/{id}/resourceGroups | 
[**getAzureStorageAccountsList**](AccountsApi.md#getAzureStorageAccountsList) | **GET** /accounts/{id}/storageAccounts | 
[**getAzureStorageAccountsListSpaces**](AccountsApi.md#getAzureStorageAccountsListSpaces) | **GET** /{baseSpaceId}/accounts/{id}/storageAccounts | 
[**getAzureWebSitesList**](AccountsApi.md#getAzureWebSitesList) | **GET** /accounts/{id}/websites | 
[**getAzureWebSitesListSpaces**](AccountsApi.md#getAzureWebSitesListSpaces) | **GET** /{baseSpaceId}/accounts/{id}/websites | 
[**getAzureWebSitesSlotList**](AccountsApi.md#getAzureWebSitesSlotList) | **GET** /accounts/{id}/{resourceGroupName}/websites/{webSiteName}/slots | 
[**getAzureWebSitesSlotListSpaces**](AccountsApi.md#getAzureWebSitesSlotListSpaces) | **GET** /{baseSpaceId}/accounts/{id}/{resourceGroupName}/websites/{webSiteName}/slots | 
[**indexAccounts**](AccountsApi.md#indexAccounts) | **GET** /accounts | Get a list of AccountResources
[**indexAccountsSpaces**](AccountsApi.md#indexAccountsSpaces) | **GET** /{baseSpaceId}/accounts | Get a list of AccountResources
[**listAllAccounts**](AccountsApi.md#listAllAccounts) | **GET** /accounts/all | Get a list of AccountResources
[**listAllAccountsSpaces**](AccountsApi.md#listAllAccountsSpaces) | **GET** /{baseSpaceId}/accounts/all | Get a list of AccountResources
[**updateAccount**](AccountsApi.md#updateAccount) | **PUT** /accounts/{id} | Modify a AccountResource by ID
[**updateAccountSpaces**](AccountsApi.md#updateAccountSpaces) | **PUT** /{baseSpaceId}/accounts/{id} | Modify a AccountResource by ID


<a name="createAccount"></a>
# **createAccount**
> AccountResource createAccount(body)

Create a AccountResource

    Creates a new account.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**AccountResource**](../model/AccountResource.md)| The AccountResource resource to create | [optional]

### Return type

[**AccountResource**](../model/AccountResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="createAccountSpaces"></a>
# **createAccountSpaces**
> AccountResource createAccountSpaces(baseSpaceId, body)

Create a AccountResource

    Creates a new account.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **body** | [**AccountResource**](../model/AccountResource.md)| The AccountResource resource to create | [optional]

### Return type

[**AccountResource**](../model/AccountResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="deleteAccount"></a>
# **deleteAccount**
> deleteAccount(id)

Delete a AccountResource by ID

    Deletes an existing account.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the AccountResource to delete | [default to null]

### Return type

null (empty response body)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="deleteAccountSpaces"></a>
# **deleteAccountSpaces**
> deleteAccountSpaces(baseSpaceId, id)

Delete a AccountResource by ID

    Deletes an existing account.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **id** | **String**| ID of the AccountResource to delete | [default to null]

### Return type

null (empty response body)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="getAccountById"></a>
# **getAccountById**
> AccountResource getAccountById(id)

Get an Account by ID

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the Account to load | [default to null]

### Return type

[**AccountResource**](../model/AccountResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getAccountByIdSpaces"></a>
# **getAccountByIdSpaces**
> AccountResource getAccountByIdSpaces(id, baseSpaceId)

Get an Account by ID

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the Account to load | [default to null]
 **baseSpaceId** | **String**| ID of the space | [default to null]

### Return type

[**AccountResource**](../model/AccountResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getAccountPublicKeyDownload"></a>
# **getAccountPublicKeyDownload**
> File getAccountPublicKeyDownload(id)



    Downloads the public key portion of the account&#39;s associated certificate, if present.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the resource | [default to null]

### Return type

[**File**](../model/file.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/x-x509-ca-cert

<a name="getAccountPublicKeyDownloadSpaces"></a>
# **getAccountPublicKeyDownloadSpaces**
> File getAccountPublicKeyDownloadSpaces(baseSpaceId, id)



    Downloads the public key portion of the account&#39;s associated certificate, if present.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **id** | **String**| ID of the resource | [default to null]

### Return type

[**File**](../model/file.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/x-x509-ca-cert

<a name="getAccountUsageList"></a>
# **getAccountUsageList**
> AccountUsageResource getAccountUsageList(id)



    Lists projects and deployments which are using an account.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the resource | [default to null]

### Return type

[**AccountUsageResource**](../model/AccountUsageResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getAccountUsageListSpaces"></a>
# **getAccountUsageListSpaces**
> AccountUsageResource getAccountUsageListSpaces(baseSpaceId, id)



    Lists projects and deployments which are using an account.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **id** | **String**| ID of the resource | [default to null]

### Return type

[**AccountUsageResource**](../model/AccountUsageResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getAzureEnvironmentsList"></a>
# **getAzureEnvironmentsList**
> List getAzureEnvironmentsList()



    Lists the Azure Environments provided by the SDK

### Parameters
This endpoint does not need any parameter.

### Return type

[**List**](../model/AzureEnvironmentResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getAzureResourceGroupsList"></a>
# **getAzureResourceGroupsList**
> List getAzureResourceGroupsList(id)



    Lists the Resource Groups associated with an Azure account.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The account id | [default to null]

### Return type

[**List**](../model/AzureResourceGroupResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getAzureResourceGroupsListSpaces"></a>
# **getAzureResourceGroupsListSpaces**
> List getAzureResourceGroupsListSpaces(baseSpaceId, id)



    Lists the Resource Groups associated with an Azure account.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **id** | **String**| The account id | [default to null]

### Return type

[**List**](../model/AzureResourceGroupResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getAzureStorageAccountsList"></a>
# **getAzureStorageAccountsList**
> List getAzureStorageAccountsList(id)



    Lists the storage accounts associated with an Azure account.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The account id | [default to null]

### Return type

[**List**](../model/AzureStorageAccountResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getAzureStorageAccountsListSpaces"></a>
# **getAzureStorageAccountsListSpaces**
> List getAzureStorageAccountsListSpaces(baseSpaceId, id)



    Lists the storage accounts associated with an Azure account.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **id** | **String**| The account id | [default to null]

### Return type

[**List**](../model/AzureStorageAccountResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getAzureWebSitesList"></a>
# **getAzureWebSitesList**
> List getAzureWebSitesList(id)



    Lists the websites associated with an Azure account.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The account id | [default to null]

### Return type

[**List**](../model/AzureWebSiteResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getAzureWebSitesListSpaces"></a>
# **getAzureWebSitesListSpaces**
> List getAzureWebSitesListSpaces(baseSpaceId, id)



    Lists the websites associated with an Azure account.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **id** | **String**| The account id | [default to null]

### Return type

[**List**](../model/AzureWebSiteResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getAzureWebSitesSlotList"></a>
# **getAzureWebSitesSlotList**
> List getAzureWebSitesSlotList(id, resourceGroupName, webSiteName)



    Lists the slots associated with an Azure Web Site.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The account id | [default to null]
 **resourceGroupName** | **String**| Azure resource group name | [default to null]
 **webSiteName** | **String**| Website name | [default to null]

### Return type

[**List**](../model/AzureWebSiteSlotResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getAzureWebSitesSlotListSpaces"></a>
# **getAzureWebSitesSlotListSpaces**
> List getAzureWebSitesSlotListSpaces(baseSpaceId, id, resourceGroupName, webSiteName)



    Lists the slots associated with an Azure Web Site.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **id** | **String**| The account id | [default to null]
 **resourceGroupName** | **String**| Azure resource group name | [default to null]
 **webSiteName** | **String**| Website name | [default to null]

### Return type

[**List**](../model/AzureWebSiteSlotResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="indexAccounts"></a>
# **indexAccounts**
> AccountResourceCollection indexAccounts(skip, take)

Get a list of AccountResources

    Lists accounts in the supplied Octopus Deploy Space in pages. The results will be sorted alphabetically by name.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **skip** | **Integer**| Number of items to skip | [optional] [default to null]
 **take** | **Integer**| Number of items to take | [optional] [default to null]

### Return type

[**AccountResourceCollection**](../model/AccountResourceCollection.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="indexAccountsSpaces"></a>
# **indexAccountsSpaces**
> AccountResourceCollection indexAccountsSpaces(baseSpaceId, skip, take)

Get a list of AccountResources

    Lists accounts in the supplied Octopus Deploy Space in pages. The results will be sorted alphabetically by name.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **skip** | **Integer**| Number of items to skip | [optional] [default to null]
 **take** | **Integer**| Number of items to take | [optional] [default to null]

### Return type

[**AccountResourceCollection**](../model/AccountResourceCollection.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="listAllAccounts"></a>
# **listAllAccounts**
> List listAllAccounts()

Get a list of AccountResources

    Lists all of the accounts in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.

### Parameters
This endpoint does not need any parameter.

### Return type

[**List**](../model/AccountResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="listAllAccountsSpaces"></a>
# **listAllAccountsSpaces**
> List listAllAccountsSpaces(baseSpaceId)

Get a list of AccountResources

    Lists all of the accounts in the supplied Octopus Deploy Space. The results will be sorted alphabetically by name.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]

### Return type

[**List**](../model/AccountResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="updateAccount"></a>
# **updateAccount**
> AccountResource updateAccount(id, body)

Modify a AccountResource by ID

    Modifies an existing account.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the AccountResource to modify | [default to null]
 **body** | [**AccountResource**](../model/AccountResource.md)| The AccountResource resource to create | [optional]

### Return type

[**AccountResource**](../model/AccountResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="updateAccountSpaces"></a>
# **updateAccountSpaces**
> AccountResource updateAccountSpaces(baseSpaceId, id, body)

Modify a AccountResource by ID

    Modifies an existing account.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **id** | **String**| ID of the AccountResource to modify | [default to null]
 **body** | [**AccountResource**](../model/AccountResource.md)| The AccountResource resource to create | [optional]

### Return type

[**AccountResource**](../model/AccountResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

