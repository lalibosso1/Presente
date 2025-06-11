import React, { useState, useEffect } from 'react';
import './Conteudo.css';
import img0 from './../../assets/image0.jpg';
import imgg1 from './../../assets/image1.jpg';
import img2 from './../../assets/image1.png';
import img3 from './../../assets/IMG_6499.jpg';
import img4 from './../../assets/IMG_7932.jpg';
import ss7 from './../../assets/Screenshot_7.png';
import ss9 from './../../assets/Screenshot_9.png';
import ss10 from './../../assets/Screenshot_10.png';
import ss11 from './../../assets/Screenshot_11.png';
import ss12 from './../../assets/Screenshot_12.png';
import ss13 from './../../assets/Screenshot_13.png';
import ss14 from './../../assets/Screenshot_14.png';
import ss15 from './../../assets/Screenshot_15.png';
import ss16 from './../../assets/Screenshot_16.png';
import unknown from './../../assets/unknown.png';



const images = [
    img0,
    imgg1,
    img2,
    img3,
    img4,
    ss7,
    ss9,
    ss10,
    ss11,
    ss12,
    ss13,
    ss14,
    ss15,
    ss16,
    unknown
];


const startDate = new Date('2021-03-01T00:00:00');

const Conteudo = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const [timeElapsed, setTimeElapsed] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const diff = now.getTime() - startDate.getTime();

            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
            const minutes = Math.floor((diff / (1000 * 60)) % 60);
            const seconds = Math.floor((diff / 1000) % 60);

            setTimeElapsed({ days, hours, minutes, seconds });
        };

        updateTime();
        const interval = setInterval(updateTime, 1000); 

        return () => clearInterval(interval); 
    }, []);


    return (
        <div className="conteudo-container">
            <div className="conteudo-box">
                <div className="carrossel">
                    <img src={images[currentImage]} alt="Carrossel" />
                </div>

                <hr className="linha" />

                <p className="titulo">Juntos há:</p>
                <div className="contagem">
                    {timeElapsed.days} dias, {timeElapsed.hours}h, {timeElapsed.minutes}m, {timeElapsed.seconds}s
                </div>


                <hr className="linha" />

                <p className="titulo">Cartinha para a pessoa mais especial</p>
                <p className="cartinha">
                    Desde que nos conhecemos, cada dia é especial. 💞 <br />
                    Meu amor, meu anjinho, meu docinho...
                    Hoje é Dia dos Namorados, e eu me sinto tomada por uma vontade enorme de escrever para você, de deixar registrado o quanto você é especial, o quanto te amo e o quanto sou feliz por compartilhar a vida ao seu lado.
                    Às vezes me pego só te observando. E é impossível não sorrir. Porque você é lindo de todas as formas que alguém pode ser. Seus olhos têm um brilho que acalma, como se fossem abrigo. Olhar dentro deles me dá paz, me dá segurança, me dá a certeza de que estou no lugar certo. São olhos que sorriem, que falam sem palavras, que enxergam o mundo com uma profundidade rara.
                    O formato da sua boca me encanta. Ela guarda o teu sorriso, aquele que derrete qualquer tristeza minha. Ela diz as coisas mais doces, me beija com carinho e, mesmo em silêncio, consegue me transmitir tudo o que você sente. Seus lábios são refúgio, conforto, amor.
                    E seu cabelo… ah, como eu amo passar a mão nos seus fios. Desarrumar um pouquinho só pra ver sua carinha quando reclama, mas no fundo eu sei que gosta. Seu toque, sua pele, seu corpo… tudo em você é lindo. Não apenas pela aparência, mas porque você se carrega com uma leveza, uma firmeza, uma essência que é só sua. Você é beleza por dentro e por fora.
                    Mas amor, o mais bonito mesmo é te ver sendo quem você é. Te ver batalhando, crescendo, enfrentando o mundo com coragem. A sua força é inspiradora. São mais de quatro anos ao seu lado – desde aquele 1º de março de 2021 – e a cada novo dia eu me surpreendo com tudo que construímos juntos. Nós passamos por tantas fases… aprendemos, amadurecemos, erramos, recomeçamos, rimos, choramos, mas acima de tudo, permanecemos. E isso é o que mais importa.
                    Eu me lembro de tantos momentos: das conversas longas sobre a vida, dos sonhos que criamos juntos, dos passeios simples que se tornaram os mais especiais. Lembro de cada abraço apertado que curou minha alma, de cada vez que você me olhou com carinho mesmo nos meus piores dias. Estar contigo é como voltar pra casa. Você é o meu lugar seguro.
                    E eu quero que você saiba que me orgulho imensamente de tudo o que você está conquistando. Ver você estudando na FEA-USP, se dedicando, se superando, mesmo em dias difíceis, é inspirador. Eu sei o quanto é duro. Eu sei dos dias cansativos, das pressões, das dúvidas, das cobranças. Mas eu vejo a sua força. Eu vejo o quanto você está crescendo, mesmo quando não enxerga. E eu estarei sempre aqui, te lembrando disso.
                    Quero estar com você nos seus melhores dias, celebrando vitórias, rindo alto, brindando à vida. Mas quero também estar ao seu lado quando tudo parecer pesado demais. Quero segurar sua mão nos momentos difíceis, ser seu ombro quando precisar descansar, seu apoio quando se sentir inseguro. Sempre estarei aqui. Te apoiar é uma das formas mais bonitas que encontro de amar você.
                    E não importa o que aconteça, Pe… você nunca vai me perder. Mesmo que tudo desabe, mesmo que o mundo mude, mesmo que você se perca de si mesmo… eu estarei aqui. Não há tempo, distância ou erro que me faça soltar a sua mão. Porque meu amor por você é firme. Ele não é passageiro. É raiz. É base. É lar. Você é a minha escolha diária, meu anjinho, meu docinho, meu tudo.
                    Amor, eu sonho com um futuro ao seu lado. Sonho em ver você realizar cada plano, cada meta, cada desejo. Quero estar lá, sentadinha na primeira fileira da sua vida, te aplaudindo com os olhos brilhando, orgulhosa de tudo o que você é e ainda será. Você tem um brilho que nasceu para iluminar o mundo, e eu tenho o privilégio de ver isso de perto.
                    Obrigada por existir, por me amar, por permitir que eu caminhe contigo. Que a vida continue nos surpreendendo, nos unindo, nos fortalecendo. E que nunca falte amor, cuidado, leveza e respeito entre a gente. Que nunca falte esse nosso jeitinho único de viver tudo juntos.
                    Feliz Dia dos Namorados, Pe.
                    Com todo o amor do mundo,

                    Loca. 💖
                </p>
            </div>
        </div>
    );
};

export default Conteudo;
