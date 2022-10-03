/**
 * Generated by orval v6.10.2 🍺
 * Do not edit manually.
 * Swagger Petstore
 * This is a sample server Petstore server.  You can find out more about Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).  For this sample, you can use the api key `special-key` to test the authorization filters.
 * OpenAPI spec version: 1.0.6
 */
import axios from 'axios'
import type {
  AxiosRequestConfig,
  AxiosResponse,
  AxiosError
} from 'axios'
import {
  useMutation
} from '@tanstack/react-query'
import type {
  UseMutationOptions,
  MutationFunction
} from '@tanstack/react-query'
/**
 * pet status in the store
 */
export type PetStatus = typeof PetStatus[keyof typeof PetStatus];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const PetStatus = {
  available: 'available',
  pending: 'pending',
  sold: 'sold',
} as const;

export interface Pet {
  id?: number;
  name: string;
  /** pet status in the store */
  status?: PetStatus;
}

export interface ApiResponse {
  code?: number;
  type?: string;
  message?: string;
}




/**
 * @summary get options
 */
export const options = (
    petId: number, options?: AxiosRequestConfig
 ): Promise<AxiosResponse<ApiResponse>> => {
    return axios.post(
      `/pet/${petId}/options`,undefined,options
    );
  }



    export type OptionsMutationResult = NonNullable<Awaited<ReturnType<typeof options>>>
    
    export type OptionsMutationError = AxiosError<unknown>

    export const useOptions = <TError = AxiosError<unknown>,
    
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof options>>, TError,{petId: number}, TContext>, axios?: AxiosRequestConfig}
) => {
      const {mutation: mutationOptions, axios: axiosOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof options>>, {petId: number}> = (props) => {
          const {petId} = props ?? {};

          return  options(petId,axiosOptions)
        }

      return useMutation<Awaited<ReturnType<typeof options>>, TError, {petId: number}, TContext>(mutationFn, mutationOptions)
    }
    