#!/bin/sh

cat << EOF > "1970-01-01-shitpost-${RANDOM}.md"
---
category: clocky
---
`curl 'https://baconipsum.com/api/?type=meat-and-filler&format=text&paras=1'`
EOF


