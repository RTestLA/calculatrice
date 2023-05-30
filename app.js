// DOM
const  touche  =  [ ... document . querySelectorAll ( '.bouton' ) ] ;
const  listeKeycode  =  touches . map ( touche  =>  touche . dataset . clé ) ;
const  ecran  =  document . querySelector ( '.ecran' ) ;

documenter . addEventListener ( 'keydown' ,  ( e )  =>  {
    const  valeur  =  e . keyCode . toString ( ) ;
    calculer ( valeur )

} )

documenter . addEventListener ( 'clic' ,  ( e )  =>  {
    const  valeur  =  e . cible . ensemble de données . clé ;
    calculer ( valeur )

} )

const  calculer  =  ( valeur )  =>  {
    if  ( listeKeycode . includes ( valeur ) )  {
        switch  ( valeur )  {
            cas  '8' :
                écran . textContent  =  "" ;
                casser ;
            cas  '13' :
                const  calcul  =  eval ( ecran . textContent ) ;
                écran . textContent  =  calcul ;
                casser ;
            par défaut :
                const  indexKeycode  =  listeKeycode . indexOf ( valeur ) ;
                const  touche  =  touche [ indexKeycode ] ;
                écran . textContent  +=  toucher . innerHTML ;
        }
    }
}

fenêtre . addEventListener ( 'erreur' ,  ( e )  =>  {
    alert ( 'Une erreur est survenue dans votre calcul : '  +  e . message )
} )