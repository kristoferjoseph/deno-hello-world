@app
begin-app

@aws
runtime deno

@static
folder dist

@http
get /

@tables
data
  scopeID *String
  dataID **String
  ttl TTL
