import React from 'react';
import wats from '../../assets/images/icons/whatsapp.svg';
import './style.css';



function TeacherItem() {

return (
    <article className="teacher-item">
    <header>
      <img src="https://media-exp1.licdn.com/dms/image/C4E03AQEfNjYDGPlZ_w/profile-displayphoto-shrink_200_200/0?e=1602115200&v=beta&t=6uWlmW_5NNeYO76NAehRwgehasbc6_7FesBwofZU0zY" alt=""/>
      <div>
        <strong> Eduardo Barros </strong>
        <span> Novas Tecnologias </span>
      </div>
    </header>
    <p>
       Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, 
       a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country,
       in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost
       unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar. The Big Oxmox advised her not to do so,
       because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way. When she reached the first hills of the Italic Mountains,
       she had a last view back on the skyline of her hometown Bookmarksgrove, 
       the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then
    </p>
    <footer>
      <p>
        preço/hora
        <strong>
          R$ 80,00
        </strong>
      </p>
      <button type="button">
           <img src={wats} alt="entrar em contato wats"/>
           Entrar em contato 
      </button>
    </footer>         
</article>

)
   

    
}


export default TeacherItem;