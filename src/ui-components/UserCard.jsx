/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Card, Heading, View } from "@aws-amplify/ui-react";
export default function UserCard(props) {
  const { userData, overrides, ...rest } = props;
  return (
    <View
      width="462px"
      height="254px"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(174,179,183,1)"
      {...rest}
      {...getOverrideProps(overrides, "UserCard")}
    >
      <Card
        display="flex"
        gap="0"
        position="absolute"
        top="61px"
        left="53px"
        direction="column"
        justifyContent="center"
        borderRadius="16px 16px 16px 16px"
        padding="16px 16px 16px 16px"
        backgroundColor="rgba(255,255,255,1)"
        variation="default"
        {...getOverrideProps(overrides, "Card")}
      ></Card>
      <Heading
        display="flex"
        gap="0"
        position="absolute"
        top="77px"
        left="74px"
        direction="row"
        padding="0px 0px 0px 0px"
        level="3"
        children={userData?.user_name}
        {...getOverrideProps(overrides, "Heading32622700")}
      ></Heading>
      <Heading
        display="flex"
        gap="0"
        position="absolute"
        top="117px"
        left="74px"
        direction="row"
        padding="0px 0px 0px 0px"
        level="5"
        children={userData?.user_id}
        {...getOverrideProps(overrides, "Heading32622703")}
      ></Heading>
      <Heading
        display="flex"
        gap="0"
        position="absolute"
        top="142px"
        left="74px"
        direction="row"
        padding="0px 0px 0px 0px"
        level="5"
        children={userData?.user_status}
        {...getOverrideProps(overrides, "Heading32622706")}
      ></Heading>
    </View>
  );
}
