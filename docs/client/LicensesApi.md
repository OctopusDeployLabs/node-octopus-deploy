# LicensesApi

All URIs are relative to *http://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getLicenseGetCurrent**](LicensesApi.md#getLicenseGetCurrent) | **GET** /licenses/licenses-current | 
[**getLicenseStatusGetCurrent**](LicensesApi.md#getLicenseStatusGetCurrent) | **GET** /licenses/licenses-current-status | 
[**updateLicensePutCurrent**](LicensesApi.md#updateLicensePutCurrent) | **PUT** /licenses/licenses-current | 


<a name="getLicenseGetCurrent"></a>
# **getLicenseGetCurrent**
> LicenseResource getLicenseGetCurrent()



    Returns the details of the current license in use by the Octopus Cluster.

### Parameters
This endpoint does not need any parameter.

### Return type

[**LicenseResource**](../model/LicenseResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getLicenseStatusGetCurrent"></a>
# **getLicenseStatusGetCurrent**
> LicenseStatusResource getLicenseStatusGetCurrent()



    Calculates the status of the current Octopus license including compliance and maintenance expiry.

### Parameters
This endpoint does not need any parameter.

### Return type

[**LicenseStatusResource**](../model/LicenseStatusResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="updateLicensePutCurrent"></a>
# **updateLicensePutCurrent**
> LicenseResource updateLicensePutCurrent()



    Updates the license for the Octopus cluster.

### Parameters
This endpoint does not need any parameter.

### Return type

[**LicenseResource**](../model/LicenseResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

