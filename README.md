
---

## 🧪 **স্টেপ ১৪: Local Testing (Developer)**

```bash
# 1. Dependencies ইনস্টল করুন
cd app
npm install

# 2. Tests রান করুন
npm test

# 3. Docker Compose চালান (Root Directory-তে)
cd ..
docker-compose up -d

# 4. Health Check করুন
curl http://localhost:3000/health

# 5. API টেস্ট করুন
curl http://localhost:3000/api/tasks

# 6. নতুন টাস্ক তৈরি করুন
curl -X POST http://localhost:3000/api/tasks \
  -H "Content-Type: application/json" \
  -d '{"title":"Learn Docker","priority":"high"}'

# 7. সব টাস্ক দেখুন
curl http://localhost:3000/api/tasks

# 8. Docker বন্ধ করুন
docker-compose down