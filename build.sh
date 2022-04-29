#!/bin/sh

# 実行時に指定された引数の数、つまり変数 $# の値が 3 でなければエラー終了。
if [ $1 = 'minikube' ]; then
    eval $(minikube docker-env)
    echo 'Build on Minikube VM...'
else
    echo 'Build on Local Machine...'
fi

docker build -t tako919191/hello-vue:latest .

echo 'Done!'
