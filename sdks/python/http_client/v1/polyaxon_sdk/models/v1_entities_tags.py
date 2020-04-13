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


class V1EntitiesTags(object):
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
    swagger_types = {"uuids": "list[str]", "tags": "list[str]"}

    attribute_map = {"uuids": "uuids", "tags": "tags"}

    def __init__(self, uuids=None, tags=None):  # noqa: E501
        """V1EntitiesTags - a model defined in Swagger"""  # noqa: E501

        self._uuids = None
        self._tags = None
        self.discriminator = None

        if uuids is not None:
            self.uuids = uuids
        if tags is not None:
            self.tags = tags

    @property
    def uuids(self):
        """Gets the uuids of this V1EntitiesTags.  # noqa: E501


        :return: The uuids of this V1EntitiesTags.  # noqa: E501
        :rtype: list[str]
        """
        return self._uuids

    @uuids.setter
    def uuids(self, uuids):
        """Sets the uuids of this V1EntitiesTags.


        :param uuids: The uuids of this V1EntitiesTags.  # noqa: E501
        :type: list[str]
        """

        self._uuids = uuids

    @property
    def tags(self):
        """Gets the tags of this V1EntitiesTags.  # noqa: E501


        :return: The tags of this V1EntitiesTags.  # noqa: E501
        :rtype: list[str]
        """
        return self._tags

    @tags.setter
    def tags(self, tags):
        """Sets the tags of this V1EntitiesTags.


        :param tags: The tags of this V1EntitiesTags.  # noqa: E501
        :type: list[str]
        """

        self._tags = tags

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
        if issubclass(V1EntitiesTags, dict):
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
        if not isinstance(other, V1EntitiesTags):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other
