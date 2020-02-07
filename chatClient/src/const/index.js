export const conversationTypes = {
  friend: 'FRIEND',
  group: 'GROUP'
}

export const APP_VERSION = '1.0.0'

export const VueAMapKey = '704b3b5e984fa3b6185c3f012da42547'

// 在添加好友或者群聊时对应的搜索条件
export const searchObjectMap = [
  {id: 1, label: '人', value: 'friend'},
  {id: 2, label: '群', value: 'group'}
]

export const searchTypes = {
  friend: [
    {id: 1, label: 'Chat账号', value: 'code'},
    {id: 2, label: '用户账号', value: 'name'},
    {id: 3, label: '昵称', value: 'nickname'}
  ],
  group: [
    {id: 1, label: 'Chat账号', value: 'code'},
    {id: 2, label: '名称', value: 'title'}
  ]
}

export const validateNewsTips = {
  applyFriend: '请求添加你为好友',
  applyGroup: '请求加入群聊'
}

export const qiniu_URL = 'http://blog.static.chenr.cn/'

// 七牛云上传图片时的状态
export const uploadImgStatusMap = {
  error: 'error',
  next: 'next',
  complete: 'complete'
}

// 在CoArtBoard组件中对调色板的操作
export const coArtBoardHandleOption = [
  { name: "圆", type: "arc" },
  { name: "线条", type: "line" },
  { name: "矩形", type: "rect" },
  { name: "多边形", type: "polygon" },
  { name: "橡皮擦", type: "eraser" },
  { name: "撤回", type: "cancel" },
  { name: "前进", type: "go" },
  { name: "清屏", type: "clear" },
  { name: "线宽", type: "lineWidth" },
  { name: "颜色", type: "color" }
]

export const coArtBoardReplyTypes = {
  agree: 'agree',
  disagree: 'disagree',
  busy: 'busy'
}
