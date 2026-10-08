const startBtn = document.getElementById("startBtn");
const replayBtn = document.getElementById("replayBtn");
const hearts = document.querySelector(".hearts");

function makeHeart(){
  const h=document.createElement("div");
  h.className="heart";
  h.textContent=["❤️","♡","💕","✨"][Math.floor(Math.random()*4)];
  h.style.left=Math.random()*100+"vw";
  h.style.fontSize=(10+Math.random()*18)+"px";
  h.style.animationDuration=(5+Math.random()*5)+"s";
  hearts.appendChild(h);
  setTimeout(()=>h.remove(),10000);
}

setInterval(makeHeart,900);

startBtn.addEventListener("click",()=>{
  document.querySelector(".memories").scrollIntoView({behavior:"smooth"});
  for(let i=0;i<12;i++) setTimeout(makeHeart,i*120);
});

replayBtn.addEventListener("click",()=>window.scrollTo({top:0,behavior:"smooth"}));

// Soft reveal animation
const observer=new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      e.target.animate(
        [{opacity:0,transform:"translateY(22px)"},{opacity:1,transform:"translateY(0)"}],
        {duration:800,easing:"ease-out",fill:"forwards"}
      );
      observer.unobserve(e.target);
    }
  });
},{threshold:.12});

document.querySelectorAll(".section > *").forEach(el=>observer.observe(el));
