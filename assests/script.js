let namadepan = prompt ('Nama Anda?');
let manusiaa = prompt ('cowo/cewe?');
let userr = {
  namauser:{
    pertama : namadepan,
   },
  manusiaa : manusiaa,
}
if(userr.manusiaa === 'cowo'){
alert('Halo'+ ' ' + userr.namauser.pertama + ' ' + 'jamet' + '!!!' );
}else if(userr.manusiaa === 'cewe'){
alert('Halo'+ ' '+ userr.namauser.pertama + ' ' + 'cantik' + '!!!' );
}else{
alert('Halo'+ ' '+ userr.namauser.pertama + ' ' + 'bencong' + '!!!' );
}
