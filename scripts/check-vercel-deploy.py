import urllib.request, json, os

# Get Vercel token
token = os.environ.get('VERCEL_TOKEN', '')
if not token:
    for line in open('/opt/data/thiagopiola_repo/.env.local'):
        if 'VERCEL_TOKEN' in line:
            token = line.split('=', 1)[1].strip().strip('"\'').strip()
            break

# Get project info
req = urllib.request.Request('https://api.vercel.com/v9/projects/thiagopiola?teamId=thiagopiola')
req.add_header('Authorization', 'Bearer ' + token)
with urllib.request.urlopen(req, timeout=10) as resp:
    d = json.loads(resp.read().decode())

link = d.get('link', {})
hooks = link.get('deployHooks', [])
print('Number of hooks:', len(hooks))
for h in hooks:
    print('Hook:', h.get('name'), '| ref:', h.get('ref'), '| url exists:', bool(h.get('url')))

# Check git repos on Vercel
print()
print('Project name:', d.get('name'))
print('Git repo:', link.get('repo'))
print('Org:', link.get('org'))
print('Production branch:', link.get('productionBranch'))
