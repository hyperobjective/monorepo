/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  ContractRunner,
  ContractMethod,
  Listener,
} from 'ethers'
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedListener,
  TypedContractMethod,
} from './common'

export interface DevOpsToolsInterface extends Interface {
  getFunction(
    nameOrSignature:
      | 'RELATIVE_BROADCAST_PATH'
      | 'get_most_recent_deployment(string,uint256,string)'
      | 'get_most_recent_deployment(string,uint256)'
      | 'vm'
  ): FunctionFragment

  encodeFunctionData(
    functionFragment: 'RELATIVE_BROADCAST_PATH',
    values?: undefined
  ): string
  encodeFunctionData(
    functionFragment: 'get_most_recent_deployment(string,uint256,string)',
    values: [string, BigNumberish, string]
  ): string
  encodeFunctionData(
    functionFragment: 'get_most_recent_deployment(string,uint256)',
    values: [string, BigNumberish]
  ): string
  encodeFunctionData(functionFragment: 'vm', values?: undefined): string

  decodeFunctionResult(
    functionFragment: 'RELATIVE_BROADCAST_PATH',
    data: BytesLike
  ): Result
  decodeFunctionResult(
    functionFragment: 'get_most_recent_deployment(string,uint256,string)',
    data: BytesLike
  ): Result
  decodeFunctionResult(
    functionFragment: 'get_most_recent_deployment(string,uint256)',
    data: BytesLike
  ): Result
  decodeFunctionResult(functionFragment: 'vm', data: BytesLike): Result
}

export interface DevOpsTools extends BaseContract {
  connect(runner?: ContractRunner | null): DevOpsTools
  waitForDeployment(): Promise<this>

  interface: DevOpsToolsInterface

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>
  listeners(eventName?: string): Promise<Array<Listener>>
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>

  RELATIVE_BROADCAST_PATH: TypedContractMethod<[], [string], 'view'>

  'get_most_recent_deployment(string,uint256,string)': TypedContractMethod<
    [
      contractName: string,
      chainId: BigNumberish,
      relativeBroadcastPath: string,
    ],
    [string],
    'view'
  >

  'get_most_recent_deployment(string,uint256)': TypedContractMethod<
    [contractName: string, chainId: BigNumberish],
    [string],
    'view'
  >

  vm: TypedContractMethod<[], [string], 'view'>

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T

  getFunction(
    nameOrSignature: 'RELATIVE_BROADCAST_PATH'
  ): TypedContractMethod<[], [string], 'view'>
  getFunction(
    nameOrSignature: 'get_most_recent_deployment(string,uint256,string)'
  ): TypedContractMethod<
    [
      contractName: string,
      chainId: BigNumberish,
      relativeBroadcastPath: string,
    ],
    [string],
    'view'
  >
  getFunction(
    nameOrSignature: 'get_most_recent_deployment(string,uint256)'
  ): TypedContractMethod<
    [contractName: string, chainId: BigNumberish],
    [string],
    'view'
  >
  getFunction(nameOrSignature: 'vm'): TypedContractMethod<[], [string], 'view'>

  filters: {}
}