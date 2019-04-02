// header -> Movice Cards

import React,{Component} from 'react'
import {Icon} from 'antd'

export const MoviceHeader = () => {

    // 生产svg图标
    const MovieIcon = Icon.createFromIconfontCN({
        scriptUrl: '//at.alicdn.com/t/font_612783_bbu6dlg98tvb1emi.js'
    })
    return(
        <div className={'moviceHeader'}>
            <span className={'mainContent'}>
                <MovieIcon type="icon-movie"></MovieIcon>
            </span>
        </div>        
    )
}
