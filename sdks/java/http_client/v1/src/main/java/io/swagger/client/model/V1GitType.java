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

/*
 * Polyaxon SDKs and REST API specification.
 * Polyaxon SDKs and REST API specification.
 *
 * OpenAPI spec version: 1.0.75
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


package io.swagger.client.model;

import java.util.Objects;
import java.util.Arrays;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.io.IOException;

/**
 * V1GitType
 */

public class V1GitType {
  @SerializedName("url")
  private String url = null;

  @SerializedName("revision")
  private Boolean revision = null;

  @SerializedName("connection")
  private String connection = null;

  @SerializedName("init")
  private Boolean init = null;

  public V1GitType url(String url) {
    this.url = url;
    return this;
  }

   /**
   * Get url
   * @return url
  **/
  @ApiModelProperty(value = "")
  public String getUrl() {
    return url;
  }

  public void setUrl(String url) {
    this.url = url;
  }

  public V1GitType revision(Boolean revision) {
    this.revision = revision;
    return this;
  }

   /**
   * Get revision
   * @return revision
  **/
  @ApiModelProperty(value = "")
  public Boolean isRevision() {
    return revision;
  }

  public void setRevision(Boolean revision) {
    this.revision = revision;
  }

  public V1GitType connection(String connection) {
    this.connection = connection;
    return this;
  }

   /**
   * Get connection
   * @return connection
  **/
  @ApiModelProperty(value = "")
  public String getConnection() {
    return connection;
  }

  public void setConnection(String connection) {
    this.connection = connection;
  }

  public V1GitType init(Boolean init) {
    this.init = init;
    return this;
  }

   /**
   * Get init
   * @return init
  **/
  @ApiModelProperty(value = "")
  public Boolean isInit() {
    return init;
  }

  public void setInit(Boolean init) {
    this.init = init;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    V1GitType v1GitType = (V1GitType) o;
    return Objects.equals(this.url, v1GitType.url) &&
        Objects.equals(this.revision, v1GitType.revision) &&
        Objects.equals(this.connection, v1GitType.connection) &&
        Objects.equals(this.init, v1GitType.init);
  }

  @Override
  public int hashCode() {
    return Objects.hash(url, revision, connection, init);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class V1GitType {\n");
    
    sb.append("    url: ").append(toIndentedString(url)).append("\n");
    sb.append("    revision: ").append(toIndentedString(revision)).append("\n");
    sb.append("    connection: ").append(toIndentedString(connection)).append("\n");
    sb.append("    init: ").append(toIndentedString(init)).append("\n");
    sb.append("}");
    return sb.toString();
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces
   * (except the first line).
   */
  private String toIndentedString(java.lang.Object o) {
    if (o == null) {
      return "null";
    }
    return o.toString().replace("\n", "\n    ");
  }

}

