import React from 'react'
import Logo from '../components/Logo';

const Agents = () => {
  return (
    <div>
      <Logo />
      <div className='text-[20vw]/[0.85] mt-[50vh] uppercase text-center'>
        Soixan7e
        Douze
      </div>
      <div className='flex justify-end'>
        <p className='text-5xl w-[60%] pr-10'>Notre curiosité nourrit notre créativité. On reste humbles et on dit non aux gros egos, même le vôtre. Une marque est vivante. Elle a des valeurs, une personnalité, une histoire. Si on oublie ça, on peut faire de bons chiffres à court terme, mais on la tue à long terme. C’est pour ça qu’on s’engage à donner de la perspective, pour bâtir des marques influentes.</p>
      </div>
      <div>
        <div className='grid grid-cols-3 mt-50 mb-40 text-xl px-40 w-full gap-20'>
          <span>Expertise</span>
          <div>
            <h3>Stratégie</h3>
            <h3>Publicité</h3>
            <h3>Branding</h3>
            <h3>Design</h3>
            <h3>Contenu</h3>
          </div>
        </div>
        <div className='grid grid-cols-3 px-40 text-xl gap-20'>
          <p>Nos projets_ naissent dans l’humilité, grandissent dans la curiosité et vivent grâce à la créativité sous toutes ses formes.</p>
          <p>Notre création_ bouillonne dans un environnement où le talent a le goût d’exploser. Où on se sent libre d’être la meilleure version de soi-même.</p>
          <p>Notre culture_ c’est l’ouverture aux autres. Point. Tout l’équipage participe à bâtir une agence dont on est fiers.</p>
        </div>
      </div>
    </div>
  )
}

export default Agents
