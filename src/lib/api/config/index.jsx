import axios from "axios";
import axiosRetry, { isRetryableError } from "axios-retry"

//config axios
const useAxios = () => {
    const apiURL = process.env.REACT_APP_API_URL;
    const createAxios = (baseURL, config) => {
        return axios.create({
            baseURL,
            headers: {
                Accept : "application/json",
                "Content-Type" : "application/json",
                ...config,
            }
        })

    }

    const axiosIntance = createAxios(apiURL)

    const applyRetryConfig = (instance) => {
        axiosRetry(instance, {
            retries: 3,
            retryDelay: axiosRetry.exponentialDelay,
            shouldResetTimeout: true,
            retryCondition: (error) => {
                const networkErrorCodes = [
                    'ECONNRESET',
                    'ECONNABORTED',
                    'ETIMEDOUT',
                ];
                const shouldRetryNetworkError = networkErrorCodes.includes(
                    error.code ?? '',
                );

                const shouldRetryServerError = error.response?.status
                    ? error.response.status >= 500 && error.response.status < 600
                    : false;

                const shouldRetryTimeout = error.code === 'ECONNABORTED';

                const isRetryable = isRetryableError(error);

                return (
                    shouldRetryNetworkError ||
                    shouldRetryServerError ||
                    shouldRetryTimeout ||
                    isRetryable
                );
            },
        });
    };


    const applyEncryptedData = (intance) => {

    }

    const applyDecryptedData = (intance) => {

    }

    applyRetryConfig(axiosIntance);
    // applyEncryptedData(axiosIntance);
    // applyDecryptedData(axiosIntance);

    return { axiosIntance }
}

export default useAxios;