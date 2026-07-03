pm2 stop tengenx
cd ~/dev/tengenx-company-page
git pull
pnpm build
cp -r /root/dev/tengenx-company-page/public /root/dev/tengenx-company-page/.next/standalone/
cp -r /root/dev/tengenx-company-page/.next/static /root/dev/tengenx-company-page/.next/standalone/.next/
pm2 restart tengenx