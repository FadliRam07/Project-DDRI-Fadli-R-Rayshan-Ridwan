document.querySelectorAll('.btnDetail').forEach(item=>{
    item.addEventListener('click',(e)=>{
        let parent =e.target.parentNode.parentNode;

        let gambar=parent.querySelector('.card-img-top').src;
        let Harga=parent.querySelector('.Harga').innerHTML;
        let judul=parent.querySelector('.card-text').innerHTML;
        let Deskripsi=parent.querySelector('.Deskripsi').innerHTML;
        
        
       let tombolModal = document.querySelector('.btnModal');
       tombolModal.click();

       document.querySelector('.modalTitle').innerHTML = judul;
       let image = document.createElement('img');
       image.src = gambar;
       image.classList.add('w-100');
       document.querySelector('.modalImage').innerHTML ='';
       document.querySelector('.modalImage').appendChild(image);
        document.querySelector('.modalDeskripsi').innerHTML = Deskripsi;
        document.querySelector('.modalHarga').innerHTML = Harga;

        const nohp ='6282295035203';
        let pesan  =`https://api.whatsapp.com/send?phone=${nohp}&text= Halo Fadli R, Rayshan dan Ridwan, saya mau beli produk ini ${gambar}`;

        document.querySelector('.btnBeli').href = pesan ;
    });
});