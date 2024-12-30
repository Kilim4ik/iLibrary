import { isUserKeyUsed } from "./dataUsersComands.js";

export const generateUserKey = (obj) => {
  obj["userKey"] = self.crypto.randomUUID();
  if (obj.userKey === isUserKeyUsed(obj.userKey)) generateUserKey();
};
