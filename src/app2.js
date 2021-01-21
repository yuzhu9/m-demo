import './app2.css'
import $ from 'jquery'

const $tabBar = $('#app2 .tabBar')
const $tabContent = $('#app2 .tabContent')
$tabBar.on('click','li',(e) => {
    const $li = $(e.currentTarget).addClass('active')
    const index = $li.index()
    $li.siblings().removeClass('active')
    $tabContent.children().eq(index).addClass('active').siblings().removeClass('active')
})
