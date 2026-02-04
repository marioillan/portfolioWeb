import Contacto from "./components/Contacto"
import Experiencia from "./components/Experiencia"
import Hero from "./components/Hero"
import Navegacion from "./components/Navegacion"
import Proyectos from "./components/Proyectos"
import Tecnologias from "./components/Tecnologias"

const App = () => {
  
  const [isTranslating, setIsTranslating] = useState(false)
  const [currentLang, setCurrentLang] = useState(() => {
    return localStorage.getItem('language') || 'es'
  })

  const translateWithLibreTranslate = async (text, targetLang) => {
    try {
      const response = await fetch('https://libretranslate.de/translate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          q: text,               // Texto a traducir
          source: currentLang,   // Idioma origen (es, en, fr, etc.)
          target: targetLang,    // Idioma destino
          format: 'text',        // Formato del texto
          alternatives: 3,       // Número de alternativas (opcional)
          api_key: ''           // Vacío para uso gratuito
        })
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()
      return data.translatedText
      
    } catch (error) {
      console.error('Error con LibreTranslate:', error)
      return text // Devolver texto original si falla
    }
  }

  const translateText = async (text, targetLang) => {
    // Usar la opción 1 (gratuita) por defecto
    return await translateWithLibreTranslate(text, targetLang)
  }

  const translatePage = async () => {
  const newLang = currentLang === 'es' ? 'en' : 'es'
  setIsTranslating(true)

  try {
      // Obtener todos los elementos de texto
      const textElements = document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, span, button, a, li')
      
      console.log(`Traduciendo ${textElements.length} elementos de ${currentLang} a ${newLang}`)
      
      for (let element of textElements) {
        const originalText = element.textContent.trim()
        
        // Filtrar elementos que no queremos traducir
        if (originalText && 
            originalText.length > 1 && 
            !element.hasAttribute('data-no-translate') &&
            !originalText.match(/^[\d\s\+\-\(\)]+$/)) { // No traducir solo números/teléfonos
          
          try {
            const translatedText = await translateText(originalText, newLang)
            element.textContent = translatedText
            
            // Pausa pequeña para no saturar la API
            await new Promise(resolve => setTimeout(resolve, 200))
            
          } catch (error) {
            console.error(`Error traduciendo "${originalText}":`, error)
            // Continuar con el siguiente elemento
          }
        }
      }

      // Guardar el nuevo idioma
      setCurrentLang(newLang)
      localStorage.setItem('language', newLang)
      
    } catch (error) {
      console.error('Error general en traducción:', error)
    }
    
    setIsTranslating(false)
  }

  return (
    <div className="overflow-x-hidden text-stone-300 antialiased ">
      <div className="fixed inset-0 -z-10">
          <div class="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-
          [radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),
          rgba(255,255,255,0))]"></div>
      </div>

      <div className="container mx-auto px-8">
        <Navegacion />
        <Hero />
        <Tecnologias />
        <Proyectos />
        <Experiencia />
        <Contacto />
      </div>
    </div>
  )
}

export default App