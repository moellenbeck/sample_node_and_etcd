'use strict';

var Etcd = require('node-etcd');

var etcd = new Etcd('127.0.0.1', '12379');

var watcher = etcd.watcher('/mykey');

watcher.on("change", console.log);
