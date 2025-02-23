// This file is auto-generated by @hey-api/openapi-ts

export type Organization = {
  _id: string;
  title: string;
  allow_ai_translations: boolean;
  created_at: string;
  modified_at: string;
};

export type ProjectLocalization = {
  language_code: string;
  country_code: string | null;
  enabled: boolean;
};

export type Project = {
  localizations: Array<ProjectLocalization>;
  _id: string;
  title: string;
  description: string;
  organization_id: string;
  is_public: boolean;
  auto_translate: boolean;
  auto_approve_translations: boolean;
  allow_ai_translations: boolean;
  created_at: string;
  modified_at: string;
};

export type FileFormat = "json" | "yaml";

export type PushLocaleInputFile = {
  file_format: FileFormat;
  file_name: string;
  content: string;
};

export type PushLocaleInput = {
  files: Array<PushLocaleInputFile>;
};

export type PushLocaleResult = {
  inserted: number;
  modified: number;
};

export type PartialExportProjectConfigInput = {
  format?: FileFormat;
  flat?: boolean;
  keep_empty_fields?: boolean;
};

export type ExportProjectOutput = {
  language_code: string;
  country_code: string | null;
  content: string;
};

export type GetOrganizationsData = {
  body?: never;
  headers: {
    "x-api-key": string;
  };
  path?: never;
  query?: never;
  url: "/organizations";
};

export type GetOrganizationsErrors = {
  /**
   * </br>Api key not found
   */
  403: {
    message: string;
    statusCode: number;
  };
};

export type GetOrganizationsError =
  GetOrganizationsErrors[keyof GetOrganizationsErrors];

export type GetOrganizationsResponses = {
  200: Array<Organization>;
};

export type GetOrganizationsResponse =
  GetOrganizationsResponses[keyof GetOrganizationsResponses];

export type GetOrganizationByIdData = {
  body?: never;
  headers: {
    "x-api-key": string;
  };
  path: {
    organization_id: string;
  };
  query?: never;
  url: "/organizations/{organization_id}";
};

export type GetOrganizationByIdErrors = {
  /**
   * </br>Invalid organization id
   */
  400: {
    message: string;
    statusCode: number;
  };
  /**
   * </br>Api key not found</br>API key does not have access to organization
   */
  403: {
    message: string;
    statusCode: number;
  };
  /**
   * </br>Organization not found
   */
  404: {
    message: string;
    statusCode: number;
  };
};

export type GetOrganizationByIdError =
  GetOrganizationByIdErrors[keyof GetOrganizationByIdErrors];

export type GetOrganizationByIdResponses = {
  200: Organization;
};

export type GetOrganizationByIdResponse =
  GetOrganizationByIdResponses[keyof GetOrganizationByIdResponses];

export type GetOrganizationProjectsData = {
  body?: never;
  headers: {
    "x-api-key": string;
  };
  path: {
    organization_id: string;
  };
  query?: never;
  url: "/organizations/{organization_id}/projects";
};

export type GetOrganizationProjectsErrors = {
  /**
   * </br>Invalid organization id
   */
  400: {
    message: string;
    statusCode: number;
  };
  /**
   * </br>Api key not found</br>API key does not have access to organization
   */
  403: {
    message: string;
    statusCode: number;
  };
  /**
   * </br>Organization not found
   */
  404: {
    message: string;
    statusCode: number;
  };
};

export type GetOrganizationProjectsError =
  GetOrganizationProjectsErrors[keyof GetOrganizationProjectsErrors];

export type GetOrganizationProjectsResponses = {
  200: Array<Project>;
};

export type GetOrganizationProjectsResponse =
  GetOrganizationProjectsResponses[keyof GetOrganizationProjectsResponses];

export type GetProjectByIdData = {
  body?: never;
  headers: {
    "x-api-key": string;
  };
  path: {
    project_id: string;
  };
  query?: never;
  url: "/projects/{project_id}";
};

export type GetProjectByIdErrors = {
  /**
   * </br>Invalid project id
   */
  400: {
    message: string;
    statusCode: number;
  };
  /**
   * </br>You do not have access to the given project</br>Api key not found
   */
  403: {
    message: string;
    statusCode: number;
  };
  /**
   * </br>Project not found
   */
  404: {
    message: string;
    statusCode: number;
  };
};

export type GetProjectByIdError =
  GetProjectByIdErrors[keyof GetProjectByIdErrors];

export type GetProjectByIdResponses = {
  200: Project;
};

export type GetProjectByIdResponse =
  GetProjectByIdResponses[keyof GetProjectByIdResponses];

export type PushLocalesToProjectData = {
  body: PushLocaleInput;
  headers: {
    "x-api-key": string;
  };
  path: {
    project_id: string;
  };
  query?: never;
  url: "/projects/{project_id}/push";
};

export type PushLocalesToProjectErrors = {
  /**
   * </br>Invalid project id
   */
  400: {
    message: string;
    statusCode: number;
  };
  /**
   * </br>You do not have access to the given project</br>Api key not found
   */
  403: {
    message: string;
    statusCode: number;
  };
  /**
   * </br>Project not found
   */
  404: {
    message: string;
    statusCode: number;
  };
};

export type PushLocalesToProjectError =
  PushLocalesToProjectErrors[keyof PushLocalesToProjectErrors];

export type PushLocalesToProjectResponses = {
  200: PushLocaleResult;
};

export type PushLocalesToProjectResponse =
  PushLocalesToProjectResponses[keyof PushLocalesToProjectResponses];

export type PullProjectData = {
  body: PartialExportProjectConfigInput;
  headers: {
    "x-api-key": string;
  };
  path: {
    project_id: string;
  };
  query?: never;
  url: "/projects/{project_id}/pull";
};

export type PullProjectErrors = {
  /**
   * </br>Invalid project id
   */
  400: {
    message: string;
    statusCode: number;
  };
  /**
   * </br>Api key not found</br>You do not have access to the given project
   */
  403: {
    message: string;
    statusCode: number;
  };
  /**
   * </br>Project not found
   */
  404: {
    message: string;
    statusCode: number;
  };
};

export type PullProjectError = PullProjectErrors[keyof PullProjectErrors];

export type PullProjectResponses = {
  200: Array<ExportProjectOutput>;
};

export type PullProjectResponse =
  PullProjectResponses[keyof PullProjectResponses];
