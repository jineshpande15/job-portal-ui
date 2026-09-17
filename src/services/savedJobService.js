import httpClient from '../config/httpClient';
import { API_ENDPOINTS } from '../config/api';

/**
 * Get all saved jobs for the current user
 */
export const getSavedJobs = async () => {
  try {
    const response = await httpClient.get(API_ENDPOINTS.SAVED_JOBS);
    return response.data;
  } catch (error) {
    console.error('Error fetching saved jobs:', error);
    throw error;
  }
};

/**
 * Get all saved job IDs for the current user (lightweight)
 */
export const getSavedJobIds = async () => {
  try {
    // No dedicated ids endpoint on the backend -- derive from the saved job list.
    const response = await httpClient.get(API_ENDPOINTS.SAVED_JOBS);
    return (response.data || []).map((job) => job.id);
  } catch (error) {
    console.error('Error fetching saved job IDs:', error);
    throw error;
  }
};

/**
 * Save a job
 * @param {number} jobId - The job ID to save
 */
export const saveJob = async (jobId) => {
  try {
    const response = await httpClient.post(API_ENDPOINTS.SAVE_JOB(jobId));
    return response.data;
  } catch (error) {
    console.error('Error saving job:', error);
    throw error;
  }
};

/**
 * Unsave a job
 * @param {number} jobId - The job ID to unsave
 */
export const unsaveJob = async (jobId) => {
  try {
    await httpClient.delete(API_ENDPOINTS.UNSAVE_JOB(jobId));
  } catch (error) {
    console.error('Error unsaving job:', error);
    throw error;
  }
};

/**
 * Check if a job is saved
 * @param {number} jobId - The job ID to check
 */
export const isJobSaved = async (jobId) => {
  try {
    // No check endpoint on the backend -- derive from the saved job list.
    const ids = await getSavedJobIds();
    return ids.some((id) => String(id) === String(jobId));
  } catch (error) {
    console.error('Error checking if job is saved:', error);
    return false;
  }
};
