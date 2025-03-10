// This file is auto-generated by @hey-api/openapi-ts

export type GetUsersData = {
  body?: never;
  path?: never;
  query?: never;
  url: "/users";
};

export type GetUsersResponses = {
  /**
   * A JSON array of user names
   */
  200: Array<string>;
};

export type GetUsersResponse = GetUsersResponses[keyof GetUsersResponses];
