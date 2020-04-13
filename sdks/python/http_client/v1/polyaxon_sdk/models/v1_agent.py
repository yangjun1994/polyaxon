#!/usr/bin/python
#
# Copyright 2018-2020 Polyaxon, Inc.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#      http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

# coding: utf-8

"""
    Polyaxon SDKs and REST API specification.

    Polyaxon SDKs and REST API specification.  # noqa: E501

    OpenAPI spec version: 1.0.75
    Contact: contact@polyaxon.com
    Generated by: https://github.com/swagger-api/swagger-codegen.git
"""


import pprint
import re  # noqa: F401

import six


class V1Agent(object):
    """NOTE: This class is auto generated by the swagger code generator program.

    Do not edit the class manually.
    """

    """
    Attributes:
      swagger_types (dict): The key is attribute name
                            and the value is attribute type.
      attribute_map (dict): The key is attribute name
                            and the value is json key in definition.
    """
    swagger_types = {
        "uuid": "str",
        "name": "str",
        "description": "str",
        "tags": "list[str]",
        "disabled": "bool",
        "deleted": "bool",
        "namespace": "str",
        "version_api": "object",
        "content": "str",
        "concurrency": "int",
        "created_at": "datetime",
        "updated_at": "datetime",
        "status": "V1Statuses",
    }

    attribute_map = {
        "uuid": "uuid",
        "name": "name",
        "description": "description",
        "tags": "tags",
        "disabled": "disabled",
        "deleted": "deleted",
        "namespace": "namespace",
        "version_api": "version_api",
        "content": "content",
        "concurrency": "concurrency",
        "created_at": "created_at",
        "updated_at": "updated_at",
        "status": "status",
    }

    def __init__(
        self,
        uuid=None,
        name=None,
        description=None,
        tags=None,
        disabled=None,
        deleted=None,
        namespace=None,
        version_api=None,
        content=None,
        concurrency=None,
        created_at=None,
        updated_at=None,
        status=None,
    ):  # noqa: E501
        """V1Agent - a model defined in Swagger"""  # noqa: E501

        self._uuid = None
        self._name = None
        self._description = None
        self._tags = None
        self._disabled = None
        self._deleted = None
        self._namespace = None
        self._version_api = None
        self._content = None
        self._concurrency = None
        self._created_at = None
        self._updated_at = None
        self._status = None
        self.discriminator = None

        if uuid is not None:
            self.uuid = uuid
        if name is not None:
            self.name = name
        if description is not None:
            self.description = description
        if tags is not None:
            self.tags = tags
        if disabled is not None:
            self.disabled = disabled
        if deleted is not None:
            self.deleted = deleted
        if namespace is not None:
            self.namespace = namespace
        if version_api is not None:
            self.version_api = version_api
        if content is not None:
            self.content = content
        if concurrency is not None:
            self.concurrency = concurrency
        if created_at is not None:
            self.created_at = created_at
        if updated_at is not None:
            self.updated_at = updated_at
        if status is not None:
            self.status = status

    @property
    def uuid(self):
        """Gets the uuid of this V1Agent.  # noqa: E501


        :return: The uuid of this V1Agent.  # noqa: E501
        :rtype: str
        """
        return self._uuid

    @uuid.setter
    def uuid(self, uuid):
        """Sets the uuid of this V1Agent.


        :param uuid: The uuid of this V1Agent.  # noqa: E501
        :type: str
        """

        self._uuid = uuid

    @property
    def name(self):
        """Gets the name of this V1Agent.  # noqa: E501


        :return: The name of this V1Agent.  # noqa: E501
        :rtype: str
        """
        return self._name

    @name.setter
    def name(self, name):
        """Sets the name of this V1Agent.


        :param name: The name of this V1Agent.  # noqa: E501
        :type: str
        """

        self._name = name

    @property
    def description(self):
        """Gets the description of this V1Agent.  # noqa: E501


        :return: The description of this V1Agent.  # noqa: E501
        :rtype: str
        """
        return self._description

    @description.setter
    def description(self, description):
        """Sets the description of this V1Agent.


        :param description: The description of this V1Agent.  # noqa: E501
        :type: str
        """

        self._description = description

    @property
    def tags(self):
        """Gets the tags of this V1Agent.  # noqa: E501


        :return: The tags of this V1Agent.  # noqa: E501
        :rtype: list[str]
        """
        return self._tags

    @tags.setter
    def tags(self, tags):
        """Sets the tags of this V1Agent.


        :param tags: The tags of this V1Agent.  # noqa: E501
        :type: list[str]
        """

        self._tags = tags

    @property
    def disabled(self):
        """Gets the disabled of this V1Agent.  # noqa: E501


        :return: The disabled of this V1Agent.  # noqa: E501
        :rtype: bool
        """
        return self._disabled

    @disabled.setter
    def disabled(self, disabled):
        """Sets the disabled of this V1Agent.


        :param disabled: The disabled of this V1Agent.  # noqa: E501
        :type: bool
        """

        self._disabled = disabled

    @property
    def deleted(self):
        """Gets the deleted of this V1Agent.  # noqa: E501


        :return: The deleted of this V1Agent.  # noqa: E501
        :rtype: bool
        """
        return self._deleted

    @deleted.setter
    def deleted(self, deleted):
        """Sets the deleted of this V1Agent.


        :param deleted: The deleted of this V1Agent.  # noqa: E501
        :type: bool
        """

        self._deleted = deleted

    @property
    def namespace(self):
        """Gets the namespace of this V1Agent.  # noqa: E501


        :return: The namespace of this V1Agent.  # noqa: E501
        :rtype: str
        """
        return self._namespace

    @namespace.setter
    def namespace(self, namespace):
        """Sets the namespace of this V1Agent.


        :param namespace: The namespace of this V1Agent.  # noqa: E501
        :type: str
        """

        self._namespace = namespace

    @property
    def version_api(self):
        """Gets the version_api of this V1Agent.  # noqa: E501


        :return: The version_api of this V1Agent.  # noqa: E501
        :rtype: object
        """
        return self._version_api

    @version_api.setter
    def version_api(self, version_api):
        """Sets the version_api of this V1Agent.


        :param version_api: The version_api of this V1Agent.  # noqa: E501
        :type: object
        """

        self._version_api = version_api

    @property
    def content(self):
        """Gets the content of this V1Agent.  # noqa: E501


        :return: The content of this V1Agent.  # noqa: E501
        :rtype: str
        """
        return self._content

    @content.setter
    def content(self, content):
        """Sets the content of this V1Agent.


        :param content: The content of this V1Agent.  # noqa: E501
        :type: str
        """

        self._content = content

    @property
    def concurrency(self):
        """Gets the concurrency of this V1Agent.  # noqa: E501


        :return: The concurrency of this V1Agent.  # noqa: E501
        :rtype: int
        """
        return self._concurrency

    @concurrency.setter
    def concurrency(self, concurrency):
        """Sets the concurrency of this V1Agent.


        :param concurrency: The concurrency of this V1Agent.  # noqa: E501
        :type: int
        """

        self._concurrency = concurrency

    @property
    def created_at(self):
        """Gets the created_at of this V1Agent.  # noqa: E501


        :return: The created_at of this V1Agent.  # noqa: E501
        :rtype: datetime
        """
        return self._created_at

    @created_at.setter
    def created_at(self, created_at):
        """Sets the created_at of this V1Agent.


        :param created_at: The created_at of this V1Agent.  # noqa: E501
        :type: datetime
        """

        self._created_at = created_at

    @property
    def updated_at(self):
        """Gets the updated_at of this V1Agent.  # noqa: E501


        :return: The updated_at of this V1Agent.  # noqa: E501
        :rtype: datetime
        """
        return self._updated_at

    @updated_at.setter
    def updated_at(self, updated_at):
        """Sets the updated_at of this V1Agent.


        :param updated_at: The updated_at of this V1Agent.  # noqa: E501
        :type: datetime
        """

        self._updated_at = updated_at

    @property
    def status(self):
        """Gets the status of this V1Agent.  # noqa: E501


        :return: The status of this V1Agent.  # noqa: E501
        :rtype: V1Statuses
        """
        return self._status

    @status.setter
    def status(self, status):
        """Sets the status of this V1Agent.


        :param status: The status of this V1Agent.  # noqa: E501
        :type: V1Statuses
        """

        self._status = status

    def to_dict(self):
        """Returns the model properties as a dict"""
        result = {}

        for attr, _ in six.iteritems(self.swagger_types):
            value = getattr(self, attr)
            if isinstance(value, list):
                result[attr] = list(
                    map(lambda x: x.to_dict() if hasattr(x, "to_dict") else x, value)
                )
            elif hasattr(value, "to_dict"):
                result[attr] = value.to_dict()
            elif isinstance(value, dict):
                result[attr] = dict(
                    map(
                        lambda item: (item[0], item[1].to_dict())
                        if hasattr(item[1], "to_dict")
                        else item,
                        value.items(),
                    )
                )
            else:
                result[attr] = value
        if issubclass(V1Agent, dict):
            for key, value in self.items():
                result[key] = value

        return result

    def to_str(self):
        """Returns the string representation of the model"""
        return pprint.pformat(self.to_dict())

    def __repr__(self):
        """For `print` and `pprint`"""
        return self.to_str()

    def __eq__(self, other):
        """Returns true if both objects are equal"""
        if not isinstance(other, V1Agent):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other
