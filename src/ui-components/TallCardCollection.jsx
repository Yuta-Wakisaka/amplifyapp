/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { SortDirection } from "@aws-amplify/datastore";
import { CertificationReception } from "../models";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import TallCard from "./TallCard";
import { Collection } from "@aws-amplify/ui-react";
export default function TallCardCollection(props) {
  const { items: itemsProp, overrideItems, overrides, ...rest } = props;
  const itemsPagination = {
    sort: (s) => s.applied_at(SortDirection.ASCENDING),
  };
  const itemsDataStore = useDataStoreBinding({
    type: "collection",
    model: CertificationReception,
    pagination: itemsPagination,
  }).items;
  const items = itemsProp !== undefined ? itemsProp : itemsDataStore;
  return (
    <Collection
      type="grid"
      searchPlaceholder="Search..."
      templateColumns="1fr 1fr"
      autoFlow="row"
      alignItems="stretch"
      justifyContent="stretch"
      items={items || []}
      {...rest}
      {...getOverrideProps(overrides, "TallCardCollection")}
    >
      {(item, index) => (
        <TallCard
          imageUrl={item}
          userData={item}
          height="auto"
          width="auto"
          margin="10px 7px 10px 7px"
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></TallCard>
      )}
    </Collection>
  );
}
