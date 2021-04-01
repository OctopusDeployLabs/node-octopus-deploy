# UserOnboardingApi

All URIs are relative to *http://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getOnboarding**](UserOnboardingApi.md#getOnboarding) | **GET** /useronboarding | 
[**getOnboardingSpaces**](UserOnboardingApi.md#getOnboardingSpaces) | **GET** /{baseSpaceId}/useronboarding | 


<a name="getOnboarding"></a>
# **getOnboarding**
> OnboardingResource getOnboarding()



    Gets information about how far the Octopus Server is towards having its first release deployed.

### Parameters
This endpoint does not need any parameter.

### Return type

[**OnboardingResource**](../model/OnboardingResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getOnboardingSpaces"></a>
# **getOnboardingSpaces**
> OnboardingResource getOnboardingSpaces(baseSpaceId)



    Gets information about how far the Octopus Server is towards having its first release deployed.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]

### Return type

[**OnboardingResource**](../model/OnboardingResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

