function Details() {
    if(logements) {        
      return (
        {logements.data.map((logement) => (
          <img src={logement.cover} />
        )
        )
      }
        )
      }
  }