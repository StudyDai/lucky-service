# lucky-service
# 1. 用户登录页

baseUrl：http://81.71.147.9

请求方式：baseUrl +==接口前缀: '/user'==+路径

## 1.1 用户获取验证码

method： ==get==

权限： 无

携带参数：无

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

method： ==post==

权限：无

携带参数：无

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

method：==get==

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

method：==post==

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

method：==post==

权限：有

携带参数：有

```js
data: {
  'phone': string
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



