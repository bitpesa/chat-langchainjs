import "server-only";

import { BedrockEmbeddings } from "@langchain/aws";
import { BedrockRuntimeClient } from "@aws-sdk/client-bedrock-runtime";
import { fromNodeProviderChain, fromEnv } from "@aws-sdk/credential-providers";

export async function getBedrockEmbeddings() {
  const credentials = fromNodeProviderChain({
    profile: "aza-aws-dev-sso",
  });

  const client = new BedrockRuntimeClient({
    region: "eu-west-2",
    credentials: fromEnv(),
  });

  return new BedrockEmbeddings({
    model: "amazon.titan-embed-text-v2:0",
    client,
  });
}
