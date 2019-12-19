import axios from 'axios';

const api = axios.create({
  /**
   * baseUrl for Android
   * Android Studio emulator -> 10.0.2.2
   * Genymotion -> 10.0.3.2
   * USB -> PC IP
   */
  baseURL: 'http://localhost:4444',
});

export default api;
