/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Text } from "@aws-amplify/ui-react";
export default function Frame406(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="24px"
      direction="column"
      width="524px"
      height="240px"
      position="relative"
      padding="0px 92px 0px 32px"
      backgroundColor="rgba(119,202,133,1)"
      {...rest}
      {...getOverrideProps(overrides, "Frame406")}
    >
      <Flex
        gap="12px"
        direction="column"
        justifyContent="center"
        shrink="0"
        alignSelf="stretch"
        objectFit="cover"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "TextField12170")}
      >
        <Text
          fontFamily="Inter"
          fontSize="20px"
          fontWeight="400"
          color="rgba(48,64,80,1)"
          lineHeight="30px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="ログインID"
          {...getOverrideProps(overrides, "label12171")}
        ></Text>
        <Flex
          gap="0"
          direction="column"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(255,255,255,1)"
          {...getOverrideProps(overrides, "InputGroup12173")}
        >
          <Flex
            gap="10px"
            direction="column"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            alignSelf="stretch"
            objectFit="cover"
            position="relative"
            border="1px SOLID rgba(174,179,183,1)"
            borderRadius="5px"
            padding="8px 16px 8px 16px"
            {...getOverrideProps(overrides, "Input12174")}
          ></Flex>
        </Flex>
      </Flex>
      <Flex
        gap="12px"
        direction="column"
        justifyContent="center"
        shrink="0"
        alignSelf="stretch"
        objectFit="cover"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "TextField12163")}
      >
        <Text
          fontFamily="Inter"
          fontSize="20px"
          fontWeight="400"
          color="rgba(48,64,80,1)"
          lineHeight="30px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="パスワード"
          {...getOverrideProps(overrides, "label12164")}
        ></Text>
        <Flex
          gap="0"
          direction="column"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(255,255,255,1)"
          {...getOverrideProps(overrides, "InputGroup12166")}
        >
          <Flex
            gap="10px"
            direction="column"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            alignSelf="stretch"
            objectFit="cover"
            position="relative"
            border="1px SOLID rgba(174,179,183,1)"
            borderRadius="5px"
            padding="8px 16px 8px 16px"
            {...getOverrideProps(overrides, "Input12167")}
          ></Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
