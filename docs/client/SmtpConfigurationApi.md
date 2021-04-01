# SmtpConfigurationApi

All URIs are relative to *http://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getSmtpConfiguration**](SmtpConfigurationApi.md#getSmtpConfiguration) | **GET** /smtpconfiguration | 
[**getSmtpIsConfigured**](SmtpConfigurationApi.md#getSmtpIsConfigured) | **GET** /smtpconfiguration/isconfigured | 
[**updateSmtpConfiguration**](SmtpConfigurationApi.md#updateSmtpConfiguration) | **PUT** /smtpconfiguration | 


<a name="getSmtpConfiguration"></a>
# **getSmtpConfiguration**
> getSmtpConfiguration()



    Gets information about the SMTP (email) settings in use by the Octopus Server.

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="getSmtpIsConfigured"></a>
# **getSmtpIsConfigured**
> SmtpIsConfiguredResource getSmtpIsConfigured()



    A low privilege check to determine if SMTP is configured

### Parameters
This endpoint does not need any parameter.

### Return type

[**SmtpIsConfiguredResource**](../model/SmtpIsConfiguredResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="updateSmtpConfiguration"></a>
# **updateSmtpConfiguration**
> updateSmtpConfiguration()



    Updates the SMTP settings used by the Octopus Server.

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

