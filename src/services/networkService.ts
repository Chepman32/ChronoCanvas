import { REMOTE_STORIES_BASE_URL } from './remoteStoryService';

export interface NetworkStatus {
  isConnected: boolean;
  isInternetReachable: boolean;
}

/**
 * Check if the device has internet connectivity
 * Uses a simple fetch approach to avoid adding extra dependencies
 */
export async function checkConnectivity(): Promise<NetworkStatus> {
  try {
    // Try to fetch the manifest with a HEAD request
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000); // 5 second timeout

    const response = await fetch(`${REMOTE_STORIES_BASE_URL}/manifest.json`, {
      method: 'HEAD',
      cache: 'no-cache',
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    return {
      isConnected: true,
      isInternetReachable: response.ok,
    };
  } catch {
    return {
      isConnected: false,
      isInternetReachable: false,
    };
  }
}
