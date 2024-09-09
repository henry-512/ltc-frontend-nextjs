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
echo Shipping to $(<../pi_server)
scp ltc-frontend-nextjs.tar.gz server@$(<../pi_server):~

# cleanup
rm -r ltc-frontend-nextjs
rm ltc-frontend-nextjs.tar.gz
