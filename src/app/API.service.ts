/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export interface SubscriptionResponse<T> {
  value: GraphQLResult<T>;
}

export type __SubscriptionContainer = {
  onCreateLocation: OnCreateLocationSubscription;
  onUpdateLocation: OnUpdateLocationSubscription;
  onDeleteLocation: OnDeleteLocationSubscription;
  onCreateMatch: OnCreateMatchSubscription;
  onUpdateMatch: OnUpdateMatchSubscription;
  onDeleteMatch: OnDeleteMatchSubscription;
};

export type CreateLocationInput = {
  id?: string | null;
  address?: string | null;
  doorOpenDateTime?: string | null;
  name?: string | null;
  inviteOnly?: boolean | null;
  inviteOnlyProofToGainEntry?: string | null;
  phone?: string | null;
  barTender?: string | null;
  barTenderPhone?: string | null;
  canceled?: boolean | null;
  _version?: number | null;
};

export type ModelLocationConditionInput = {
  address?: ModelStringInput | null;
  doorOpenDateTime?: ModelStringInput | null;
  name?: ModelStringInput | null;
  inviteOnly?: ModelBooleanInput | null;
  inviteOnlyProofToGainEntry?: ModelStringInput | null;
  phone?: ModelStringInput | null;
  barTender?: ModelStringInput | null;
  barTenderPhone?: ModelStringInput | null;
  canceled?: ModelBooleanInput | null;
  and?: Array<ModelLocationConditionInput | null> | null;
  or?: Array<ModelLocationConditionInput | null> | null;
  not?: ModelLocationConditionInput | null;
  _deleted?: ModelBooleanInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type ModelBooleanInput = {
  ne?: boolean | null;
  eq?: boolean | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type Location = {
  __typename: "Location";
  id: string;
  address?: string | null;
  doorOpenDateTime?: string | null;
  name?: string | null;
  inviteOnly?: boolean | null;
  inviteOnlyProofToGainEntry?: string | null;
  phone?: string | null;
  barTender?: string | null;
  barTenderPhone?: string | null;
  canceled?: boolean | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type UpdateLocationInput = {
  id: string;
  address?: string | null;
  doorOpenDateTime?: string | null;
  name?: string | null;
  inviteOnly?: boolean | null;
  inviteOnlyProofToGainEntry?: string | null;
  phone?: string | null;
  barTender?: string | null;
  barTenderPhone?: string | null;
  canceled?: boolean | null;
  _version?: number | null;
};

export type DeleteLocationInput = {
  id: string;
  _version?: number | null;
};

export type CreateMatchInput = {
  id?: string | null;
  title?: string | null;
  kickOffDateTime?: string | null;
  against?: string | null;
  description?: string | null;
  away?: boolean | null;
  londonTeam?: boolean | null;
  stadium?: string | null;
  stadiumAddress?: string | null;
  _version?: number | null;
  matchMatchLocationId?: string | null;
};

export type ModelMatchConditionInput = {
  title?: ModelStringInput | null;
  kickOffDateTime?: ModelStringInput | null;
  against?: ModelStringInput | null;
  description?: ModelStringInput | null;
  away?: ModelBooleanInput | null;
  londonTeam?: ModelBooleanInput | null;
  stadium?: ModelStringInput | null;
  stadiumAddress?: ModelStringInput | null;
  and?: Array<ModelMatchConditionInput | null> | null;
  or?: Array<ModelMatchConditionInput | null> | null;
  not?: ModelMatchConditionInput | null;
  _deleted?: ModelBooleanInput | null;
  matchMatchLocationId?: ModelIDInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type Match = {
  __typename: "Match";
  id: string;
  title?: string | null;
  kickOffDateTime?: string | null;
  against?: string | null;
  description?: string | null;
  MatchLocation?: Location | null;
  away?: boolean | null;
  londonTeam?: boolean | null;
  stadium?: string | null;
  stadiumAddress?: string | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  matchMatchLocationId?: string | null;
};

export type UpdateMatchInput = {
  id: string;
  title?: string | null;
  kickOffDateTime?: string | null;
  against?: string | null;
  description?: string | null;
  away?: boolean | null;
  londonTeam?: boolean | null;
  stadium?: string | null;
  stadiumAddress?: string | null;
  _version?: number | null;
  matchMatchLocationId?: string | null;
};

export type DeleteMatchInput = {
  id: string;
  _version?: number | null;
};

export type ModelLocationFilterInput = {
  id?: ModelIDInput | null;
  address?: ModelStringInput | null;
  doorOpenDateTime?: ModelStringInput | null;
  name?: ModelStringInput | null;
  inviteOnly?: ModelBooleanInput | null;
  inviteOnlyProofToGainEntry?: ModelStringInput | null;
  phone?: ModelStringInput | null;
  barTender?: ModelStringInput | null;
  barTenderPhone?: ModelStringInput | null;
  canceled?: ModelBooleanInput | null;
  and?: Array<ModelLocationFilterInput | null> | null;
  or?: Array<ModelLocationFilterInput | null> | null;
  not?: ModelLocationFilterInput | null;
  _deleted?: ModelBooleanInput | null;
};

export type ModelLocationConnection = {
  __typename: "ModelLocationConnection";
  items: Array<Location | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type ModelMatchFilterInput = {
  id?: ModelIDInput | null;
  title?: ModelStringInput | null;
  kickOffDateTime?: ModelStringInput | null;
  against?: ModelStringInput | null;
  description?: ModelStringInput | null;
  away?: ModelBooleanInput | null;
  londonTeam?: ModelBooleanInput | null;
  stadium?: ModelStringInput | null;
  stadiumAddress?: ModelStringInput | null;
  and?: Array<ModelMatchFilterInput | null> | null;
  or?: Array<ModelMatchFilterInput | null> | null;
  not?: ModelMatchFilterInput | null;
  _deleted?: ModelBooleanInput | null;
  matchMatchLocationId?: ModelIDInput | null;
};

export type ModelMatchConnection = {
  __typename: "ModelMatchConnection";
  items: Array<Match | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type ModelSubscriptionLocationFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  address?: ModelSubscriptionStringInput | null;
  doorOpenDateTime?: ModelSubscriptionStringInput | null;
  name?: ModelSubscriptionStringInput | null;
  inviteOnly?: ModelSubscriptionBooleanInput | null;
  inviteOnlyProofToGainEntry?: ModelSubscriptionStringInput | null;
  phone?: ModelSubscriptionStringInput | null;
  barTender?: ModelSubscriptionStringInput | null;
  barTenderPhone?: ModelSubscriptionStringInput | null;
  canceled?: ModelSubscriptionBooleanInput | null;
  and?: Array<ModelSubscriptionLocationFilterInput | null> | null;
  or?: Array<ModelSubscriptionLocationFilterInput | null> | null;
  _deleted?: ModelBooleanInput | null;
};

export type ModelSubscriptionIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  in?: Array<string | null> | null;
  notIn?: Array<string | null> | null;
};

export type ModelSubscriptionStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  in?: Array<string | null> | null;
  notIn?: Array<string | null> | null;
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null;
  eq?: boolean | null;
};

export type ModelSubscriptionMatchFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  title?: ModelSubscriptionStringInput | null;
  kickOffDateTime?: ModelSubscriptionStringInput | null;
  against?: ModelSubscriptionStringInput | null;
  description?: ModelSubscriptionStringInput | null;
  away?: ModelSubscriptionBooleanInput | null;
  londonTeam?: ModelSubscriptionBooleanInput | null;
  stadium?: ModelSubscriptionStringInput | null;
  stadiumAddress?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionMatchFilterInput | null> | null;
  or?: Array<ModelSubscriptionMatchFilterInput | null> | null;
  _deleted?: ModelBooleanInput | null;
};

export type CreateLocationMutation = {
  __typename: "Location";
  id: string;
  address?: string | null;
  doorOpenDateTime?: string | null;
  name?: string | null;
  inviteOnly?: boolean | null;
  inviteOnlyProofToGainEntry?: string | null;
  phone?: string | null;
  barTender?: string | null;
  barTenderPhone?: string | null;
  canceled?: boolean | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type UpdateLocationMutation = {
  __typename: "Location";
  id: string;
  address?: string | null;
  doorOpenDateTime?: string | null;
  name?: string | null;
  inviteOnly?: boolean | null;
  inviteOnlyProofToGainEntry?: string | null;
  phone?: string | null;
  barTender?: string | null;
  barTenderPhone?: string | null;
  canceled?: boolean | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type DeleteLocationMutation = {
  __typename: "Location";
  id: string;
  address?: string | null;
  doorOpenDateTime?: string | null;
  name?: string | null;
  inviteOnly?: boolean | null;
  inviteOnlyProofToGainEntry?: string | null;
  phone?: string | null;
  barTender?: string | null;
  barTenderPhone?: string | null;
  canceled?: boolean | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type CreateMatchMutation = {
  __typename: "Match";
  id: string;
  title?: string | null;
  kickOffDateTime?: string | null;
  against?: string | null;
  description?: string | null;
  MatchLocation?: {
    __typename: "Location";
    id: string;
    address?: string | null;
    doorOpenDateTime?: string | null;
    name?: string | null;
    inviteOnly?: boolean | null;
    inviteOnlyProofToGainEntry?: string | null;
    phone?: string | null;
    barTender?: string | null;
    barTenderPhone?: string | null;
    canceled?: boolean | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  away?: boolean | null;
  londonTeam?: boolean | null;
  stadium?: string | null;
  stadiumAddress?: string | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  matchMatchLocationId?: string | null;
};

export type UpdateMatchMutation = {
  __typename: "Match";
  id: string;
  title?: string | null;
  kickOffDateTime?: string | null;
  against?: string | null;
  description?: string | null;
  MatchLocation?: {
    __typename: "Location";
    id: string;
    address?: string | null;
    doorOpenDateTime?: string | null;
    name?: string | null;
    inviteOnly?: boolean | null;
    inviteOnlyProofToGainEntry?: string | null;
    phone?: string | null;
    barTender?: string | null;
    barTenderPhone?: string | null;
    canceled?: boolean | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  away?: boolean | null;
  londonTeam?: boolean | null;
  stadium?: string | null;
  stadiumAddress?: string | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  matchMatchLocationId?: string | null;
};

export type DeleteMatchMutation = {
  __typename: "Match";
  id: string;
  title?: string | null;
  kickOffDateTime?: string | null;
  against?: string | null;
  description?: string | null;
  MatchLocation?: {
    __typename: "Location";
    id: string;
    address?: string | null;
    doorOpenDateTime?: string | null;
    name?: string | null;
    inviteOnly?: boolean | null;
    inviteOnlyProofToGainEntry?: string | null;
    phone?: string | null;
    barTender?: string | null;
    barTenderPhone?: string | null;
    canceled?: boolean | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  away?: boolean | null;
  londonTeam?: boolean | null;
  stadium?: string | null;
  stadiumAddress?: string | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  matchMatchLocationId?: string | null;
};

export type GetLocationQuery = {
  __typename: "Location";
  id: string;
  address?: string | null;
  doorOpenDateTime?: string | null;
  name?: string | null;
  inviteOnly?: boolean | null;
  inviteOnlyProofToGainEntry?: string | null;
  phone?: string | null;
  barTender?: string | null;
  barTenderPhone?: string | null;
  canceled?: boolean | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type ListLocationsQuery = {
  __typename: "ModelLocationConnection";
  items: Array<{
    __typename: "Location";
    id: string;
    address?: string | null;
    doorOpenDateTime?: string | null;
    name?: string | null;
    inviteOnly?: boolean | null;
    inviteOnlyProofToGainEntry?: string | null;
    phone?: string | null;
    barTender?: string | null;
    barTenderPhone?: string | null;
    canceled?: boolean | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type SyncLocationsQuery = {
  __typename: "ModelLocationConnection";
  items: Array<{
    __typename: "Location";
    id: string;
    address?: string | null;
    doorOpenDateTime?: string | null;
    name?: string | null;
    inviteOnly?: boolean | null;
    inviteOnlyProofToGainEntry?: string | null;
    phone?: string | null;
    barTender?: string | null;
    barTenderPhone?: string | null;
    canceled?: boolean | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type GetMatchQuery = {
  __typename: "Match";
  id: string;
  title?: string | null;
  kickOffDateTime?: string | null;
  against?: string | null;
  description?: string | null;
  MatchLocation?: {
    __typename: "Location";
    id: string;
    address?: string | null;
    doorOpenDateTime?: string | null;
    name?: string | null;
    inviteOnly?: boolean | null;
    inviteOnlyProofToGainEntry?: string | null;
    phone?: string | null;
    barTender?: string | null;
    barTenderPhone?: string | null;
    canceled?: boolean | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  away?: boolean | null;
  londonTeam?: boolean | null;
  stadium?: string | null;
  stadiumAddress?: string | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  matchMatchLocationId?: string | null;
};

export type ListMatchesQuery = {
  __typename: "ModelMatchConnection";
  items: Array<{
    __typename: "Match";
    id: string;
    title?: string | null;
    kickOffDateTime?: string | null;
    against?: string | null;
    description?: string | null;
    MatchLocation?: {
      __typename: "Location";
      id: string;
      address?: string | null;
      doorOpenDateTime?: string | null;
      name?: string | null;
      inviteOnly?: boolean | null;
      inviteOnlyProofToGainEntry?: string | null;
      phone?: string | null;
      barTender?: string | null;
      barTenderPhone?: string | null;
      canceled?: boolean | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    away?: boolean | null;
    londonTeam?: boolean | null;
    stadium?: string | null;
    stadiumAddress?: string | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    matchMatchLocationId?: string | null;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type SyncMatchesQuery = {
  __typename: "ModelMatchConnection";
  items: Array<{
    __typename: "Match";
    id: string;
    title?: string | null;
    kickOffDateTime?: string | null;
    against?: string | null;
    description?: string | null;
    MatchLocation?: {
      __typename: "Location";
      id: string;
      address?: string | null;
      doorOpenDateTime?: string | null;
      name?: string | null;
      inviteOnly?: boolean | null;
      inviteOnlyProofToGainEntry?: string | null;
      phone?: string | null;
      barTender?: string | null;
      barTenderPhone?: string | null;
      canceled?: boolean | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    away?: boolean | null;
    londonTeam?: boolean | null;
    stadium?: string | null;
    stadiumAddress?: string | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    matchMatchLocationId?: string | null;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type OnCreateLocationSubscription = {
  __typename: "Location";
  id: string;
  address?: string | null;
  doorOpenDateTime?: string | null;
  name?: string | null;
  inviteOnly?: boolean | null;
  inviteOnlyProofToGainEntry?: string | null;
  phone?: string | null;
  barTender?: string | null;
  barTenderPhone?: string | null;
  canceled?: boolean | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnUpdateLocationSubscription = {
  __typename: "Location";
  id: string;
  address?: string | null;
  doorOpenDateTime?: string | null;
  name?: string | null;
  inviteOnly?: boolean | null;
  inviteOnlyProofToGainEntry?: string | null;
  phone?: string | null;
  barTender?: string | null;
  barTenderPhone?: string | null;
  canceled?: boolean | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnDeleteLocationSubscription = {
  __typename: "Location";
  id: string;
  address?: string | null;
  doorOpenDateTime?: string | null;
  name?: string | null;
  inviteOnly?: boolean | null;
  inviteOnlyProofToGainEntry?: string | null;
  phone?: string | null;
  barTender?: string | null;
  barTenderPhone?: string | null;
  canceled?: boolean | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnCreateMatchSubscription = {
  __typename: "Match";
  id: string;
  title?: string | null;
  kickOffDateTime?: string | null;
  against?: string | null;
  description?: string | null;
  MatchLocation?: {
    __typename: "Location";
    id: string;
    address?: string | null;
    doorOpenDateTime?: string | null;
    name?: string | null;
    inviteOnly?: boolean | null;
    inviteOnlyProofToGainEntry?: string | null;
    phone?: string | null;
    barTender?: string | null;
    barTenderPhone?: string | null;
    canceled?: boolean | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  away?: boolean | null;
  londonTeam?: boolean | null;
  stadium?: string | null;
  stadiumAddress?: string | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  matchMatchLocationId?: string | null;
};

export type OnUpdateMatchSubscription = {
  __typename: "Match";
  id: string;
  title?: string | null;
  kickOffDateTime?: string | null;
  against?: string | null;
  description?: string | null;
  MatchLocation?: {
    __typename: "Location";
    id: string;
    address?: string | null;
    doorOpenDateTime?: string | null;
    name?: string | null;
    inviteOnly?: boolean | null;
    inviteOnlyProofToGainEntry?: string | null;
    phone?: string | null;
    barTender?: string | null;
    barTenderPhone?: string | null;
    canceled?: boolean | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  away?: boolean | null;
  londonTeam?: boolean | null;
  stadium?: string | null;
  stadiumAddress?: string | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  matchMatchLocationId?: string | null;
};

export type OnDeleteMatchSubscription = {
  __typename: "Match";
  id: string;
  title?: string | null;
  kickOffDateTime?: string | null;
  against?: string | null;
  description?: string | null;
  MatchLocation?: {
    __typename: "Location";
    id: string;
    address?: string | null;
    doorOpenDateTime?: string | null;
    name?: string | null;
    inviteOnly?: boolean | null;
    inviteOnlyProofToGainEntry?: string | null;
    phone?: string | null;
    barTender?: string | null;
    barTenderPhone?: string | null;
    canceled?: boolean | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  away?: boolean | null;
  londonTeam?: boolean | null;
  stadium?: string | null;
  stadiumAddress?: string | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  matchMatchLocationId?: string | null;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateLocation(
    input: CreateLocationInput,
    condition?: ModelLocationConditionInput
  ): Promise<CreateLocationMutation> {
    const statement = `mutation CreateLocation($input: CreateLocationInput!, $condition: ModelLocationConditionInput) {
        createLocation(input: $input, condition: $condition) {
          __typename
          id
          address
          doorOpenDateTime
          name
          inviteOnly
          inviteOnlyProofToGainEntry
          phone
          barTender
          barTenderPhone
          canceled
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateLocationMutation>response.data.createLocation;
  }
  async UpdateLocation(
    input: UpdateLocationInput,
    condition?: ModelLocationConditionInput
  ): Promise<UpdateLocationMutation> {
    const statement = `mutation UpdateLocation($input: UpdateLocationInput!, $condition: ModelLocationConditionInput) {
        updateLocation(input: $input, condition: $condition) {
          __typename
          id
          address
          doorOpenDateTime
          name
          inviteOnly
          inviteOnlyProofToGainEntry
          phone
          barTender
          barTenderPhone
          canceled
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateLocationMutation>response.data.updateLocation;
  }
  async DeleteLocation(
    input: DeleteLocationInput,
    condition?: ModelLocationConditionInput
  ): Promise<DeleteLocationMutation> {
    const statement = `mutation DeleteLocation($input: DeleteLocationInput!, $condition: ModelLocationConditionInput) {
        deleteLocation(input: $input, condition: $condition) {
          __typename
          id
          address
          doorOpenDateTime
          name
          inviteOnly
          inviteOnlyProofToGainEntry
          phone
          barTender
          barTenderPhone
          canceled
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteLocationMutation>response.data.deleteLocation;
  }
  async CreateMatch(
    input: CreateMatchInput,
    condition?: ModelMatchConditionInput
  ): Promise<CreateMatchMutation> {
    const statement = `mutation CreateMatch($input: CreateMatchInput!, $condition: ModelMatchConditionInput) {
        createMatch(input: $input, condition: $condition) {
          __typename
          id
          title
          kickOffDateTime
          against
          description
          MatchLocation {
            __typename
            id
            address
            doorOpenDateTime
            name
            inviteOnly
            inviteOnlyProofToGainEntry
            phone
            barTender
            barTenderPhone
            canceled
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          away
          londonTeam
          stadium
          stadiumAddress
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          matchMatchLocationId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateMatchMutation>response.data.createMatch;
  }
  async UpdateMatch(
    input: UpdateMatchInput,
    condition?: ModelMatchConditionInput
  ): Promise<UpdateMatchMutation> {
    const statement = `mutation UpdateMatch($input: UpdateMatchInput!, $condition: ModelMatchConditionInput) {
        updateMatch(input: $input, condition: $condition) {
          __typename
          id
          title
          kickOffDateTime
          against
          description
          MatchLocation {
            __typename
            id
            address
            doorOpenDateTime
            name
            inviteOnly
            inviteOnlyProofToGainEntry
            phone
            barTender
            barTenderPhone
            canceled
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          away
          londonTeam
          stadium
          stadiumAddress
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          matchMatchLocationId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateMatchMutation>response.data.updateMatch;
  }
  async DeleteMatch(
    input: DeleteMatchInput,
    condition?: ModelMatchConditionInput
  ): Promise<DeleteMatchMutation> {
    const statement = `mutation DeleteMatch($input: DeleteMatchInput!, $condition: ModelMatchConditionInput) {
        deleteMatch(input: $input, condition: $condition) {
          __typename
          id
          title
          kickOffDateTime
          against
          description
          MatchLocation {
            __typename
            id
            address
            doorOpenDateTime
            name
            inviteOnly
            inviteOnlyProofToGainEntry
            phone
            barTender
            barTenderPhone
            canceled
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          away
          londonTeam
          stadium
          stadiumAddress
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          matchMatchLocationId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteMatchMutation>response.data.deleteMatch;
  }
  async GetLocation(id: string): Promise<GetLocationQuery> {
    const statement = `query GetLocation($id: ID!) {
        getLocation(id: $id) {
          __typename
          id
          address
          doorOpenDateTime
          name
          inviteOnly
          inviteOnlyProofToGainEntry
          phone
          barTender
          barTenderPhone
          canceled
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetLocationQuery>response.data.getLocation;
  }
  async ListLocations(
    filter?: ModelLocationFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListLocationsQuery> {
    const statement = `query ListLocations($filter: ModelLocationFilterInput, $limit: Int, $nextToken: String) {
        listLocations(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            address
            doorOpenDateTime
            name
            inviteOnly
            inviteOnlyProofToGainEntry
            phone
            barTender
            barTenderPhone
            canceled
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListLocationsQuery>response.data.listLocations;
  }
  async SyncLocations(
    filter?: ModelLocationFilterInput,
    limit?: number,
    nextToken?: string,
    lastSync?: number
  ): Promise<SyncLocationsQuery> {
    const statement = `query SyncLocations($filter: ModelLocationFilterInput, $limit: Int, $nextToken: String, $lastSync: AWSTimestamp) {
        syncLocations(
          filter: $filter
          limit: $limit
          nextToken: $nextToken
          lastSync: $lastSync
        ) {
          __typename
          items {
            __typename
            id
            address
            doorOpenDateTime
            name
            inviteOnly
            inviteOnlyProofToGainEntry
            phone
            barTender
            barTenderPhone
            canceled
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (lastSync) {
      gqlAPIServiceArguments.lastSync = lastSync;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SyncLocationsQuery>response.data.syncLocations;
  }
  async GetMatch(id: string): Promise<GetMatchQuery> {
    const statement = `query GetMatch($id: ID!) {
        getMatch(id: $id) {
          __typename
          id
          title
          kickOffDateTime
          against
          description
          MatchLocation {
            __typename
            id
            address
            doorOpenDateTime
            name
            inviteOnly
            inviteOnlyProofToGainEntry
            phone
            barTender
            barTenderPhone
            canceled
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          away
          londonTeam
          stadium
          stadiumAddress
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          matchMatchLocationId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetMatchQuery>response.data.getMatch;
  }
  async ListMatches(
    filter?: ModelMatchFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListMatchesQuery> {
    const statement = `query ListMatches($filter: ModelMatchFilterInput, $limit: Int, $nextToken: String) {
        listMatches(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            title
            kickOffDateTime
            against
            description
            MatchLocation {
              __typename
              id
              address
              doorOpenDateTime
              name
              inviteOnly
              inviteOnlyProofToGainEntry
              phone
              barTender
              barTenderPhone
              canceled
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            away
            londonTeam
            stadium
            stadiumAddress
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            matchMatchLocationId
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListMatchesQuery>response.data.listMatches;
  }
  async SyncMatches(
    filter?: ModelMatchFilterInput,
    limit?: number,
    nextToken?: string,
    lastSync?: number
  ): Promise<SyncMatchesQuery> {
    const statement = `query SyncMatches($filter: ModelMatchFilterInput, $limit: Int, $nextToken: String, $lastSync: AWSTimestamp) {
        syncMatches(
          filter: $filter
          limit: $limit
          nextToken: $nextToken
          lastSync: $lastSync
        ) {
          __typename
          items {
            __typename
            id
            title
            kickOffDateTime
            against
            description
            MatchLocation {
              __typename
              id
              address
              doorOpenDateTime
              name
              inviteOnly
              inviteOnlyProofToGainEntry
              phone
              barTender
              barTenderPhone
              canceled
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            away
            londonTeam
            stadium
            stadiumAddress
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            matchMatchLocationId
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (lastSync) {
      gqlAPIServiceArguments.lastSync = lastSync;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SyncMatchesQuery>response.data.syncMatches;
  }
  OnCreateLocationListener(
    filter?: ModelSubscriptionLocationFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateLocation">>
  > {
    const statement = `subscription OnCreateLocation($filter: ModelSubscriptionLocationFilterInput) {
        onCreateLocation(filter: $filter) {
          __typename
          id
          address
          doorOpenDateTime
          name
          inviteOnly
          inviteOnlyProofToGainEntry
          phone
          barTender
          barTenderPhone
          canceled
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateLocation">>
    >;
  }

  OnUpdateLocationListener(
    filter?: ModelSubscriptionLocationFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateLocation">>
  > {
    const statement = `subscription OnUpdateLocation($filter: ModelSubscriptionLocationFilterInput) {
        onUpdateLocation(filter: $filter) {
          __typename
          id
          address
          doorOpenDateTime
          name
          inviteOnly
          inviteOnlyProofToGainEntry
          phone
          barTender
          barTenderPhone
          canceled
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateLocation">>
    >;
  }

  OnDeleteLocationListener(
    filter?: ModelSubscriptionLocationFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteLocation">>
  > {
    const statement = `subscription OnDeleteLocation($filter: ModelSubscriptionLocationFilterInput) {
        onDeleteLocation(filter: $filter) {
          __typename
          id
          address
          doorOpenDateTime
          name
          inviteOnly
          inviteOnlyProofToGainEntry
          phone
          barTender
          barTenderPhone
          canceled
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteLocation">>
    >;
  }

  OnCreateMatchListener(
    filter?: ModelSubscriptionMatchFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateMatch">>
  > {
    const statement = `subscription OnCreateMatch($filter: ModelSubscriptionMatchFilterInput) {
        onCreateMatch(filter: $filter) {
          __typename
          id
          title
          kickOffDateTime
          against
          description
          MatchLocation {
            __typename
            id
            address
            doorOpenDateTime
            name
            inviteOnly
            inviteOnlyProofToGainEntry
            phone
            barTender
            barTenderPhone
            canceled
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          away
          londonTeam
          stadium
          stadiumAddress
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          matchMatchLocationId
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateMatch">>
    >;
  }

  OnUpdateMatchListener(
    filter?: ModelSubscriptionMatchFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateMatch">>
  > {
    const statement = `subscription OnUpdateMatch($filter: ModelSubscriptionMatchFilterInput) {
        onUpdateMatch(filter: $filter) {
          __typename
          id
          title
          kickOffDateTime
          against
          description
          MatchLocation {
            __typename
            id
            address
            doorOpenDateTime
            name
            inviteOnly
            inviteOnlyProofToGainEntry
            phone
            barTender
            barTenderPhone
            canceled
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          away
          londonTeam
          stadium
          stadiumAddress
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          matchMatchLocationId
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateMatch">>
    >;
  }

  OnDeleteMatchListener(
    filter?: ModelSubscriptionMatchFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteMatch">>
  > {
    const statement = `subscription OnDeleteMatch($filter: ModelSubscriptionMatchFilterInput) {
        onDeleteMatch(filter: $filter) {
          __typename
          id
          title
          kickOffDateTime
          against
          description
          MatchLocation {
            __typename
            id
            address
            doorOpenDateTime
            name
            inviteOnly
            inviteOnlyProofToGainEntry
            phone
            barTender
            barTenderPhone
            canceled
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          away
          londonTeam
          stadium
          stadiumAddress
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          matchMatchLocationId
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteMatch">>
    >;
  }
}
