import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Order} from '../../order';


/**
 * Generated class for the OrderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-order',
  templateUrl: 'order.html',
})
export class OrderPage {
  orders:Order[] = [
    {
      id: 1,
      shopName: '我的淘宝',
      orderNo: '2018072332',
      orderImg: '/assets/imgs/timg.jpeg',
      orderDesc: '100吨塑料粒子， 100吨原纸',
      price: 100,
      orderNum: 1,
      status: '完成'
    },
    {
      id:1,
      shopName: '我的淘宝',
      orderNo: '2018072332',
      orderImg: '/assets/imgs/b.jpeg',
      orderDesc: '100吨塑料粒子， 100吨原纸',
      price: 100,
      orderNum: 1,
      status: '完成'
    },
    {
      id:1,
      shopName: '我的淘宝',
      orderNo: '2018072332',
      orderImg: '/assets/imgs/c.jpeg',
      orderDesc: '100吨塑料粒子， 100吨原纸',
      price: 100,
      orderNum: 1,
      status: '完成'
    },
    {
      id:1,
      orderNo: '2018072332',
      orderImg: '/assets/imgs/d.jpeg',
      orderDesc: '100吨塑料粒子， 100吨原纸',
      price: 100,
      orderNum: 1,
      status: '完成'
    },
    {
      id:1,
      shopName: '我的淘宝',
      orderNo: '2018072332',
      orderImg: '/assets/imgs/timg.jpeg',
      orderDesc: '100吨塑料粒子， 100吨原纸',
      price: 100,
      orderNum: 1,
      status: '完成'
    },
    {
      id:1,
      shopName: '我的淘宝',
      orderNo: '2018072332',
      orderImg: '/assets/imgs/b.jpeg',
      orderDesc: '100吨塑料粒子， 100吨原纸',
      price: 100,
      orderNum: 1,
      status: '完成'
    },
    {
      id:1,
      shopName: '我的淘宝',
      orderNo: '2018072332',
      orderImg: '/assets/imgs/c.jpeg',
      orderDesc: '100吨塑料粒子， 100吨原纸',
      price: 100,
      orderNum: 1,
      status: '完成'
    },
    {
      id:1,
      shopName: '我的淘宝',
      orderNo: '2018072332',
      orderImg: '/assets/imgs/d.jpeg',
      orderDesc: '100吨塑料粒子， 100吨原纸',
      price: 100,
      orderNum: 1,
      status: '完成'
    },
    {
      id:1,
      shopName: '我的淘宝',
      orderNo: '2018072332',
      orderImg: '/assets/imgs/timg.jpeg',
      orderDesc: '100吨塑料粒子， 100吨原纸',
      price: 100,
      orderNum: 1,
      status: '完成'
    },
    {
      id:1,
      shopName: '我的淘宝',
      orderNo: '2018072332',
      orderImg: '/assets/imgs/b.jpeg',
      orderDesc: '100吨塑料粒子， 100吨原纸',
      price: 100,
      orderNum: 1,
      status: '完成'
    },
    {
      id:1,
      shopName: '我的淘宝',
      orderNo: '2018072332',
      orderImg: '/assets/imgs/c.jpeg',
      orderDesc: '100吨塑料粒子， 100吨原纸',
      price: 100,
      orderNum: 1,
      status: '完成'
    },
    {
      id:1,
      shopName: '我的淘宝',
      orderNo: '2018072332',
      orderImg: '/assets/imgs/d.jpeg',
      orderDesc: '100吨塑料粒子， 100吨原纸',
      price: 100,
      orderNum: 1,
      status: '完成'
    }
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderPage');
  }

}
