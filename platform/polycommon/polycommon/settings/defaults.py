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

# Setting values to None means using defaults

from polycommon import pkg

ENCRYPTION_BACKEND = None
CONF_CHECK_OWNERSHIP = True
AUDITOR_BACKEND = None
AUDITOR_EVENTS_TASK = None
WORKERS_BACKEND = None
EXECUTOR_BACKEND = None
WORKERS_SERVICE = "workers"
EXECUTOR_SERVICE = None
OPERATIONS_BACKEND = None
PLATFORM_VERSION = pkg.VERSION