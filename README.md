# DataPusher
Loops through a json array and sends it to an HTTP endpoint

# Usage

## Docker

```
docker run -it -v <path to my data.json directory>:/app/data -e ENDPOINT="https://example.com" -e AUTH_HEADER="Basic YWxhZGRpbjpvcGVuc2VzYW1l"  <IMAGE>
```