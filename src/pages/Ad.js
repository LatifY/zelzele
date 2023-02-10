import React from 'react'

export default function Ad() {
    function test(e){
        e.preventdefault()
        console.log(e)
    }

  return (
    <div className='ad'>
        <h1>Kayıp Hayvan İlanı Ver <span>(* alanlar zorunludur)</span></h1>

        <form onSubmit={(e) => test(e)}>

            <label className='label' for="sahip">Adınız *</label>
            <input  className='input' id='sahip' type="text" />

            <label className='label' for="name">Hayvan Adı (nasıl sesleniyorsunuz) *</label>
            <input  className='input' id='name' type="text" />

            <label className='label' for="location">Yer (en son gördüğünüz yer) *</label>
            <input  className='input' id='location' type="text" />
            
            <label className='label' for="description">Açıklama *</label>
            <textarea  className='input' id='description' />

            <label className='label' for="age">Yaş</label>
            <input  className='input' id='age' type="number" />

            <label className='label' for="contact">İletişim (telefon, mail, instagram) *</label>
            <input  className='input' id='contact' />

            <label className='label' for="photo">Fotoğraf Yükle</label>
            <input type="file" id='photo' placeholder='za'/>

            <input type="submit" />
        </form>
    </div>
  )
}
