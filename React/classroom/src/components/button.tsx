type Props = { //Tipagem com Typescript
    name: string
    onClick?: () => void
}

export function Button(props: Props){ //Sempre com letra maiúscula, props é propriedade
    return <button onClick={props.onClick}>{props.name}</button>
}