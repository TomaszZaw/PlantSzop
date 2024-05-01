export function usePlantsList() {
    const plants = [
      {
        id: 1,
        plantName: "Badylak Śmietnikowy",
        description: "Badylak śmietnikowy to rzadki okaz suchej rośliny, występujący głównie na śmietnikach, lub innych miejscach do porzucania roślij.",
        imageFileName: "plant1.jpg",
        price: "120 zł"
      },
      {
        id: 2,
        plantName: "Zgnilak słoikowy",
        description: "Zgnilak to szlachetna, niewymagająca roślina niewiadomego pochodzenia. Wystarczy podlać o jej istnieniu po sam czubek słoika i zostawić by gniła sobie dalej.",
        imageFileName: "plant2.jpg",
        price: "420 zł"
      },
      {
        id: 3,
        plantName: "Martwe ozdobne",
        description: "Zabita przez człowieka dla korzyści materialnej. Martwa, ale młoda i ładna więc często stosowana jako ozdoba",
        imageFileName: "plant3.jpg",
        price: "10 zł"
      },
      {
        id: 4,
        plantName: "Sztucznokwiat oszukańczy",
        description: "Sztucznokwiat oszukańczy, to nie roślina ale wygląda jak roślina. Nie trzeba jej podlewać, ani o nią dbać. Występuję u dentysty, w restauracjach i urzędzach",
        imageFileName: "plant4.jpg",
        price: "82 zł"
      }
    ];
  
    return plants;
  }
  