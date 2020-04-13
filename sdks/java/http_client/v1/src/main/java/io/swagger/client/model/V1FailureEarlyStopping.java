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
 * FailureEarlyStoppingSchema specification Early stopping based on failure config. this policy stops based on a percentage of failed runs at every evaluation.
 */
@ApiModel(description = "FailureEarlyStoppingSchema specification Early stopping based on failure config. this policy stops based on a percentage of failed runs at every evaluation.")

public class V1FailureEarlyStopping {
  @SerializedName("kind")
  private String kind = "failure_early_stopping";

  @SerializedName("percent")
  private Integer percent = null;

  @SerializedName("evaluation_interval")
  private String evaluationInterval = null;

  public V1FailureEarlyStopping kind(String kind) {
    this.kind = kind;
    return this;
  }

   /**
   * Get kind
   * @return kind
  **/
  @ApiModelProperty(value = "")
  public String getKind() {
    return kind;
  }

  public void setKind(String kind) {
    this.kind = kind;
  }

  public V1FailureEarlyStopping percent(Integer percent) {
    this.percent = percent;
    return this;
  }

   /**
   * The percentage failed runs, at each evaluation interval. e.g. 1 - 99.
   * @return percent
  **/
  @ApiModelProperty(value = "The percentage failed runs, at each evaluation interval. e.g. 1 - 99.")
  public Integer getPercent() {
    return percent;
  }

  public void setPercent(Integer percent) {
    this.percent = percent;
  }

  public V1FailureEarlyStopping evaluationInterval(String evaluationInterval) {
    this.evaluationInterval = evaluationInterval;
    return this;
  }

   /**
   * Interval/Frequency for applying the policy.
   * @return evaluationInterval
  **/
  @ApiModelProperty(value = "Interval/Frequency for applying the policy.")
  public String getEvaluationInterval() {
    return evaluationInterval;
  }

  public void setEvaluationInterval(String evaluationInterval) {
    this.evaluationInterval = evaluationInterval;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    V1FailureEarlyStopping v1FailureEarlyStopping = (V1FailureEarlyStopping) o;
    return Objects.equals(this.kind, v1FailureEarlyStopping.kind) &&
        Objects.equals(this.percent, v1FailureEarlyStopping.percent) &&
        Objects.equals(this.evaluationInterval, v1FailureEarlyStopping.evaluationInterval);
  }

  @Override
  public int hashCode() {
    return Objects.hash(kind, percent, evaluationInterval);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class V1FailureEarlyStopping {\n");
    
    sb.append("    kind: ").append(toIndentedString(kind)).append("\n");
    sb.append("    percent: ").append(toIndentedString(percent)).append("\n");
    sb.append("    evaluationInterval: ").append(toIndentedString(evaluationInterval)).append("\n");
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

