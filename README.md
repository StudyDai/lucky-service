# lucky-service
# 1. 用户登录页

baseUrl：http://81.71.147.9

请求方式：baseUrl +接口前缀: '/user'+路径

## 1.1 用户获取验证码

method： get

权限： 无

携带参数：有

```js
data: {
  'phone': string
}
```

请求路径：

```
/getcode
```

响应结果

```json
{
	"code": 200,
	"msg": "验证码是9113"
}
```



## 1.2 用户登录,获取token

method： post

权限：无

携带参数：有

```js
data: {
  'phone': string
}
```

携带请求头：无

请求路径：

```
/login
```

响应结果

```json
{
	"code": 200,
	"token": "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IuWtmeaxqiIsImdlbmRlciI6IuWlsyIsImJpcnRoZGF5IjoiMjAwMS0wMi0yNiIsImFkZHJlc3MiOm51bGwsInBob25lIjoiMTM4MjIwMDAwMDAiLCJpYXQiOjE3MDI2MTMwOTksImV4cCI6MTcwMjYxNDg5OX0.FK7eYfr8CiEhg8WK9zzhl1l09uZjuC2kdDu2vpXSJq2TKy1UVhS136rI08S823Io-cBYc4muzHAJSw_4XmrExYsDK6XblAkB9kyBEBhEy4hBBe0x_OekNQJHX89phqabzcG8AJyvMZ487EFMDX_BAcy4YqxJXE_USzrEP75GmbN9aApWzfaqnRVSneIBkmjzabOw9Fsr5i99-djJSM4TXXoEdpslXHxLvP8-U-_u0LLLo_i49If-i9NsqxGxxBx7qQzMAofYW9ja37FxPGnEe16pSXwuUD3w4jFFBeOn7oVdjRVvmlUSq4-gG6t7LFn3tO6QpS6E5JoSncsw6Y9yiA"
}
```



## 1.3 获取用户的个人信息

method：get

权限：有

携带参数：无

携带请求头：有

```js
headers: {
  authorization: 'Bearer xxxx'
}
```

请求路径:

```
/userInfo
```

响应结果

```json
{
	"code": 200,
	"msg": "获取成功",
	"data": {
		"username": "孙汪",
		"gender": "女",
		"birthday": "2001-02-26",
		"address": null,
		"phone": "13822000000"
	}
}
```



## 1.4 更新用户的个人信息

method：post

权限：有

携带参数：有

```js
data: {
  'username': string,
  'gender': string,
  'birthday': string,
  'address': string
}
```

携带请求头：有

```js
headers: {
  authorization: 'Bearer xxxx'
}
```

请求路径：

```
/updateInfo
```

响应结果

```json
{
	"code": 200,
	"msg": "更新个人信息成功"
}
```



## 1.5 更改用户的手机号

method：post

权限：有

携带参数：有

```js
data: {
  'phone': string // 登录手机号
}
```

携带请求头：有

```js
headers: {
  authorization: 'Bearer xxxx'
}
```

请求路径：

```
/updatePhone
```

响应结果

```json
{
	"code": 200,
	"msg": "更新用户手机成功"
}
```

# 2. 商品页

baseUrl：http://81.71.147.9

请求方式：baseUrl +接口前缀: '/good'+路径

## 2.1 获取所有的展示商品

method：get

权限：无

携带参数：无

携带请求头：无

请求路径：

```
/goodlist
```

响应结果

```json
{
   "code": 200,
	"msg": "请求成功",
	"data": [
		{
			"good_type": "人气Top",
			"goodLists": [
				{
					"goodId": 1,
					"good_name": "酱香拿铁",
					"good_spec": "{\"cap\": \"酱香专属\",\"temperature\": [\"冰\",\"热\"],\"sugar\":[\"不另外加糖\",\"半塘\",\"标准糖\"],\"cream\":[\"默认奶油\",\"无奶油\"]}",
					"old_price": 199,
					"good_image": "http://81.71.147.9:8080/default_img.jpg",
					"good_details": "主要的原料就是浓缩咖啡/白酒风味厚奶以及纯牛奶",
					"current_price": 9.899999618530273
				}
			]
		}
	]
}
```

## 2.2 调起支付页面

method：get

权限：有

携带参数：有

```js
data: {
  'order': string, // 订单号
  'totalAmount': string //价格
  'subject': string // 商品名称
}
```

携带请求头：有

```js
headers: {
  authorization: 'Bearer xxxx'
}
```

请求路径：

```
/pay/menu
```

响应结果:

```json
{
  "code": 200,
   "url": "https://openapi-sandbox.dl.alipaydev.com/gateway.do?....." 
}
```



## 2.3 查询支付状态

method：post

权限：有

携带参数：有

```js
data {
 'orderId': string // 订单号
}
```

携带请求头：有

```js
headers: {
  authorization: 'Bearer xxxx'
}
```

请求路径：

```
/pay/result
```

响应结果:

```json
{
  "code": 200,
   "msg": "支付成功/支付失败"
}
```

