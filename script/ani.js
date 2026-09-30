const s2 = document.querySelector('.sec02')

//let test1 = new IntersectionObserver(콜백함수,옵션)
let test1 = new IntersectionObserver((eee)=>{
  if(eee[0].isIntersecting){
    console.log('gkgkgk');
  }
})

test1.observe(s2)

const section = document.querySelectorAll('section')
let io = new IntersectionObserver((entries)=>{

  entries.forEach((entry)=>{

    if(entry.isIntersecting){
      console.log(entry.target)
      entry.target.classList.add('active')
    }
    else {
      entry.target.classList.remove('active')
    }
  })
  rootMargin: ' -30% 0px -30% 0px'
})

section.forEach((se)=>{
  io.observe(section)
})
