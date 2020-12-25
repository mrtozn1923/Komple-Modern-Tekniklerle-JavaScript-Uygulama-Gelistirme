//npm i -g lodash komutu ile global paket kurulumu yapabilirsiniz.
//global node_modules kullanabilmek için path ayarını NODE_PATH olarak yapmayı unutmayın C:\Users\Sizin Kullanıcı Adınız\AppData\Roaming\npm\node_modules

const _array=require('lodash/array');


console.log(_array.difference([1,2,3],[3,2,4]));