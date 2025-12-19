export interface SearchResult {
  summary: string;
  sources: { name: string; url: string; verified: boolean }[];
  images: { url: string; title: string; source: string }[];
  videos: { url: string; title: string; source: string }[];
  pdfs: { title: string; url: string; pages: number; source: string }[];
}

export const mockSearchData: { [key: string]: SearchResult } = {
  python: {
    summary: "Python est un langage de programmation interprété, orienté objet et haut niveau. Créé par Guido van Rossum en 1991, il est connu pour sa simplicité, sa lisibilité et sa polyvalence. Python est largement utilisé en data science, développement web, automatisation, intelligence artificielle et bien plus encore. Sa philosophie 'There should be one obvious way to do it' en fait un choix populaire pour les débutants comme pour les experts.",
    sources: [
      { name: "Documentation officielle Python", url: "https://docs.python.org/3/", verified: true },
      { name: "Python Software Foundation", url: "https://www.python.org/", verified: true }
    ],
    images: [
      { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png", title: "Logo Python", source: "Wikipedia" }
    ],
    videos: [
      { url: "https://www.youtube.com/embed/rfscVS0vtbw", title: "Introduction à Python", source: "YouTube" }
    ],
    pdfs: [
      { title: "Guide Python pour débutants", url: "https://example.com/python-guide.pdf", pages: 50, source: "Documentation officielle" }
    ]
  },
  react: {
    summary: "React est une bibliothèque JavaScript open-source développée par Facebook pour créer des interfaces utilisateur. Elle permet de construire des composants réutilisables et de gérer l'état de l'application de manière efficace. React utilise un DOM virtuel pour optimiser les performances et facilite le développement d'applications web interactives. Elle est largement adoptée dans l'écosystème JavaScript et est souvent utilisée avec des outils comme Redux ou Next.js.",
    sources: [
      { name: "Documentation officielle React", url: "https://react.dev/", verified: true },
      { name: "React GitHub", url: "https://github.com/facebook/react", verified: true }
    ],
    images: [
      { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png", title: "Logo React", source: "Wikipedia" }
    ],
    videos: [
      { url: "https://www.youtube.com/embed/Ke90Tje7VS0", title: "Introduction à React", source: "YouTube" }
    ],
    pdfs: [
      { title: "Guide React pour débutants", url: "https://example.com/react-guide.pdf", pages: 40, source: "Documentation officielle" }
    ]
  }
};