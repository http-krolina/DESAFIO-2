import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import PhotoGrid from "./components/PhotoGrid";
import Footer from "./components/Footer";

function App() {
  const [photos, setPhotos] = useState([]);
  const [filteredPhotos, setFilteredPhotos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        setLoading(true);

        const photosData = [
          {
            id: 1,
            title: "Cidade Moderna",
            thumbnailUrl:
              "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop",
            url: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=600&fit=crop",
          },
          {
            id: 2,
            title: " Natureza Verde",
            thumbnailUrl:
              "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=400&h=300&fit=crop",
            url: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=800&h=600&fit=crop",
          },
          {
            id: 3,
            title: "Pôr do Sol no Mar",
            thumbnailUrl:
              "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w-400&h=300&fit=crop",
            url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop",
          },
          {
            id: 4,
            title: "Montanha Nevada",
            thumbnailUrl:
              "https://images.unsplash.com/photo-1464278533981-50106e6176b1?w=400&h=300&fit=crop",
            url: "https://images.unsplash.com/photo-1464278533981-50106e6176b1?w=800&h=600&fit=crop",
          },
          {
            id: 5,
            title: "Floresta Misteriosa",
            thumbnailUrl:
              "https://images.unsplash.com/photo-1448375240586-882707db888b?w=400&h=300&fit=crop",
            url: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&h=600&fit=crop",
          },
          {
            id: 6,
            title: "Praia Tropical",
            thumbnailUrl:
              "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=400&h=300&fit=crop",
            url: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=800&h=600&fit=crop",
          },
          {
            id: 7,
            title: "Arquitetura Clássica",
            thumbnailUrl:
              "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?w=400&h=300&fit=crop",
            url: "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?w=800&h=600&fit=crop",
          },
          {
            id: 8,
            title: "Montanhas ao Amanhecer",
            thumbnailUrl:
              "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
            url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
          },
          {
            id: 9,
            title: "Viagem Aventura",
            thumbnailUrl:
              "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=400&h=300&fit=crop",
            url: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&h=600&fit=crop",
          },
          {
            id: 10,
            title: "Natação",
            thumbnailUrl:
              "https://images.unsplash.com/photo-1530549387789-4c1017266635?w=400&h=300&fit=crop",
            url: "https://images.unsplash.com/photo-1530549387789-4c1017266635?w=800&h=600&fit=crop",
          },
          {
            id: 11,
            title: "Arte Contemporânea",
            thumbnailUrl:
              "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=300&fit=crop",
            url: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&h=600&fit=crop",
          },
          {
            id: 12,
            title: "Música e Cultura",
            thumbnailUrl:
              "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400&h=300&fit=crop",
            url: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&h=600&fit=crop",
          },
          {
            id: 13,
            title: "Gastronomia Deliciosa",
            thumbnailUrl:
              "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400&h=300&fit=crop",
            url: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=800&h=600&fit=crop",
          },
          {
            id: 14,
            title: "Pessoas Felizes",
            thumbnailUrl:
              "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=400&h=300&fit=crop",
            url: "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=800&h=600&fit=crop",
          },
          {
            id: 15,
            title: "Festival de Luzes",
            thumbnailUrl:
              "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&h=300&fit=crop",
            url: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&h=600&fit=crop",
          },
          {
            id: 16,
            title: "Deserto ao Entardecer",
            thumbnailUrl:
              "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=400&h=300&fit=crop",
            url: "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=800&h=600&fit=crop",
          },
          {
            id: 17,
            title: "Café Artesanal",
            thumbnailUrl:
              "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=300&fit=crop",
            url: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&h=600&fit=crop",
          },
          {
            id: 18,
            title: "Biblioteca Antiga",
            thumbnailUrl:
              "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop",
            url: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=600&fit=crop",
          },

          {
            id: 19,
            title: "Ponte Golden Gate",
            thumbnailUrl:
              "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400&h=300&fit=crop",
            url: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&h=600&fit=crop",
          },
          {
            id: 20,
            title: "Garota com Livro",
            thumbnailUrl:
              "https://images.unsplash.com/photo-1544717305-2782549b5136?w=400&h=300&fit=crop",
            url: "https://images.unsplash.com/photo-1544717305-2782549b5136?w=800&h=600&fit=crop",
          },
          {
            id: 21,
            title: "Neve nas Montanhas",
            thumbnailUrl:
              "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=400&h=300&fit=crop",
            url: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&h=600&fit=crop",
          },
          {
            id: 22,
            title: "Pasta Italiana",
            thumbnailUrl:
              "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=400&h=300&fit=crop",
            url: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=800&h=600&fit=crop",
          },
          {
            id: 23,
            title: "Escritório Moderno",
            thumbnailUrl:
              "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=400&h=300&fit=crop",
            url: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&h=600&fit=crop",
          },
          {
            id: 24,
            title: "Mar",
            thumbnailUrl:
              "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=400&h=300&fit=crop",
            url: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800&h=600&fit=crop",
          },
          {
            id: 25,
            title: "Balões Coloridos",
            thumbnailUrl:
              "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=400&h=300&fit=crop",
            url: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&h=600&fit=crop",
          },
        ];

        setPhotos(photosData);
        setFilteredPhotos(photosData);
      } catch (error) {
        console.error("Erro ao carregar fotos:", error);

        const fallbackPhotos = Array.from({ length: 12 }, (_, index) => {
          const id = index + 1;
          const categories = [
            "Paisagem Urbana",
            "Natureza",
            "Praia",
            "Montanha",
            "Floresta",
            "Animais",
            "Arquitetura",
            "Tecnologia",
            "Viagem",
            "Esporte",
            "Arte",
            "Música",
            "Comida",
            "Pessoas",
            "Noite",
          ];
          const category = categories[index] || "Paisagem";

          return {
            id,
            title: `Foto ${id}: ${category}`,
            thumbnailUrl: `https://picsum.photos/400/300?image=${id + 100}`,
            url: `https://picsum.photos/800/600?image=${id + 100}`,
          };
        });

        setPhotos(fallbackPhotos);
        setFilteredPhotos(fallbackPhotos);
      } finally {
        setLoading(false);
      }
    };

    fetchPhotos();
  }, []);

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredPhotos(photos);
    } else {
      const filtered = photos.filter((photo) =>
        photo.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredPhotos(filtered);
    }
  }, [searchTerm, photos]);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <SearchBar onSearch={handleSearch} />
        {loading ? (
          <div className="loading">Carregando fotos...</div>
        ) : (
          <PhotoGrid photos={filteredPhotos} />
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
