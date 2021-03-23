# 接口文档

## 生成用户数据

```http://localhost:3000/message```

> 参数

用户的uuid

响应
```null```

## 获取用户预约信息

<font color="red">根据用户的登录信息获取其历史预约</font>

```http://localhost:3000/reservation```
> 参数

用户的信息

响应
```json数据，包含预约信息```

## 获取酒的图片
请求

```http://localhost:3000/wineImage```

响应
```json数据，包含酒的url图片字符串```

## 获取酒文化的数据

```http://localhost:3000/wineCulture```

响应
```json数据，包含酒文化的所有数据```

## 获取企业动态的数据

```http://localhost:3000/entrepriseNews```

响应
```json数据，包含企业动态的所有数据```

## 获取四大场景数据

```http://localhost:3000/fourScenes```

响应
```json数据，包含四大场景的所有数据```
## 获取十八大展区的数据

```http://localhost:3000/exhibitionArea```

响应
```json数据，包含十八大展区的所有数据```


