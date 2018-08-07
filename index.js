'use strict';

var tuxcore = module.exports;

// module information
tuxcore.version = 'v' + require('./package.json').version;
tuxcore.versionGuard = function(version) {
  if (version !== undefined) {
    var message = 'More than one instance of tuxcore-lib found. ' +
      'Please make sure to require tuxcore-lib and check that submodules do' +
      ' not also include their own tuxcore-lib dependency.';
    throw new Error(message);
  }
};
tuxcore.versionGuard(global._tuxcore);
global._tuxcore = tuxcore.version;

// crypto
tuxcore.crypto = {};
tuxcore.crypto.BN = require('./lib/crypto/bn');
tuxcore.crypto.ECDSA = require('./lib/crypto/ecdsa');
tuxcore.crypto.Hash = require('./lib/crypto/hash');
tuxcore.crypto.Random = require('./lib/crypto/random');
tuxcore.crypto.Point = require('./lib/crypto/point');
tuxcore.crypto.Signature = require('./lib/crypto/signature');

// encoding
tuxcore.encoding = {};
tuxcore.encoding.Base58 = require('./lib/encoding/base58');
tuxcore.encoding.Base58Check = require('./lib/encoding/base58check');
tuxcore.encoding.BufferReader = require('./lib/encoding/bufferreader');
tuxcore.encoding.BufferWriter = require('./lib/encoding/bufferwriter');
tuxcore.encoding.Varint = require('./lib/encoding/varint');

// utilities
tuxcore.util = {};
tuxcore.util.buffer = require('./lib/util/buffer');
tuxcore.util.js = require('./lib/util/js');
tuxcore.util.preconditions = require('./lib/util/preconditions');

// errors thrown by the library
tuxcore.errors = require('./lib/errors');

// main bitcoin library
tuxcore.Address = require('./lib/address');
tuxcore.Block = require('./lib/block');
tuxcore.MerkleBlock = require('./lib/block/merkleblock');
tuxcore.BlockHeader = require('./lib/block/blockheader');
tuxcore.HDPrivateKey = require('./lib/hdprivatekey.js');
tuxcore.HDPublicKey = require('./lib/hdpublickey.js');
tuxcore.Networks = require('./lib/networks');
tuxcore.Opcode = require('./lib/opcode');
tuxcore.PrivateKey = require('./lib/privatekey');
tuxcore.PublicKey = require('./lib/publickey');
tuxcore.Script = require('./lib/script');
tuxcore.Transaction = require('./lib/transaction');
tuxcore.URI = require('./lib/uri');
tuxcore.Unit = require('./lib/unit');

// dependencies, subject to change
tuxcore.deps = {};
tuxcore.deps.bnjs = require('bn.js');
tuxcore.deps.bs58 = require('bs58');
tuxcore.deps.Buffer = Buffer;
tuxcore.deps.elliptic = require('elliptic');
tuxcore.deps.scryptsy = require('scryptsy');
tuxcore.deps._ = require('lodash');

// Internal usage, exposed for testing/advanced tweaking
tuxcore.Transaction.sighash = require('./lib/transaction/sighash');
