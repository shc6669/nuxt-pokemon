import App from "vue";
import { AxiosResponse, AxiosRequestConfig } from "axios";

/**
 * @description service to call HTTP request via Axios
 */
class ApiService {
  /**
   * @description property to share vue instance
   */
  public static vueInstance: App;

  /**
   * @description set the default HTTP request headers
   */
  public static setHeader(): void {
    ApiService.vueInstance.$axios.defaults.headers.common["Accept"] = "application/json";
    ApiService.vueInstance.$axios.defaults.headers.common["Content-Type"] = "application/json";
  }

  /**
   * @description send the GET HTTP request
   * @param resource: string
   * @param params: AxiosRequestConfig
   * @returns Promise<AxiosResponse>
   */
  public static queryAll(
    resource: string,
    params: AxiosRequestConfig
  ): Promise<AxiosResponse> {
    return ApiService.vueInstance.$axios.get(resource, params);
  }

  /**
   * @description send the GET HTTP request
   * @param resource: string
   * @param slug: string
   * @returns Promise<AxiosResponse>
   */
  public static getDetail(
    resource: string,
    slug = "" as string
  ): Promise<AxiosResponse> {
    return ApiService.vueInstance.$axios.get(`${resource}/${slug}`);
  }
}

export default ApiService;
