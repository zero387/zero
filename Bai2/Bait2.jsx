import React from 'react';
import './Bai2.scss'


export default function Bai2() {
  return (
    <>
      <div className='dangnhap'>
        <h1>Đăng ký tài khoản</h1>
        <div >
          <label htmlFor="">Họ và tên</label><br />
          <input className='dangnhap1' type="text" placeholder='Nhập họ và tên' />
        </div>
        <div>
          <label htmlFor="">Ngày sinh</label><br />
          <input className='dangnhap1' type="date" />
        </div>
        <div className='gioitinh'>
          <label htmlFor="">Giới tính</label><br />
          <input type="radio" name="gender" value="male" /> <samp>Nam</samp>
          <input type="radio" name="gender" value="female" /> <samp>Nữ</samp>
          <input type="radio" name="gender" value="other" /> <samp>Khác</samp>
        </div>
        <div>
          <label htmlFor="">Hình ảnh</label><br />
          <input type="file" id='filee' />
        </div>
        <div>
          <label htmlFor="">Email</label><br />
          <input type="email" className='dangnhap1' placeholder='Nhập địa chỉ email' />
        </div>
        <div>
          <label htmlFor="">Mật khẩu</label><br />
          <input type="password" placeholder='Nhập mật khẩu' className='dangnhap1' />
        </div>
        <button className='dangnhap2'>Đăng ký</button>
        <p>Bạn đã có tài khoản <a href="">Đăng nhập</a></p>
      </div>
    </>
  );
}
