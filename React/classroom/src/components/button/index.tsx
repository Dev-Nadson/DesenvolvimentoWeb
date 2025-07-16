import styles from "./styles.module.css"

type Props = React.ComponentProps<"button"> & { //Tipagem com Typescript
    name: string
}

export function Button(props: Props) { //Sempre com letra maiúscula, props é propriedade
    return (
        <button className={styles.container} onClick={props.onClick} >
            <span>
                {props.name}
            </span>
        </button>
    )
}