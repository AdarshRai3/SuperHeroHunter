import requests

timestamp = 1654237600
private_key = "63d44a2ff474121a6c8cce8ea9fc3cc05aac4c74"
public_key = "801ffb179c43e62422d9c6ac3f1203f0"

url = "https://api.marvel.com/v1/public/characters"

headers = {
  "Authorization": "Bearer {}.{}".format(timestamp, bc5a15119a81b785720ecc9e25e5b0a3)
}

response = requests.get(url, headers=headers)

if response.status_code == 200:
  characters = response.json()
  print(characters)
else:
  print(response.status_code)
