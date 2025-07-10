type Props = React.ComponentProps<"button"> & { //Tipagem com Typescript
    name: string
}

export function Button(props: Props){ //Sempre com letra maiúscula, props é propriedade
    return <button onClick={props.onClick}>{props.name}</button>
}