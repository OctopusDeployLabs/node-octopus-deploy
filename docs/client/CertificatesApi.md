# CertificatesApi

All URIs are relative to *http://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createCertificate**](CertificatesApi.md#createCertificate) | **POST** /certificates | Create a CertificateResource
[**createCertificateArchive**](CertificatesApi.md#createCertificateArchive) | **POST** /certificates/{id}/archive | 
[**createCertificateArchiveSpaces**](CertificatesApi.md#createCertificateArchiveSpaces) | **POST** /{baseSpaceId}/certificates/{id}/archive | 
[**createCertificateCreateSelfSigned**](CertificatesApi.md#createCertificateCreateSelfSigned) | **POST** /certificates/generate | 
[**createCertificateCreateSelfSignedSpaces**](CertificatesApi.md#createCertificateCreateSelfSignedSpaces) | **POST** /{baseSpaceId}/certificates/generate | 
[**createCertificateReplace**](CertificatesApi.md#createCertificateReplace) | **POST** /certificates/{id}/replace | 
[**createCertificateReplaceSpaces**](CertificatesApi.md#createCertificateReplaceSpaces) | **POST** /{baseSpaceId}/certificates/{id}/replace | 
[**createCertificateSpaces**](CertificatesApi.md#createCertificateSpaces) | **POST** /{baseSpaceId}/certificates | Create a CertificateResource
[**createCertificateUnArchive**](CertificatesApi.md#createCertificateUnArchive) | **POST** /certificates/{id}/unarchive | 
[**createCertificateUnArchiveSpaces**](CertificatesApi.md#createCertificateUnArchiveSpaces) | **POST** /{baseSpaceId}/certificates/{id}/unarchive | 
[**deleteCertificate**](CertificatesApi.md#deleteCertificate) | **DELETE** /certificates/{id} | Delete a CertificateResource by ID
[**deleteCertificateSpaces**](CertificatesApi.md#deleteCertificateSpaces) | **DELETE** /{baseSpaceId}/certificates/{id} | Delete a CertificateResource by ID
[**getCertificateByIdOrThumbprint**](CertificatesApi.md#getCertificateByIdOrThumbprint) | **GET** /certificates/{id} | 
[**getCertificateByIdOrThumbprintSpaces**](CertificatesApi.md#getCertificateByIdOrThumbprintSpaces) | **GET** /{baseSpaceId}/certificates/{id} | 
[**getCertificateExport**](CertificatesApi.md#getCertificateExport) | **GET** /certificates/{id}/export | 
[**getCertificateExportSpaces**](CertificatesApi.md#getCertificateExportSpaces) | **GET** /{baseSpaceId}/certificates/{id}/export | 
[**getCertificateUsage**](CertificatesApi.md#getCertificateUsage) | **GET** /certificates/{id}/usages | 
[**getCertificateUsageSpaces**](CertificatesApi.md#getCertificateUsageSpaces) | **GET** /{baseSpaceId}/certificates/{id}/usages | 
[**indexCertificates**](CertificatesApi.md#indexCertificates) | **GET** /certificates | Get a list of CertificateResources
[**indexCertificatesSpaces**](CertificatesApi.md#indexCertificatesSpaces) | **GET** /{baseSpaceId}/certificates | Get a list of CertificateResources
[**listAllCertificates**](CertificatesApi.md#listAllCertificates) | **GET** /certificates/all | Get a list of Certificates
[**listAllCertificatesSpaces**](CertificatesApi.md#listAllCertificatesSpaces) | **GET** /{baseSpaceId}/certificates/all | Get a list of Certificates
[**updateCertificate**](CertificatesApi.md#updateCertificate) | **PUT** /certificates/{id} | Modify a CertificateResource by ID
[**updateCertificateSpaces**](CertificatesApi.md#updateCertificateSpaces) | **PUT** /{baseSpaceId}/certificates/{id} | Modify a CertificateResource by ID


<a name="createCertificate"></a>
# **createCertificate**
> CertificateResource createCertificate(body)

Create a CertificateResource

    Adds a new certificate

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CertificateResource**](../model/CertificateResource.md)| The CertificateResource resource to create | [optional]

### Return type

[**CertificateResource**](../model/CertificateResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="createCertificateArchive"></a>
# **createCertificateArchive**
> createCertificateArchive(id)



    Archives a certificate

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the resource | [default to null]

### Return type

null (empty response body)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="createCertificateArchiveSpaces"></a>
# **createCertificateArchiveSpaces**
> createCertificateArchiveSpaces(baseSpaceId, id)



    Archives a certificate

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **id** | **String**| ID of the resource | [default to null]

### Return type

null (empty response body)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="createCertificateCreateSelfSigned"></a>
# **createCertificateCreateSelfSigned**
> CertificateResource createCertificateCreateSelfSigned()



    Creates a self signed certificate

### Parameters
This endpoint does not need any parameter.

### Return type

[**CertificateResource**](../model/CertificateResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="createCertificateCreateSelfSignedSpaces"></a>
# **createCertificateCreateSelfSignedSpaces**
> CertificateResource createCertificateCreateSelfSignedSpaces(baseSpaceId)



    Creates a self signed certificate

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]

### Return type

[**CertificateResource**](../model/CertificateResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="createCertificateReplace"></a>
# **createCertificateReplace**
> CertificateResource createCertificateReplace(id)



    Replaces a certificate with another

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the resource | [default to null]

### Return type

[**CertificateResource**](../model/CertificateResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="createCertificateReplaceSpaces"></a>
# **createCertificateReplaceSpaces**
> CertificateResource createCertificateReplaceSpaces(baseSpaceId, id)



    Replaces a certificate with another

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **id** | **String**| ID of the resource | [default to null]

### Return type

[**CertificateResource**](../model/CertificateResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="createCertificateSpaces"></a>
# **createCertificateSpaces**
> CertificateResource createCertificateSpaces(baseSpaceId, body)

Create a CertificateResource

    Adds a new certificate

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **body** | [**CertificateResource**](../model/CertificateResource.md)| The CertificateResource resource to create | [optional]

### Return type

[**CertificateResource**](../model/CertificateResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="createCertificateUnArchive"></a>
# **createCertificateUnArchive**
> createCertificateUnArchive(id)



    Un-archives a certificate

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the resource | [default to null]

### Return type

null (empty response body)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="createCertificateUnArchiveSpaces"></a>
# **createCertificateUnArchiveSpaces**
> createCertificateUnArchiveSpaces(baseSpaceId, id)



    Un-archives a certificate

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **id** | **String**| ID of the resource | [default to null]

### Return type

null (empty response body)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="deleteCertificate"></a>
# **deleteCertificate**
> deleteCertificate(id)

Delete a CertificateResource by ID

    Permanently deletes a certificate

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the CertificateResource to delete | [default to null]

### Return type

null (empty response body)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="deleteCertificateSpaces"></a>
# **deleteCertificateSpaces**
> deleteCertificateSpaces(baseSpaceId, id)

Delete a CertificateResource by ID

    Permanently deletes a certificate

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **id** | **String**| ID of the CertificateResource to delete | [default to null]

### Return type

null (empty response body)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="getCertificateByIdOrThumbprint"></a>
# **getCertificateByIdOrThumbprint**
> CertificateResource getCertificateByIdOrThumbprint(id)



    Get a certificate by ID or thumbprint

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID or thumbprint of certificate | [default to null]

### Return type

[**CertificateResource**](../model/CertificateResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getCertificateByIdOrThumbprintSpaces"></a>
# **getCertificateByIdOrThumbprintSpaces**
> CertificateResource getCertificateByIdOrThumbprintSpaces(baseSpaceId, id)



    Get a certificate by ID or thumbprint

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **id** | **String**| ID or thumbprint of certificate | [default to null]

### Return type

[**CertificateResource**](../model/CertificateResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getCertificateExport"></a>
# **getCertificateExport**
> File getCertificateExport(id)



    Exports the certificate

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

<a name="getCertificateExportSpaces"></a>
# **getCertificateExportSpaces**
> File getCertificateExportSpaces(baseSpaceId, id)



    Exports the certificate

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

<a name="getCertificateUsage"></a>
# **getCertificateUsage**
> CertificateUsageResource getCertificateUsage(id)



    Get the usages of a certificate

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the certificate | [default to null]

### Return type

[**CertificateUsageResource**](../model/CertificateUsageResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getCertificateUsageSpaces"></a>
# **getCertificateUsageSpaces**
> CertificateUsageResource getCertificateUsageSpaces(baseSpaceId, id)



    Get the usages of a certificate

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **id** | **String**| ID of the certificate | [default to null]

### Return type

[**CertificateUsageResource**](../model/CertificateUsageResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="indexCertificates"></a>
# **indexCertificates**
> CertificateResourceCollection indexCertificates(skip, take)

Get a list of CertificateResources

    Lists X.509 certificates managed by Octopus

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **skip** | **Integer**| Number of items to skip | [optional] [default to null]
 **take** | **Integer**| Number of items to take | [optional] [default to null]

### Return type

[**CertificateResourceCollection**](../model/CertificateResourceCollection.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="indexCertificatesSpaces"></a>
# **indexCertificatesSpaces**
> CertificateResourceCollection indexCertificatesSpaces(baseSpaceId, skip, take)

Get a list of CertificateResources

    Lists X.509 certificates managed by Octopus

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **skip** | **Integer**| Number of items to skip | [optional] [default to null]
 **take** | **Integer**| Number of items to take | [optional] [default to null]

### Return type

[**CertificateResourceCollection**](../model/CertificateResourceCollection.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="listAllCertificates"></a>
# **listAllCertificates**
> List listAllCertificates(ids)

Get a list of Certificates

    Lists X.509 certificates managed by Octopus.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ids** | [**List**](../model/String.md)| A set of Certificate IDs to retrieve Certificates for. Example: Certificate-101,Certificate-201 | [optional] [default to null]

### Return type

[**List**](../model/CertificateResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="listAllCertificatesSpaces"></a>
# **listAllCertificatesSpaces**
> List listAllCertificatesSpaces(baseSpaceId, ids)

Get a list of Certificates

    Lists X.509 certificates managed by Octopus.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **ids** | [**List**](../model/String.md)| A set of Certificate IDs to retrieve Certificates for. Example: Certificate-101,Certificate-201 | [optional] [default to null]

### Return type

[**List**](../model/CertificateResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="updateCertificate"></a>
# **updateCertificate**
> CertificateResource updateCertificate(id, body)

Modify a CertificateResource by ID

    Modifies an existing certificate

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the CertificateResource to modify | [default to null]
 **body** | [**CertificateResource**](../model/CertificateResource.md)| The CertificateResource resource to create | [optional]

### Return type

[**CertificateResource**](../model/CertificateResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="updateCertificateSpaces"></a>
# **updateCertificateSpaces**
> CertificateResource updateCertificateSpaces(baseSpaceId, id, body)

Modify a CertificateResource by ID

    Modifies an existing certificate

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **id** | **String**| ID of the CertificateResource to modify | [default to null]
 **body** | [**CertificateResource**](../model/CertificateResource.md)| The CertificateResource resource to create | [optional]

### Return type

[**CertificateResource**](../model/CertificateResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

