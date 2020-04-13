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


from __future__ import absolute_import

import unittest

import polyaxon_sdk
from polyaxon_sdk.api.project_searches_v1_api import ProjectSearchesV1Api  # noqa: E501
from polyaxon_sdk.rest import ApiException


class TestProjectSearchesV1Api(unittest.TestCase):
    """ProjectSearchesV1Api unit test stubs"""

    def setUp(self):
        self.api = (
            polyaxon_sdk.api.project_searches_v1_api.ProjectSearchesV1Api()
        )  # noqa: E501

    def tearDown(self):
        pass

    def test_create_project_search(self):
        """Test case for create_project_search

        Create project search  # noqa: E501
        """
        pass

    def test_delete_project_search(self):
        """Test case for delete_project_search

        Delete project search  # noqa: E501
        """
        pass

    def test_get_project_search(self):
        """Test case for get_project_search

        Get project search  # noqa: E501
        """
        pass

    def test_list_project_search_names(self):
        """Test case for list_project_search_names

        List project search names  # noqa: E501
        """
        pass

    def test_list_project_searches(self):
        """Test case for list_project_searches

        List project searches  # noqa: E501
        """
        pass

    def test_patch_project_search(self):
        """Test case for patch_project_search

        Patch project search  # noqa: E501
        """
        pass

    def test_promote_project_search(self):
        """Test case for promote_project_search

        Promote project search  # noqa: E501
        """
        pass

    def test_update_project_search(self):
        """Test case for update_project_search

        Update project search  # noqa: E501
        """
        pass


if __name__ == "__main__":
    unittest.main()
