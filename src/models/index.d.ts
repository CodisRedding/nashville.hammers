import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncItem } from "@aws-amplify/datastore";





type EagerLocation = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Location, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly address?: string | null;
  readonly doorOpenDateTime?: string | null;
  readonly name?: string | null;
  readonly inviteOnly?: boolean | null;
  readonly inviteOnlyProofToGainEntry?: string | null;
  readonly phone?: string | null;
  readonly barTender?: string | null;
  readonly barTenderPhone?: string | null;
  readonly canceled?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyLocation = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Location, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly address?: string | null;
  readonly doorOpenDateTime?: string | null;
  readonly name?: string | null;
  readonly inviteOnly?: boolean | null;
  readonly inviteOnlyProofToGainEntry?: string | null;
  readonly phone?: string | null;
  readonly barTender?: string | null;
  readonly barTenderPhone?: string | null;
  readonly canceled?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Location = LazyLoading extends LazyLoadingDisabled ? EagerLocation : LazyLocation

export declare const Location: (new (init: ModelInit<Location>) => Location) & {
  copyOf(source: Location, mutator: (draft: MutableModel<Location>) => MutableModel<Location> | void): Location;
}

type EagerMatch = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Match, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title?: string | null;
  readonly kickOffDateTime?: string | null;
  readonly against?: string | null;
  readonly description?: string | null;
  readonly MatchLocation?: Location | null;
  readonly away?: boolean | null;
  readonly londonTeam?: boolean | null;
  readonly stadium?: string | null;
  readonly stadiumAddress?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly matchMatchLocationId?: string | null;
}

type LazyMatch = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Match, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title?: string | null;
  readonly kickOffDateTime?: string | null;
  readonly against?: string | null;
  readonly description?: string | null;
  readonly MatchLocation: AsyncItem<Location | undefined>;
  readonly away?: boolean | null;
  readonly londonTeam?: boolean | null;
  readonly stadium?: string | null;
  readonly stadiumAddress?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly matchMatchLocationId?: string | null;
}

export declare type Match = LazyLoading extends LazyLoadingDisabled ? EagerMatch : LazyMatch

export declare const Match: (new (init: ModelInit<Match>) => Match) & {
  copyOf(source: Match, mutator: (draft: MutableModel<Match>) => MutableModel<Match> | void): Match;
}