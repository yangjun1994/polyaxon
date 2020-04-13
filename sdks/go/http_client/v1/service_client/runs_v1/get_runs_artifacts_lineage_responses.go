// Copyright 2018-2020 Polyaxon, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// Code generated by go-swagger; DO NOT EDIT.

package runs_v1

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"fmt"
	"io"

	"github.com/go-openapi/runtime"
	"github.com/go-openapi/strfmt"

	"github.com/polyaxon/polyaxon/sdks/go/http_client/v1/service_model"
)

// GetRunsArtifactsLineageReader is a Reader for the GetRunsArtifactsLineage structure.
type GetRunsArtifactsLineageReader struct {
	formats strfmt.Registry
}

// ReadResponse reads a server response into the received o.
func (o *GetRunsArtifactsLineageReader) ReadResponse(response runtime.ClientResponse, consumer runtime.Consumer) (interface{}, error) {
	switch response.Code() {
	case 200:
		result := NewGetRunsArtifactsLineageOK()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 204:
		result := NewGetRunsArtifactsLineageNoContent()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 403:
		result := NewGetRunsArtifactsLineageForbidden()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 404:
		result := NewGetRunsArtifactsLineageNotFound()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	default:
		result := NewGetRunsArtifactsLineageDefault(response.Code())
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		if response.Code()/100 == 2 {
			return result, nil
		}
		return nil, result
	}
}

// NewGetRunsArtifactsLineageOK creates a GetRunsArtifactsLineageOK with default headers values
func NewGetRunsArtifactsLineageOK() *GetRunsArtifactsLineageOK {
	return &GetRunsArtifactsLineageOK{}
}

/*GetRunsArtifactsLineageOK handles this case with default header values.

A successful response.
*/
type GetRunsArtifactsLineageOK struct {
	Payload *service_model.V1ListRunArtifactsResponse
}

func (o *GetRunsArtifactsLineageOK) Error() string {
	return fmt.Sprintf("[GET /api/v1/{owner}/{project}/runs/artifacts_lineage][%d] getRunsArtifactsLineageOK  %+v", 200, o.Payload)
}

func (o *GetRunsArtifactsLineageOK) GetPayload() *service_model.V1ListRunArtifactsResponse {
	return o.Payload
}

func (o *GetRunsArtifactsLineageOK) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(service_model.V1ListRunArtifactsResponse)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewGetRunsArtifactsLineageNoContent creates a GetRunsArtifactsLineageNoContent with default headers values
func NewGetRunsArtifactsLineageNoContent() *GetRunsArtifactsLineageNoContent {
	return &GetRunsArtifactsLineageNoContent{}
}

/*GetRunsArtifactsLineageNoContent handles this case with default header values.

No content.
*/
type GetRunsArtifactsLineageNoContent struct {
	Payload interface{}
}

func (o *GetRunsArtifactsLineageNoContent) Error() string {
	return fmt.Sprintf("[GET /api/v1/{owner}/{project}/runs/artifacts_lineage][%d] getRunsArtifactsLineageNoContent  %+v", 204, o.Payload)
}

func (o *GetRunsArtifactsLineageNoContent) GetPayload() interface{} {
	return o.Payload
}

func (o *GetRunsArtifactsLineageNoContent) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewGetRunsArtifactsLineageForbidden creates a GetRunsArtifactsLineageForbidden with default headers values
func NewGetRunsArtifactsLineageForbidden() *GetRunsArtifactsLineageForbidden {
	return &GetRunsArtifactsLineageForbidden{}
}

/*GetRunsArtifactsLineageForbidden handles this case with default header values.

You don't have permission to access the resource.
*/
type GetRunsArtifactsLineageForbidden struct {
	Payload interface{}
}

func (o *GetRunsArtifactsLineageForbidden) Error() string {
	return fmt.Sprintf("[GET /api/v1/{owner}/{project}/runs/artifacts_lineage][%d] getRunsArtifactsLineageForbidden  %+v", 403, o.Payload)
}

func (o *GetRunsArtifactsLineageForbidden) GetPayload() interface{} {
	return o.Payload
}

func (o *GetRunsArtifactsLineageForbidden) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewGetRunsArtifactsLineageNotFound creates a GetRunsArtifactsLineageNotFound with default headers values
func NewGetRunsArtifactsLineageNotFound() *GetRunsArtifactsLineageNotFound {
	return &GetRunsArtifactsLineageNotFound{}
}

/*GetRunsArtifactsLineageNotFound handles this case with default header values.

Resource does not exist.
*/
type GetRunsArtifactsLineageNotFound struct {
	Payload interface{}
}

func (o *GetRunsArtifactsLineageNotFound) Error() string {
	return fmt.Sprintf("[GET /api/v1/{owner}/{project}/runs/artifacts_lineage][%d] getRunsArtifactsLineageNotFound  %+v", 404, o.Payload)
}

func (o *GetRunsArtifactsLineageNotFound) GetPayload() interface{} {
	return o.Payload
}

func (o *GetRunsArtifactsLineageNotFound) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewGetRunsArtifactsLineageDefault creates a GetRunsArtifactsLineageDefault with default headers values
func NewGetRunsArtifactsLineageDefault(code int) *GetRunsArtifactsLineageDefault {
	return &GetRunsArtifactsLineageDefault{
		_statusCode: code,
	}
}

/*GetRunsArtifactsLineageDefault handles this case with default header values.

An unexpected error response
*/
type GetRunsArtifactsLineageDefault struct {
	_statusCode int

	Payload *service_model.RuntimeError
}

// Code gets the status code for the get runs artifacts lineage default response
func (o *GetRunsArtifactsLineageDefault) Code() int {
	return o._statusCode
}

func (o *GetRunsArtifactsLineageDefault) Error() string {
	return fmt.Sprintf("[GET /api/v1/{owner}/{project}/runs/artifacts_lineage][%d] GetRunsArtifactsLineage default  %+v", o._statusCode, o.Payload)
}

func (o *GetRunsArtifactsLineageDefault) GetPayload() *service_model.RuntimeError {
	return o.Payload
}

func (o *GetRunsArtifactsLineageDefault) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(service_model.RuntimeError)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}
