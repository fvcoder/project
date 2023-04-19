import { styled } from "../lib/style"

export type DividerProps = {
    height: number
}

const Hr = styled('hr', {
    width: "calc(100% - 16px)",
    margin: "8px",
    height: 1,
    minHeight: 1,
    backgroundColor: "$gray12",
    border: "none"
})

export function Divider({ height }: Partial<DividerProps>) {
    return (
        <div>
            <Hr  />
            <div style={{ height: height ?? 0 }} />
        </div>
    )
}