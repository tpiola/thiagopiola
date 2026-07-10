import urllib.request, json, os, sys

os.chdir('/opt/data/thiagopiola_repo')
token = os.environ.get('VERCEL_TOKEN', '')
for line in open('.env.local'):
    if 'VERCEL_TOKEN' in line:
        token = line.split('=', 1)[1].strip().strip('"\'').strip()
        break

req = urllib.request.Request('https://api.vercel.com/v6/deployments?projectId=prj_NzWe1H8CNtNBP87ekGZliriEMIl0&teamId=thiagopiola&limit=3')
req.add_header('Authorization', 'Bearer ' + token)
with urllib.request.urlopen(req, timeout=10) as resp:
    data = json.loads(resp.read().decode())

for dep in data.get('deployments', [])[:3]:
    meta = dep.get('meta', {})
    print('Source:', dep.get('source'))
    print('State:', dep.get('state'))
    print('Commit:', str(meta.get('githubCommitSha', '?'))[:12])
    print('Ref:', meta.get('githubCommitRef', '?'))
    print('Msg:', str(meta.get('githubCommitMessage', '?'))[:60])
    print()
