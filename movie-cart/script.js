var totalMoney = 0;
function watchMovie(){
    let watchButtons = document.querySelectorAll('.watch-movie-btn');

    watchButtons.forEach(function(button){
        button.addEventListener('click', function(){
            let movie = button.closest('.movie');            
            let movieRate = movie.querySelector('.movie-rate');
            let rateBtns = movieRate.querySelectorAll('.rate-btn');
            let moviePrice = movie.querySelector('.price').innerHTML;
            
            let rateArr = [];
            rateBtns.forEach((ratebtn)=>{

                if(ratebtn.classList.contains('rated')){
                    rateArr.push(ratebtn);
                }else{
                    return;
                }
            })
            if(rateArr.length >= 2 || rateArr.length <1){
                alert('You need to select 1 rate');
                rateArr.forEach((el)=>{
                    el.classList.remove('rated');
                })
            }else{
                button.innerHTML = 'Watched';
                button.setAttribute('disabled','true');
                button.style.background = 'rgb(197, 197, 0)';
                showMessage();

                // update total spend money
                moviePrice = parseInt(moviePrice);
                totalMoney += moviePrice;
                document.querySelector('.total-spent').innerHTML = `${totalMoney}`;
                
                
            }
            

            
        });
    })
}
watchMovie();
function rateMovie(){
    document.querySelectorAll('.rate-btn').forEach((btn)=>{
        btn.addEventListener('click',()=>{
            if(btn.classList.contains('rated')){
                btn.classList.remove('rated');
            }else{
                
                btn.classList.add('rated');
            }

        
        })
    })
}
rateMovie();

function showMessage(){

    setTimeout(()=>{
        document.querySelector('.added-message').style.display = 'flex';
        setTimeout(()=>{
        document.querySelector('.added-message').style.display = 'none';

        },1000)
    },0)
    
}
// kad klikne na watch now da selektuje samo taj film
// ako nijedan ratebtn nema klasu rated onda alert da mora odabrati
// ako ima vise ratebtn klasu rated onda obrisati sve i reci da mora 1
// ako je sve ok, dati border zuti okolo i smanjiti width moviea.