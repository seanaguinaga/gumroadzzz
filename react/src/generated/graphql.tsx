import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  float8: any;
  uuid: any;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: Maybe<Scalars['String']>;
  _is_null?: Maybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: Maybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: Maybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: Maybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: Maybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: Maybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: Maybe<Scalars['String']>;
};

/** Boolean expression to compare columns of type "float8". All fields are combined with logical 'AND'. */
export type Float8_Comparison_Exp = {
  _eq?: Maybe<Scalars['float8']>;
  _gt?: Maybe<Scalars['float8']>;
  _gte?: Maybe<Scalars['float8']>;
  _in?: Maybe<Array<Scalars['float8']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['float8']>;
  _lte?: Maybe<Scalars['float8']>;
  _neq?: Maybe<Scalars['float8']>;
  _nin?: Maybe<Array<Scalars['float8']>>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "product" */
  delete_product?: Maybe<Product_Mutation_Response>;
  /** delete single row from the table: "product" */
  delete_product_by_pk?: Maybe<Product>;
  /** delete data from the table: "review" */
  delete_review?: Maybe<Review_Mutation_Response>;
  /** delete single row from the table: "review" */
  delete_review_by_pk?: Maybe<Review>;
  /** insert data into the table: "product" */
  insert_product?: Maybe<Product_Mutation_Response>;
  /** insert a single row into the table: "product" */
  insert_product_one?: Maybe<Product>;
  /** insert data into the table: "review" */
  insert_review?: Maybe<Review_Mutation_Response>;
  /** insert a single row into the table: "review" */
  insert_review_one?: Maybe<Review>;
  /** update data of the table: "product" */
  update_product?: Maybe<Product_Mutation_Response>;
  /** update single row of the table: "product" */
  update_product_by_pk?: Maybe<Product>;
  /** update data of the table: "review" */
  update_review?: Maybe<Review_Mutation_Response>;
  /** update single row of the table: "review" */
  update_review_by_pk?: Maybe<Review>;
};


/** mutation root */
export type Mutation_RootDelete_ProductArgs = {
  where: Product_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Product_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_ReviewArgs = {
  where: Review_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Review_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootInsert_ProductArgs = {
  objects: Array<Product_Insert_Input>;
  on_conflict?: Maybe<Product_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Product_OneArgs = {
  object: Product_Insert_Input;
  on_conflict?: Maybe<Product_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ReviewArgs = {
  objects: Array<Review_Insert_Input>;
  on_conflict?: Maybe<Review_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Review_OneArgs = {
  object: Review_Insert_Input;
  on_conflict?: Maybe<Review_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_ProductArgs = {
  _set?: Maybe<Product_Set_Input>;
  where: Product_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Product_By_PkArgs = {
  _set?: Maybe<Product_Set_Input>;
  pk_columns: Product_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_ReviewArgs = {
  _inc?: Maybe<Review_Inc_Input>;
  _set?: Maybe<Review_Set_Input>;
  where: Review_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Review_By_PkArgs = {
  _inc?: Maybe<Review_Inc_Input>;
  _set?: Maybe<Review_Set_Input>;
  pk_columns: Review_Pk_Columns_Input;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** columns and relationships of "product" */
export type Product = {
  __typename?: 'product';
  id: Scalars['uuid'];
  name?: Maybe<Scalars['String']>;
  /** An array relationship */
  reviews: Array<Review>;
  /** An aggregate relationship */
  reviews_aggregate: Review_Aggregate;
};


/** columns and relationships of "product" */
export type ProductReviewsArgs = {
  distinct_on?: Maybe<Array<Review_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Review_Order_By>>;
  where?: Maybe<Review_Bool_Exp>;
};


/** columns and relationships of "product" */
export type ProductReviews_AggregateArgs = {
  distinct_on?: Maybe<Array<Review_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Review_Order_By>>;
  where?: Maybe<Review_Bool_Exp>;
};

/** aggregated selection of "product" */
export type Product_Aggregate = {
  __typename?: 'product_aggregate';
  aggregate?: Maybe<Product_Aggregate_Fields>;
  nodes: Array<Product>;
};

/** aggregate fields of "product" */
export type Product_Aggregate_Fields = {
  __typename?: 'product_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Product_Max_Fields>;
  min?: Maybe<Product_Min_Fields>;
};


/** aggregate fields of "product" */
export type Product_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Product_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "product". All fields are combined with a logical 'AND'. */
export type Product_Bool_Exp = {
  _and?: Maybe<Array<Product_Bool_Exp>>;
  _not?: Maybe<Product_Bool_Exp>;
  _or?: Maybe<Array<Product_Bool_Exp>>;
  id?: Maybe<Uuid_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  reviews?: Maybe<Review_Bool_Exp>;
};

/** unique or primary key constraints on table "product" */
export enum Product_Constraint {
  /** unique or primary key constraint */
  ProductPkey = 'product_pkey'
}

/** input type for inserting data into table "product" */
export type Product_Insert_Input = {
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  reviews?: Maybe<Review_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Product_Max_Fields = {
  __typename?: 'product_max_fields';
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Product_Min_Fields = {
  __typename?: 'product_min_fields';
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "product" */
export type Product_Mutation_Response = {
  __typename?: 'product_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Product>;
};

/** input type for inserting object relation for remote table "product" */
export type Product_Obj_Rel_Insert_Input = {
  data: Product_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Product_On_Conflict>;
};

/** on conflict condition type for table "product" */
export type Product_On_Conflict = {
  constraint: Product_Constraint;
  update_columns?: Array<Product_Update_Column>;
  where?: Maybe<Product_Bool_Exp>;
};

/** Ordering options when selecting data from "product". */
export type Product_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  reviews_aggregate?: Maybe<Review_Aggregate_Order_By>;
};

/** primary key columns input for table: product */
export type Product_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "product" */
export enum Product_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "product" */
export type Product_Set_Input = {
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
};

/** update columns of table "product" */
export enum Product_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "product" */
  product: Array<Product>;
  /** fetch aggregated fields from the table: "product" */
  product_aggregate: Product_Aggregate;
  /** fetch data from the table: "product" using primary key columns */
  product_by_pk?: Maybe<Product>;
  /** fetch data from the table: "review" */
  review: Array<Review>;
  /** fetch aggregated fields from the table: "review" */
  review_aggregate: Review_Aggregate;
  /** fetch data from the table: "review" using primary key columns */
  review_by_pk?: Maybe<Review>;
};


export type Query_RootProductArgs = {
  distinct_on?: Maybe<Array<Product_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Product_Order_By>>;
  where?: Maybe<Product_Bool_Exp>;
};


export type Query_RootProduct_AggregateArgs = {
  distinct_on?: Maybe<Array<Product_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Product_Order_By>>;
  where?: Maybe<Product_Bool_Exp>;
};


export type Query_RootProduct_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootReviewArgs = {
  distinct_on?: Maybe<Array<Review_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Review_Order_By>>;
  where?: Maybe<Review_Bool_Exp>;
};


export type Query_RootReview_AggregateArgs = {
  distinct_on?: Maybe<Array<Review_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Review_Order_By>>;
  where?: Maybe<Review_Bool_Exp>;
};


export type Query_RootReview_By_PkArgs = {
  id: Scalars['uuid'];
};

/** columns and relationships of "review" */
export type Review = {
  __typename?: 'review';
  id: Scalars['uuid'];
  /** An object relationship */
  product: Product;
  product_id: Scalars['uuid'];
  rating: Scalars['float8'];
  text: Scalars['String'];
};

/** aggregated selection of "review" */
export type Review_Aggregate = {
  __typename?: 'review_aggregate';
  aggregate?: Maybe<Review_Aggregate_Fields>;
  nodes: Array<Review>;
};

/** aggregate fields of "review" */
export type Review_Aggregate_Fields = {
  __typename?: 'review_aggregate_fields';
  avg?: Maybe<Review_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Review_Max_Fields>;
  min?: Maybe<Review_Min_Fields>;
  stddev?: Maybe<Review_Stddev_Fields>;
  stddev_pop?: Maybe<Review_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Review_Stddev_Samp_Fields>;
  sum?: Maybe<Review_Sum_Fields>;
  var_pop?: Maybe<Review_Var_Pop_Fields>;
  var_samp?: Maybe<Review_Var_Samp_Fields>;
  variance?: Maybe<Review_Variance_Fields>;
};


/** aggregate fields of "review" */
export type Review_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Review_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "review" */
export type Review_Aggregate_Order_By = {
  avg?: Maybe<Review_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Review_Max_Order_By>;
  min?: Maybe<Review_Min_Order_By>;
  stddev?: Maybe<Review_Stddev_Order_By>;
  stddev_pop?: Maybe<Review_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Review_Stddev_Samp_Order_By>;
  sum?: Maybe<Review_Sum_Order_By>;
  var_pop?: Maybe<Review_Var_Pop_Order_By>;
  var_samp?: Maybe<Review_Var_Samp_Order_By>;
  variance?: Maybe<Review_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "review" */
export type Review_Arr_Rel_Insert_Input = {
  data: Array<Review_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Review_On_Conflict>;
};

/** aggregate avg on columns */
export type Review_Avg_Fields = {
  __typename?: 'review_avg_fields';
  rating?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "review" */
export type Review_Avg_Order_By = {
  rating?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "review". All fields are combined with a logical 'AND'. */
export type Review_Bool_Exp = {
  _and?: Maybe<Array<Review_Bool_Exp>>;
  _not?: Maybe<Review_Bool_Exp>;
  _or?: Maybe<Array<Review_Bool_Exp>>;
  id?: Maybe<Uuid_Comparison_Exp>;
  product?: Maybe<Product_Bool_Exp>;
  product_id?: Maybe<Uuid_Comparison_Exp>;
  rating?: Maybe<Float8_Comparison_Exp>;
  text?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "review" */
export enum Review_Constraint {
  /** unique or primary key constraint */
  ReviewsPkey = 'reviews_pkey'
}

/** input type for incrementing numeric columns in table "review" */
export type Review_Inc_Input = {
  rating?: Maybe<Scalars['float8']>;
};

/** input type for inserting data into table "review" */
export type Review_Insert_Input = {
  id?: Maybe<Scalars['uuid']>;
  product?: Maybe<Product_Obj_Rel_Insert_Input>;
  product_id?: Maybe<Scalars['uuid']>;
  rating?: Maybe<Scalars['float8']>;
  text?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Review_Max_Fields = {
  __typename?: 'review_max_fields';
  id?: Maybe<Scalars['uuid']>;
  product_id?: Maybe<Scalars['uuid']>;
  rating?: Maybe<Scalars['float8']>;
  text?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "review" */
export type Review_Max_Order_By = {
  id?: Maybe<Order_By>;
  product_id?: Maybe<Order_By>;
  rating?: Maybe<Order_By>;
  text?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Review_Min_Fields = {
  __typename?: 'review_min_fields';
  id?: Maybe<Scalars['uuid']>;
  product_id?: Maybe<Scalars['uuid']>;
  rating?: Maybe<Scalars['float8']>;
  text?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "review" */
export type Review_Min_Order_By = {
  id?: Maybe<Order_By>;
  product_id?: Maybe<Order_By>;
  rating?: Maybe<Order_By>;
  text?: Maybe<Order_By>;
};

/** response of any mutation on the table "review" */
export type Review_Mutation_Response = {
  __typename?: 'review_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Review>;
};

/** on conflict condition type for table "review" */
export type Review_On_Conflict = {
  constraint: Review_Constraint;
  update_columns?: Array<Review_Update_Column>;
  where?: Maybe<Review_Bool_Exp>;
};

/** Ordering options when selecting data from "review". */
export type Review_Order_By = {
  id?: Maybe<Order_By>;
  product?: Maybe<Product_Order_By>;
  product_id?: Maybe<Order_By>;
  rating?: Maybe<Order_By>;
  text?: Maybe<Order_By>;
};

/** primary key columns input for table: review */
export type Review_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "review" */
export enum Review_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  ProductId = 'product_id',
  /** column name */
  Rating = 'rating',
  /** column name */
  Text = 'text'
}

/** input type for updating data in table "review" */
export type Review_Set_Input = {
  id?: Maybe<Scalars['uuid']>;
  product_id?: Maybe<Scalars['uuid']>;
  rating?: Maybe<Scalars['float8']>;
  text?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Review_Stddev_Fields = {
  __typename?: 'review_stddev_fields';
  rating?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "review" */
export type Review_Stddev_Order_By = {
  rating?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Review_Stddev_Pop_Fields = {
  __typename?: 'review_stddev_pop_fields';
  rating?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "review" */
export type Review_Stddev_Pop_Order_By = {
  rating?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Review_Stddev_Samp_Fields = {
  __typename?: 'review_stddev_samp_fields';
  rating?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "review" */
export type Review_Stddev_Samp_Order_By = {
  rating?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Review_Sum_Fields = {
  __typename?: 'review_sum_fields';
  rating?: Maybe<Scalars['float8']>;
};

/** order by sum() on columns of table "review" */
export type Review_Sum_Order_By = {
  rating?: Maybe<Order_By>;
};

/** update columns of table "review" */
export enum Review_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  ProductId = 'product_id',
  /** column name */
  Rating = 'rating',
  /** column name */
  Text = 'text'
}

/** aggregate var_pop on columns */
export type Review_Var_Pop_Fields = {
  __typename?: 'review_var_pop_fields';
  rating?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "review" */
export type Review_Var_Pop_Order_By = {
  rating?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Review_Var_Samp_Fields = {
  __typename?: 'review_var_samp_fields';
  rating?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "review" */
export type Review_Var_Samp_Order_By = {
  rating?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Review_Variance_Fields = {
  __typename?: 'review_variance_fields';
  rating?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "review" */
export type Review_Variance_Order_By = {
  rating?: Maybe<Order_By>;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "product" */
  product: Array<Product>;
  /** fetch aggregated fields from the table: "product" */
  product_aggregate: Product_Aggregate;
  /** fetch data from the table: "product" using primary key columns */
  product_by_pk?: Maybe<Product>;
  /** fetch data from the table: "review" */
  review: Array<Review>;
  /** fetch aggregated fields from the table: "review" */
  review_aggregate: Review_Aggregate;
  /** fetch data from the table: "review" using primary key columns */
  review_by_pk?: Maybe<Review>;
};


export type Subscription_RootProductArgs = {
  distinct_on?: Maybe<Array<Product_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Product_Order_By>>;
  where?: Maybe<Product_Bool_Exp>;
};


export type Subscription_RootProduct_AggregateArgs = {
  distinct_on?: Maybe<Array<Product_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Product_Order_By>>;
  where?: Maybe<Product_Bool_Exp>;
};


export type Subscription_RootProduct_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootReviewArgs = {
  distinct_on?: Maybe<Array<Review_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Review_Order_By>>;
  where?: Maybe<Review_Bool_Exp>;
};


export type Subscription_RootReview_AggregateArgs = {
  distinct_on?: Maybe<Array<Review_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Review_Order_By>>;
  where?: Maybe<Review_Bool_Exp>;
};


export type Subscription_RootReview_By_PkArgs = {
  id: Scalars['uuid'];
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: Maybe<Scalars['uuid']>;
  _gt?: Maybe<Scalars['uuid']>;
  _gte?: Maybe<Scalars['uuid']>;
  _in?: Maybe<Array<Scalars['uuid']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['uuid']>;
  _lte?: Maybe<Scalars['uuid']>;
  _neq?: Maybe<Scalars['uuid']>;
  _nin?: Maybe<Array<Scalars['uuid']>>;
};

export type InsertReviewMutationVariables = Exact<{
  review_insert_input: Review_Insert_Input;
}>;


export type InsertReviewMutation = { __typename?: 'mutation_root', insert_review_one?: Maybe<{ __typename?: 'review', rating: any, text: string }> };

export type ListAllProductsWithReviewsAndAggregateQueryVariables = Exact<{ [key: string]: never; }>;


export type ListAllProductsWithReviewsAndAggregateQuery = { __typename?: 'query_root', product: Array<{ __typename?: 'product', id: any, name?: Maybe<string>, reviews_aggregate: { __typename?: 'review_aggregate', aggregate?: Maybe<{ __typename?: 'review_aggregate_fields', avg?: Maybe<{ __typename?: 'review_avg_fields', rating?: Maybe<number> }> }> }, reviews: Array<{ __typename?: 'review', id: any, rating: any, text: string }> }> };


export const InsertReviewDocument = gql`
    mutation insertReview($review_insert_input: review_insert_input!) {
  insert_review_one(object: $review_insert_input) {
    rating
    text
  }
}
    `;
export type InsertReviewMutationFn = Apollo.MutationFunction<InsertReviewMutation, InsertReviewMutationVariables>;

/**
 * __useInsertReviewMutation__
 *
 * To run a mutation, you first call `useInsertReviewMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertReviewMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertReviewMutation, { data, loading, error }] = useInsertReviewMutation({
 *   variables: {
 *      review_insert_input: // value for 'review_insert_input'
 *   },
 * });
 */
export function useInsertReviewMutation(baseOptions?: Apollo.MutationHookOptions<InsertReviewMutation, InsertReviewMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<InsertReviewMutation, InsertReviewMutationVariables>(InsertReviewDocument, options);
      }
export type InsertReviewMutationHookResult = ReturnType<typeof useInsertReviewMutation>;
export type InsertReviewMutationResult = Apollo.MutationResult<InsertReviewMutation>;
export type InsertReviewMutationOptions = Apollo.BaseMutationOptions<InsertReviewMutation, InsertReviewMutationVariables>;
export const ListAllProductsWithReviewsAndAggregateDocument = gql`
    query listAllProductsWithReviewsAndAggregate {
  product {
    id
    name
    reviews_aggregate {
      aggregate {
        avg {
          rating
        }
      }
    }
    reviews {
      id
      rating
      text
    }
  }
}
    `;

/**
 * __useListAllProductsWithReviewsAndAggregateQuery__
 *
 * To run a query within a React component, call `useListAllProductsWithReviewsAndAggregateQuery` and pass it any options that fit your needs.
 * When your component renders, `useListAllProductsWithReviewsAndAggregateQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListAllProductsWithReviewsAndAggregateQuery({
 *   variables: {
 *   },
 * });
 */
export function useListAllProductsWithReviewsAndAggregateQuery(baseOptions?: Apollo.QueryHookOptions<ListAllProductsWithReviewsAndAggregateQuery, ListAllProductsWithReviewsAndAggregateQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListAllProductsWithReviewsAndAggregateQuery, ListAllProductsWithReviewsAndAggregateQueryVariables>(ListAllProductsWithReviewsAndAggregateDocument, options);
      }
export function useListAllProductsWithReviewsAndAggregateLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListAllProductsWithReviewsAndAggregateQuery, ListAllProductsWithReviewsAndAggregateQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListAllProductsWithReviewsAndAggregateQuery, ListAllProductsWithReviewsAndAggregateQueryVariables>(ListAllProductsWithReviewsAndAggregateDocument, options);
        }
export type ListAllProductsWithReviewsAndAggregateQueryHookResult = ReturnType<typeof useListAllProductsWithReviewsAndAggregateQuery>;
export type ListAllProductsWithReviewsAndAggregateLazyQueryHookResult = ReturnType<typeof useListAllProductsWithReviewsAndAggregateLazyQuery>;
export type ListAllProductsWithReviewsAndAggregateQueryResult = Apollo.QueryResult<ListAllProductsWithReviewsAndAggregateQuery, ListAllProductsWithReviewsAndAggregateQueryVariables>;