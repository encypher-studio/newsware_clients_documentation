import { PropsWithChildren } from "react"

interface IProps {
    title: string
    description?: string
}

export default function Section({ title, description, children }: PropsWithChildren<IProps>) {

    return (
        <div className="pb-10">
            <div className="pb-10 mb-5 border-b">
                <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                    {title}
                </h1>
                {
                    description && (
                        <p className="leading-7 [&:not(:first-child)]:mt-6">
                            {description}
                        </p>
                    )
                }
            </div>
            {children}
        </div>
    )
}
