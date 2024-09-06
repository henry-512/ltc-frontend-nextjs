#!/bin/bash

npm run build

mkdir ltc-frontend-nextjs

cp -a ./public/. ltc-frontend-nextjs/public
cp -a .next/standalone/. ltc-frontend-nextjs
cp -a .next/static/. ltc-frontend-nextjs/.next/static

# dockerfile
cp Dockerfile ltc-frontend-nextjs

# tarball
tar czf ltc-frontend-nextjs.tar.gz ltc-frontend-nextjs
# ship it
echo Shipping to $PI_SERVER_IP
scp ltc-frontend-nextjs.tar.gz server@$PI_SERVER_IP:~

# cleanup
rm -r ltc-frontend-nextjs
rm ltc-frontend-nextjs.tar.gz
