# LemonSqueezy 接入指南

## 代码已就绪 ✅

支付相关代码已全部完成：
- `/api/checkout` — 创建 checkout session
- `/api/webhooks/lemonsqueezy` — 接收支付回调
- `/pricing` — 定价页面（Free / Pro / API 三档）
- `/pro/success` — 支付成功页面
- `src/lib/lemonsqueezy.ts` — API 封装
- `src/lib/subscriptions.ts` — 订阅状态管理（文件存储）

## 需要子清在后台操作

### Step 1: 改 Store 货币为 USD
1. 登录 https://app.lemonsqueezy.com
2. Settings → Store → Currency → 改为 **USD**
3. 保存

### Step 2: 创建 Pro 产品
1. 去 Products → Create Product
2. 名称: **BG Eraser Pro**
3. 描述: Unlimited background removals, HD output, batch processing
4. 定价: **Subscription** → **$9.90 / month**
5. Publish

### Step 3: 拿到 Variant ID
1. 创建好产品后，点进去 → 看 URL 或 Variants 列表
2. 复制 **Variant ID**（纯数字）
3. 告诉老八

### Step 4: 设置 Webhook
1. Settings → Webhooks → 点 + 号
2. URL: `https://aibgeraser.com/api/webhooks/lemonsqueezy`
   （域名配好之前用: `http://43.135.174.245:3000/api/webhooks/lemonsqueezy`）
3. 选择事件:
   - subscription_created
   - subscription_updated
   - subscription_cancelled
   - subscription_expired
   - subscription_paused
   - subscription_unpaused
   - order_created
4. 设置一个 Signing Secret（随便写个复杂字符串，比如 `bgeraser_wh_2026_xxx`）
5. 保存

### Step 5: 告诉老八两个值
- **Variant ID**: 产品创建后拿到的
- **Webhook Secret**: 你设置的签名密钥

老八会把它们填入 .env.local，支付就能跑通了。

## 后续（域名配好后）
- 更新 Webhook URL 为正式域名
- 测试支付流程（LemonSqueezy 有 Test Mode）
