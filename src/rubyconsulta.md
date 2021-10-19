require "uri"
require "json"
require "net/http"

url = URI("https://gtw-prod.alemana.io/public/api-farmacos/v1/vmpp?q=amoxi&refset=1002")

https = Net::HTTP.new(url.host, url.port)
https.use_ssl = true

request = Net::HTTP::Get.new(url)
request["X-API-Key"] = "5e1dc5891a05f000011faf522daf1a4785e04b3ab708d2da1fc7ea4c"
request["Content-Type"] = "application/json"

response = https.request(request)
puts response.read_body
