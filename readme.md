Install etc on OSX
------------------

brew install etcd

Start etcd with goreman
-----------------------

See more @ https://github.com/coreos/etcd
and
 https://github.com/mattn/goreman

1. install goreman ```go get github.com/mattn/goreman```
1. start a cluster with the proxy ``goreman check && goreman start```

Start Node sample
-----------------

See more @ https://github.com/stianeikeland/node-etcd

1. cd _node_sample
1. Install node-etcd: ```npm install```
1. start the sample watcher ```npm start```
