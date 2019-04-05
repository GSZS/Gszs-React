// menuconfig.js

const menuList = [
    {
        title: '首页',
        key: '/admin/index'
    },
    {
        title: 'UI',
        key: './admin/ui',
        children: [
            {
                title: '按钮',
                key: '/admin/ui/button'
            },
            {
                title: '卡片',
                key: '/admin/ui/card'
            },
            {
                title: '日期',
                key: '/admin/ui/date'
            }
        ]
    },
    {
        title: '表单',
        key: '/admin/form',
        children: [
            {
                title: '基础表单',
                key: '/admin/form/lowform'
            },
            {
                title: '注册',
                key: '/admin/form/register'
            },
            {
                title: '登录',
                key: '/admin/form/logoinin'
            }
        ]
    },
    {
        title: '表格',
        key: '/admin/table',
        children: [
            {
                title: '基础表格',
                key: '/admin/form/lowtable'
            },
            {
                title: '高级表格',
                key: '/admin/form/hightable'
            }
        ]
    },
    {
        title: '富文本',
        key: 'admin/richtext'
    },
    {
        title: '城市管理',
        key: 'admin/controlcity'
    },
    {
        title: '订单管理',
        key: 'admin/controlindent'
    },
    {
        title: '员工管理',
        key: 'admin/controlpeople'
    },
    {
        title: '车辆地图',
        key: 'admin/cardmap'
    },
    {
        title: '图标',
        key: '/admin/icon',
        children: [
            {
                title: '基础图标',
                key: '/admin/form/lowicon'
            },
            {
                title: '高级图标',
                key: '/admin/form/highicon'
            }
        ]
    },
]

export default menuList