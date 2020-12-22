setInterval( () => {
  
    d=new Date();
    hr=d.getHours();
    mi=d.getMinutes();
    sc=d.getSeconds();

    hRotation= 30*hr + mi/2;
    mRotation= 6*mi;
    sRotation= 6*sc;

    hour.style.transform =`rotate(${hRotation}deg)`;
    minute.style.transform =`rotate(${mRotation}deg)`;
    second.style.transform =`rotate(${sRotation}deg)`;
},1000);