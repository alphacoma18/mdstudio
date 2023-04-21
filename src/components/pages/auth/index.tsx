import dynamicWrapper from "@/components/wrapper/dynamicWrapper";
export const AuthForm = dynamicWrapper(() => import("./form"));
