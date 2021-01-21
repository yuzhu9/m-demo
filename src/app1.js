import './app1.css'
import $ from 'jquery'

const $plus = $('#app1 .plus')
const $subtract = $('#app1 .subtract')
const $multiply = $('#app1 .multiply')
const $divide = $('#app1 .divide')
const $number = $('#app1 #number')
const n = localStorage.getItem('n') || 100
$number.text(n)

$plus.on('click',() => {
    let n = parseInt($number.text())
    n += 1
    localStorage.setItem('n',n)
    $number.text(n)
})
$subtract.on('click',() => {
    let n = parseInt($number.text())
    n -= 1
    localStorage.setItem('n',n)
    $number.text(n)
})
$multiply.on('click',() => {
    let n = parseInt($number.text())
    n *= 2
    localStorage.setItem('n',n)
    $number.text(n)
})
$divide.on('click',() => {
    let n = parseInt($number.text())
    n /= 2
    localStorage.setItem('n',n)
    $number.text(n)
})
