@app
begin-app

@aws
runtime deno

@http
get /

@tables
data
  scopeID *String
  dataID **String
  ttl TTL
