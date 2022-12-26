export { default } from "next-auth/middleware";
// 1. this export is buggy and causes a logged in user to be locked out
// 2. nested middleware is not allowed anymore
// refer: https://nextjs.org/docs/messages/nested-middleware
