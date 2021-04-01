# OctopusServerNodesApi

All URIs are relative to *http://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteOctopusServerNode**](OctopusServerNodesApi.md#deleteOctopusServerNode) | **DELETE** /octopusservernodes/{id} | Delete a OctopusServerNodeResource by ID
[**getAllOctopusServerNodes**](OctopusServerNodesApi.md#getAllOctopusServerNodes) | **GET** /octopusservernodes/all | Get all Octopus Server Nodes
[**getAllOctopusServerNodesSpaces**](OctopusServerNodesApi.md#getAllOctopusServerNodesSpaces) | **GET** /{baseSpaceId}/octopusservernodes/all | Get all Octopus Server Nodes
[**getLoadBalancerPing**](OctopusServerNodesApi.md#getLoadBalancerPing) | **GET** /octopusservernodes/ping | 
[**getOctopusServerClusterSummary**](OctopusServerNodesApi.md#getOctopusServerClusterSummary) | **GET** /octopusservernodes/summary | 
[**getOctopusServerNodeById**](OctopusServerNodesApi.md#getOctopusServerNodeById) | **GET** /octopusservernodes/{id} | Get an Octopus Server Node by ID
[**getOctopusServerNodeDetails**](OctopusServerNodesApi.md#getOctopusServerNodeDetails) | **GET** /octopusservernodes/{id}/details | 
[**indexOctopusServerNodes**](OctopusServerNodesApi.md#indexOctopusServerNodes) | **GET** /octopusservernodes | Get a list of OctopusServerNodeResources
[**updateOctopusServerNode**](OctopusServerNodesApi.md#updateOctopusServerNode) | **PUT** /octopusservernodes/{id} | Modify a OctopusServerNodeResource by ID


<a name="deleteOctopusServerNode"></a>
# **deleteOctopusServerNode**
> deleteOctopusServerNode(id)

Delete a OctopusServerNodeResource by ID

    Deletes an Octopus Server node.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the OctopusServerNodeResource to delete | [default to null]

### Return type

null (empty response body)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="getAllOctopusServerNodes"></a>
# **getAllOctopusServerNodes**
> List getAllOctopusServerNodes()

Get all Octopus Server Nodes

    Lists the name and ID of all Octopus Server nodes.

### Parameters
This endpoint does not need any parameter.

### Return type

[**List**](../model/OctopusServerNodeResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getAllOctopusServerNodesSpaces"></a>
# **getAllOctopusServerNodesSpaces**
> List getAllOctopusServerNodesSpaces(baseSpaceId)

Get all Octopus Server Nodes

    Lists the name and ID of all Octopus Server nodes.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]

### Return type

[**List**](../model/OctopusServerNodeResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getLoadBalancerPing"></a>
# **getLoadBalancerPing**
> getLoadBalancerPing()



    Returns HTTP ImATeapot (418) when the Octopus Server node is draining or offline, otherwise HTTP OK (200). Always returns the node information in the body.

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="getOctopusServerClusterSummary"></a>
# **getOctopusServerClusterSummary**
> getOctopusServerClusterSummary()



    Returns all nodes, with status information

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="getOctopusServerNodeById"></a>
# **getOctopusServerNodeById**
> OctopusServerNodeResource getOctopusServerNodeById(id)

Get an Octopus Server Node by ID

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the OctopusServerNode to load | [default to null]

### Return type

[**OctopusServerNodeResource**](../model/OctopusServerNodeResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getOctopusServerNodeDetails"></a>
# **getOctopusServerNodeDetails**
> OctopusServerNodeDetailsResource getOctopusServerNodeDetails(id)



    A count of the running tasks per node.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the resource | [default to null]

### Return type

[**OctopusServerNodeDetailsResource**](../model/OctopusServerNodeDetailsResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="indexOctopusServerNodes"></a>
# **indexOctopusServerNodes**
> OctopusServerNodeResourceCollection indexOctopusServerNodes(skip, take)

Get a list of OctopusServerNodeResources

    List all of the Octopus Server nodes participating in the current Octopus Server cluster.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **skip** | **Integer**| Number of items to skip | [optional] [default to null]
 **take** | **Integer**| Number of items to take | [optional] [default to null]

### Return type

[**OctopusServerNodeResourceCollection**](../model/OctopusServerNodeResourceCollection.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="updateOctopusServerNode"></a>
# **updateOctopusServerNode**
> OctopusServerNodeResource updateOctopusServerNode(id, body)

Modify a OctopusServerNodeResource by ID

    Modifies an Octopus Server node.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the OctopusServerNodeResource to modify | [default to null]
 **body** | [**OctopusServerNodeResource**](../model/OctopusServerNodeResource.md)| The OctopusServerNodeResource resource to create | [optional]

### Return type

[**OctopusServerNodeResource**](../model/OctopusServerNodeResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

