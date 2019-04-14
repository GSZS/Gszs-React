// menuconfig.js

const menuList = [
    {
        title: '首页',
        key: '/admin'
    },
    {
        title: 'UI',
        key: '/ui',
        children: [
            {
                title: '按钮',
                key: '/ui/button'
            },
            {
                title: '卡片',
                key: '/ui/card'
            },
            {
                title: '日期',
                key: '/ui/date'
            }
        ]
    },
    {
        title: '表单',
        key: '/form',
        children: [
            {
                title: '基础表单',
                key: '/form/lowform'
            },
            {
                title: '注册',
                key: '/form/register'
            },
            {
                title: '登录',
                key: '/form/logoinin'
            }
        ]
    },
    {
        title: '表格',
        key: '/table',
        children: [
            {
                title: '基础表格',
                key: '/table/lowtable'
            },
            {
                title: '高级表格',
                key: '/table/hightable'
            }
        ]
    },
    {
        title: '富文本',
        key: '/richtext'
    },
    {
        title: '城市管理',
        key: '/controlcity'
    },
    {
        title: '订单管理',
        key: '/order'
    },
    {
        title: '员工管理',
        key: '/controlpeople'
    },
    {
        title: '车辆地图',
        key: '/cardmap'
    },
    {
        title: '图标',
        key: '/icon',
        children: [
            {
                title: '基础图标',
                key: '/icon/lowicon'
            },
            {
                title: '高级图标',
                key: '/icon/highicon'
            }
        ]
    },
]

export default menuList