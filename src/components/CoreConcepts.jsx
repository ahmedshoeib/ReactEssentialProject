


export function CoreConcepts0(props) {
  return (
    <li>
      <img src={props.image} alt={props.title}/>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  )
}

export function CoreConcepts1({image, title, description}) {
    return (
      <li>
        <img src={image} alt={title}/>
        <h3>{title}</h3>
        <p>{description}</p>
      </li>
    )
  }
  
  export function CoreConcepts2({ concept }) {
    // Use concept.title, concept.description etc.
    // Or destructure the concept object: const { title, description, image } = concept;
    return (
      <li>
        <img src={concept.image} alt={concept.title}/>
        <h3>{concept.title}</h3>
        <p>{concept.description}</p>
      </li>
    )
  }