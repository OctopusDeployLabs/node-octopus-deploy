# TasksApi

All URIs are relative to *http://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createTask**](TasksApi.md#createTask) | **POST** /tasks | Create a TaskResource
[**createTaskCancel**](TasksApi.md#createTaskCancel) | **POST** /tasks/{id}/cancel | 
[**createTaskCancelSpaces**](TasksApi.md#createTaskCancelSpaces) | **POST** /{baseSpaceId}/tasks/{id}/cancel | 
[**createTaskRerun**](TasksApi.md#createTaskRerun) | **POST** /tasks/rerun/{id} | 
[**createTaskRerunSpaces**](TasksApi.md#createTaskRerunSpaces) | **POST** /{baseSpaceId}/tasks/rerun/{id} | 
[**createTaskSpaces**](TasksApi.md#createTaskSpaces) | **POST** /{baseSpaceId}/tasks | Create a TaskResource
[**createTaskState**](TasksApi.md#createTaskState) | **POST** /tasks/{id}/state | 
[**createTaskStateSpaces**](TasksApi.md#createTaskStateSpaces) | **POST** /{baseSpaceId}/tasks/{id}/state | 
[**getListTaskTypes**](TasksApi.md#getListTaskTypes) | **GET** /tasks/tasktypes | 
[**getListTaskTypesSpaces**](TasksApi.md#getListTaskTypesSpaces) | **GET** /{baseSpaceId}/tasks/tasktypes | 
[**getListTasks**](TasksApi.md#getListTasks) | **GET** /tasks | 
[**getListTasksSpaces**](TasksApi.md#getListTasksSpaces) | **GET** /{baseSpaceId}/tasks | 
[**getTaskById**](TasksApi.md#getTaskById) | **GET** /tasks/{id} | Get a TaskResource by ID
[**getTaskByIdSpaces**](TasksApi.md#getTaskByIdSpaces) | **GET** /{baseSpaceId}/tasks/{id} | Get a TaskResource by ID
[**getTaskDetails**](TasksApi.md#getTaskDetails) | **GET** /tasks/{id}/details | 
[**getTaskDetailsSpaces**](TasksApi.md#getTaskDetailsSpaces) | **GET** /{baseSpaceId}/tasks/{id}/details | 
[**getTaskRaw**](TasksApi.md#getTaskRaw) | **GET** /tasks/{id}/raw | 
[**getTaskRawSpaces**](TasksApi.md#getTaskRawSpaces) | **GET** /{baseSpaceId}/tasks/{id}/raw | 
[**indexTaskQueuedBehind**](TasksApi.md#indexTaskQueuedBehind) | **GET** /tasks/{id}/queued-behind | Get a list of TaskResources for the given TaskResource
[**indexTaskQueuedBehindSpaces**](TasksApi.md#indexTaskQueuedBehindSpaces) | **GET** /{baseSpaceId}/tasks/{id}/queued-behind | Get a list of TaskResources for the given TaskResource


<a name="createTask"></a>
# **createTask**
> TaskResource createTask(body)

Create a TaskResource

    Creates a new task.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**TaskResource**](../model/TaskResource.md)| The TaskResource resource to create | [optional]

### Return type

[**TaskResource**](../model/TaskResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="createTaskCancel"></a>
# **createTaskCancel**
> TaskResource createTaskCancel(id)



    Marks the given task as canceled.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the resource | [default to null]

### Return type

[**TaskResource**](../model/TaskResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="createTaskCancelSpaces"></a>
# **createTaskCancelSpaces**
> TaskResource createTaskCancelSpaces(baseSpaceId, id)



    Marks the given task as canceled.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **id** | **String**| ID of the resource | [default to null]

### Return type

[**TaskResource**](../model/TaskResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="createTaskRerun"></a>
# **createTaskRerun**
> TaskResource createTaskRerun(id)



    Creates a new task and executes it, using a given task as the input. Note that deployment tasks cannot be re-run.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the resource | [default to null]

### Return type

[**TaskResource**](../model/TaskResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="createTaskRerunSpaces"></a>
# **createTaskRerunSpaces**
> TaskResource createTaskRerunSpaces(baseSpaceId, id)



    Creates a new task and executes it, using a given task as the input. Note that deployment tasks cannot be re-run.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **id** | **String**| ID of the resource | [default to null]

### Return type

[**TaskResource**](../model/TaskResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="createTaskSpaces"></a>
# **createTaskSpaces**
> TaskResource createTaskSpaces(baseSpaceId, body)

Create a TaskResource

    Creates a new task.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **body** | [**TaskResource**](../model/TaskResource.md)| The TaskResource resource to create | [optional]

### Return type

[**TaskResource**](../model/TaskResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="createTaskState"></a>
# **createTaskState**
> TaskResource createTaskState(id)



    Change the state of a task

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the resource | [default to null]

### Return type

[**TaskResource**](../model/TaskResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="createTaskStateSpaces"></a>
# **createTaskStateSpaces**
> TaskResource createTaskStateSpaces(baseSpaceId, id)



    Change the state of a task

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **id** | **String**| ID of the resource | [default to null]

### Return type

[**TaskResource**](../model/TaskResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getListTaskTypes"></a>
# **getListTaskTypes**
> List getListTaskTypes()



    Lists supported task types.

### Parameters
This endpoint does not need any parameter.

### Return type

[**List**](../model/TaskTypeResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getListTaskTypesSpaces"></a>
# **getListTaskTypesSpaces**
> List getListTaskTypesSpaces(baseSpaceId)



    Lists supported task types.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]

### Return type

[**List**](../model/TaskTypeResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getListTasks"></a>
# **getListTasks**
> TaskResourceCollection getListTasks()



    Lists all of the tasks in the supplied Octopus Deploy Space. The results will be sorted from newest to oldest.

### Parameters
This endpoint does not need any parameter.

### Return type

[**TaskResourceCollection**](../model/TaskResourceCollection.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getListTasksSpaces"></a>
# **getListTasksSpaces**
> TaskResourceCollection getListTasksSpaces(baseSpaceId)



    Lists all of the tasks in the supplied Octopus Deploy Space. The results will be sorted from newest to oldest.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]

### Return type

[**TaskResourceCollection**](../model/TaskResourceCollection.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getTaskById"></a>
# **getTaskById**
> TaskResource getTaskById(id)

Get a TaskResource by ID

    Gets a single task by ID.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the TaskResource to load | [default to null]

### Return type

[**TaskResource**](../model/TaskResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getTaskByIdSpaces"></a>
# **getTaskByIdSpaces**
> TaskResource getTaskByIdSpaces(baseSpaceId, id)

Get a TaskResource by ID

    Gets a single task by ID.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **id** | **String**| ID of the TaskResource to load | [default to null]

### Return type

[**TaskResource**](../model/TaskResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getTaskDetails"></a>
# **getTaskDetails**
> TaskDetailsResource getTaskDetails(id)



    Gets a single task by ID, including the full task log as a tree of activity elements.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the resource | [default to null]

### Return type

[**TaskDetailsResource**](../model/TaskDetailsResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getTaskDetailsSpaces"></a>
# **getTaskDetailsSpaces**
> TaskDetailsResource getTaskDetailsSpaces(baseSpaceId, id)



    Gets a single task by ID, including the full task log as a tree of activity elements.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **id** | **String**| ID of the resource | [default to null]

### Return type

[**TaskDetailsResource**](../model/TaskDetailsResource.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getTaskRaw"></a>
# **getTaskRaw**
> getTaskRaw(id)



    Gets the full task log of a given resource as plain text. Useful when the log needs to be rendered to a console or sent as an email attachment.

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

<a name="getTaskRawSpaces"></a>
# **getTaskRawSpaces**
> getTaskRawSpaces(baseSpaceId, id)



    Gets the full task log of a given resource as plain text. Useful when the log needs to be rendered to a console or sent as an email attachment.

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

<a name="indexTaskQueuedBehind"></a>
# **indexTaskQueuedBehind**
> TaskResourceCollection indexTaskQueuedBehind(id, skip, take)

Get a list of TaskResources for the given TaskResource

    Gets a list of tasks that this task is currently queued behind.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the Task | [default to null]
 **skip** | **Integer**| Number of items to skip | [optional] [default to null]
 **take** | **Integer**| Number of items per page | [optional] [default to null]

### Return type

[**TaskResourceCollection**](../model/TaskResourceCollection.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="indexTaskQueuedBehindSpaces"></a>
# **indexTaskQueuedBehindSpaces**
> TaskResourceCollection indexTaskQueuedBehindSpaces(baseSpaceId, id, skip, take)

Get a list of TaskResources for the given TaskResource

    Gets a list of tasks that this task is currently queued behind.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseSpaceId** | **String**| ID of the space | [default to null]
 **id** | **String**| ID of the Task | [default to null]
 **skip** | **Integer**| Number of items to skip | [optional] [default to null]
 **take** | **Integer**| Number of items per page | [optional] [default to null]

### Return type

[**TaskResourceCollection**](../model/TaskResourceCollection.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [APIKeyQuery](../README.md#APIKeyQuery), [NugetApiKeyHeader](../README.md#NugetApiKeyHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

