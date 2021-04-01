# CertificateConfigurationApi

All URIs are relative to *http://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCertificateConfigurationById**](CertificateConfigurationApi.md#getCertificateConfigurationById) | **GET** /configuration/certificates/{id} | Get a Certificate Configuration by ID
[**getCertificateConfigurationByIdLegacy**](CertificateConfigurationApi.md#getCertificateConfigurationByIdLegacy) | **GET** /certificates/certificate-global | 
[**getCertificatePublicCerDownload**](CertificateConfigurationApi.md#getCertificatePublicCerDownload) | **GET** /configuration/certificates/{id}/public-cer | 
[**indexCertificateConfigurations**](CertificateConfigurationApi.md#indexCertificateConfigurations) | **GET** /configuration/certificates | Get a list of CertificateConfigurationResources


<a name="getCertificateConfigurationById"></a>
# **getCertificateConfigurationById**
> CertificateConfigurationResource getCertificateConfigurationById(id)

Get a Certificate Configuration by ID

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the CertificateConfiguration to load | [default to null]

### Return type

[**CertificateConfigurationResource**](../model/CertificateConfigurationResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getCertificateConfigurationByIdLegacy"></a>
# **getCertificateConfigurationByIdLegacy**
> CertificateConfigurationResource getCertificateConfigurationByIdLegacy()



    Returns the server thumbprint used to identify this Octopus Server to any Tentacles when executing a deployment. Deprecated.

### Parameters
This endpoint does not need any parameter.

### Return type

[**CertificateConfigurationResource**](../model/CertificateConfigurationResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getCertificatePublicCerDownload"></a>
# **getCertificatePublicCerDownload**
> File getCertificatePublicCerDownload(id)



    Downloads the public portion of the certificate in .cer format

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

<a name="indexCertificateConfigurations"></a>
# **indexCertificateConfigurations**
> CertificateConfigurationResourceCollection indexCertificateConfigurations(skip, take)

Get a list of CertificateConfigurationResources

    Lists all of the X509 certificates in the current Octopus Deploy installation.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **skip** | **Integer**| Number of items to skip | [optional] [default to null]
 **take** | **Integer**| Number of items to take | [optional] [default to null]

### Return type

[**CertificateConfigurationResourceCollection**](../model/CertificateConfigurationResourceCollection.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

