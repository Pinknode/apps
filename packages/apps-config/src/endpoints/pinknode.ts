// Copyright 2017-2022 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { TFunction } from 'i18next';
import type { LinkOption } from './types';

import { expandEndpoints } from './util';

/* eslint-disable sort-keys */

// The available endpoints that will show in the dropdown. For the most part (with the exception of
// Polkadot) we try to keep this to live chains only, with RPCs hosted by the community/chain vendor
//   info: The chain logo name as defined in ../ui/logos/index.ts in namedLogos (this also needs to align with @polkadot/networks)
//   text: The text to display on the dropdown
//   value: The actual hosted secure websocket endpoint

// alphabetical based on chain name
export function createPinknode (t: TFunction, firstOnly: boolean, withSort: boolean): LinkOption[] {
  return expandEndpoints(t, [
    {
      info: 'polkadot',
      text: t('rpc.polkadot.parity', 'Polkadot', { ns: 'apps-config' }),
      providers: {
        Pinknode: 'wss://rpc.pinknode.io/polkadot/explorer'
      }
    },
    {
      info: 'kusama',
      text: t('rpc.kusama.parity', 'Kusama', { ns: 'apps-config' }),
      providers: {
        Pinknode: 'wss://rpc.pinknode.io/kusama/explorer'
      }
    },
    {
      info: 'westend',
      text: t('rpc.westend', 'Westend', { ns: 'apps-config' }),
      providers: {
        Pinknode: 'wss://rpc.pinknode.io/westend/explorer'
      }
    },
    {
      info: 'rococo',
      text: t('rpc.rococo', 'Rococo', { ns: 'apps-config' }),
      providers: {
        Pinknode: 'wss://rpc.pinknode.io/rococo/explorer'
      }
    },
    {
      info: 'shiden',
      text: t('rpc.kusama.shiden', 'Shiden', { ns: 'apps-config' }),
      providers: {
        Pinknode: 'wss://rpc.pinknode.io/shiden/explorer'
      }
    },
    {
      info: 'polkadex',
      text: t('rpc.prod.polkadex', 'Polkadex', { ns: 'apps-config' }),
      providers: {
        Pinknode: 'wss://rpc.pinknode.io/polkadex/explorer'
      }
    },
    {
      info: 'equilibrium',
      text: t('rpc.prod.equilibrium', 'Equilibrium', { ns: 'apps-config' }),
      providers: {
        Pinknode: 'wss://rpc.pinknode.io/eq-node/explorer'
      }
    },
    {
      info: 'genshiro',
      text: t('rpc.kusama.genshiro', 'Genshiro', { ns: 'apps-config' }),
      providers: {
        Pinknode: 'wss://rpc.pinknode.io/eq-testnet/explorer'
      }
    },
    {
      info: 'shibuya',
      text: t('rpc.test.shibuya', 'Shibuya', { ns: 'apps-config' }),
      providers: {
        Pinknode: 'wss://rpc.pinknode.io/shibuya/explorer'
      }
    },
    {
      info: 'pontem',
      text: t('rpc.pontem', 'Pontem', { ns: 'apps-config' }),
      providers: {
        Pinknode: 'wss://rpc.pinknode.io/pontem/explorer'
      }
    },
    {
      info: 'moonriver',
      text: t('rpc.kusama.moonriver', 'Moonriver', { ns: 'apps-config' }),
      providers: {
        Pinknode: 'wss://rpc.pinknode.io/moonriver/explorer'
      }
    },
    {
      info: 'crust',
      text: t('rpc.crust.network', 'Crust Maxwell', { ns: 'apps-config' }),
      providers: {
        Pinknode: 'wss://rpc.pinknode.io/maxwell/explorer'
      }
    }
  ], firstOnly, withSort);
}
