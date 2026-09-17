/**
 * API Configuration
 * Centralized configuration for all API endpoints
 */

// Base URL for the backend API
export const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:8080/api";

// API Version Configuration
// Default version sent in Accept header for all REST API calls
// Format: application/vnd.eazyapp+json;v=1.0
export const DEFAULT_API_VERSION = "1.0";

// Supported API versions
export const SUPPORTED_API_VERSIONS = ["1.0", "2.0", "3.0"];

// Helper to generate Accept header value for a specific version
export const getAcceptHeader = (version = DEFAULT_API_VERSION) =>
  `application/vnd.eazyapp+json;v=${version}`;

// API Endpoints
//
// NOTE: the backend puts the role/visibility marker LAST in the path
// (e.g. /companies/public, /contacts/admin, /jobs/employer) and prefixes
// everything with /api via WebConfig.configurePathMatch. Paths below mirror
// the controllers exactly -- an unmapped path falls through to the
// /api/** catch-all in PathsConfig and returns 403, not 404.
export const API_ENDPOINTS = {
  // Company endpoints
  COMPANIES: "/companies/public", // GET, public
  COMPANIES_ADMIN: "/companies/admin", // GET list + POST create, admin
  COMPANY_BY_ID_ADMIN: (id) => `/companies/${id}/admin`, // PUT + DELETE, admin

  // Auth endpoints
  LOGIN: "/auth/login/public",
  REGISTER: "/auth/register/public",

  // Profile endpoints (jobseeker)
  PROFILE: "/users/profile/jobseeker", // GET, and PUT (multipart) to update
  PROFILE_PICTURE: "/users/profile/picture/jobseeker",
  PROFILE_RESUME: "/users/profile/resume/jobseeker",

  // Contact endpoints
  CONTACTS: "/contacts/public", // POST, public
  ADMIN_CONTACTS: "/contacts/admin",
  ADMIN_CONTACTS_SORT: "/contacts/sort/admin",
  ADMIN_CONTACTS_PAGE: "/contacts/page/admin",
  UPDATE_CONTACT_STATUS: (id) => `/contacts/${id}/status/admin`, // PATCH

  // CSRF token endpoint
  CSRF_TOKEN: "/csrf-token/public",

  // Admin user management endpoints
  SEARCH_USER_BY_EMAIL: "/users/search/admin", // GET ?email=
  ELEVATE_TO_EMPLOYER: (userId) => `/users/${userId}/role/employer/admin`, // PATCH
  ASSIGN_COMPANY_TO_EMPLOYER: (userId, companyId) =>
    `/users/${userId}/company/${companyId}/admin`, // PATCH, companyId is a path variable

  // Employer job management endpoints
  EMPLOYER_JOBS: "/jobs/employer", // GET list
  POST_JOB: "/jobs/employer", // POST create
  UPDATE_JOB_STATUS: (jobId) => `/jobs/${jobId}/status/employer`, // PATCH

  // Employer view of applications
  APPLICATIONS_BY_JOB: (jobId) => `/jobs/applications/${jobId}/employer`, // GET
  UPDATE_APPLICATION_STATUS: "/jobs/applications/employer", // PATCH, applicationId goes in the body

  // Saved jobs endpoints (jobseeker)
  SAVED_JOBS: "/users/saved-jobs/jobseeker", // GET
  SAVE_JOB: (jobId) => `/users/saved-jobs/${jobId}/jobseeker`, // POST
  UNSAVE_JOB: (jobId) => `/users/saved-jobs/${jobId}/jobseeker`, // DELETE

  // Job application endpoints (jobseeker)
  APPLY_JOB: "/users/job-applications/jobseeker", // POST
  MY_APPLICATIONS: "/users/job-applications/jobseeker", // GET
  WITHDRAW_APPLICATION: (jobId) => `/users/job-applications/${jobId}/jobseeker`, // DELETE
};

// Endpoints the backend does NOT expose. Anything that used to live here is
// now derived client-side from the list endpoints above:
//   - saved job ids / "is this job saved"  -> derive from SAVED_JOBS
//   - applied job ids / "did I apply"      -> derive from MY_APPLICATIONS
//   - single company by id                 -> derive from COMPANIES
//   - single contact by id, company-wide application list, server logout
//     have no backend equivalent at all.
// Public job search is not a backend endpoint either -- the Jobs page reads
// src/data/mockData.js.

// HTTP Headers
export const API_HEADERS = {
  "Content-Type": "application/json",
};

// Request timeout (in milliseconds)
export const API_TIMEOUT = 30000;

export default {
  API_BASE_URL,
  API_ENDPOINTS,
  API_HEADERS,
  API_TIMEOUT,
  DEFAULT_API_VERSION,
  SUPPORTED_API_VERSIONS,
};
