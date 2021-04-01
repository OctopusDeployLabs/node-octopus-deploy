# PackagesApi

All URIs are relative to *http://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createPackageRepositoryDeltaUpload**](PackagesApi.md#createPackageRepositoryDeltaUpload) | **POST** /packages/{packageId}/{baseVersion}/delta | 
[**createPackageRepositoryDeltaUploadSpaces**](PackagesApi.md#createPackageRepositoryDeltaUploadSpaces) | **POST** /{baseSpaceId}/packages/{packageId}/{baseVersion}/delta | 
[**createPackageRepositoryUpload**](PackagesApi.md#createPackageRepositoryUpload) | **POST** /packages/raw | 
[**createPackageRepositoryUploadSpaces**](PackagesApi.md#createPackageRepositoryUploadSpaces) | **POST** /{baseSpaceId}/packages/raw | 
[**deletePackageRepositoryDeleteById**](PackagesApi.md#deletePackageRepositoryDeleteById) | **DELETE** /packages/{id} | 
[**deletePackageRepositoryDeleteByIdSpaces**](PackagesApi.md#deletePackageRepositoryDeleteByIdSpaces) | **DELETE** /{baseSpaceId}/packages/{id} | 
[**deletePackageRepositoryDeleteByIds**](PackagesApi.md#deletePackageRepositoryDeleteByIds) | **DELETE** /packages/bulk | 
[**deletePackageRepositoryDeleteByIdsSpaces**](PackagesApi.md#deletePackageRepositoryDeleteByIdsSpaces) | **DELETE** /{baseSpaceId}/packages/bulk | 
[**getPackageListNotes**](PackagesApi.md#getPackageListNotes) | **GET** /packages/notes | 
[**getPackageListNotesSpaces**](PackagesApi.md#getPackageListNotesSpaces) | **GET** /{baseSpaceId}/packages/notes | 
[**getPackageNotes**](PackagesApi.md#getPackageNotes) | **GET** /feeds/{id}/packages/notes | 
[**getPackageNotesSpaces**](PackagesApi.md#getPackageNotesSpaces) | **GET** /{baseSpaceId}/feeds/{id}/packages/notes | 
[**getPackageRepository**](PackagesApi.md#getPackageRepository) | **GET** /packages/{id} | 
[**getPackageRepositoryDeltaSignature**](PackagesApi.md#getPackageRepositoryDeltaSignature) | **GET** /packages/{packageId}/{version}/delta-signature | 
[**getPackageRepositoryDeltaSignatureSpaces**](PackagesApi.md#getPackageRepositoryDeltaSignatureSpaces) | **GET** /{baseSpaceId}/packages/{packageId}/{version}/delta-signature | 
[**getPackageRepositoryGetRaw**](PackagesApi.md#getPackageRepositoryGetRaw) | **GET** /packages/{id}/raw | 
[**getPackageRepositoryGetRawSpaces**](PackagesApi.md#getPackageRepositoryGetRawSpaces) | **GET** /{baseSpaceId}/packages/{id}/raw | 
[**getPackageRepositoryList**](PackagesApi.md#getPackageRepositoryList) | **GET** /packages | 
[**getPackageRepositoryListSpaces**](PackagesApi.md#getPackageRepositoryListSpaces) | **GET** /{baseSpaceId}/packages | 
[**getPackageRepositorySpaces**](PackagesApi.md#getPackageRepositorySpaces) | **GET** /{baseSpaceId}/packages/{id} | 
[**getPackageSearchActionOld**](PackagesApi.md#getPackageSearchActionOld) | **GET** /feeds/{id}/packages | 
[**getPackageSearchActionOldSpaces**](PackagesApi.md#getPackageSearchActionOldSpaces) | **GET** /{baseSpaceId}/feeds/{id}/packages | 


<a name="createPackageRepositoryDeltaUpload"></a>
# **createPackageRepositoryDeltaUpload**
> createPackageRepositoryDeltaUpload(baseVersion, packageId)



    Uploads a delta patch for the given file. Used to optimize file upload.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseVersion** | **String**| The version of the package that was used to create the signature | [default to null]
 **packageId** | **String**| Package ID of the package to be uploaded | [default to null]

### Return type

null (empty response body)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="createPackageRepositoryDeltaUploadSpaces"></a>
# **createPackageRepositoryDeltaUploadSpaces**
> createPackageRepositoryDeltaUploadSpaces(baseSpaceId, baseVersion, packageId)



    Uploads a delta patch for the given file. Used to optimize file upload.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **baseVersion** | **String**| The version of the package that was used to create the signature | [default to null]
 **packageId** | **String**| Package ID of the package to be uploaded | [default to null]

### Return type

null (empty response body)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="createPackageRepositoryUpload"></a>
# **createPackageRepositoryUpload**
> createPackageRepositoryUpload()



    Uploads a new package

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="createPackageRepositoryUploadSpaces"></a>
# **createPackageRepositoryUploadSpaces**
> createPackageRepositoryUploadSpaces(baseSpaceId)



    Uploads a new package

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]

### Return type

null (empty response body)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="deletePackageRepositoryDeleteById"></a>
# **deletePackageRepositoryDeleteById**
> deletePackageRepositoryDeleteById(id)



    Deletes the specified package

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the package | [default to null]

### Return type

null (empty response body)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="deletePackageRepositoryDeleteByIdSpaces"></a>
# **deletePackageRepositoryDeleteByIdSpaces**
> deletePackageRepositoryDeleteByIdSpaces(baseSpaceId, id)



    Deletes the specified package

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **id** | **String**| ID of the package | [default to null]

### Return type

null (empty response body)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="deletePackageRepositoryDeleteByIds"></a>
# **deletePackageRepositoryDeleteByIds**
> deletePackageRepositoryDeleteByIds(ids)



    Bulk deletes packages

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ids** | **String**| Comma separated list of IDs to be deleted | [default to null]

### Return type

null (empty response body)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="deletePackageRepositoryDeleteByIdsSpaces"></a>
# **deletePackageRepositoryDeleteByIdsSpaces**
> deletePackageRepositoryDeleteByIdsSpaces(baseSpaceId, ids)



    Bulk deletes packages

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **ids** | **String**| Comma separated list of IDs to be deleted | [default to null]

### Return type

null (empty response body)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="getPackageListNotes"></a>
# **getPackageListNotes**
> PackageNoteListResource getPackageListNotes()



    Returns a list of release notes for the specified packages

### Parameters
This endpoint does not need any parameter.

### Return type

[**PackageNoteListResource**](../model/PackageNoteListResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getPackageListNotesSpaces"></a>
# **getPackageListNotesSpaces**
> PackageNoteListResource getPackageListNotesSpaces(baseSpaceId)



    Returns a list of release notes for the specified packages

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]

### Return type

[**PackageNoteListResource**](../model/PackageNoteListResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getPackageNotes"></a>
# **getPackageNotes**
> getPackageNotes(id, packageId, version)



    Returns the release notes for the specified package

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the feed | [default to null]
 **packageId** | **String**| Package Id | [optional] [default to null]
 **version** | **String**| Package Version | [optional] [default to null]

### Return type

null (empty response body)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="getPackageNotesSpaces"></a>
# **getPackageNotesSpaces**
> getPackageNotesSpaces(baseSpaceId, id, packageId, version)



    Returns the release notes for the specified package

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **id** | **String**| ID of the feed | [default to null]
 **packageId** | **String**| Package Id | [optional] [default to null]
 **version** | **String**| Package Version | [optional] [default to null]

### Return type

null (empty response body)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="getPackageRepository"></a>
# **getPackageRepository**
> PackageFromBuiltInFeedResource getPackageRepository(id)



    Returns package information for the specified package id

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the resource | [default to null]

### Return type

[**PackageFromBuiltInFeedResource**](../model/PackageFromBuiltInFeedResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getPackageRepositoryDeltaSignature"></a>
# **getPackageRepositoryDeltaSignature**
> PackageSignatureResource getPackageRepositoryDeltaSignature(packageId, version)



    Returns the delta-signature for a given package. Used to optimize file upload.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **packageId** | **String**| Package ID of the package to be uploaded | [default to null]
 **version** | **String**| The version of the package to be uploaded | [default to null]

### Return type

[**PackageSignatureResource**](../model/PackageSignatureResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getPackageRepositoryDeltaSignatureSpaces"></a>
# **getPackageRepositoryDeltaSignatureSpaces**
> PackageSignatureResource getPackageRepositoryDeltaSignatureSpaces(baseSpaceId, packageId, version)



    Returns the delta-signature for a given package. Used to optimize file upload.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **packageId** | **String**| Package ID of the package to be uploaded | [default to null]
 **version** | **String**| The version of the package to be uploaded | [default to null]

### Return type

[**PackageSignatureResource**](../model/PackageSignatureResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getPackageRepositoryGetRaw"></a>
# **getPackageRepositoryGetRaw**
> File getPackageRepositoryGetRaw(id)



    Downloads the specified package

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
- **Accept**: application/octet-stream

<a name="getPackageRepositoryGetRawSpaces"></a>
# **getPackageRepositoryGetRawSpaces**
> File getPackageRepositoryGetRawSpaces(baseSpaceId, id)



    Downloads the specified package

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
- **Accept**: application/octet-stream

<a name="getPackageRepositoryList"></a>
# **getPackageRepositoryList**
> PackageResourceCollection getPackageRepositoryList()



    Returns a list of packages matching the specified criteria

### Parameters
This endpoint does not need any parameter.

### Return type

[**PackageResourceCollection**](../model/PackageResourceCollection.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getPackageRepositoryListSpaces"></a>
# **getPackageRepositoryListSpaces**
> PackageResourceCollection getPackageRepositoryListSpaces(baseSpaceId)



    Returns a list of packages matching the specified criteria

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]

### Return type

[**PackageResourceCollection**](../model/PackageResourceCollection.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getPackageRepositorySpaces"></a>
# **getPackageRepositorySpaces**
> PackageFromBuiltInFeedResource getPackageRepositorySpaces(baseSpaceId, id)



    Returns package information for the specified package id

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **id** | **String**| ID of the resource | [default to null]

### Return type

[**PackageFromBuiltInFeedResource**](../model/PackageFromBuiltInFeedResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getPackageSearchActionOld"></a>
# **getPackageSearchActionOld**
> List getPackageSearchActionOld(id)



    Searches the specified feed for packages. Legacy. Please use the /feeds{id}/packages/search endpoint instead.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the feed | [default to null]

### Return type

[**List**](../model/PackageResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getPackageSearchActionOldSpaces"></a>
# **getPackageSearchActionOldSpaces**
> List getPackageSearchActionOldSpaces(baseSpaceId, id)



    Searches the specified feed for packages. Legacy. Please use the /feeds{id}/packages/search endpoint instead.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **id** | **String**| ID of the feed | [default to null]

### Return type

[**List**](../model/PackageResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

