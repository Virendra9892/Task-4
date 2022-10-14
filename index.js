function disp1(a){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        let x = 10;
        if(a>0){
            resolve(a+x);
        }
        else{
            reject(("Promise Failed."));
        }
    },1200,a)
    });
}
function disp2(b){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(b>99){
            resolve(b+10);
        }
        else{
            reject(("Now Promise Is Failed."));
        }
    },1400,b)
    });
}
function disp3(c){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
          if(c<120){
            resolve(c+80);
          }
          else{
            reject(("Promise Is Failed."));
          }
        },1600,c);
    });
}

async function disp4(){
try{
    let one = await disp1(90);
    console.log(one);

    let two = await disp2(one);
    console.log(two);

    let three = await disp3(two);
    console.log(three);
}catch(err){
    console.log(err);
}
}
disp4();